//CPSC583 PROJECT 1
//Tina Huynh
//10131151
//Links to credit are given in README.txt

(function(){

  // data
  var data = {
    "Mercy": {
    "WINS": 1040,
    "TIME": 240,
    "ELIMS": 10.6,
    "DEATHS": 108.8,
    "GOLD": 20.1,
    "SILVER": 2.9,
    "BRONZE": 4.7,
    "ACCURACY": 250
    },
    "Hanzo": {
    "WINS": 860,
    "TIME": 210,
    "ELIMS": 200.8,
    "DEATHS": 123.3,
    "GOLD": 9.7,
    "SILVER": 12.1,
    "BRONZE": 18,
    "ACCURACY": 170
    },
    "DVa": {
    "WINS": 810,
    "TIME": 200,
    "ELIMS": 265.8,
    "DEATHS": 89.4,
    "GOLD": 20.7,
    "SILVER": 17.3,
    "BRONZE": 15.3,
    "ACCURACY": 200
    },
    "Junkrat": {
    "WINS": 810,
    "TIME": 200,
    "ELIMS": 238.2,
    "DEATHS": 153.1,
    "GOLD": 12.9,
    "SILVER": 16.7,
    "BRONZE": 18,
    "ACCURACY": 180
    },
    "Lucio": {
    "WINS": 490,
    "TIME": 110,
    "ELIMS": 150.8,
    "DEATHS": 112.2,
    "GOLD": 21.6,
    "SILVER": 8,
    "BRONZE": 7.6,
    "ACCURACY": 190
    },
    "Reaper": {
    "WINS": 450,
    "TIME": 110,
    "ELIMS": 234.9,
    "DEATHS": 129.8,
    "GOLD": 9.3,
    "SILVER": 18.4,
    "BRONZE": 27.1,
    "ACCURACY": 200
    },
    "Soldier": {
    "WINS": 430,
    "TIME": 110,
    "ELIMS": 256.3,
    "DEATHS": 147.0,
    "GOLD": 14.0,
    "SILVER": 29.8,
    "BRONZE": 23.7,
    "ACCURACY": 240
    },
    "Roadhog": {
    "WINS": 340,
    "TIME": 90,
    "ELIMS": 255.9,
    "DEATHS": 136.2,
    "GOLD": 14.7,
    "SILVER": 29.1,
    "BRONZE": 22.1,
    "ACCURACY": 260
    },
    "Pharah": {
    "WINS": 310,
    "TIME": 90,
    "ELIMS": 217.1,
    "DEATHS": 157.1,
    "GOLD": 7.7,
    "SILVER": 12.6,
    "BRONZE": 15.5,
    "ACCURACY": 370
    },
    "Mei": {
    "WINS": 310,
    "TIME": 90,
    "ELIMS": 225.2,
    "DEATHS": 149,
    "GOLD": 16.1,
    "SILVER": 20.3,
    "BRONZE": 18.7,
    "ACCURACY": 330
    },
    "Zenyatta": {
    "WINS": 250,
    "TIME": 50,
    "ELIMS": 107.2,
    "DEATHS": 91.2,
    "GOLD": 16,
    "SILVER": 10,
    "BRONZE": 10.8,
    "ACCURACY": 220
    },
    "Genji": {
    "WINS": 130,
    "TIME": 30,
    "ELIMS": 158.5,
    "DEATHS": 136.9,
    "GOLD": 7.7,
    "SILVER": 13.1,
    "BRONZE": 19.2,
    "ACCURACY": 210
    },
    "Symmetra": {
    "WINS": 100,
    "TIME": 10,
    "ELIMS": 178,
    "DEATHS": 98,
    "GOLD": 8,
    "SILVER": 12,
    "BRONZE": 10,
    "ACCURACY": 0
    },
    "McCree": {
    "WINS": 60,
    "TIME": 10,
    "ELIMS": 238.3,
    "DEATHS": 205,
    "GOLD": 8.3,
    "SILVER": 20,
    "BRONZE": 25,
    "ACCURACY": 340
    },
    "Tracer": {
    "WINS": 50,
    "TIME": 10,
    "ELIMS": 330,
    "DEATHS": 304,
    "GOLD": 8.3,
    "SILVER": 20,
    "BRONZE": 25,
    "ACCURACY": 340
    },
    "Sombra": {
    "WINS": 100,
    "TIME": 100,
    "ELIMS": 108,
    "DEATHS": 52,
    "GOLD": 3,
    "SILVER": 2,
    "BRONZE": 12,
    "ACCURACY": 210
    },
    "Torbjorn": {
    "WINS": 60,
    "TIME": 10,
    "ELIMS": 228.3,
    "DEATHS": 116.7,
    "GOLD": 13.3,
    "SILVER": 16.7,
    "BRONZE": 13.3,
    "ACCURACY": 190
    },
    "Ana": {
    "WINS": 60,
    "TIME": 10,
    "ELIMS": 73.3,
    "DEATHS": 135,
    "GOLD": 18.3,
    "SILVER": 5,
    "BRONZE": 8.3,
    "ACCURACY": 100
    },
    "Winston": {
    "WINS": 50,
    "TIME": 10,
    "ELIMS": 274,
    "DEATHS": 220,
    "GOLD": 14,
    "SILVER": 22,
    "BRONZE": 10,
    "ACCURACY": 0
    },
    "Reinhardt": {
    "WINS": 40,
    "TIME": 10,
    "ELIMS": 80,
    "DEATHS": 185,
    "GOLD": 20,
    "SILVER": 17.5,
    "BRONZE": 10,
    "ACCURACY": 0
    },
    "Bastion": {
    "WINS": 40,
    "TIME": 10,
    "ELIMS": 122.5,
    "DEATHS": 90,
    "GOLD": 12.5,
    "SILVER": 15,
    "BRONZE": 12.5,
    "ACCURACY": 140
    },
    "Zarya": {
    "WINS": 10,
    "TIME": 10,
    "ELIMS": 380,
    "DEATHS": 420,
    "GOLD": 30,
    "SILVER": 30,
    "BRONZE": 40,
    "ACCURACY": 340
    },
    "Orisa": {
    "WINS": 10,
    "TIME": 10,
    "ELIMS": 500,
    "DEATHS": 320,
    "GOLD": 60,
    "SILVER": 40,
    "BRONZE": 30,
    "ACCURACY": 250
    }
  };

    var chartData = {
    "Mercy":[
        {"index":0.3, "value":104, "fill":"#ffdb82"},
        {"index":0.4, "value":24, "fill":"#6591ee"},
        {"index":0.5, "value":1.06, "fill":"#d3d7e7"},
        {"index":0.6, "value":10.88,  "fill":"white"},
        {"index":0.7, "value":2.01,  "fill":"#3d63da"},
        {"index":0.8, "value":0.29,  "fill":"#969da5"},
        {"index":0.9, "value":0.47,  "fill":"#c4e5ff"},
        {"index":1.0, "value":25,  "fill":"#ff9c1c"}
    ],
    "Hanzo":[
        {"index":0.3, "value":86, "fill":"#ffdb82"},
        {"index":0.4, "value":21, "fill":"#6591ee"},
        {"index":0.5, "value":20.08, "fill":"#d3d7e7"},
        {"index":0.6, "value":12.33,  "fill":"white"},
        {"index":0.7, "value":0.97,  "fill":"#3d63da"},
        {"index":0.8, "value":1.21,  "fill":"#969da5"},
        {"index":0.9, "value":1.8,  "fill":"#c4e5ff"},
        {"index":1.0, "value":17,  "fill":"#ff9c1c"}
    ],
    "Dva":[
        {"index":0.3, "value":81, "fill":"#ffdb82"},
        {"index":0.4, "value":21, "fill":"#6591ee"},
        {"index":0.5, "value":26.58, "fill":"#d3d7e7"},
        {"index":0.6, "value":8.94,  "fill":"white"},
        {"index":0.7, "value":2.07,  "fill":"#3d63da"},
        {"index":0.8, "value":1.73,  "fill":"#969da5"},
        {"index":0.9, "value":1.53,  "fill":"#c4e5ff"},
        {"index":1.0, "value":20,  "fill":"#ff9c1c"}
    ],
    "Junkrat":[
        {"index":0.3, "value":51, "fill":"#ffdb82"},
        {"index":0.4, "value":14, "fill":"#6591ee"},
        {"index":0.5, "value":23.82, "fill":"#d3d7e7"},
        {"index":0.6, "value":15.31,  "fill":"white"},
        {"index":0.7, "value":1.29,  "fill":"#3d63da"},
        {"index":0.8, "value":1.67,  "fill":"#969da5"},
        {"index":0.9, "value":1.8,  "fill":"#c4e5ff"},
        {"index":1.0, "value":18,  "fill":"#ff9c1c"}
    ],
    "Lucio":[
        {"index":0.3, "value":49, "fill":"#ffdb82"},
        {"index":0.4, "value":11, "fill":"#6591ee"},
        {"index":0.5, "value":15.08, "fill":"#d3d7e7"},
        {"index":0.6, "value":11.22,  "fill":"white"},
        {"index":0.7, "value":2.16,  "fill":"#3d63da"},
        {"index":0.8, "value":0.8,  "fill":"#969da5"},
        {"index":0.9, "value":0.76,  "fill":"#c4e5ff"},
        {"index":1.0, "value":19,  "fill":"#ff9c1c"}
    ],
    "Reaper":[
        {"index":0.3, "value":45, "fill":"#ffdb82"},
        {"index":0.4, "value":11, "fill":"#6591ee"},
        {"index":0.5, "value":23.49, "fill":"#d3d7e7"},
        {"index":0.6, "value":12.98,  "fill":"white"},
        {"index":0.7, "value":0.93,  "fill":"#3d63da"},
        {"index":0.8, "value":1.84,  "fill":"#969da5"},
        {"index":0.9, "value":2.71,  "fill":"#c4e5ff"},
        {"index":1.0, "value":20,  "fill":"#ff9c1c"}
    ],
    "Soldier":[
        {"index":0.3, "value":43, "fill":"#ffdb82"},
        {"index":0.4, "value":11, "fill":"#6591ee"},
        {"index":0.5, "value":25.63, "fill":"#d3d7e7"},
        {"index":0.6, "value":14.7,  "fill":"white"},
        {"index":0.7, "value":1.4,  "fill":"#3d63da"},
        {"index":0.8, "value":2.98,  "fill":"#969da5"},
        {"index":0.9, "value":2.37,  "fill":"#c4e5ff"},
        {"index":1.0, "value":24,  "fill":"#ff9c1c"}
    ],
    "Roadhog":[
        {"index":0.3, "value":34, "fill":"#ffdb82"},
        {"index":0.4, "value":9, "fill":"#6591ee"},
        {"index":0.5, "value":25.59, "fill":"#d3d7e7"},
        {"index":0.6, "value":13.62,  "fill":"white"},
        {"index":0.7, "value":1.47,  "fill":"#3d63da"},
        {"index":0.8, "value":2.91,  "fill":"#969da5"},
        {"index":0.9, "value":2.21,  "fill":"#c4e5ff"},
        {"index":1.0, "value":26,  "fill":"#ff9c1c"}
    ],
    "Pharah":[
        {"index":0.3, "value":31, "fill":"#ffdb82"},
        {"index":0.4, "value":9, "fill":"#6591ee"},
        {"index":0.5, "value":21.71, "fill":"#d3d7e7"},
        {"index":0.6, "value":15.71,  "fill":"white"},
        {"index":0.7, "value":0.77,  "fill":"#3d63da"},
        {"index":0.8, "value":1.26,  "fill":"#969da5"},
        {"index":0.9, "value":1.55,  "fill":"#c4e5ff"},
        {"index":1.0, "value":37,  "fill":"#ff9c1c"}
    ],
    "Mei":[
        {"index":0.3, "value":31, "fill":"#ffdb82"},
        {"index":0.4, "value":9, "fill":"#6591ee"},
        {"index":0.5, "value":22.52, "fill":"#d3d7e7"},
        {"index":0.6, "value":14.9,  "fill":"white"},
        {"index":0.7, "value":1.61,  "fill":"#3d63da"},
        {"index":0.8, "value":2.03,  "fill":"#969da5"},
        {"index":0.9, "value":1.87,  "fill":"#c4e5ff"},
        {"index":1.0, "value":33,  "fill":"#ff9c1c"}
    ],
    "Zenyatta":[
        {"index":0.3, "value":25, "fill":"#ffdb82"},
        {"index":0.4, "value":5, "fill":"#6591ee"},
        {"index":0.5, "value":10.72, "fill":"#d3d7e7"},
        {"index":0.6, "value":9.12,  "fill":"white"},
        {"index":0.7, "value":1.6,  "fill":"#3d63da"},
        {"index":0.8, "value":1,  "fill":"#969da5"},
        {"index":0.9, "value":1.08,  "fill":"#c4e5ff"},
        {"index":1.0, "value":22,  "fill":"#ff9c1c"}
    ],
    "Genji":[
        {"index":0.3, "value":13, "fill":"#ffdb82"},
        {"index":0.4, "value":3, "fill":"#6591ee"},
        {"index":0.5, "value":15.85, "fill":"#d3d7e7"},
        {"index":0.6, "value":13.69,  "fill":"white"},
        {"index":0.7, "value":0.77,  "fill":"#3d63da"},
        {"index":0.8, "value":1.31,  "fill":"#969da5"},
        {"index":0.9, "value":1.92,  "fill":"#c4e5ff"},
        {"index":1.0, "value":21,  "fill":"#ff9c1c"}
    ],
    "Symmetra":[
        {"index":0.3, "value":10, "fill":"#ffdb82"},
        {"index":0.4, "value":1, "fill":"#6591ee"},
        {"index":0.5, "value":17.8, "fill":"#d3d7e7"},
        {"index":0.6, "value":9.8,  "fill":"white"},
        {"index":0.7, "value":0.8,  "fill":"#3d63da"},
        {"index":0.8, "value":1.2,  "fill":"#969da5"},
        {"index":0.9, "value":1,  "fill":"#c4e5ff"},
        {"index":1.0, "value":0,  "fill":"#ff9c1c"}
    ],
    "McCree":[
        {"index":0.3, "value":6, "fill":"#ffdb82"},
        {"index":0.4, "value":1, "fill":"#6591ee"},
        {"index":0.5, "value":23.83, "fill":"#d3d7e7"},
        {"index":0.6, "value":20.5,  "fill":"white"},
        {"index":0.7, "value":0.83,  "fill":"#3d63da"},
        {"index":0.8, "value":2,  "fill":"#969da5"},
        {"index":0.9, "value":2.5,  "fill":"#c4e5ff"},
        {"index":1.0, "value":34,  "fill":"#ff9c1c"}
    ],
    "Tracer":[
        {"index":0.3, "value":5, "fill":"#ffdb82"},
        {"index":0.4, "value":1, "fill":"#6591ee"},
        {"index":0.5, "value":33, "fill":"#d3d7e7"},
        {"index":0.6, "value":30.4,  "fill":"white"},
        {"index":0.7, "value":1.4,  "fill":"#3d63da"},
        {"index":0.8, "value":3.2,  "fill":"#969da5"},
        {"index":0.9, "value":3,  "fill":"#c4e5ff"},
        {"index":1.0, "value":23,  "fill":"#ff9c1c"}
    ],
    "Sombra":[
        {"index":0.3, "value":10, "fill":"#ffdb82"},
        {"index":0.4, "value":1, "fill":"#6591ee"},
        {"index":0.5, "value":10.8, "fill":"#d3d7e7"},
        {"index":0.6, "value":5.2,  "fill":"white"},
        {"index":0.7, "value":0.3,  "fill":"#3d63da"},
        {"index":0.8, "value":0.2,  "fill":"#969da5"},
        {"index":0.9, "value":1.2,  "fill":"#c4e5ff"},
        {"index":1.0, "value":21,  "fill":"#ff9c1c"}
    ],
    "Torb":[
        {"index":0.3, "value":6, "fill":"#ffdb82"},
        {"index":0.4, "value":1, "fill":"#6591ee"},
        {"index":0.5, "value":22.83, "fill":"#d3d7e7"},
        {"index":0.6, "value":11.67,  "fill":"white"},
        {"index":0.7, "value":1.33,  "fill":"#3d63da"},
        {"index":0.8, "value":1.67,  "fill":"#969da5"},
        {"index":0.9, "value":1.33,  "fill":"#c4e5ff"},
        {"index":1.0, "value":19,  "fill":"#ff9c1c"}
    ],
    "Ana":[
        {"index":0.3, "value":6, "fill":"#ffdb82"},
        {"index":0.4, "value":1, "fill":"#6591ee"},
        {"index":0.5, "value":7.33, "fill":"#d3d7e7"},
        {"index":0.6, "value":13.5,  "fill":"white"},
        {"index":0.7, "value":1.83,  "fill":"#3d63da"},
        {"index":0.8, "value":0.5,  "fill":"#969da5"},
        {"index":0.9, "value":0.83,  "fill":"#c4e5ff"},
        {"index":1.0, "value":10,  "fill":"#ff9c1c"}
    ],
    "Winston":[
        {"index":0.3, "value":5, "fill":"#ffdb82"},
        {"index":0.4, "value":1, "fill":"#6591ee"},
        {"index":0.5, "value":27.4, "fill":"#d3d7e7"},
        {"index":0.6, "value":22,  "fill":"white"},
        {"index":0.7, "value":1.4,  "fill":"#3d63da"},
        {"index":0.8, "value":2.2,  "fill":"#969da5"},
        {"index":0.9, "value":1,  "fill":"#c4e5ff"},
        {"index":1.0, "value":0,  "fill":"#ff9c1c"}
    ],
    "Rein":[
        {"index":0.3, "value":4, "fill":"#ffdb82"},
        {"index":0.4, "value":11, "fill":"#6591ee"},
        {"index":0.5, "value":8, "fill":"#d3d7e7"},
        {"index":0.6, "value":18.5,  "fill":"white"},
        {"index":0.7, "value":2,  "fill":"#3d63da"},
        {"index":0.8, "value":1.75,  "fill":"#969da5"},
        {"index":0.9, "value":1,  "fill":"#c4e5ff"},
        {"index":1.0, "value":0,  "fill":"#ff9c1c"}
    ],
    "Bastion":[
        {"index":0.3, "value":4, "fill":"#ffdb82"},
        {"index":0.4, "value":11, "fill":"#6591ee"},
        {"index":0.5, "value":12.25, "fill":"#d3d7e7"},
        {"index":0.6, "value":9,  "fill":"white"},
        {"index":0.7, "value":1.25,  "fill":"#3d63da"},
        {"index":0.8, "value":1.5,  "fill":"#969da5"},
        {"index":0.9, "value":1.24,  "fill":"#c4e5ff"},
        {"index":1.0, "value":14,  "fill":"#ff9c1c"}
    ],
    "Zarya":[
        {"index":0.3, "value":1, "fill":"#ffdb82"},
        {"index":0.4, "value":11, "fill":"#6591ee"},
        {"index":0.5, "value":38, "fill":"#d3d7e7"},
        {"index":0.6, "value":42,  "fill":"white"},
        {"index":0.7, "value":2.16,  "fill":"#3d63da"},
        {"index":0.8, "value":3,  "fill":"#969da5"},
        {"index":0.9, "value":4,  "fill":"#c4e5ff"},
        {"index":1.0, "value":34,  "fill":"#ff9c1c"}
    ],
    "Orisa":[
        {"index":0.3, "value":1, "fill":"#ffdb82"},
        {"index":0.4, "value":11, "fill":"#6591ee"},
        {"index":0.5, "value":50, "fill":"#d3d7e7"},
        {"index":0.6, "value":32,  "fill":"white"},
        {"index":0.7, "value":6,  "fill":"#3d63da"},
        {"index":0.8, "value":4,  "fill":"#969da5"},
        {"index":0.9, "value":3,  "fill":"#c4e5ff"},
        {"index":1.0, "value":25,  "fill":"#ff9c1c"}
    ]
  };
  
  d3.select("input[value=\"total\"]").property("checked", true);

    dataWins = [
        {label:"Orisa", value:1},
        {label:"Zarya", value:1},
        {label:"Bastion", value:4},
        {label:"Reinhardt", value:4},
        {label:"Tracer", value:5},
        {label:"Winston", value:5},
        {label:"Ana", value:6},
        {label:"Torbjorn", value:6},
        {label:"McCree", value:6},
        {label:"Symmetra", value:10},
        {label:"Sombra", value:10},
        {label:"Genji", value:13},
        {label:"Zenyatta", value:25},
        {label:"Mei", value:31},
        {label:"Pharah", value:31},
        {label:"Roadhog", value:34},
        {label:"Soldier:76", value:43},
        {label:"Reaper", value:45},
        {label:"Lucio", value:49},
        {label:"Junkrat", value:51},
        {label:"D.Va", value:81},
        {label:"Hanzo", value:86},
        {label:"Mercy", value:104}
    ];

    dataTime = [
        {label:"Orisa", value:1},
        {label:"Zarya", value:1},
        {label:"Bastion", value:1},
        {label:"Reinhardt", value:1},
        {label:"Winston", value:1},
        {label:"Ana", value:1},
        {label:"Torbjorn", value:1},
        {label:"Tracer", value:1},
        {label:"McCree", value:1},
        {label:"Symmetra", value:1},
        {label:"Sombra", value:1},
        {label:"Genji", value:3},
        {label:"Zenyatta", value:5},
        {label:"Mei", value:9},
        {label:"Pharah", value:9},
        {label:"Roadhog", value:9},
        {label:"Soldier:76", value:11},
        {label:"Reaper", value:11},
        {label:"Lucio", value:11},
        {label:"Junkrat", value:14},
        {label:"D.Va", value:20},
        {label:"Hanzo", value:21},
        {label:"Mercy", value:41}
    ];

    dataElim = [
        {label:"Mercy", value:1.06},
        {label:"Ana", value:7.33},
        {label:"Reinhardt", value:8},
        {label:"Zenyatta", value:10.72},
        {label:"Sombra", value:10.8},
        {label:"Bastion", value:12.25},
        {label:"Lucio", value:15.08},
        {label:"Genji", value:15.85},
        {label:"Symmetra", value:17.8},
        {label:"Hanzo", value:20.08},
        {label:"Pharah", value:21.71},
        {label:"Mei", value:22.52},
        {label:"Torbjorn", value:22.83},
        {label:"Reaper", value:23.49},
        {label:"Junkrat", value:23.82},
        {label:"McCree", value:23.83},
        {label:"Roadhog", value:25.59},
        {label:"Soldier:76", value:25.63},
        {label:"D.Va", value:26.58},
        {label:"Winston", value:27.4},
        {label:"Tracer", value:33},
        {label:"Zarya", value:38},
        {label:"Orisa", value:50}
    ];

    dataDeath = [
        {label:"Sombra", value:5.2},
        {label:"D.Va", value:8.94},
        {label:"Bastion", value:9},
        {label:"Zenyatta", value:9.12},
        {label:"Symmetra", value:9.8},
        {label:"Mercy", value:10.88},
        {label:"Lucio", value:11.22},
        {label:"Torbjorn", value:11.67},
        {label:"Hanzo", value:12.33},
        {label:"Reaper", value:12.98},
        {label:"Ana", value:13.5},
        {label:"Roadhog", value:13.62},
        {label:"Genji", value:13.69},
        {label:"Soldier:76", value:14.7},
        {label:"Mei", value:14.9},
        {label:"Junkrat", value:15.31},
        {label:"Pharah", value:15.71},
        {label:"Reinhardt", value:18.5},
        {label:"McCree", value:20.5},
        {label:"Winston", value:22},
        {label:"Tracer", value:30.4},
        {label:"Orisa", value:32},
        {label:"Zarya", value:42}
    ];

        dataGold = [
        {label:"Sombra", value:0.3},
        {label:"Genji", value:0.77},
        {label:"Pharah", value:0.77},
        {label:"Symmetra", value:0.8},
        {label:"McCree", value:0.83},
        {label:"Reaper", value:0.93},
        {label:"Hanzo", value:0.97},
        {label:"Bastion", value:1.25},
        {label:"Junkrat", value:1.29},
        {label:"Torbjorn", value:1.33},
        {label:"Soldier:76", value:1.4},
        {label:"Tracer", value:1.4},
        {label:"Winston", value:1.4},
        {label:"Roadhog", value:1.47},
        {label:"Zenyatta", value:1.6},
        {label:"Mei", value:1.61},
        {label:"Ana", value:1.83},
        {label:"Reinhardt", value:2.0},
        {label:"Mercy", value:2.01},
        {label:"D.Va", value:2.07},
        {label:"Lucio", value:2.16},
        {label:"Zarya", value:3},
        {label:"Orisa", value:6}
    ];

    dataSilver = [
        {label:"Sombra", value:0.2},
        {label:"Mercy", value:0.29},
        {label:"Ana", value:0.5},
        {label:"Lucio", value:0.8},
        {label:"Zenyatta", value:1.0},
        {label:"Symmetra", value:1.2},
        {label:"Hanzo", value:1.21},
        {label:"Pharah", value:1.26},
        {label:"Genji", value:1.31},
        {label:"Bastion", value:1.5},
        {label:"Junkrat", value:1.67},
        {label:"Torbjorn", value:1.67},
        {label:"D.Va", value:1.73},
        {label:"Reinhardt", value:1.75},
        {label:"Reaper", value:1.84},
        {label:"McCree", value:2},
        {label:"Mei", value:2.03},
        {label:"Winston", value:2.2},
        {label:"Roadhog", value:2.91},
        {label:"Soldier:76", value:2.98},
        {label:"Zarya", value:3},
        {label:"Tracer", value:3.2},
        {label:"Orisa", value:4}

    ];

    dataBronze = [
        {label:"Mercy", value:0.47},
        {label:"Lucio", value:0.76},
        {label:"Ana", value:0.83},
        {label:"Reinhardt", value:1.0},
        {label:"Symmetra", value:1.0},
        {label:"Winston", value:1.0},
        {label:"Zenyatta", value:1.08},
        {label:"Sombra", value:1.2},
        {label:"Bastion", value:1.25},
        {label:"Torbjorn", value:1.33},
        {label:"D.Va", value:1.53},
        {label:"Pharah", value:1.55},
        {label:"Hanzo", value:1.8},
        {label:"Junkrat", value:1.8},
        {label:"Mei", value:1.87},
        {label:"Genji", value:1.92},
        {label:"Roadhog", value:2.21},
        {label:"Soldier:76", value:2.37},
        {label:"McCree", value:2.5},
        {label:"Reaper", value:2.71},
        {label:"Orisa", value:3},
        {label:"Tracer", value:3},
        {label:"Zarya", value:4}
    ];

    dataAccuracy = [
        {label:"Reinhardt", value:0},
        {label:"Symmetra", value:0},
        {label:"Winston", value:0},
        {label:"Ana", value:10},
        {label:"Bastion", value:14},
        {label:"Hanzo", value:17},
        {label:"Junkrat", value:18},
        {label:"Lucio", value:19},
        {label:"Torbjorn", value:19},
        {label:"D.Va", value:20},
        {label:"Reaper", value:20},
        {label:"Genji", value:21},
        {label:"Sombra", value:21},
        {label:"Zenyatta", value:22},
        {label:"Tracer", value:23},
        {label:"Soldier:76", value:24},
        {label:"Mercy", value:25},
        {label:"Orisa", value:25},
        {label:"Roadhog", value:26},
        {label:"Mei", value:33},
        {label:"McCree", value:34},
        {label:"Zarya", value:34},
        {label:"Pharah", value:37}
    ];

// SORTING AND BAR CHARTS

    d3.selectAll("input").on("change", selectDataset);

        var hidden;
        var hide;
    function selectDataset()
    {
        // if statements to determine which chart to show
        var value = this.value;
        var first;
        if (value == "none")
        {
          first = true;
          $(".legend").css('visibility','visible');
          $(".circleBarCharts").css('visibility','visible');
          $(".blurb3").css('visibility','hidden');
          $(".blurb4").css('visibility','hidden');
          var bar = svg.selectAll(".bar")
          .data(dataset, function(d) { return d.label; });
          bar.exit().remove();        
          svg.select(".y.axis").remove();
          svg.select(".x.axis").remove();
            hidden = false;
            hide = false;
        }
        else if (value == "wins")
        {
          $(".legend").css('visibility','hidden');
          $(".circleBarCharts").css('visibility','hidden');
          $(".blurb3").css('visibility','visible');
          $(".blurb4").css('visibility','hidden');
        hidden = false;
          if(first == true){
            drawBar(dataWins);
          }
          else{
            svg.select(".y.axis").remove();
            svg.select(".x.axis").remove();
            change(dataWins);
            first = false;
          }
        }
        else if (value == "time")
        {
          $(".legend").css('visibility','hidden');
          $(".circleBarCharts").css('visibility','hidden');
          $(".blurb3").css('visibility','visible');
          $(".blurb4").css('visibility','hidden');
        hidden = false;
          if(first == true){
            drawBar(dataTime);
          }
          else{
            svg.select(".y.axis").remove();
            svg.select(".x.axis").remove();
            change(dataTime);
            first = false;
          }
        }
        else if (value == "elims")
        {
          $(".legend").css('visibility','hidden');
          $(".circleBarCharts").css('visibility','hidden');
          $(".blurb3").css('visibility','visible');
          $(".blurb4").css('visibility','hidden');
         hidden = false;
          if(first == true){
            drawBar(dataElim);
          }
          else{
            svg.select(".y.axis").remove();
            svg.select(".x.axis").remove();
            change(dataElim);
            first = false;
          }
        }
        else if (value == "deaths")
        {
          $(".legend").css('visibility','hidden');
          $(".circleBarCharts").css('visibility','hidden');
          $(".blurb3").css('visibility','visible');
          $(".blurb4").css('visibility','hidden');
                 hidden = false;
          if(first == true){
            drawBar(dataDeath);
          }
          else{
            svg.select(".y.axis").remove();
            svg.select(".x.axis").remove();
            change(dataDeath);
            first = false;
          }
        }
        else if (value == "gold")
        {
          $(".legend").css('visibility','hidden');
          $(".circleBarCharts").css('visibility','hidden');
          $(".blurb3").css('visibility','visible');
          $(".blurb4").css('visibility','hidden');
             hidden = false;
          if(first == true){
            drawBar(dataGold);
          }
          else{
            svg.select(".y.axis").remove();
            svg.select(".x.axis").remove();
            change(dataGold);
            first = false;
          }
        }
        else if (value == "silver")
        {
          $(".legend").css('visibility','hidden');
          $(".circleBarCharts").css('visibility','hidden');
          $(".blurb3").css('visibility','visible');
          $(".blurb4").css('visibility','hidden');
         hidden = false;
          if(first == true){
            drawBar(dataSilver);
          }
          else{
            svg.select(".y.axis").remove();
            svg.select(".x.axis").remove();
            change(dataSilver);
            first = false;
          }
        }
        else if (value == "bronze")
        {
          $(".legend").css('visibility','hidden');
          $(".circleBarCharts").css('visibility','hidden');
          $(".blurb3").css('visibility','visible');
          $(".blurb4").css('visibility','hidden');
             hidden = false;
          if(first == true){
            drawBar(dataBronze);
          }
          else{
            svg.select(".y.axis").remove();
            svg.select(".x.axis").remove();
            change(dataBronze);
            first = false;
          }            
        }
        else if (value == "weapon")
        {
          $(".legend").css('visibility','hidden');
          $(".circleBarCharts").css('visibility','hidden');
          $(".blurb3").css('visibility','visible');
          $(".blurb4").css('visibility','hidden');
        hidden = false;
          if(first == true){
            drawBar(dataAccuracy);
          }
          else{
            svg.select(".y.axis").remove();
            svg.select(".x.axis").remove();
            change(dataAccuracy);
            first = false;
          }
        }
    }

    // set variables for bar chart

    var margin = {top: (parseInt(d3.select('body').style('height'), 10)/10), right: (parseInt(d3.select('body').style('width'), 10)/20), bottom: (parseInt(d3.select('body').style('height'), 10)/10), left: (parseInt(d3.select('body').style('width'), 10)/20)},
            width = parseInt(d3.select('body').style('width'), 10) - margin.left - margin.right,
            height = parseInt(d3.select('body').style('height'), 10) - margin.top - margin.bottom;

    var div = d3.select("body").append("div").attr("class", "toolTip");

    var x = d3.scale.ordinal()
            .rangeRoundBands([0, width], .2, 0.5);

    var y = d3.scale.linear()
            .range([height - (margin.top/10), 0]);

    var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

    var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")

    // draw the bar chart

    function drawBar(data){

    var div = d3.select("body").append("div").attr("class", "toolTip");


    var svg = d3.select("body").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);
    change(data);
    }

    // function for if there is a chart already and just need to change the bars

    function change(dataset) {

        // update axes

        x.domain(dataset.map(function(d) { return d.label; }));
        y.domain([0, d3.max(dataset, function(d) { return d.value; })]);

        svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + (height - (margin.top/9) - 8) + ")")
                .call(xAxis);

        svg.append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(" + (margin.left - 37) + ")")
                .call(yAxis)
                .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("x", -10)
                .attr("dy", ".71em")
                .style("text-anchor", "end")
                .text("Number of");

        var bar = svg.selectAll(".bar")
                .data(dataset, function(d) { return d.label; });

        // new data:
        // show and hide 

        bar.enter().append("rect")
                .attr("class", "bar")
                .attr("x", function(d) { return x(d.label); })
                .attr("y", function(d) { return y(d.value); })
                .attr("height", function(d) { return ((height - (margin.top/8)) - y(d.value)); })
                .attr("width", x.rangeBand())
                .on("mouseover", function(d) {
                  d3.select(this).style("fill", "#ff9c1c");
                })
                .on("click", function(d) {
                  if(hidden == false){
                    d3.select(this).style("opacity", "0");
                    hidden = true;
                    hide = true;
                    }
                    else if (hidden == true){
                    d3.select(this).style("opacity", "0.9");
                    hidden = false;
                    hide = false;
                    }
                });

        // hover bubble

       bar
                .on("mousemove", function(d){
                    if(hide == false){
                    div.style("left", d3.event.pageX+10+"px");
                    div.style("top", d3.event.pageY-25+"px");
                    div.style("display", "inline-block");
                    div.style("background-color", "#c4e5ff");
                    div.style("font-size", "10px");
                    div.html((d.label)+"<br>"+(d.value));

                    }
                    else if(hide == true){
                    div.style("display", "none");
                    }
                });
                
        bar
                .on("mouseout", function(d){
                    div.style("display", "none");
                    d3.select(this).style("fill", "white");
;
                });

        // removed data:

        bar.exit().remove();

        // updated data:
        bar
                .transition()
                .duration(750)
                .attr("x", function(d) { return x(d.label); })
                .attr("y", function(d) { return y(d.value); })
                .attr("height", function(d) { return ((height - (margin.top/8)) - y(d.value)); });
    };

// D3 Bubble Chart 

 var diameter = 600;
 var legendRectSize = 18;
 var legendSpacing = 5;

// Legend

 var color = d3.scale.ordinal()
    .domain(["Number of Wins", "Time Played (Hours)", "Avg Number of Eliminations per Game", "Number of Deaths", "Avg Number of Gold Medals per Game", "Avg Number of Silver Medals per Game", "Avg Number of Bronze Medals per Game", "Weapon Accuracy (%)"])
    .range(["#ffdb82", "#6591ee", "#d3d7e7","white", "#3d63da","#969da5","#c4e5ff","#ff9c1c"]);

 var svg = d3.select('#graph').append('svg')
              .attr('width', '100%')
              .attr('height', diameter)

 var bubble = d3.layout.pack()
                 .size([diameter, diameter])
                 .value(function(d) {return d.size;})
                 .padding(3);

// set up tooltip for hover

 var tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")

  var legend = d3.select('svg')
    .append("g")
    .selectAll("g")
    .data(color.domain())
    .enter()
    .append('g')
      .attr('class', 'legend')
      .attr('transform', function(d, i) {
        var height = legendRectSize;
        var x = 850;
        var y = i * height + 80;
        return 'translate(' + x + ',' + y + ')';
    });

legend.append('rect')
    .attr('width', legendRectSize)
    .attr('height', legendRectSize)
    .style('fill', color)
    .style('stroke', color)

legend.append('text')
    .attr('x', legendRectSize + legendSpacing)
    .attr('y', legendRectSize - legendSpacing)
    .text(function(d) { return d; });

  // buttons for each character
  // button = character button
  // button2 = button that shows all characters and hides bubble charts

  $('.button').on('click', function () {
    var self = $(this);
    drawBubbles(data[self.attr('id')]);
    $(".legend").css('visibility','visible');
    $(".circleBarCharts").css('visibility','hidden');
    $(".sort").css('visibility','hidden');

            $(".blurb3").css('visibility','hidden');
        $(".blurb4").css('visibility','visible');
        $(".blurb").css('visibility','hidden');
                  var bar = svg.selectAll(".bar")
                .data(dataset, function(d) { return d.label; });
                        bar.exit().remove();        
          svg.select(".y.axis").remove();
          svg.select(".x.axis").remove();

  });

    $('.button2').on('click', function () {
        $(".sort").css('visibility','visible');
        $("#dataset2").prop('checked', false); 
            $("#dataset3").prop('checked', false); 
        $("#dataset4").prop('checked', false); 
        $("#dataset5").prop('checked', false); 
        $("#dataset6").prop('checked', false); 
        $("#dataset7").prop('checked', false); 
        $("#dataset8").prop('checked', false); 
        $("#dataset9").prop('checked', false); 
        $("#dataset").prop('checked', true); 

        $(".blurb").css('visibility','visible');
                $(".blurb3").css('visibility','hidden');
            $(".blurb4").css('visibility','hidden');

        var delay = 0;
        var duration = 0; 
        var nodes = bubble.nodes(processData(data))
            .filter(function(d) { return !d.children; }); // filter out the outer bubble

        var vis = svg.selectAll('circle')
                 .data(nodes, function(d) { return d.name; });
        var self = $(this);
        //d3.select("#graph").select("svg").remove();
        $(".circleBarCharts").css('visibility', 'visible');
        $(".legend").css('visibility','visible');
        $(".graph").css('visibility','hidden');
        vis.exit() 
           .transition() 
           .duration(duration + delay) 
           .style('opacity', 0) 
           .remove();

        var bar = svg.selectAll(".bar")
            .data(dataset, function(d) { return d.label; });
            bar.exit().remove();        
            svg.select(".y.axis").remove();
            svg.select(".x.axis").remove();
  });
  
  // draw bubble chart
  
  function drawBubbles(data) {
    
    var duration = 200; 
    var delay = 0;
    
    var nodes = bubble.nodes(processData(data))
                      .filter(function(d) { return !d.children; }); // filter out the outer bubble

    var vis = svg.selectAll('circle')
                 .data(nodes, function(d) { return d.name; });

    
    // update - This only applies to updating nodes 
    // animation

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
       .style('opacity', 1.0) 

    // hover for details on bubbles

    vis.on("mouseover", function(d){return tooltip.style("visibility", "visible").text(Math.round(d.value * 100) / 1000);})
    vis.on("mousemove", function(d){d3.select(this).select("text").style("fill", "#000");return tooltip.style("top",
        (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px").text(Math.round(d.value * 100) / 1000);})
    vis.on("mouseout", function(d){return tooltip.style("visibility", "hidden").text(Math.round(d.value * 100) / 1000);});
    
    // exit 

    vis.exit() 
       .transition() 
       .duration(duration + delay) 
       .style('opacity', 0) 
       .remove(); 
  }

  // for updating data

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

  // D3 BAR CIRCLE CHART

function drawBarCircleChart(data,target,values,labels){

    // INITIALIZE SIZE

    var w = 200,
        h = 200,
        size = data[0].value * 1.15,
        radius = 135,
        sectorWidth = .1,
        radScale = 45,
        sectorScale = 1.45,
        target = d3.select(target),
        valueText = d3.select(values),
        labelText = d3.select(labels);

    // CALCULATE ANGLES/RADIUS

    var arc = d3.svg.arc()
        .innerRadius(function(d,i){return (d.index/sectorScale) * radius + radScale; })
        .outerRadius(function(d,i){return ((d.index/sectorScale) + (sectorWidth/sectorScale)) * radius + radScale; })
        .startAngle(Math.PI)
        .endAngle(function(d) { return Math.PI + (d.value / size) * 2 * Math.PI; });
    
    var path = target.selectAll("path")
        .data(data);

    // Seperates color and index from data object
    // white outline

    path.enter().append("svg:path")
        .attr("fill",function(d,i){return d.fill})
        .attr("stroke","white")
        .transition()
        .ease("elastic")
        .duration(1000)
        .delay(function(d,i){return i*100})
        .attrTween("d", arcTween);

    // positions value text
        
    valueText.selectAll("tspan").data(data).enter()
        .append("tspan")
        .attr({
            x:50,
            y:function(d,i){return i*10},       
            "text-anchor":"end"
        })

        .text(function(d,i){return data[i].value});

    // positions label text
    
    labelText.selectAll("tspan").data(data).enter()
        .append("tspan")
        .attr({
            x:0,
            y:function(d,i){return i*14}
        })
        .text(function(d,i){return data[i].label});

    function arcTween(b) {
        var i = d3.interpolate({value: 0}, b);
        return function(t) {
            return arc(i(t));
        };
    }
}

// Animation Queue at start-up

setTimeout(function(){drawBarCircleChart(chartData.Hanzo,"#circleBar-web-chart","#circleBar-web-values","#circleBar-web-labels")},500);
setTimeout(function(){drawBarCircleChart(chartData.Mercy,"#circleBar-mobile-chart","#circleBar-mobile-values","#circleBar-mobile-labels")},800);
setTimeout(function(){drawBarCircleChart(chartData.Dva,"#circleBar-dva-chart","#circleBar-dva-values","#circleBar-dva-labels")},1100);
setTimeout(function(){drawBarCircleChart(chartData.Junkrat,"#circleBar-junk-chart","#circleBar-junk-values","#circleBar-junk-labels")},800);
setTimeout(function(){drawBarCircleChart(chartData.Lucio,"#circleBar-lucio-chart","#circleBar-lucio-values","#circleBar-lucio-labels")},800);
setTimeout(function(){drawBarCircleChart(chartData.Reaper,"#circleBar-reaper-chart","#circleBar-reaper-values","#circleBar-reaper-labels")},800);
setTimeout(function(){drawBarCircleChart(chartData.Soldier,"#circleBar-soldier-chart","#circleBar-soldier-values","#circleBar-soldier-labels")},1100);

setTimeout(function(){drawBarCircleChart(chartData.Roadhog,"#circleBar-roadhog-chart","#circleBar-roadhog-values","#circleBar-roadhog-labels")},1100);
setTimeout(function(){drawBarCircleChart(chartData.Pharah,"#circleBar-pharah-chart","#circleBar-pharah-values","#circleBar-pharah-labels")},1100);
setTimeout(function(){drawBarCircleChart(chartData.Mei,"#circleBar-mei-chart","#circleBar-mei-values","#circleBar-mei-labels")},1100);
setTimeout(function(){drawBarCircleChart(chartData.Zenyatta,"#circleBar-zen-chart","#circleBar-zen-values","#circleBar-zen-labels")},800);
setTimeout(function(){drawBarCircleChart(chartData.Genji,"#circleBar-genji-chart","#circleBar-genji-values","#circleBar-genji-labels")},1100);
setTimeout(function(){drawBarCircleChart(chartData.Symmetra,"#circleBar-symmetra-chart","#circleBar-symmetra-values","#circleBar-symmetra-labels")},800);

setTimeout(function(){drawBarCircleChart(chartData.McCree,"#circleBar-mccree-chart","#circleBar-mccree-values","#circleBar-mccree-labels")},800);
setTimeout(function(){drawBarCircleChart(chartData.Tracer,"#circleBar-tracer-chart","#circleBar-tracer-values","#circleBar-tracer-labels")},800);
setTimeout(function(){drawBarCircleChart(chartData.Sombra,"#circleBar-sombra-chart","#circleBar-sombra-values","#circleBar-sombra-labels")},800);
setTimeout(function(){drawBarCircleChart(chartData.Torb,"#circleBar-torb-chart","#circleBar-torb-values","#circleBar-torb-labels")},800);
setTimeout(function(){drawBarCircleChart(chartData.Ana,"#circleBar-ana-chart","#circleBar-ana-values","#circleBar-ana-labels")},800);
setTimeout(function(){drawBarCircleChart(chartData.Winston,"#circleBar-winston-chart","#circleBar-winston-values","#circleBar-winston-labels")},800);

setTimeout(function(){drawBarCircleChart(chartData.Rein,"#circleBar-rein-chart","#circleBar-rein-values","#circleBar-rein-labels")},800);
setTimeout(function(){drawBarCircleChart(chartData.Bastion,"#circleBar-bastion-chart","#circleBar-bastion-values","#circleBar-bastion-labels")},800);
setTimeout(function(){drawBarCircleChart(chartData.Zarya,"#circleBar-zarya-chart","#circleBar-zarya-values","#circleBar-zarya-labels")},800);
setTimeout(function(){drawBarCircleChart(chartData.Orisa,"#circleBar-orisa-chart","#circleBar-orisa-values","#circleBar-orisa-labels")},800);


d3.select("#circleBar-web-icon")
    .transition()
    .delay(500)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-web-text")
    .transition()
    .delay(750)
    .duration(500)
    .attr("opacity","1");

d3.select("#circleBar-web-clipLabels")
    .transition()
    .delay(600)
    .duration(1250)
    .attr("height","150");

d3.select("#circleBar-mobile-icon")
    .transition()
    .delay(800)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-mobile-text")
    .transition()
    .delay(1050)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-mobile-clipLabels")
    .transition()
    .delay(900)
    .duration(1250)
    .attr("height","150");

    d3.select("#circleBar-dva-icon")
    .transition()
    .delay(800)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-dva-text")
    .transition()
    .delay(1050)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-dva-clipLabels")
    .transition()
    .delay(900)
    .duration(1250)
    .attr("height","150");

d3.select("#circleBar-junk-icon")
    .transition()
    .delay(800)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-junk-text")
    .transition()
    .delay(1050)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-junk-clipLabels")
    .transition()
    .delay(900)
    .duration(1250)
    .attr("height","150");

d3.select("#circleBar-lucio-icon")
    .transition()
    .delay(800)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-lucio-text")
    .transition()
    .delay(1050)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-lucio-clipLabels")
    .transition()
    .delay(900)
    .duration(1250)
    .attr("height","150");

    d3.select("#circleBar-reaper-icon")
    .transition()
    .delay(800)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-reaper-text")
    .transition()
    .delay(1050)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-reaper-clipLabels")
    .transition()
    .delay(900)
    .duration(1250)
    .attr("height","150");

    d3.select("#circleBar-soldier-icon")
    .transition()
    .delay(800)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-soldier-text")
    .transition()
    .delay(1050)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-soldier-clipLabels")
    .transition()
    .delay(900)
    .duration(1250)
    .attr("height","150");

  d3.select("#circleBar-roadhog-icon")
    .transition()
    .delay(800)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-roadhog-text")
    .transition()
    .delay(1050)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-roadhog-clipLabels")
    .transition()
    .delay(900)
    .duration(1250)
    .attr("height","150");

    d3.select("#circleBar-pharah-icon")
    .transition()
    .delay(800)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-pharah-text")
    .transition()
    .delay(1050)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-pharah-clipLabels")
    .transition()
    .delay(900)
    .duration(1250)
    .attr("height","150");d3.select("#circleBar-mei-icon")
    .transition()
    .delay(800)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-mei-text")
    .transition()
    .delay(1050)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-mei-clipLabels")
    .transition()
    .delay(900)
    .duration(1250)
    .attr("height","150");

d3.select("#circleBar-zen-icon")
    .transition()
    .delay(800)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-zen-text")
    .transition()
    .delay(1050)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-zen-clipLabels")
    .transition()
    .delay(900)
    .duration(1250)
    .attr("height","150");
    d3.select("#circleBar-genji-icon")
    .transition()
    .delay(800)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-genji-text")
    .transition()
    .delay(1050)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-genji-clipLabels")
    .transition()
    .delay(900)
    .duration(1250)
    .attr("height","150");

    d3.select("#circleBar-symmetra-icon")
    .transition()
    .delay(800)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-symmetra-text")
    .transition()
    .delay(1050)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-symmetra-clipLabels")
    .transition()
    .delay(900)
    .duration(1250)
    .attr("height","150");
  

  d3.select("#circleBar-mccree-icon")
    .transition()
    .delay(800)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-mccree-text")
    .transition()
    .delay(1050)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-mccree-clipLabels")
    .transition()
    .delay(900)
    .duration(1250)
    .attr("height","150");

d3.select("#circleBar-tracer-icon")
    .transition()
    .delay(800)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-tracer-text")
    .transition()
    .delay(1050)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-tracer-clipLabels")
    .transition()
    .delay(900)
    .duration(1250)
    .attr("height","150");
d3.select("#circleBar-sombra-icon")
    .transition()
    .delay(800)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-sombra-text")
    .transition()
    .delay(1050)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-sombra-clipLabels")
    .transition()
    .delay(900)
    .duration(1250)
    .attr("height","150");

    d3.select("#circleBar-torb-icon")
    .transition()
    .delay(800)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-torb-text")
    .transition()
    .delay(1050)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-torb-clipLabels")
    .transition()
    .delay(900)
    .duration(1250)
    .attr("height","150");

    d3.select("#circleBar-ana-icon")
    .transition()
    .delay(800)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-ana-text")
    .transition()
    .delay(1050)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-ana-clipLabels")
    .transition()
    .delay(900)
    .duration(1250)
    .attr("height","150");

    d3.select("#circleBar-winston-icon")
    .transition()
    .delay(800)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-winston-text")
    .transition()
    .delay(1050)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-winston-clipLabels")
    .transition()
    .delay(900)
    .duration(1250)
    .attr("height","150");

    d3.select("#circleBar-rein-icon")
    .transition()
    .delay(800)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-rein-text")
    .transition()
    .delay(1050)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-rein-clipLabels")
    .transition()
    .delay(900)
    .duration(1250)
    .attr("height","150");

    d3.select("#circleBar-bastion-icon")
    .transition()
    .delay(800)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-bastion-text")
    .transition()
    .delay(1050)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-bastion-clipLabels")
    .transition()
    .delay(900)
    .duration(1250)
    .attr("height","150");

    d3.select("#circleBar-zarya-icon")
    .transition()
    .delay(800)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-zarya-text")
    .transition()
    .delay(1050)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-zarya-clipLabels")
    .transition()
    .delay(900)
    .duration(1250)
    .attr("height","150");

    d3.select("#circleBar-orisa-icon")
    .transition()
    .delay(800)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-orisa-text")
    .transition()
    .delay(1050)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-orisa-clipLabels")
    .transition()
    .delay(900)
    .duration(1250)
    .attr("height","150");

})();