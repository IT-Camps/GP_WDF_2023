// Standartmäßig tile: SRB ,nicht interaktiv, nicht solid


//IST JETZT IN LEVELS!!!!!!!









/*
let SERVERRAUM = {
  name: 'serverraum',
  data:[
  {x:1, y:1, material: 'SSF', solid: true, interactive: false},
  {x:2, y:1, material: 'SSU', solid: true, interactive: false},
  {x:3, y:1, material: 'SSU', solid: true, interactive: false},
  {x:4, y:1, material: 'SSU', solid: true, interactive: false},
  {x:5, y:1, material: 'SSU', solid: true, interactive: false},
  {x:6, y:1, material: 'SSU', solid: true, interactive: false},
  {x:7, y:1, material: 'SSU', solid: true, interactive: false},
  {x:8, y:1, material: 'SSU', solid: true, interactive: false},
  {x:9, y:1, material: 'SSU', solid: true, interactive: false},
  {x:10, y:1, material: 'SSU', solid: true, interactive: false},
  {x:11, y:1, material: 'SSU', solid: true, interactive: false},
  {x:13, y:1, material: 'SSU', solid: true, interactive: false},
  {x:14, y:1, material: 'SSU', solid: true, interactive: false},
  {x:15, y:1, material: 'SSU', solid: true, interactive: false},

  {x:1, y:2, material: 'SSL', solid: true, interactive: false},
  {x:6, y:2, material: 'SSM', solid: true, interactive: false},
 
  {x:1, y:3, material: 'SSF', solid: true, interactive: false},
  {x:2, y:3, material: 'SSF', solid: true, interactive: false},
  {x:4, y:3, material: 'SSD', solid: true, interactive: false},
  {x:6, y:3, material: 'SSM', solid: true, interactive: false},
  {x:8, y:3, material: 'SSD', solid: true, interactive: false},
  {x:9, y:3, material: 'SSD', solid: true, interactive: false},
  {x:10, y:3, material: 'SSD', solid: true, interactive: false},
  {x:11, y:3, material: 'SSD', solid: true, interactive: false},
  {x:13, y:3, material: 'SSD', solid: true, interactive: false},
  {x:12, y:3, material: 'SSD', solid: true, interactive: false},
  {x:15, y:3, material: 'SSR', solid: true, interactive: false},

  {x:4, y:4, material: 'SSM', solid: true, interactive: false},
  {x:6, y:4, material: 'SSU', solid: true, interactive: false},
  {x:8, y:4, material: 'SSM', solid: true, interactive: false},
  {x:15, y:4, material: 'SSR', solid: true, interactive: false},

  {x:2, y:5, material: 'SSD', solid: true, interactive: false},
  {x:4, y:5, material: 'SSM', solid: true, interactive: false},
  {x:8, y:5, material: 'SSM', solid: true, interactive: false},
  {x:10, y:5, material: 'SSR', solid: true, interactive: false},
  {x:11, y:5, material: 'SSF', solid: true, interactive: false},
  {x:15, y:5, material: 'SSR', solid: true, interactive: false},

  {x:2, y:6, material: 'SSF', solid: true, interactive: false},
  {x:4, y:6, material: 'SSU', solid: true, interactive: false},
  {x:6, y:6, material: 'SSF', solid: true, interactive: false},
  {x:7, y:6, material: 'SSF', solid: true, interactive: false},
  {x:8, y:6, material: 'SSF', solid: true, interactive: false},
  {x:11, y:6, material: 'SSF', solid: true, interactive: false},
  {x:13, y:6, material: 'SSF', solid: true, interactive: false},
  {x:14, y:6, material: 'SSF', solid: true, interactive: false},
  {x:15, y:6, material: 'SSU', solid: true, interactive: false},

  {x:2, y:7, material: 'SSF', solid: true, interactive: false},
  {x:6, y:7, material: 'SSF', solid: true, interactive: false},
  {x:8, y:7, material: 'SSR', solid: true, interactive: false},
  {x:9, y:7, material: 'SSF', solid: true, interactive: false},
  {x:10, y:7, material: 'SSF', solid: true, interactive: false},
  {x:11, y:7, material: 'SSF', solid: true, interactive: false},
  {x:13, y:7, material: 'SSF', solid: true, interactive: false},
  {x:14, y:7, material: 'SSF', solid: true, interactive: false},

  {x:2, y:8, material: 'SSF', solid: true, interactive: false},
  {x:3, y:8, material: 'SSD', solid: true, interactive: false},
  {x:4, y:8, material: 'SSD', solid: true, interactive: false},
  {x:5, y:8, material: 'SSD', solid: true, interactive: false},
  {x:6, y:8, material: 'SSD', solid: true, interactive: false},
  {x:13, y:8, material: 'SSM', solid: true, interactive: false},
 
  {x:2, y:9, material: 'SSM', solid: true, interactive: false},
  {x:7, y:9, material: 'SSF', solid: true, interactive: false},
  {x:8, y:9, material: 'SSF', solid: true, interactive: false},
  {x:9, y:9, material: 'SSF', solid: true, interactive: false},
  {x:10, y:9, material: 'SSF', solid: true, interactive: false},
  {x:12, y:9, material: 'SSF', solid: true, interactive: false},
  {x:13, y:9, material: 'SSF', solid: true, interactive: false},
  {x:15, y:9, material: 'SSR', solid: true, interactive: false},

  {x:2, y:10, material: 'SSM', solid: true, interactive: false},
  {x:4, y:10, material: 'SSF', solid: true, interactive: false},
  {x:5, y:10, material: 'SSF', solid: true, interactive: false},
  {x:6, y:10, material: 'SSF', solid: true, interactive: false},
  {x:7, y:10, material: 'SSF', solid: true, interactive: false},
  {x:8, y:10, material: 'SSF', solid: true, interactive: false},
  {x:9, y:10, material: 'SSL', solid: true, interactive: false},
  {x:12, y:10, material: 'SSF', solid: true, interactive: false},
  {x:13, y:10, material: 'SSF', solid: true, interactive: false},
  {x:15, y:10, material: 'SSR', solid: true, interactive: false},

  {x:12, y:11, material: 'SSF', solid: true, interactive: false},
  {x:2, y:11, material: 'SSM', solid: true, interactive: false},
  {x:4, y:11, material: 'SSF', solid: true, interactive: false},
  {x:5, y:11, material: 'SSF', solid: true, interactive: false},
  {x:6, y:11, material: 'SSF', solid: true, interactive: false},
  {x:8, y:11, material: 'SSM', solid: true, interactive: false},
  {x:9, y:11, material: 'SSR', solid: true, interactive: false},
  {x:15, y:11, material: 'SSF', solid: true, interactive: false},

  {x:2, y:12, material: 'SSM', solid: true, interactive: false},
  {x:4, y:12, material: 'SSM', solid: true, interactive: false},
  {x:14, y:12, material: 'SSF', solid: true, interactive: false},
  {x:15, y:12, material: 'SSF', solid: true, interactive: false},

  {x:2, y:13, material: 'SSU', solid: true, interactive: false},
  {x:4, y:13, material: 'SSM', solid: true, interactive: false},
  {x:6, y:13, material: 'SSR', solid: true, interactive: false},
  {x:7, y:13, material: 'SSF', solid: true, interactive: false},
  {x:8, y:13, material: 'SSF', solid: true, interactive: false},
  {x:9, y:13, material: 'SSF', solid: true, interactive: false},
  {x:10, y:13, material: 'SSF', solid: true, interactive: false},
  {x:11, y:13, material: 'SSF', solid: true, interactive: false},
  {x:13, y:13, material: 'SSF', solid: true, interactive: false},
  {x:14, y:13, material: 'SSF', solid: true, interactive: false},
  {x:15, y:13, material: 'SSF', solid: true, interactive: false},
  {x:12, y:13, material: 'SSF', solid: true, interactive: false},

  {x:4, y:14, material: 'SSM', solid: true, interactive: false},
  {x:13, y:14, material: 'SSR', solid: true, interactive: false},
  {x:14, y:14, material: 'SSL', solid: true, interactive: false},

  {x:2, y:15, material: 'SSR', solid: true, interactive: false},
  {x:3, y:15, material: 'SSF', solid: true, interactive: false},
  {x:4, y:15, material: 'SSF', solid: true, interactive: false},
  {x:5, y:15, material: 'SSF', solid: true, interactive: false},
  {x:6, y:15, material: 'SSF', solid: true, interactive: false},
  {x:7, y:15, material: 'SSF', solid: true, interactive: false},
  {x:10, y:15, material: 'SSR', solid: true, interactive: false},
  {x:11, y:15, material: 'SSL', solid: true, interactive: false},
  {x:14, y:15, material: 'SSM', solid: true, interactive: false},
  
  {x:12, y:16, material: 'SSL', solid: true, interactive: false},
  {x:6, y:16, material: 'SSR', solid: true, interactive: false},
  {x:7, y:16, material: 'SSL', solid: true, interactive: false},
  {x:10, y:16, material: 'SSR', solid: true, interactive: false},
  {x:11, y:16, material: 'SSF', solid: true, interactive: false},
  {x:14, y:16, material: 'SSL', solid: true, interactive: false},

/*  {x:1, y:1, material: 'SSF', solid: true, interactive: false},
  {x:2, y:1, material: 'SSU', solid: true, interactive: false},
  {x:3, y:1, material: 'SSU', solid: true, interactive: false},
  {x:4, y:1, material: 'SSU', solid: true, interactive: false},
  {x:5, y:1, material: 'SSU', solid: true, interactive: false},
  {x:6, y:1, material: 'SSU', solid: true, interactive: false},
  {x:7, y:1, material: 'SSU', solid: true, interactive: false},
  {x:8, y:1, material: 'SSU', solid: true, interactive: false},
  {x:9, y:1, material: 'SSU', solid: true, interactive: false},
  {x:10, y:1, material: 'SSU', solid: true, interactive: false},
  {x:11, y:1, material: 'SSU', solid: true, interactive: false},
  {x:13, y:1, material: 'SSU', solid: true, interactive: false},
  {x:14, y:1, material: 'SSU', solid: true, interactive: false},
  {x:15, y:1, material: 'SSU', solid: true, interactive: false},

  ]
};*/