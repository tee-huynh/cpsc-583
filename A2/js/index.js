(function(){

  // data
  var data = {
    "mercy": {
    "healingdone": 2000,
    "Education and related functions": 25380000000,
    "Economic affairs": 14280000000,
    "Health": 14570000000,
    "Public order and safety": 11570000000,
    "Social protection": 14450000000,
    "Defence": 4790000000,
    "Housing, communities and amenities": 14290000000,
    "Science and technology": 1870000000,
    "Contingency reserve": 300000000,
    "Employment and social security": 5730000000
    },
    "2013": { 
      "General public services": 15650000000,
      "Education and related functions": 23250000000,
      "Economic affairs": 13660000000,
      "Health": 13360000000,
      "Public order and safety": 10890000000,
      "Social protection": 13490000000,
      "Defence": 4480000000,
      "Housing, communities and amenities": 13210000000,
      "Science and technology": 1630000000,
      "Contingency reserve": 400000000,
      "Employment and social security": 4920000000
    },
    "2012": {
      "General public services": 14140000000,
      "Education and related functions": 20730000000,
      "Economic affairs": 14500000000,
      "Health": 12190000000,
      "Public order and safety": 9800000000,
      "Social protection": 15790000000,
      "Defence": 4160000000,
      "Housing, communities and amenities": 12010000000,
      "Science and technology": 1080000000,
      "Contingency reserve": 580000000,
      "Employment and social security": 249000000
    },
    "2011": {
      "General public services": 13200000000,
      "Education and related functions": 18950000000,
      "Economic affairs": 13660000000,
      "Health": 11260000000,
      "Public order and safety": 9090000000,
      "Social protection": 14690000000,
      "Defence": 3840000000,
      "Housing, communities and amenities": 12190000000,
      "Contingency reserve": 410000000,
      "Employment and social security": 2460000000
    },
    "2010": {
      "General public services": 12340000000,
      "Education and related functions": 16510000000,
      "Economic affairs": 16100000000,
      "Health": 10460000000,
      "Public order and safety": 8560000000,
      "Social protection": 12840000000,
      "Defence": 3380000000,
      "Housing, communities and amenities": 9320000000,
      "Contingency reserve": 60000000,
      "Employment and social security": 1820000000
    }
  };
  
// D3 Bubble Chart 

  var diameter = 600;

  var svg = d3.select('#graph').append('svg')
              .attr('width', '100%')
              .attr('height', diameter)


  var bubble = d3.layout.pack()
                 .size([diameter, diameter])
                 .value(function(d) {return d.size;})
                 .sort(function(a, b) {
                    return -(a.value - b.value)
                 }) 
                 .padding(3);
  
  drawBubbles(data["mercy"]);
  
  // buttons
  $('.button').on('click', function () {
    var self = $(this);
    drawBubbles(data[self.attr('id')]);
  });
  
  // functions
  
  function drawBubbles(data) {
    
    console.log(data);
    
    var duration = 200; 
    var delay = 0;
    
    var nodes = bubble.nodes(processData(data))
                      .filter(function(d) { return !d.children; }); // filter out the outer bubble

    var vis = svg.selectAll('circle')
                 .data(nodes, function(d) { return d.name; });
    
    // update - This only applies to updating nodes 
    vis.transition() 
       .duration(duration) 
       .delay(function(d, i) {
          delay = i * 7; 
          return delay;
       }) 
       .attr('transform', function(d) { 
          return 'translate(' + d.x + ',' + d.y + ')'; 
       }) 
       .attr('r', function(d) { return d.r; })   
    
    // enter  
    vis.enter().append('circle') 
       .attr('transform', function(d) { 
          return 'translate(' + d.x + ',' + d.y + ')'; 
       }) 
       .attr('r', function(d) { return d.r; }) 
       .attr('class', function(d) { return d.className; }) 
       .style('opacity', 0) 
       .transition() 
       .duration(duration * 1.2) 
       .style('opacity', .5);   
    
    // exit 
    vis.exit() 
       .transition() 
       .duration(duration + delay) 
       .style('opacity', 0) 
       .remove();
    
    /*vis.enter().append('circle')
               .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; })
               .attr('r', function(d) { return d.r; })
               .attr('class', function(d) { return d.className; });*/ 
  }
  
  function processData(data) {
    var obj = data;

    var newDataSet = [];

    for(var prop in obj) {
      newDataSet.push({
        name: prop, 
        className: prop.toLowerCase().split(" ").join("-"), 
        size: obj[prop]});
    }
    
    return {children: newDataSet};
  }

  
})();