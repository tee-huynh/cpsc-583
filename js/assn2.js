
var clicked = false;
var first = true;
                    var id;
                    var newOpacity = 0;

// main svg
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

    function drawTree(){

    d3.csv("files/mobiledata.csv", row, function(error, data) {
        if (error) throw error;

        var root = stratify(data);
        tree(root);


        // Draw every datum a line connecting to its parent.
        var link = g.selectAll(".link")
                .data(root.descendants().slice(1))
                .enter().append("path")
                .attr("class", "link")
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
                .style("fill", "black")
                .on("mousemove", function(d) {
                    d3.select(this).style("fill", d.data.color)
                })
                .on("mouseout", function(d){
                    d3.select(this).style("fill", "black");
                });

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
                .style("fill", "black")
                .attr("transform", "translate(" + (length + 400) + "," + (-3) + ")")
                .text(function (d) {
                    return d.data.id.substring(d.data.id.lastIndexOf(".") + 1);
                });

        // Write down text for every parent datum
        var internalNode = g.selectAll(".node--internal");
        internalNode.append("text")
                .attr("y", -10)
                .style("text-anchor", "middle")
                .style("font-size", "10px")
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
                .style("stroke","black");

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
                    .attr("stroke","#4D4D4D")
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
    width = 400,
    height = 400,
    g = svg.append("g").attr("transform", "translate(" + (width / 2 + 100) + "," + (height / 2 + 45) + ")");

var stratify = d3.stratify()
    .parentId(function(d) { return d.id.substring(0, d.id.lastIndexOf(".")); });

var tree = d3.cluster()
    .size([360, 175])
    .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });

d3.csv("files/circular.csv", function(error, data) {
  if (error) throw error;

  var root = tree(stratify(data)
      .sort(function(a, b) { return (a.height - b.height) || a.id.localeCompare(b.id); }));

  var link = g.selectAll(".link")
    .data(root.descendants().slice(1))
    .enter().append("path")
      .attr("class", "link")
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

                    clicked = true;
                    if(first == true){
                        newOpacity = 1;
                        d3.select(this).style("fill", d.data.color);
                        first = false; 
                        d3.select("#tag"+d.key.replace(/\s+/g, ''))
                            .transition().duration(100) 
                            .style("opacity", newOpacity); 
                    }   
                    else{
                        d3.select(this).style("fill", "black")
                        active = false;
                        newOpacity = 0;
                        d3.select("#tag"+d.key.replace(/\s+/g, ''))
                    .transition().duration(100) 
                    .style("opacity", newOpacity); 
                        first = true;
                        clicked = false;
                    }
                    console.log(d.data.number);
                })
                .on("mouseover", function(d) {
                    d3.select(this).style("fill", d.data.color);
                })
                .on("mouseout", function(d){
                    if(clicked == false){
                        d3.select(this).style("fill", "black");
                    }
                    else{
                        d3.select(this).style("fill", d.data.color);
                    }
                });

  node.append("text")
      .attr("dy", ".31em")
      .style("font-size", "9px")
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
                // Hide or show the elem    ents based on the ID
                d3.select("#tag"+d.key.replace(/\s+/g, ''))
                    .transition().duration(100) 
                    .style("opacity", newOpacity); 
                    console.log(d.data.number);
                    clicked = true;
                    d.active = active;
                if(first == true){
                        d3.select(this).style("fill", d.data.color);
                        first = false; 
                    }   
                    else{
                        d3.select(this).style("fill", "black")
                        first = true;
                        clicked = false;
                    }

                })
                .on("mouseover", function(d) {
                    d3.select(this).style("fill", d.data.color);
                })
                .on("mouseout", function(d){
                    if(clicked == false){
                        d3.select(this).style("fill", "black");
                    }
                    else{
                        d3.select(this).style("fill", d.data.color);
                    }
                })
});

function project(x, y) {
  var angle = (x - 90) / 180 * Math.PI, radius = y;
  return [radius * Math.cos(angle), radius * Math.sin(angle)];
}

// Set the dimensions of the canvas / graph
var margin = {top: 30, right: 20, bottom: 70, left: 50},
    width = 470 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

// Parse the date / time
var parseDate = d3.timeParse("%Y-%m");

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
              "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.csv("files/compare.csv", function(error, data) {
    data.forEach(function(d) {
        d.date = parseDate(d.date);
        d.mb = d.mb;
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
    var color = d3.scaleOrdinal(d3.schemeCategory10);

    legendSpace = width/dataNest.length; // spacing for the legend

    // Loop through each symbol / key
    dataNest.forEach(function(d,i) { 

        svgLine.append("path")
            .attr("class", "line")
            .style("stroke", function() { // Add the colours dynamically
                return d.color = color(d.key); })
            .attr("id", 'tag'+d.key.replace(/\s+/g, '')) // assign an ID
            .attr("d", priceline(d.values))
            .attr("opacity", "0");
/*
        // Add the Legend
        svgLine.append("text")
            .attr("x", (legendSpace/2)+i*legendSpace)  // space legend
            .attr("y", height + (margin.bottom/2)+ 5)
            .attr("class", "legend")    // style the legend
            .style("fill", function() { // Add the colours dynamically
                return d.color = color(d.key); })
            .on("click", function(){
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

                // Determine if current line is visible 
                var active   = d.active ? false : true,
                newOpacity = active ? 0 : 1; 
                // Hide or show the elem    ents based on the ID
                d3.select("#tag"+d.key.replace(/\s+/g, ''))
                    .transition().duration(200) 
                    .style("opacity", newOpacity); 
                // Update whether or not the elements are active
                d.active = active;
                })  
            .text(d.key);   
*/
    });

  // Add the X Axis
  svgLine.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // Add the Y Axis
  svgLine.append("g")
      .attr("class", "axis")
      .call(d3.axisLeft(y));

});

}

drawTree();
drawCluster();

d3.selectAll("input").on("change", choose);

    function choose(){
        var value = this.value;

        if (value == "tree"){
            d3.select("#tree").attr("width", "1000").attr("height", "1100");
            d3.select("#cluster").attr("width", "0").attr("height", "0");
            d3.select("#line").attr("width", "0").attr("height", "0");

        }
        else if (value == "radialcluster"){
            d3.select("#tree").attr("width", "0").attr("height", "0");
            d3.select("#cluster").attr("width", "600").attr("height", "610");
            d3.select("#line").attr("width", "500").attr("height", "400");

        }
    }