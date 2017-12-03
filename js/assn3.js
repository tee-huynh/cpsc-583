var number = 0;

var data=[['EatingOut', 'JAN 2017', 1.56],
['Groceries', 'JAN 2017', 48.86],
['Groceries', 'JAN 2017', 45.06],
['Shopping', 'JAN 2017', 26.24],
['Groceries', 'JAN 2017', 16.42],
['Groceries', 'JAN 2017', 40.3],
['Shopping', 'JAN 2017', 17.0],
['Necessities', 'JAN 2017', 13.78],
['EatingOut', 'JAN 2017', 7.3],
['EatingOut', 'JAN 2017', 33.8],
['Necessities', 'JAN 2017', 15.74],
['Groceries', 'JAN 2017', 17.85],
['Shopping', 'JAN 2017', 5.2],
['EatingOut', 'JAN 2017', 31.68],
['EatingOut', 'JAN 2017', 4.46],
['EatingOut', 'JAN 2017', 9.4],
['EatingOut', 'JAN 2017', 9.11],
['Shopping', 'JAN 2017', 18.9],
['EatingOut', 'JAN 2017', 6.3],
['EatingOut', 'JAN 2017', 5.78],
['EatingOut', 'JAN 2017', 21.89],
['Entertainment', 'JAN 2017', 11.29],
['EatingOut', 'JAN 2017', 5.51],
['EatingOut', 'JAN 2017', 3.94],
['EatingOut', 'FEB 2017', 5.20],
['EatingOut', 'FEB 2017', 20.29],
['EatingOut', 'FEB 2017', 7.6],
['EatingOut', 'FEB 2017', 4.46],
['EatingOut', 'FEB 2017', 8.48],
['EatingOut', 'FEB 2017', 20.41],
['EatingOut', 'FEB 2017', 19.98],
['EatingOut', 'FEB 2017', 5.20],
['EatingOut', 'FEB 2017', 32],
['EatingOut', 'FEB 2017', 4.99],
['EatingOut', 'FEB 2017', 2.45],
['Groceries', 'FEB 2017', 22.55],
['EatingOut', 'FEB 2017', 10.97],
['Entertainment', 'FEB 2017', 42.55],
['EatingOut', 'FEB 2017', 2.51],
['EatingOut', 'FEB 2017', 32.9],
['EatingOut', 'FEB 2017', 5.5],
['Groceries', 'FEB 2017', 17.82],
['EatingOut', 'FEB 2017', 17.31],
['EatingOut', 'FEB 2017', 8.6],
['EatingOut', 'FEB 2017', 2.89],
['Shopping', 'FEB 2017', 17.84],
['EatingOut', 'FEB 2017', 4.67],
['Groceries', 'FEB 2017', 2.67],
['EatingOut', 'MAR 2017', 2.36],
['EatingOut', 'MAR 2017', 13.02],
['EatingOut', 'MAR 2017', 18.48],
['EatingOut', 'MAR 2017', 7.6],
['EatingOut', 'MAR 2017', 3.5],
['Entertainment', 'MAR 2017', 4.71],
['EatingOut', 'MAR 2017', 16.15],
['EatingOut', 'MAR 2017', 11.55],
['Groceries', 'MAR 2017', 20.1],
['Entertainment', 'MAR 2017', 39.12],
['EatingOut', 'MAR 2017', 4.6],
['EatingOut', 'MAR 2017', 14.18],
['EatingOut', 'MAR 2017', 5.51],
['EatingOut', 'MAR 2017', 2.72],
['EatingOut', 'MAR 2017', 7.3],
['EatingOut', 'MAR 2017', 14.88],
['Groceries', 'MAR 2017', 19.99],
['Groceries', 'MAR 2017', 3.56],
['EatingOut', 'MAR 2017', 12.88],
['EatingOut', 'MAR 2017', 4.83],
['Entertainment', 'MAR 2017', 6.56],
['EatingOut', 'MAR 2017', 12.07],
['Groceries', 'MAR 2017', 25.61],
['Groceries', 'MAR 2017', 51.99],
['Entertainment', 'APR 2017', 10],
['Groceries', 'APR 2017', 25.91],
['EatingOut', 'APR 2017', 12.85],
['EatingOut', 'APR 2017', 9.4],
['EatingOut', 'APR 2017', 7.6],
['EatingOut', 'APR 2017', 2.65],
['EatingOut', 'APR 2017', 5.51],
['EatingOut', 'APR 2017', 18.02],
['EatingOut', 'APR 2017', 15.6],
['EatingOut', 'APR 2017', 8.39],
['EatingOut', 'APR 2017', 5.78],
['EatingOut', 'APR 2017', 14.65],
['EatingOut', 'APR 2017', 11.5],
['EatingOut', 'APR 2017', 5.02],
['EatingOut', 'APR 2017', 13.84],
['EatingOut', 'APR 2017', 6.44],
['EatingOut', 'APR 2017', 28.56],
['EatingOut', 'APR 2017', 10.37],
['Shopping', 'APR 2017', 3.94],
['Shopping', 'APR 2017', 21.44],
['EatingOut', 'APR 2017', 5.78],
['EatingOut', 'APR 2017', 4.99],
['EatingOut', 'APR 2017', 2.89],
['EatingOut', 'APR 2017', 3.45],
['EatingOut', 'MAY 2017', 11],
['EatingOut', 'MAY 2017', 5.78],
['Entertainment', 'MAY 2017', 16],
['EatingOut', 'MAY 2017', 8.18],
['Entertainment', 'MAY 2017', 26.5],
['EatingOut', 'MAY 2017', 14.05],
['Groceries', 'MAY 2017', 23.1],
['Entertainment', 'MAY 2017', 13.25],
['EatingOut', 'MAY 2017', 5.72],
['Shopping', 'MAY 2017', 30.44],
['Shopping', 'MAY 2017', 57.74],
['Shopping', 'MAY 2017', 15.11],
['Entertainment', 'MAY 2017', 9.64],
['Shopping', 'MAY 2017', 23.39],
['EatingOut', 'MAY 2017', 6.88],
['EatingOut', 'MAY 2017', 5.93],
['Groceries', 'MAY 2017', 12.94],
['EatingOut', 'MAY 2017', 4.75],
['EatingOut', 'MAY 2017', 4.6],
['Entertainment', 'MAY 2017', 9.19],
['EatingOut', 'MAY 2017', 10],
['Shopping', 'MAY 2017', 40.43],
['Shopping', 'MAY 2017', 9.69],
['EatingOut', 'MAY 2017', 4.65],
['EatingOut', 'JUN 2017', 28.88],
['EatingOut', 'JUN 2017', 5.25],
['Entertainment', 'JUN 2017', 36.75],
['EatingOut', 'JUN 2017', 7.34],
['EatingOut', 'JUN 2017', 19.4],
['EatingOut', 'JUN 2017', 8.67],
['Shopping', 'JUN 2017', 22.02],
['Entertainment', 'JUN 2017', 8.5],
['EatingOut', 'JUN 2017', 12.59],
['EatingOut', 'JUN 2017', 5.57],
['Shopping', 'JUN 2017', 15.74],
['EatingOut', 'JUN 2017', 4.61],
['EatingOut', 'JUN 2017', 11.29],
['Entertainment', 'JUN 2017', 26.2],
['EatingOut', 'JUN 2017', 5.87],
['EatingOut', 'JUN 2017', 29.25],
['EatingOut', 'JUN 2017', 11.06],
['EatingOut', 'JUN 2017', 16.2],
['EatingOut', 'JUN 2017', 13.38],
['EatingOut', 'JUN 2017', 32.35],
['EatingOut', 'JUN 2017', 11.23],
['EatingOut', 'JUN 2017', 8.88],
['Groceries', 'JUN 2017', 32.3],
['EatingOut', 'JUN 2017', 5.72]
];

var color ={Groceries:"#FFA69E", EatingOut:"#84DCC6",  Necessities:"#FF8B51", Shopping:"#F3DE8A", Entertainment:"#FF4F5A", Small:"#0099C6"};
var svg = d3.select("#bar").append("svg").attr("width", 600).attr("height", 800);

svg.append("text").attr("x",325).attr("y",70)
    .attr("class","header").text("Spending Distribution").attr("fill", "#184675");

var g =[svg.append("g").attr("transform","translate(200,100)")];


var bp=[viz.bP()
        .data(data)
        .min(12)
        .pad(1)
        .height(600)
        .width(250)
        .barSize(35)
        .fill(d=>color[d.primary])      
    ,viz.bP()
        .data(data)
        .value(d=>d[3])
        .min(12)
        .pad(1)
        .height(600)
        .width(200)
        .barSize(35)
        .fill(d=>color[d.primary])
];
        
[0,1].forEach(function(i){
    g[i].call(bp[i])
    
    g[i].append("text").attr("x",-50).attr("y",-8).style("text-anchor","middle").text("Category");
    g[i].append("text").attr("x", 300).attr("y",-8).style("text-anchor","middle").text("Month");
    
    g[i].append("line").attr("x1",-100).attr("x2",0);
    g[i].append("line").attr("x1",250).attr("x2",350);
    
    g[i].append("line").attr("y1",610).attr("y2",610).attr("x1",-100).attr("x2",0);
    g[i].append("line").attr("y1",610).attr("y2",610).attr("x1",250).attr("x2",350);
    
    g[i].selectAll(".mainBars")
        .on("mouseover",mouseover)
        .on("mouseout",mouseout);

    g[i].selectAll(".mainBars").append("text").attr("class","label")
        .attr("x",d=>(d.part=="primary"? -30: 30))
        .attr("y",d=>+6)
        .text(d=>d.key)
        .attr("text-anchor",d=>(d.part=="primary"? "end": "start"));
    
    g[i].selectAll(".mainBars").append("text").attr("class","perc")
        .attr("x",d=>(d.part=="primary"? -125: 100))
        .attr("y",d=>+6)
        .text(function(d){ return d3.format("0.0%")(d.percent)})
        .attr("text-anchor",d=>(d.part=="primary"? "end": "start"));
});

function mouseover(d){
    [0,1].forEach(function(i){
        bp[i].mouseover(d);
        
        g[i].selectAll(".mainBars").select(".perc")
        .text(function(d){ return d3.format("0.0%")(d.percent)});   
    });
}
function mouseout(d){
    [0,1].forEach(function(i){
        bp[i].mouseout(d);
        
        g[i].selectAll(".mainBars").select(".perc")
        .text(function(d){ return d3.format("0.0%")(d.percent)});
    });
}
d3.select(self.frameElement).style("height", "800px");

// Create the svg and set the dimensions
    var svg = dimple.newSvg("#chartContainer", 590, 400);

    d3.tsv("/data/example_data.tsv", function (data) {

      // Add a bullet chart to the svg
      function addBullet(x, y, height, width, measure, lowMark,
                        highMark, compareField, keyVal,
                        compareVal, color) {
        
        // This is a custom algorithm to lighten the passed color, I find I can't
        // get the results I want from the d3.rgb.brighter method.
        function lighten(color, pct) {
            return d3.rgb(
                    d3.rgb(color).r + pct * (255 - d3.rgb(color).r),
                    d3.rgb(color).g + pct * (255 - d3.rgb(color).g),
                    d3.rgb(color).b + pct * (255 - d3.rgb(color).b)
                );
        }

        // Create a single data row for bullet data.  Dimple doesn't
        // quite handle bullets out of the box so we need to do some
        // data manipulation here
        var bData = [
            {
                "Metric":measure,
                "Value":0,
                "Low Value":lowMark,
                "High Value":highMark,
                "Compare Value":0
            }
        ];

        // Add the key and compare values for coloring and pop-ups
        bData[0][keyVal] = keyVal;
        bData[0][compareVal] = compareVal;

        // Iterate the data and put numbers into the low key or compare
        // value fields or exclude if in neither value
        data.forEach(function (d) {
          if (d[compareField] === keyVal) {
            bData[0]["Value"] += parseFloat(d[measure]);
          } else if (d[compareField] === compareVal) {
            bData[0]["Compare Value"] += parseFloat(d[measure]);
          }
        }, this);

        // Create the bullet chart itself at the passed bounds
        var bullet = new dimple.chart(svg, bData);
        bullet.setBounds(x, y, height, width);

        // Add the x and y for the main bar
        var bY = bullet.addCategoryAxis("y", "Metric");
        var bX = bullet.addMeasureAxis("x", "Value");

        // Add a separate x axis for each measure, this is required
        // where we want to do a series for each measure.  By passing
        // another axis in place of the position we combine them to create
        // a 4 measure composite.
        var lX = bullet.addMeasureAxis(bX, "Low Value");
        var hX = bullet.addMeasureAxis(bX, "High Value");
        var cX = bullet.addMeasureAxis(bX, "Compare Value");

        // Add a series for the marks first (the order defines)
        // document z position - first at back, last on top
        // NB. High/Low Mark here doesn't refer to a field in the data
        // rather it tags the total value with a name we can use to color
        var hm = bullet.addSeries("High Mark", dimple.plot.bar, [bY, hX]);
        var lm = bullet.addSeries("Low Mark", dimple.plot.bar, [bY, lX]);
        // Add the main series - keyVal is for color and tooltip
        var b = bullet.addSeries(keyVal, dimple.plot.bar, [bY, bX]);
        // Add the comparison series - compareVal is for color and tooltip
        var m = bullet.addSeries(compareVal, dimple.plot.bar, [bY, cX]);

        // Configure the markers as floating bars
        m.stacked = false;
        cX.floatingBarWidth = 2;

        // Set the gaps for the bar series with a narrow main series and full
        // width for the markers
        hm.barGap = 0;
        lm.barGap = 0;
        b.barGap = 0.75;

        // Assign the colors as different shades of the passed color
        bullet.assignColor(keyVal, color);
        bullet.assignColor(compareVal, d3.rgb(color).darker(0.5));
        bullet.assignColor("Low Mark", lighten(color, 0.4));
        bullet.assignColor("High Mark", lighten(color, 0.6));

        // Draw the chart
        bullet.draw();

        // Once drawn we can remove titles
        bX.titleShape.remove();
        bY.titleShape.remove();

      }

      // Draw the chart for each financial metric in the data to compare
      // Black Mesa with rival brand owner Aperture. We are coloring most
      // measures blue, but the costs are red as they should be interperated
      // as "less is better".  Typically the high and low marks would be target
      // KPI bounds, the values are just hard coded for this example. A smarter
      // means to determine axis bounds would be better but I don't want to
      // bloat this example.
      addBullet(100, 30, 430, 30, "Unit Sales", 2300000, 2800000, 
        "Owner", "Aperture", "Black Mesa", "#80B1D3");
      addBullet(100, 90, 430, 30, "Sales Value", 135000000, 145000000, 
        "Owner", "Aperture", "Black Mesa", "#80B1D3");
      addBullet(100, 150, 430, 30, "Cost of Sales", 200000, 300000, 
        "Owner", "Aperture", "Black Mesa", "#FB8072");
      addBullet(100, 210, 430, 30, "Gross Profit", 140000000, 170000000, 
        "Owner", "Aperture", "Black Mesa", "#80B1D3");
      addBullet(100, 270, 430, 30, "Indirect Costs", 100000000, 150000000, 
        "Owner", "Aperture", "Black Mesa", "#FB8072");
      addBullet(100, 330, 430, 30, "Operating Profit", 12000000, 16000000, 
        "Owner", "Aperture", "Black Mesa", "#80B1D3");

    });
