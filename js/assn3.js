// CPSC583 ASSIGNMENT 3
// TINA HUYNH
// 10131151
// REFER TO README.TXT FOR CREDITS

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



