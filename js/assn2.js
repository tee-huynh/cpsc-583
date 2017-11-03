$(document).ready(function () {
    resetForms();
});

function resetForms() {
    for (i = 0; i < document.forms.length; i++) {
        document.forms[i].reset();
    }
}

var clicked = false;
var first = false;
var hover = true;
                    var id;
                    var newOpacity = 0;
                    var size = "";
                    var col = "";

// main svg

    function drawTree(string){

    var svg1 = d3.select("#tree"),
            width = 1000,
            height = 1100 - 100,
            g = svg1.append("g").attr("transform", "translate(100,50)");       // move right 20px.

    // x-scale and x-axis
    var experienceName = ["", "50","100","150","200","250", "300"];
    var formatSkillPoints = function (d) {
        return experienceName[d % 7];
    }
    var xScale =  d3.scaleLinear()
            .domain([0,6])
            .range([0, 400]);

    var xAxis = d3.axisTop()
            .scale(xScale)
            .ticks(5)
            .tickFormat(formatSkillPoints);

    // Setting up a way to handle the data
    var tree = d3.cluster()                 // This D3 API method setup the Dendrogram datum position.
            .size([height, width - 650])    // Total width - bar chart width = Dendrogram chart width
            .separation(function separate(a, b) {
                return a.parent == b.parent            // 2 levels tree grouping for category
                || a.parent.parent == b.parent
                || a.parent == b.parent.parent ? 0.4 : 0.8;
            });

    var stratify = d3.stratify()            // This D3 API method gives cvs file flat data array dimensions.
            .parentId(function(d) { return d.id.substring(0, d.id.lastIndexOf(".")); });


    d3.csv(string, row, function(error, data) {
        if (error) throw error;

        var root = stratify(data);
        tree(root);


        // Draw every datum a line connecting to its parent.
        var link = g.selectAll(".link")
                .data(root.descendants().slice(1))
                .enter().append("path")
                .attr("class", "link")
                .style("stroke", "white")
                .style("opacity", "1")
                .attr("d", function(d) {
                    return "M" + d.y + "," + d.x
                            + "C" + (d.parent.y + 100) + "," + d.x
                            + " " + (d.parent.y + 100) + "," + d.parent.x
                            + " " + d.parent.y + "," + d.parent.x;
                });

        // Setup position for every datum; Applying different css classes to parents and leafs.
        var node = g.selectAll(".node")
                .data(root.descendants())
                .enter().append("g")
                .attr("class", function(d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
                .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });
        // Draw every datum a small circle.
        node.append("circle")
                .attr("r", 4)
                .style("stroke", "white")
                .style("fill", function(d){ d3.select(this); return d.data.color;});

        // Setup G for every leaf datum.
        var leafNodeG = g.selectAll(".node--leaf")
                .append("g")
                .attr("class", "node--leaf-g")
                .attr("transform", "translate(" + 8 + "," + -13 + ")");

        leafNodeG.append("rect")
                .style("fill", function (d) {return d.data.color;})
                .attr("width", 2)
                .attr("height", 10)
                .attr("rx", 2)
                .attr("ry", 2)
                .attr("transform", "translate(" + 0 + "," + 8 + ")")
                .transition()
                .duration(800)
                .attr("width", function (d) {var length = xScale((d.data.value/50)); return length;});
        leafNodeG.append("text")
                .attr("dy", 19.5)
                .attr("x", 8)
                .style("text-anchor", "start")
                .style("fill", "white")
                                .attr("transform", "translate(" + (length + 400) + "," + (-3) + ")")
                .text(function (d) {
                    return d.data.id.substring(d.data.id.lastIndexOf(".") + 1);
                });

        // Write down text for every parent datum
        var internalNode = g.selectAll(".node--internal");
        internalNode.append("text")
                .attr("y", -10)
                .style("text-anchor", "middle")
                .style("font-size", "12px")

                .style("fill", "white")

                .style("stroke", "white")
                .style("stroke-width", "0.1px")

                .text(function (d) {
                    return d.data.id.substring(d.data.id.lastIndexOf(".") + 1);
                });

        // Attach axis on top of the first leaf datum.
        var firstEndNode = g.select(".node--leaf");
            firstEndNode.insert("g")
                    .attr("class","xAxis")
                    .attr("transform", "translate(" + 7 + "," + -115 + ")")
                    .call(xAxis);

            // tick mark for x-axis
            firstEndNode.insert("g")
                    .attr("class", "grid")
                    .attr("transform", "translate(7," + (height - 110) + ")")
                    .call(d3.axisBottom()
                            .scale(xScale)
                            .ticks(5)
                            .tickSize(-height, 0, 0)
                            .tickFormat("")
                    );

        // Emphasize the y-axis baseline.
        svg1.selectAll(".grid").select("line")
                .style("stroke-dasharray","20,1")
                .style("stroke","white");

        // The moving ball
        var ballG = svg1.insert("g")
                .attr("class","ballG")
                .attr("transform", "translate(" + 1100 + "," + height/2 + ")");
        ballG.insert("circle")
                .style("fill","steelblue")
                .attr("r", 5);
        ballG.insert("text")
                .style("text-anchor", "middle")
                .attr("dy",5)
                .text("0.0");

        // Animation functions for mouse on and off events.
        d3.selectAll(".node--leaf-g")
                .on("mouseover", handleMouseOver)
                .on("mouseout", handleMouseOut);
       

        function handleMouseOver(d) {
            var leafG = d3.select(this);

            leafG.select("rect")
                    .attr("stroke","white")
                    .attr("stroke-width","1");


            var ballGMovement = ballG.transition()
                    .duration(400)
                    .attr("transform", "translate(" + (d.y + 100) + ","
                            + (d.x + 50) + ")");

            ballGMovement.select("circle")
                    .style("fill", d.data.color)
                    .attr("r", 18);

            ballGMovement.select("text")
                    .delay(300)
                    .style("fill", "#3d3d3d")
                    .text(Number(d.data.value) + "MB");
        }
        function handleMouseOut() {
            var leafG = d3.select(this);

            leafG.select("rect")
                    .attr("stroke-width","0");
        }

    });

    function row(d) {
        return {
            id: d.id,
            value: +d.value,
            color: d.color
        };
    }

}

 function drawCluster(){
    var svg = d3.select("#cluster"),
    width = 600,
    height = 500,
    g = svg.append("g").attr("transform", "translate(" + (width / 2 + 30) + "," + (height / 2 + 25) + ")");

var stratify = d3.stratify()
    .parentId(function(d) { return d.id.substring(0, d.id.lastIndexOf(".")); });

var tree = d3.cluster()
    .size([360, 180])
    .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });

d3.csv("files/circular2.csv", function(error, data) {
  if (error) throw error;

  var root = tree(stratify(data)
      .sort(function(a, b) { return (a.height - b.height) || a.id.localeCompare(b.id); }));

  var link = g.selectAll(".link")
    .data(root.descendants().slice(1))
    .enter().append("path")
      .attr("class", "link")
      .style("stroke", "white")
      .attr("d", function(d) {
        return "M" + project(d.x, d.y)
            + "C" + project(d.x, (d.y + d.parent.y) / 2)
            + " " + project(d.parent.x, (d.y + d.parent.y) / 2)
            + " " + project(d.parent.x, d.parent.y);
      });

  var node = g.selectAll(".node")
    .data(root.descendants())
    .enter().append("g")
      .attr("class", function(d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
      .attr("transform", function(d) { return "translate(" + project(d.x, d.y) + ")"; });

  node.append("circle")
      .attr("r", 2.5)
        .style("stroke", "white")
        .style("fill", function(d){ d3.select(this); return d.data.color;});

  node.append("text")
      .attr("dy", ".31em")
            .attr("class", "namae")

      .style("font-size", "9px")


                .style("fill", "white")

                .style("stroke", "white")
                .style("stroke-width", "0.1px")
     
      .attr("x", function(d) { return d.x < 180 === !d.children ? 6 : -6; })
      .style("text-anchor", function(d) { return d.x < 180 === !d.children ? "start" : "end"; })
      .attr("transform", function(d) { return "rotate(" + (d.x < 180 ? d.x - 90 : d.x + 90) + ")"; })
      .text(function(d) { 
        return d.id.substring(d.id.lastIndexOf(".") + 1); 

    })
                .on("click", function(d) {
                    id = d.data.number;
            if(id == 1){
                d.key = "TOP";
            }
            else if(id == 2){
                d.key = "KHAN ACADEMY";
            }
            else if(id == 3){
                d.key = "YOUTUBE";
            }
            else if(id == 4){
                d.key = "NETFLIX";
            }
            else if(id == 5){
                d.key = "STEAM";
            }
            else if(id == 6){
                d.key = "ATOM";
            }
            else if(id == 7){
                d.key = "BUDGIE";
            }
            else if(id == 8){
                d.key = "PC FINANCIAL";
            }
            else if(id == 9){
                d.key = "MCDONALDS";
            }
            else if(id == 10){
                d.key = "A AND W";
            }
            else if(id == 11){
                d.key = "PC PLUS";
            }
            else if(id == 12){
                d.key = "COOKING MAMA";
            }
            else if(id == 13){
                d.key = "BLOONS TOWER DEFENSE";
            }
            else if(id == 14){
                d.key = "SUDOKU";
            }
            else if(id == 15){
                d.key = "AQUEDUCTS";
            }
            else if(id == 16){
                d.key = "CHEF WARS";
            }
            else if(id == 17){
                d.key = "KLEPTO-CATS";
            }
            else if(id == 18){
                d.key = "NEKO ATSUME";
            }
            else if(id == 19){
                d.key = "POKEMON GO";
            }
            else if(id == 20){
                d.key = "NOTICE ME SENPAI";
            }
            else if(id == 21){
                d.key = "MINECRAFT";
            }
            else if(id == 22){
                d.key = "BAKERY STORY";
            }
            else if(id == 23){
                d.key = "DRAGON CITY";
            }
            else if(id == 24){
                d.key = "FIRE-EMBLEM HEROES";
            }
            else if(id == 25){
                d.key = "THE SIMS";
            }
            else if(id == 26){
                d.key = "LEGENDARY CASTLE";
            }
            else if(id == 27){
                d.key = "FITSUM";
            }
            else if(id == 28){
                d.key = "FIT BIT";
            }
            else if(id == 29){
                d.key = "PERIOD DIARY";
            }
            else if(id == 30){
                d.key = "H AND M";
            }
            else if(id == 31){
                d.key = "ZARA";
            }
            else if(id == 32){
                d.key = "GROUPON";
            }
            else if(id == 33){
                d.key = "SPC CARD";
            }
            else if(id == 34){
                d.key = "SHOPPERS DRUG MART";
            }
            else if(id == 35){
                d.key = "MICHAELS";
            }
            else if(id == 36){
                d.key = "IKEA CATALOGUE";
            }
            else if(id == 37){
                d.key = "SPOTIFY";
            }
            else if(id == 38){
                d.key = "GOOGLE MUSIC";
            }
            else if(id == 39){
                d.key = "GOOGLE DOCS";
            }
            else if(id == 40){
                d.key = "MONOSPACE";
            }
            else if(id == 41){
                d.key = "KEEP";
            }
            else if(id == 42){
                d.key = "TO DO LIST";
            }
            else if(id == 43){
                d.key = "WHATSAPP";
            }
            else if(id == 44){
                d.key = "LINE";
            }
            else if(id == 45){
                d.key = "FB MESSENGER";
            }
            else if(id == 46){
                d.key = "SLACK";
            }
            else if(id == 47){
                d.key = "DISCORD";
            }
            else if(id == 48){
                d.key = "INSTAGRAM";
            }
            else if(id == 49){
                d.key = "SNAPCHAT";
            }
            else if(id == 50){
                d.key = "FACEBOOK";
            }
            else if(id == 51){
                d.key = "OUTLOOK";
            }
            else if(id == 52){
                d.key = "GMAIL";
            }
            else if(id == 53){
                d.key = "GOOGLE WEATHER";
            }
            else if(id == 54){
                d.key = "GOOGLE DRIVE";
            }
            else if(id == 55){
                d.key = "GOOGLE PHOTOS";
            }
            else if(id == 56){
                d.key = "CALGARY TRANSIT";
            }
            else{
                d.key = "CHROME";
            }

                var active   = d.active ? false : true,
                newOpacity = active ? 1 : 0; 
                size = active ? "12px" : "9px";
                col = active ? d.data.color : "white";
                // Hide or show the elem    ents based on the ID
                d3.select("#tag"+d.key.replace(/\s+/g, ''))
                    .transition().duration(100) 
                    .style("opacity", newOpacity); 
                    d.active = active;
                    d3.select(this).style("fill", col);
                    d3.select(this).style("font-size", size);
                });
});

function project(x, y) {
  var angle = (x - 90) / 180 * Math.PI, radius = y;
  return [radius * Math.cos(angle), radius * Math.sin(angle)];
}

// Set the dimensions of the canvas / graph
var margin = {top: 30, right: 20, bottom: 70, left: 50},
    width = 600 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

// Parse the date / time
var parseDate = d3.timeParse("%b %Y");

// Set the ranges
var x = d3.scaleTime().range([0, width]);  
var y = d3.scaleLinear().range([height, 0]);

// Define the line
var priceline = d3.line()   
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.mb); });
    
// Adds the svg canvas
var svgLine = d3.select("#line")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + 45 + "," + margin.top + ")");

// Get the data
d3.csv("files/compare.csv", function(error, data) {
    data.forEach(function(d) {
        d.date = parseDate(d.date);
        d.mb = +d.mb;
    });

    // Scale the range of the data
    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain([0, d3.max(data, function(d) { return d.mb; })]);

    // Nest the entries by symbol
    var dataNest = d3.nest()
        .key(function(d) {
            return d.app;
        })
        .entries(data);

    // set the colour scale
    var color = ["#ffcc66","#ffeecc","#cc99ff","#d9b3ff","#e6ccff","#f2e6ff","#ccffb3","#eeffe6"
    ,"#ff8c66","#ffc6b3","#ffece6","#1ab2ff","#4dc3ff","#66ccff","#80d4ff","#99ddff","#b3e6ff"
    ,"#cceeff","#e6f7ff","#cce6ff","#e6f2ff","#99c2ff","#b3d1ff","#cce0ff","#e6f0ff","#ebebfa"
    ,"#ffa366","#ffa366","#ffe0cc","#c65353","#cc6666","#d27979","#d98c8c","#e6b3b3","#ecc6c6"
    ,"#f2d9d9","#ff80bf","#ffcce6","#85e085","#99e699","#c2f0c2","#d6f5d6","#ff8080","#ff80aa"
    ,"#ff99bb","#ff9999","#ffb3cc","#ffccdd","#ffb3b3","#ffccf2","#ffcccc","#ffe6e6","#c2f0f0","#c2d6d6","#d1e0e0","#e0ebeb"];



    // Loop through each symbol / key
    dataNest.forEach(function(d,i) { 

    legendSpace = width/dataNest.length; // spacing for the legend

        svgLine.append("path")
            .attr("class", "line")
            .style("stroke", function() { // Add the colours dynamically
                return d.color = color[i]; })
            .attr("id", 'tag'+d.key.replace(/\s+/g, '')) // assign an ID
            .attr("class", "linegraph") // assign an ID
            .attr("d", priceline(d.values))
            .attr("opacity", "0");

    });

  // Add the X Axis
  svgLine.append("g")
      .attr("class", "axis")
      .style("stroke", "white")
      .style("stroke-width", "0.5px")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // Add the Y Axis
  svgLine.append("g")
      .attr("class", "axis")
      .style("stroke", "white")
      .style("stroke-fill", "0.5px")
      .call(d3.axisLeft(y));

});

}

drawTree("files/mobiledata.csv");
drawCluster();
var filename="";

  $('.button').on('click', function () {
    var self = $(this);
    var file = self.attr('id');
    d3.select("#tree").remove();
        filename = "files/mobiledata.csv"
    d3.select("body").append("svg").attr("id", "tree").attr("width", "1000").attr("height", "1100");       // move right 20px.
    drawTree(filename);
    document.getElementById("m1016").style.backgroundColor = 'white';
    document.getElementById("m0916").style.backgroundColor = 'pink';
    document.getElementById("m1116").style.backgroundColor = 'white';
    document.getElementById("m1216").style.backgroundColor = 'white';
    document.getElementById("m0117").style.backgroundColor = 'white';
    document.getElementById("m0217").style.backgroundColor = 'white';
    document.getElementById("m0317").style.backgroundColor = 'white';
    document.getElementById("m0417").style.backgroundColor = 'white';
    document.getElementById("m0517").style.backgroundColor = 'white';
    document.getElementById("m0617").style.backgroundColor = 'white';
    document.getElementById("m0717").style.backgroundColor = 'white';
    document.getElementById("m0817").style.backgroundColor = 'white';
    document.getElementById("m0917").style.backgroundColor = 'white';

  });
    $('.button2').on('click', function () {
    var self = $(this);
    var file = self.attr('id');
    d3.select("#tree").remove();
        filename = "files/circular2.csv"

    d3.select("body").append("svg").attr("id", "tree").attr("width", "1000").attr("height", "1100");       // move right 20px.

    drawTree(filename);
    document.getElementById("m1016").style.backgroundColor = 'pink';
    document.getElementById("m0916").style.backgroundColor = 'white';
    document.getElementById("m1116").style.backgroundColor = 'white';
    document.getElementById("m1216").style.backgroundColor = 'white';
    document.getElementById("m0117").style.backgroundColor = 'white';
    document.getElementById("m0217").style.backgroundColor = 'white';
    document.getElementById("m0317").style.backgroundColor = 'white';
    document.getElementById("m0417").style.backgroundColor = 'white';
    document.getElementById("m0517").style.backgroundColor = 'white';
    document.getElementById("m0617").style.backgroundColor = 'white';
    document.getElementById("m0717").style.backgroundColor = 'white';
    document.getElementById("m0817").style.backgroundColor = 'white';
    document.getElementById("m0917").style.backgroundColor = 'white';

  });

    $('.button3').on('click', function () {
    var self = $(this);
    var file = self.attr('id');
    d3.select("#tree").remove();
        filename = "files/circular3.csv"

    d3.select("body").append("svg").attr("id", "tree").attr("width", "1000").attr("height", "1100");       // move right 20px.

    drawTree(filename);
    document.getElementById("m1016").style.backgroundColor = 'white';
    document.getElementById("m0916").style.backgroundColor = 'white';
    document.getElementById("m1116").style.backgroundColor = 'pink';
    document.getElementById("m1216").style.backgroundColor = 'white';
    document.getElementById("m0117").style.backgroundColor = 'white';
    document.getElementById("m0217").style.backgroundColor = 'white';
    document.getElementById("m0317").style.backgroundColor = 'white';
    document.getElementById("m0417").style.backgroundColor = 'white';
    document.getElementById("m0517").style.backgroundColor = 'white';
    document.getElementById("m0617").style.backgroundColor = 'white';
    document.getElementById("m0717").style.backgroundColor = 'white';
    document.getElementById("m0817").style.backgroundColor = 'white';
    document.getElementById("m0917").style.backgroundColor = 'white';

  });   

    $('.button4').on('click', function () {
    var self = $(this);
    var file = self.attr('id');
    d3.select("#tree").remove();
        filename = "files/circular4.csv"

    d3.select("body").append("svg").attr("id", "tree").attr("width", "1000").attr("height", "1100");       // move right 20px.

    drawTree(filename);
    document.getElementById("m1016").style.backgroundColor = 'white';
    document.getElementById("m0916").style.backgroundColor = 'white';
    document.getElementById("m1116").style.backgroundColor = 'white';
    document.getElementById("m1216").style.backgroundColor = 'pink';
    document.getElementById("m0117").style.backgroundColor = 'white';
    document.getElementById("m0217").style.backgroundColor = 'white';
    document.getElementById("m0317").style.backgroundColor = 'white';
    document.getElementById("m0417").style.backgroundColor = 'white';
    document.getElementById("m0517").style.backgroundColor = 'white';
    document.getElementById("m0617").style.backgroundColor = 'white';
    document.getElementById("m0717").style.backgroundColor = 'white';
    document.getElementById("m0817").style.backgroundColor = 'white';
    document.getElementById("m0917").style.backgroundColor = 'white';

  });

     $('.button5').on('click', function () {
    var self = $(this);
    var file = self.attr('id');
    d3.select("#tree").remove();
        filename = "files/circular5.csv"

    d3.select("body").append("svg").attr("id", "tree").attr("width", "1000").attr("height", "1100");       // move right 20px.

    drawTree(filename);
    document.getElementById("m1016").style.backgroundColor = 'white';
    document.getElementById("m0916").style.backgroundColor = 'white';
    document.getElementById("m1116").style.backgroundColor = 'white';
    document.getElementById("m1216").style.backgroundColor = 'white';
    document.getElementById("m0117").style.backgroundColor = 'pink';
    document.getElementById("m0217").style.backgroundColor = 'white';
    document.getElementById("m0317").style.backgroundColor = 'white';
    document.getElementById("m0417").style.backgroundColor = 'white';
    document.getElementById("m0517").style.backgroundColor = 'white';
    document.getElementById("m0617").style.backgroundColor = 'white';
    document.getElementById("m0717").style.backgroundColor = 'white';
    document.getElementById("m0817").style.backgroundColor = 'white';
    document.getElementById("m0917").style.backgroundColor = 'white';

  }); 

      $('.button6').on('click', function () {
    var self = $(this);
    var file = self.attr('id');
    d3.select("#tree").remove();
        filename = "files/circular6.csv"

    d3.select("body").append("svg").attr("id", "tree").attr("width", "1000").attr("height", "1100");       // move right 20px.

    drawTree(filename);
    document.getElementById("m1016").style.backgroundColor = 'white';
    document.getElementById("m0916").style.backgroundColor = 'white';
    document.getElementById("m1116").style.backgroundColor = 'white';
    document.getElementById("m1216").style.backgroundColor = 'white';
    document.getElementById("m0117").style.backgroundColor = 'white';
    document.getElementById("m0217").style.backgroundColor = 'pink';
    document.getElementById("m0317").style.backgroundColor = 'white';
    document.getElementById("m0417").style.backgroundColor = 'white';
    document.getElementById("m0517").style.backgroundColor = 'white';
    document.getElementById("m0617").style.backgroundColor = 'white';
    document.getElementById("m0717").style.backgroundColor = 'white';
    document.getElementById("m0817").style.backgroundColor = 'white';
    document.getElementById("m0917").style.backgroundColor = 'white';

  });

      $('.button7').on('click', function () {
    var self = $(this);
    var file = self.attr('id');
    d3.select("#tree").remove();
        filename = "files/circular7.csv"

    d3.select("body").append("svg").attr("id", "tree").attr("width", "1000").attr("height", "1100");       // move right 20px.

    drawTree(filename);
    document.getElementById("m1016").style.backgroundColor = 'white';
    document.getElementById("m0916").style.backgroundColor = 'white';
    document.getElementById("m1116").style.backgroundColor = 'white';
    document.getElementById("m1216").style.backgroundColor = 'white';
    document.getElementById("m0117").style.backgroundColor = 'white';
    document.getElementById("m0217").style.backgroundColor = 'white';
    document.getElementById("m0317").style.backgroundColor = 'pink';
    document.getElementById("m0417").style.backgroundColor = 'white';
    document.getElementById("m0517").style.backgroundColor = 'white';
    document.getElementById("m0617").style.backgroundColor = 'white';
    document.getElementById("m0717").style.backgroundColor = 'white';
    document.getElementById("m0817").style.backgroundColor = 'white';
    document.getElementById("m0917").style.backgroundColor = 'white';

  });  

      $('.button8').on('click', function () {
    var self = $(this);
    var file = self.attr('id');
    d3.select("#tree").remove();
        filename = "files/circular8.csv"

    d3.select("body").append("svg").attr("id", "tree").attr("width", "1000").attr("height", "1100");       // move right 20px.

    drawTree(filename);
    document.getElementById("m1016").style.backgroundColor = 'white';
    document.getElementById("m0916").style.backgroundColor = 'white';
    document.getElementById("m1116").style.backgroundColor = 'white';
    document.getElementById("m1216").style.backgroundColor = 'white';
    document.getElementById("m0117").style.backgroundColor = 'white';
    document.getElementById("m0217").style.backgroundColor = 'white';
    document.getElementById("m0317").style.backgroundColor = 'white';
    document.getElementById("m0417").style.backgroundColor = 'pink';
    document.getElementById("m0517").style.backgroundColor = 'white';
    document.getElementById("m0617").style.backgroundColor = 'white';
    document.getElementById("m0717").style.backgroundColor = 'white';
    document.getElementById("m0817").style.backgroundColor = 'white';
    document.getElementById("m0917").style.backgroundColor = 'white';

  });    

        $('.button9').on('click', function () {
    var self = $(this);
    var file = self.attr('id');
    d3.select("#tree").remove();
        filename = "files/circular9.csv"

    d3.select("body").append("svg").attr("id", "tree").attr("width", "1000").attr("height", "1100");       // move right 20px.

    drawTree(filename);
    document.getElementById("m1016").style.backgroundColor = 'white';
    document.getElementById("m0916").style.backgroundColor = 'white';
    document.getElementById("m1116").style.backgroundColor = 'white';
    document.getElementById("m1216").style.backgroundColor = 'white';
    document.getElementById("m0117").style.backgroundColor = 'white';
    document.getElementById("m0217").style.backgroundColor = 'white';
    document.getElementById("m0317").style.backgroundColor = 'white';
    document.getElementById("m0417").style.backgroundColor = 'white';
    document.getElementById("m0517").style.backgroundColor = 'pink';
    document.getElementById("m0617").style.backgroundColor = 'white';
    document.getElementById("m0717").style.backgroundColor = 'white';
    document.getElementById("m0817").style.backgroundColor = 'white';
    document.getElementById("m0917").style.backgroundColor = 'white';

  });  

       $('.button10').on('click', function () {
    var self = $(this);
    var file = self.attr('id');
    d3.select("#tree").remove();
        filename = "files/circular10.csv"

    d3.select("body").append("svg").attr("id", "tree").attr("width", "1000").attr("height", "1100");       // move right 20px.

    drawTree(filename);
    document.getElementById("m1016").style.backgroundColor = 'white';
    document.getElementById("m0916").style.backgroundColor = 'white';
    document.getElementById("m1116").style.backgroundColor = 'white';
    document.getElementById("m1216").style.backgroundColor = 'white';
    document.getElementById("m0117").style.backgroundColor = 'white';
    document.getElementById("m0217").style.backgroundColor = 'white';
    document.getElementById("m0317").style.backgroundColor = 'white';
    document.getElementById("m0417").style.backgroundColor = 'white';
    document.getElementById("m0517").style.backgroundColor = 'white';
    document.getElementById("m0617").style.backgroundColor = 'pink';
    document.getElementById("m0717").style.backgroundColor = 'white';
    document.getElementById("m0817").style.backgroundColor = 'white';
    document.getElementById("m0917").style.backgroundColor = 'white';

  }); 

       $('.button11').on('click', function () {
    var self = $(this);
    var file = self.attr('id');
    d3.select("#tree").remove();
        filename = "files/circular11.csv"

    d3.select("body").append("svg").attr("id", "tree").attr("width", "1000").attr("height", "1100");       // move right 20px.

    drawTree(filename);
    document.getElementById("m1016").style.backgroundColor = 'white';
    document.getElementById("m0916").style.backgroundColor = 'white';
    document.getElementById("m1116").style.backgroundColor = 'white';
    document.getElementById("m1216").style.backgroundColor = 'white';
    document.getElementById("m0117").style.backgroundColor = 'white';
    document.getElementById("m0217").style.backgroundColor = 'white';
    document.getElementById("m0317").style.backgroundColor = 'white';
    document.getElementById("m0417").style.backgroundColor = 'white';
    document.getElementById("m0517").style.backgroundColor = 'white';
    document.getElementById("m0617").style.backgroundColor = 'white';
    document.getElementById("m0717").style.backgroundColor = 'pink';
    document.getElementById("m0817").style.backgroundColor = 'white';
    document.getElementById("m0917").style.backgroundColor = 'white';

  });   

       $('.button12').on('click', function () {
    var self = $(this);
    var file = self.attr('id');
    d3.select("#tree").remove();
        filename = "files/circular12.csv"

    d3.select("body").append("svg").attr("id", "tree").attr("width", "1000").attr("height", "1100");       // move right 20px.

    drawTree(filename);
    document.getElementById("m1016").style.backgroundColor = 'white';
    document.getElementById("m0916").style.backgroundColor = 'white';
    document.getElementById("m1116").style.backgroundColor = 'white';
    document.getElementById("m1216").style.backgroundColor = 'white';
    document.getElementById("m0117").style.backgroundColor = 'white';
    document.getElementById("m0217").style.backgroundColor = 'white';
    document.getElementById("m0317").style.backgroundColor = 'white';
    document.getElementById("m0417").style.backgroundColor = 'white';
    document.getElementById("m0517").style.backgroundColor = 'white';
    document.getElementById("m0617").style.backgroundColor = 'white';
    document.getElementById("m0717").style.backgroundColor = 'white';
    document.getElementById("m0817").style.backgroundColor = 'pink';
    document.getElementById("m0917").style.backgroundColor = 'white';

  });  

       $('.button13').on('click', function () {
    var self = $(this);
    var file = self.attr('id');
    d3.select("#tree").remove();
        filename = "files/circular13.csv"

    d3.select("body").append("svg").attr("id", "tree").attr("width", "1000").attr("height", "1100");       // move right 20px.

    drawTree(filename);
    document.getElementById("m1016").style.backgroundColor = 'white';
    document.getElementById("m0916").style.backgroundColor = 'white';
    document.getElementById("m1116").style.backgroundColor = 'white';
    document.getElementById("m1216").style.backgroundColor = 'white';
    document.getElementById("m0117").style.backgroundColor = 'white';
    document.getElementById("m0217").style.backgroundColor = 'white';
    document.getElementById("m0317").style.backgroundColor = 'white';
    document.getElementById("m0417").style.backgroundColor = 'white';
    document.getElementById("m0517").style.backgroundColor = 'white';
    document.getElementById("m0617").style.backgroundColor = 'white';
    document.getElementById("m0717").style.backgroundColor = 'white';
    document.getElementById("m0817").style.backgroundColor = 'white';
    document.getElementById("m0917").style.backgroundColor = 'pink';

  });       

       $('.buttonreset').on('click', function () {
            d3.selectAll(".linegraph")
                    .transition().duration(100) 
                    .style("opacity", 0);
                    d3.selectAll(".namae").style("fill", "white")
                    .style("font-size", "9px");

  }); 


d3.selectAll("input").on("change", choose);

    function choose(){
        var value = this.value;

        if (value == "tree"){
            d3.select("#tree").attr("width", "1000").attr("height", "1100");
            d3.select("#cluster").attr("width", "0").attr("height", "0");
            d3.select("#line").attr("width", "0").attr("height", "0");
            $(".dates").css('visibility','visible');
            $(".blurb").css('visibility','hidden');
            $(".buttonreset").css('visibility','hidden');


        }
        else if (value == "radialcluster"){
            d3.select("#tree").attr("width", "0").attr("height", "0");
            d3.select("#cluster").attr("width", "600").attr("height", "610");
            d3.select("#line").attr("width", "600").attr("height", "600");
            $(".dates").css('visibility','hidden');
            $(".blurb").css('visibility','visible');
            $(".buttonreset").css('visibility','visible');

        }
    }