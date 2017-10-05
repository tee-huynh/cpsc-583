(function(){

  // data
  var data = {
    "Mercy": {
    "WINS": 104,
    "TIME": 240,
    "ELIMS": 10.6,
    "DAMAGE": 41.3,
    "HEALING": 126.84,
    "DEATHS": 10.88,
    "GOLD": 20.1,
    "SILVER": 2.9,
    "BRONZE": 4.7,
    "ACCURACY": 25
    },
"Hanzo": {
    "WINS": 86,
    "TIME": 210,
    "ELIMS": 200.8,
    "DAMAGE": 1010.3,
    "HEALING": 0,
    "DEATHS": 12.33,
    "GOLD": 9.7,
    "SILVER": 12.1,
    "BRONZE": 18,
    "ACCURACY": 17
    },
    "DVa": {
    "WINS": 81,
    "TIME": 200,
    "ELIMS": 265.8,
    "DAMAGE": 884.5,
    "HEALING": 0,
    "DEATHS": 8.94,
    "GOLD": 20.7,
    "SILVER": 17.3,
    "BRONZE": 15.3,
    "ACCURACY": 20
    },
    "Junkrat": {
    "WINS": 81,
    "TIME": 200,
    "ELIMS": 238.2,
    "DAMAGE": 1257.2,
    "HEALING": 0,
    "DEATHS": 15.31,
    "GOLD": 12.9,
    "SILVER": 16.7,
    "BRONZE": 18,
    "ACCURACY": 18
    },
    "Lucio": {
    "WINS": 49,
    "TIME": 110,
    "ELIMS": 150.8,
    "DAMAGE": 362.8,
    "HEALING": 114.16,
    "DEATHS": 11.22,
    "GOLD": 21.6,
    "SILVER": 8,
    "BRONZE": 7.6,
    "ACCURACY": 19
    },
    "Reaper": {
    "WINS": 45,
    "TIME": 110,
    "ELIMS": 234.9,
    "DAMAGE": 791.6,
    "HEALING":6.62,
    "DEATHS": 12.98,
    "GOLD": 9.3,
    "SILVER": 18.4,
    "BRONZE": 27.1,
    "ACCURACY": 20
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
                 .padding(3);
  
  drawBubbles(data["Mercy"]);


  
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
       .style('opacity', .9) 

       
    
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