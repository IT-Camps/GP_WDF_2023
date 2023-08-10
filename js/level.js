// Spoiler: Tut nicht ganz (:

let LEVEL = [
    {
        name: "demoLevel",
        data: [
            { x: 2, y: 3, material: 'grass', solid: true, interactive: false},
            { x: 3, y: 4, material: 'grass', solid: true, interactive: false},
            { x: 4, y: 4, material: 'grass', solid: true, interactive: false},
            { x: 5, y: 4, material: 'grass', solid: true, interactive: false},
            { x: 6, y: 5, material: 'grass', solid: true, interactive: false},
            { x: 7, y: 4, material: 'grass', solid: true, interactive: false},
            { x: 8, y: 4, material: 'grass', solid: true, interactive: false},
            { x: 9, y: 3, material: 'grass', solid: true, interactive: false}

        ]
    },

    {
        name: 'serverraum',
        data: [
        {x:0, y:0, material: 'SSF', solid: true, interactive: false},
        {x:0, y:2, material: 'SSF', solid: true, interactive: false},
        {x:0, y:3, material: 'SSF', solid: true, interactive: false},
        {x:0, y:4, material: 'SSF', solid: true, interactive: false},
        {x:0, y:5, material: 'SSF', solid: true, interactive: false},
        {x:0, y:8, material: 'SSF', solid: true, interactive: false},
        {x:0, y:9, material: 'SSF', solid: true, interactive: false},
        {x:0, y:10, material: 'SSF', solid: true, interactive: false},
        {x:0, y:11, material: 'SSF', solid: true, interactive: false},
        {x:0, y:12, material: 'SSF', solid: true, interactive: false},
        {x:0, y:19, material: 'SSF', solid: true, interactive: false},
    
        {x:1, y:0, material: 'SSF', solid: true, interactive: false},
        {x:1, y:5, material: 'SSF', solid: true, interactive: false},       
        {x:1, y:6, material: 'SSF', solid: true, interactive: false},
        {x:1, y:11, material: 'SSF', solid: true, interactive: false},    
        {x:1, y:12, material: 'SSF', solid: true, interactive: false},
        {x:1, y:13, material: 'SSF', solid: true, interactive: false},
        {x:1, y:14, material: 'SSF', solid: true, interactive: false},       
        {x:1, y:15, material: 'SSF', solid: true, interactive: false},    
        {x:1, y:17, material: 'SSF', solid: true, interactive: false},
        {x:1, y:19, material: 'SSF', solid: true, interactive: false},
       
        {x:2, y:0, material: 'SSF', solid: true, interactive: false},        
        {x:2, y:2, material: 'SSF', solid: true, interactive: false},
        {x:2, y:5, material: 'SSF', solid: true, interactive: false},       
        {x:2, y:6, material: 'SSF', solid: true, interactive: false},
        {x:2, y:7, material: 'SSF', solid: true, interactive: false},
        {x:2, y:8, material: 'SSF', solid: true, interactive: false},
        {x:2, y:9, material: 'SSF', solid: true, interactive: false},
        {x:2, y:12, material: 'SSF', solid: true, interactive: false},
        {x:2, y:13, material: 'SSF', solid: true, interactive: false},
        {x:2, y:17, material: 'SSF', solid: true, interactive: false},
        {x:2, y:19, material: 'SSF', solid: true, interactive: false},
    
        {x:3, y:2, material: 'SSF', solid: true, interactive: false},
        {x:3, y:8, material: 'SSF', solid: true, interactive: false},
        {x:3, y:9, material: 'SSF', solid: true, interactive: false},
        {x:3, y:10, material: 'SSF', solid: true, interactive: false},      
        {x:3, y:12, material: 'SSF', solid: true, interactive: false},
        {x:3, y:15, material: 'SSF', solid: true, interactive: false},
        {x:3, y:16, material: 'SSF', solid: true, interactive: false},
        {x:3, y:17, material: 'SSF', solid: true, interactive: false},
        {x:3, y:19, material: 'SSF', solid: true, interactive: false},
    
        {x:4, y:0, material: 'SSF', solid: true, interactive: false},
        {x:4, y:2, material: 'SSF', solid: true, interactive: false},
        {x:4, y:4, material: 'SSF', solid: true, interactive: false},
        {x:4, y:5, material: 'SSF', solid: true, interactive: false},
        {x:4, y:5, material: 'SSF', solid: true, interactive: false},
        {x:4, y:6, material: 'SSF', solid: true, interactive: false},
        {x:4, y:10, material: 'SSF', solid: true, interactive: false},
        {x:4, y:12, material: 'SSF', solid: true, interactive: false},
        {x:4, y:14, material: 'SSF', solid: true, interactive: false},
        {x:4, y:15, material: 'SSF', solid: true, interactive: false},
        {x:4, y:17, material: 'SSF', solid: true, interactive: false},
        {x:4, y:18, material: 'SSF', solid: true, interactive: false},
        {x:4, y:19, material: 'SSF', solid: true, interactive: false},
    
        {x:5, y:0, material: 'SSF', solid: true, interactive: false},
        {x:5, y:2, material: 'SSF', solid: true, interactive: false},
        {x:5, y:4, material: 'SSF', solid: true, interactive: false},
        {x:5, y:6, material: 'SSF', solid: true, interactive: false},
        {x:5, y:8, material: 'SSF', solid: true, interactive: false},
        {x:5, y:12, material: 'SSF', solid: true, interactive: false},
        {x:5, y:14, material: 'SSF', solid: true, interactive: false},
        {x:5, y:15, material: 'SSF', solid: true, interactive: false},
        {x:5, y:17, material: 'SSF', solid: true, interactive: false},
        {x:5, y:19, material: 'SSF', solid: true, interactive: false},
    
        {x:6, y:0, material: 'SSF', solid: true, interactive: false},
        {x:6, y:2, material: 'SSF', solid: true, interactive: false},
        {x:6, y:6, material: 'SSF', solid: true, interactive: false},
        {x:6, y:8, material: 'SSF', solid: true, interactive: false},
        {x:6, y:9, material: 'SSF', solid: true, interactive: false},
        {x:6, y:12, material: 'SSF', solid: true, interactive: false},
        {x:6, y:19, material: 'SSF', solid: true, interactive: false},
    
        {x:7, y:0, material: 'SSF', solid: true, interactive: false},
        {x:7, y:2, material: 'SSF', solid: true, interactive: false},
        {x:7, y:3, material: 'SSF', solid: true, interactive: false},
        {x:7, y:4, material: 'SSF', solid: true, interactive: false},
        {x:7, y:5, material: 'SSF', solid: true, interactive: false},
        {x:7, y:6, material: 'SSF', solid: true, interactive: false},
        {x:7, y:8, material: 'SSF', solid: true, interactive: false},
        {x:7, y:9, material: 'SSF', solid: true, interactive: false},
        {x:7, y:10, material: 'SSF', solid: true, interactive: false},
        {x:7, y:12, material: 'SSF', solid: true, interactive: false},
        {x:7, y:16, material: 'SSF', solid: true, interactive: false},
        {x:7, y:18, material: 'SSF', solid: true, interactive: false},
        {x:7, y:19, material: 'SSF', solid: true, interactive: false},
       
        {x:8, y:0, material: 'SSF', solid: true, interactive: false},
        {x:8, y:5, material: 'SSF', solid: true, interactive: false},
        {x:8, y:8, material: 'SSF', solid: true, interactive: false},
        {x:8, y:9, material: 'SSF', solid: true, interactive: false},
        {x:8, y:12, material: 'SSF', solid: true, interactive: false},
        {x:8, y:14, material: 'SSF', solid: true, interactive: false},
        {x:8, y:15, material: 'SSF', solid: true, interactive: false},
        {x:8, y:16, material: 'SSF', solid: true, interactive: false},
        {x:8, y:18, material: 'SSF', solid: true, interactive: false},
        {x:8, y:19, material: 'SSF', solid: true, interactive: false},
    
        {x:9, y:0, material: 'SSF', solid: true, interactive: false},
        {x:9, y:1, material: 'SSF', solid: true, interactive: false},
        {x:9, y:2, material: 'SSF', solid: true, interactive: false},
        {x:9, y:3, material: 'SSF', solid: true, interactive: false},
        {x:9, y:5, material: 'SSF', solid: true, interactive: false},
        {x:9, y:6, material: 'SSF', solid: true, interactive: false},
        {x:9, y:7, material: 'SSF', solid: true, interactive: false},
        {x:9, y:9, material: 'SSF', solid: true, interactive: false},
        {x:9, y:10, material: 'SSF', solid: true, interactive: false},
        {x:9, y:12, material: 'SSF', solid: true, interactive: false},
        {x:9, y:14, material: 'SSF', solid: true, interactive: false},
        {x:9, y:15, material: 'SSF', solid: true, interactive: false},
        {x:9, y:16, material: 'SSF', solid: true, interactive: false},
        {x:9, y:19, material: 'SSF', solid: true, interactive: false},
    
        {x:10, y:0, material: 'SSF', solid: true, interactive: false},
        {x:10, y:7, material: 'SSF', solid: true, interactive: false},
        {x:10, y:9, material: 'SSF', solid: true, interactive: false},
        {x:10, y:10, material: 'SSF', solid: true, interactive: false},
        {x:10, y:14, material: 'SSF', solid: true, interactive: false},
        {x:10, y:16, material: 'SSF', solid: true, interactive: false},
        {x:10, y:19, material: 'SSF', solid: true, interactive: false},
    
        {x:11, y:0, material: 'SSF', solid: true, interactive: false},
        {x:11, y:2, material: 'SSF', solid: true, interactive: false},
        {x:11, y:3, material: 'SSF', solid: true, interactive: false},
        {x:11, y:4, material: 'SSF', solid: true, interactive: false},       
        {x:11, y:5, material: 'SSF', solid: true, interactive: false},
        {x:11, y:7, material: 'SSF', solid: true, interactive: false},
        {x:11, y:9, material: 'SSF', solid: true, interactive: false},
        {x:11, y:10, material: 'SSF', solid: true, interactive: false},
        {x:11, y:11, material: 'SSF', solid: true, interactive: false},
        {x:11, y:12, material: 'SSF', solid: true, interactive: false},
        {x:11, y:13, material: 'SSF', solid: true, interactive: false},
        {x:11, y:14, material: 'SSF', solid: true, interactive: false},
        {x:11, y:19, material: 'SSF', solid: true, interactive: false},
    
        {x:12, y:0, material: 'SSF', solid: true, interactive: false},
        {x:12, y:7, material: 'SSF', solid: true, interactive: false},
        {x:12, y:14, material: 'SSF', solid: true, interactive: false},
        {x:12, y:16, material: 'SSF', solid: true, interactive: false},
        {x:12, y:17, material: 'SSF', solid: true, interactive: false},
        {x:12, y:19, material: 'SSF', solid: true, interactive: false},
    
        {x:13, y:0, material: 'SSF', solid: true, interactive: false},
        {x:13, y:2, material: 'SSF', solid: true, interactive: false},
        {x:13, y:4, material: 'SSF', solid: true, interactive: false},
        {x:13, y:5, material: 'SSF', solid: true, interactive: false},
        {x:13, y:6, material: 'SSF', solid: true, interactive: false},
        {x:13, y:7, material: 'SSF', solid: true, interactive: false},
        {x:13, y:8, material: 'SSF', solid: true, interactive: false},
        {x:13, y:9, material: 'SSF', solid: true, interactive: false},
        {x:13, y:10, material: 'SSF', solid: true, interactive: false},
        {x:13, y:11, material: 'SSF', solid: true, interactive: false},
        {x:13, y:12, material: 'SSF', solid: true, interactive: false},
        {x:13, y:14, material: 'SSF', solid: true, interactive: false},
        {x:13, y:16, material: 'SSF', solid: true, interactive: false},
        {x:13, y:17, material: 'SSF', solid: true, interactive: false},
        {x:13, y:19, material: 'SSF', solid: true, interactive: false},
    
        {x:14, y:0, material: 'SSF', solid: true, interactive: false},
        {x:14, y:1, material: 'SSF', solid: true, interactive: false},
        {x:14, y:2, material: 'SSF', solid: true, interactive: false},
        {x:14, y:16, material: 'SSF', solid: true, interactive: false},
        {x:14, y:17, material: 'SSF', solid: true, interactive: false},
        {x:14, y:18, material: 'SSF', solid: true, interactive: false},
        {x:14, y:19, material: 'SSF', solid: true, interactive: false}

        ]
    }


]