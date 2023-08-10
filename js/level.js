// Spoiler: Tut nicht ganz (:

let LEVEL = [
    {
        name: "demoLevel",
        data: [
            { x: 2, y: 3, material: 'grass', solid: true, interactive: false },
            { x: 3, y: 4, material: 'grass', solid: true, interactive: false },
            { x: 4, y: 4, material: 'grass', solid: true, interactive: false },
            { x: 5, y: 4, material: 'grass', solid: true, interactive: false },
            { x: 6, y: 5, material: 'grass', solid: true, interactive: false },
            { x: 7, y: 4, material: 'grass', solid: true, interactive: false },
            { x: 8, y: 4, material: 'grass', solid: true, interactive: false },
            { x: 9, y: 3, material: 'grass', solid: true, interactive: false }
        ]
    },
    {
        name: 'Kaffeeecke', // alter serverraum
        data: [
        {x:0, y:0, material: 'Holzboden', solid: true, interactive: false},
        {x:0, y:2, material: 'Holzboden', solid: true, interactive: false},
        {x:0, y:3, material: 'Holzboden', solid: true, interactive: false},
        {x:0, y:4, material: 'Holzboden', solid: true, interactive: false},
        {x:0, y:5, material: 'Holzboden', solid: true, interactive: false},
        {x:0, y:8, material: 'Holzboden', solid: true, interactive: false},
        {x:0, y:9, material: 'Holzboden', solid: true, interactive: false},
        {x:0, y:10, material: 'Holzboden', solid: true, interactive: false},
        {x:0, y:11, material: 'Holzboden', solid: true, interactive: false},
        {x:0, y:12, material: 'Holzboden', solid: true, interactive: false},
        {x:0, y:19, material: 'Holzboden', solid: true, interactive: false},
    
        {x:1, y:0, material: 'Holzboden', solid: true, interactive: false},
        {x:1, y:5, material: 'Holzboden', solid: true, interactive: false},       
        {x:1, y:6, material: 'Holzboden', solid: true, interactive: false},
        {x:1, y:11, material: 'Holzboden', solid: true, interactive: false},    
        {x:1, y:12, material: 'Holzboden', solid: true, interactive: false},
        {x:1, y:13, material: 'KAFFEE', solid: true, interactive: false},
        {x:1, y:14, material: 'Holzboden', solid: true, interactive: false},       
        {x:1, y:15, material: 'Holzboden', solid: true, interactive: false},    
        {x:1, y:17, material: 'Holzboden', solid: true, interactive: false},
        {x:1, y:19, material: 'Holzboden', solid: true, interactive: false},
       
        {x:2, y:0, material: 'Holzboden', solid: true, interactive: false},        
        {x:2, y:2, material: 'Holzboden', solid: true, interactive: false},
        {x:2, y:5, material: 'Holzboden', solid: true, interactive: false},       
        {x:2, y:6, material: 'Holzboden', solid: true, interactive: false},
        {x:2, y:7, material: 'Holzboden', solid: true, interactive: false},
        {x:2, y:8, material: 'Holzboden', solid: true, interactive: false},
        {x:2, y:9, material: 'Holzboden', solid: true, interactive: false},
        {x:2, y:12, material: 'Holzboden', solid: true, interactive: false},
        {x:2, y:13, material: 'Holzboden', solid: true, interactive: false},
        {x:2, y:17, material: 'Holzboden', solid: true, interactive: false},
        {x:2, y:19, material: 'Holzboden', solid: true, interactive: false},
    
        {x:3, y:2, material: 'Holzboden', solid: true, interactive: false},
        {x:3, y:8, material: 'Holzboden', solid: true, interactive: false},
        {x:3, y:9, material: 'Holzboden', solid: true, interactive: false},
        {x:3, y:10, material: 'Holzboden', solid: true, interactive: false},      
        {x:3, y:12, material: 'Holzboden', solid: true, interactive: false},
        {x:3, y:15, material: 'Holzboden', solid: true, interactive: false},
        {x:3, y:16, material: 'Holzboden', solid: true, interactive: false},
        {x:3, y:17, material: 'Holzboden', solid: true, interactive: false},
        {x:3, y:19, material: 'Holzboden', solid: true, interactive: false},
    
        {x:4, y:0, material: 'Holzboden', solid: true, interactive: false},
        {x:4, y:2, material: 'Holzboden', solid: true, interactive: false},
        {x:4, y:4, material: 'Holzboden', solid: true, interactive: false},
        {x:4, y:5, material: 'Holzboden', solid: true, interactive: false},
        {x:4, y:5, material: 'Holzboden', solid: true, interactive: false},
        {x:4, y:6, material: 'Holzboden', solid: true, interactive: false},
        {x:4, y:10, material: 'Holzboden', solid: true, interactive: false},
        {x:4, y:12, material: 'Holzboden', solid: true, interactive: false},
        {x:4, y:14, material: 'Holzboden', solid: true, interactive: false},
        {x:4, y:15, material: 'Holzboden', solid: true, interactive: false},
        {x:4, y:17, material: 'Holzboden', solid: true, interactive: false},
        {x:4, y:18, material: 'Holzboden', solid: true, interactive: false},
        {x:4, y:19, material: 'Holzboden', solid: true, interactive: false},
    
        {x:5, y:0, material: 'Holzboden', solid: true, interactive: false},
        {x:5, y:2, material: 'Holzboden', solid: true, interactive: false},
        {x:5, y:4, material: 'Holzboden', solid: true, interactive: false},
        {x:5, y:6, material: 'Holzboden', solid: true, interactive: false},
        {x:5, y:8, material: 'Holzboden', solid: true, interactive: false},
        {x:5, y:12, material: 'Holzboden', solid: true, interactive: false},
        {x:5, y:14, material: 'Holzboden', solid: true, interactive: false},
        {x:5, y:15, material: 'Holzboden', solid: true, interactive: false},
        {x:5, y:17, material: 'Holzboden', solid: true, interactive: false},
        {x:5, y:19, material: 'Holzboden', solid: true, interactive: false},
    
        {x:6, y:0, material: 'Holzboden', solid: true, interactive: false},
        {x:6, y:2, material: 'Holzboden', solid: true, interactive: false},
        {x:6, y:6, material: 'Holzboden', solid: true, interactive: false},
        {x:6, y:8, material: 'Holzboden', solid: true, interactive: false},
        {x:6, y:9, material: 'Holzboden', solid: true, interactive: false},
        {x:6, y:12, material: 'Holzboden', solid: true, interactive: false},
        {x:6, y:19, material: 'Holzboden', solid: true, interactive: false},
    
        {x:7, y:0, material: 'Holzboden', solid: true, interactive: false},
        {x:7, y:2, material: 'Holzboden', solid: true, interactive: false},
        {x:7, y:3, material: 'Holzboden', solid: true, interactive: false},
        {x:7, y:4, material: 'Holzboden', solid: true, interactive: false},
        {x:7, y:5, material: 'Holzboden', solid: true, interactive: false},
        {x:7, y:6, material: 'Holzboden', solid: true, interactive: false},
        {x:7, y:8, material: 'Holzboden', solid: true, interactive: false},
        {x:7, y:9, material: 'Holzboden', solid: true, interactive: false},
        {x:7, y:10, material: 'Holzboden', solid: true, interactive: false},
        {x:7, y:12, material: 'Holzboden', solid: true, interactive: false},
        {x:7, y:16, material: 'Holzboden', solid: true, interactive: false},
        {x:7, y:18, material: 'Holzboden', solid: true, interactive: false},
        {x:7, y:19, material: 'Holzboden', solid: true, interactive: false},
       
        {x:8, y:0, material: 'Holzboden', solid: true, interactive: false},
        {x:8, y:5, material: 'Holzboden', solid: true, interactive: false},
        {x:8, y:8, material: 'Holzboden', solid: true, interactive: false},
        {x:8, y:9, material: 'Holzboden', solid: true, interactive: false},
        {x:8, y:12, material: 'Holzboden', solid: true, interactive: false},
        {x:8, y:14, material: 'Holzboden', solid: true, interactive: false},
        {x:8, y:15, material: 'Holzboden', solid: true, interactive: false},
        {x:8, y:16, material: 'Holzboden', solid: true, interactive: false},
        {x:8, y:18, material: 'Holzboden', solid: true, interactive: false},
        {x:8, y:19, material: 'Holzboden', solid: true, interactive: false},
    
        {x:9, y:0, material: 'Holzboden', solid: true, interactive: false},
        {x:9, y:1, material: 'Holzboden', solid: true, interactive: false},
        {x:9, y:2, material: 'Holzboden', solid: true, interactive: false},
        {x:9, y:3, material: 'Holzboden', solid: true, interactive: false},
        {x:9, y:5, material: 'Holzboden', solid: true, interactive: false},
        {x:9, y:6, material: 'Holzboden', solid: true, interactive: false},
        {x:9, y:7, material: 'Holzboden', solid: true, interactive: false},
        {x:9, y:9, material: 'Holzboden', solid: true, interactive: false},
        {x:9, y:10, material: 'Holzboden', solid: true, interactive: false},
        {x:9, y:12, material: 'Holzboden', solid: true, interactive: false},
        {x:9, y:14, material: 'Holzboden', solid: true, interactive: false},
        {x:9, y:15, material: 'Holzboden', solid: true, interactive: false},
        {x:9, y:16, material: 'Holzboden', solid: true, interactive: false},
        {x:9, y:19, material: 'Holzboden', solid: true, interactive: false},
    
        {x:10, y:0, material: 'Holzboden', solid: true, interactive: false},
        {x:10, y:7, material: 'Holzboden', solid: true, interactive: false},
        {x:10, y:9, material: 'Holzboden', solid: true, interactive: false},
        {x:10, y:10, material: 'Holzboden', solid: true, interactive: false},
        {x:10, y:14, material: 'Holzboden', solid: true, interactive: false},
        {x:10, y:16, material: 'Holzboden', solid: true, interactive: false},
        {x:10, y:19, material: 'Holzboden', solid: true, interactive: false},
    
        {x:11, y:0, material: 'Holzboden', solid: true, interactive: false},
        {x:11, y:2, material: 'Holzboden', solid: true, interactive: false},
        {x:11, y:3, material: 'Holzboden', solid: true, interactive: false},
        {x:11, y:4, material: 'Holzboden', solid: true, interactive: false},       
        {x:11, y:5, material: 'Holzboden', solid: true, interactive: false},
        {x:11, y:7, material: 'Holzboden', solid: true, interactive: false},
        {x:11, y:9, material: 'Holzboden', solid: true, interactive: false},
        {x:11, y:10, material: 'Holzboden', solid: true, interactive: false},
        {x:11, y:11, material: 'Holzboden', solid: true, interactive: false},
        {x:11, y:12, material: 'Holzboden', solid: true, interactive: false},
        {x:11, y:13, material: 'Holzboden', solid: true, interactive: false},
        {x:11, y:14, material: 'Holzboden', solid: true, interactive: false},
        {x:11, y:19, material: 'Holzboden', solid: true, interactive: false},
    
        {x:12, y:0, material: 'Holzboden', solid: true, interactive: false},
        {x:12, y:7, material: 'Holzboden', solid: true, interactive: false},
        {x:12, y:14, material: 'Holzboden', solid: true, interactive: false},
        {x:12, y:16, material: 'Holzboden', solid: true, interactive: false},
        {x:12, y:17, material: 'Holzboden', solid: true, interactive: false},
        {x:12, y:19, material: 'Holzboden', solid: true, interactive: false},
    
        {x:13, y:0, material: 'Holzboden', solid: true, interactive: false},
        {x:13, y:2, material: 'Holzboden', solid: true, interactive: false},
        {x:13, y:4, material: 'Holzboden', solid: true, interactive: false},
        {x:13, y:5, material: 'Holzboden', solid: true, interactive: false},
        {x:13, y:6, material: 'Holzboden', solid: true, interactive: false},
        {x:13, y:7, material: 'Holzboden', solid: true, interactive: false},
        {x:13, y:8, material: 'Holzboden', solid: true, interactive: false},
        {x:13, y:9, material: 'Holzboden', solid: true, interactive: false},
        {x:13, y:10, material: 'Holzboden', solid: true, interactive: false},
        {x:13, y:11, material: 'Holzboden', solid: true, interactive: false},
        {x:13, y:12, material: 'Holzboden', solid: true, interactive: false},
        {x:13, y:14, material: 'Holzboden', solid: true, interactive: false},
        {x:13, y:16, material: 'Holzboden', solid: true, interactive: false},
        {x:13, y:17, material: 'Holzboden', solid: true, interactive: false},
    
        {x:14, y:0, material: 'Holzboden', solid: true, interactive: false},
        {x:14, y:1, material: 'Holzboden', solid: true, interactive: false},
        {x:14, y:2, material: 'Holzboden', solid: true, interactive: false},
        {x:14, y:16, material: 'Holzboden', solid: true, interactive: false},
        {x:14, y:17, material: 'Holzboden', solid: true, interactive: false},
        {x:14, y:18, material: 'Holzboden', solid: true, interactive: false},
        {x:14, y:19, material: 'Holzboden', solid: true, interactive: false}

        ]
    },
    {
        name: 'foyer',
        data: [
        {x:10, y:0, material: 'SPRU', solid: true, interactive: false},
        {x:10, y:1, material: 'SPRU', solid: true, interactive: false},
        {x:10, y:2, material: 'CRDR', solid: false, interactive: false},
        {x:10, y:3, material: 'SPRU', solid: true, interactive: false},
        {x:10, y:4, material: 'CRDR', solid: false, interactive: false},
        {x:10, y:5, material: 'SPRU', solid: true, interactive: false},
        {x:10, y:6, material: 'DESK', solid: true, interactive: false},
        {x:10, y:7, material: 'DESK', solid: true, interactive: false},
        {x:10, y:8, material: 'DESK', solid: true, interactive: false},
        {x:10, y:9, material: 'DESK', solid: true, interactive: false},
        {x:10, y:10, material: 'DESK', solid: true, interactive: false},
        {x:10, y:11, material: 'DESK', solid: true, interactive: false},
        {x:10, y:12, material: 'SPRU', solid: true, interactive: false},
        {x:10, y:13, material: 'CRDR', solid: true, interactive: false},
        {x:10, y:14, material: 'SPRU', solid: true, interactive: false},
        {x:10, y:15, material: 'CRDR', solid: true, interactive: false},
        {x:10, y:16, material: 'SPRU', solid: true, interactive: false},
        {x:10, y:17, material: 'SPRU', solid: true, interactive: false},
        {x:10, y:18, material: 'SPRU', solid: true, interactive: false},
        {x:10, y:19, material: 'SPRU', solid: true, interactive: false},
        

        {x:12, y:7, material: 'DPPH', solid: false, interactive: false},
        {x:12, y:10, material: 'DPPH', solid: false, interactive: false},

        {x:14, y:7, material: 'FPKF', solid: true, interactive: false},
        {x:14, y:10, material: 'FPKF', solid: true, interactive: false}  

        ]
    }/*,
    { 
        name: 'Kaffeeecke',
        data: [
        {x:0, y:0, material: 'KTW', solid: true, interactive: false},
        {x:0, y:1, material: 'KTW', solid: true, interactive: false},
        {x:0, y:2, material: 'KTW', solid: true, interactive: false},
        {x:0, y:3, material: 'KTW', solid: true, interactive: false},
        {x:0, y:4, material: 'KTW', solid: true, interactive: false},
        {x:0, y:5, material: 'KTW', solid: true, interactive: false},
        {x:0, y:6, material: 'KTW', solid: true, interactive: false},
        {x:0, y:7, material: 'KTW', solid: true, interactive: false},
        {x:0, y:8, material: 'KTW', solid: true, interactive: false},
        {x:0, y:9, material: 'KTW', solid: true, interactive: false},
        {x:0, y:10, material: 'KTW', solid: true, interactive: false},
        {x:0, y:11, material: 'KTW', solid: true, interactive: false},
        {x:0, y:12, material: 'KtW', solid: true, interactive: false},
        {x:0, y:13, material: 'KTW', solid: true, interactive: false},
        {x:0, y:14, material: 'KTW', solid: true, interactive: false},
        {x:0, y:15, material: 'KTW', solid: true, interactive: false},
        {x:0, y:16, material: 'KTW', solid: true, interactive: false},
        {x:0, y:17, material: 'KTW', solid: true, interactive: false},
        {x:0, y:18, material: 'KTW', solid: true, interactive: false},
        {x:0, y:19, material: 'KTW', solid: true, interactive: false},

        {x:1, y:0, material: 'KTW', solid: true, interactive: false},
        {x:1, y:6, material: 'KHW', solid: true, interactive: false},
        {x:1, y:7, material: 'KHW', solid: true, interactive: false},
        {x:1, y:8, material: 'KHW', solid: true, interactive: false},
        {x:1, y:9, material: 'KHW', solid: true, interactive: false},
        {x:1, y:10, material: 'KHW', solid: true, interactive: false},
        {x:1, y:11, material: 'KHW', solid: true, interactive: false},
        {x:1, y:12, material: 'KHW', solid: true, interactive: false},
        {x:1, y:13, material: 'KHW', solid: true, interactive: false},
        {x:1, y:19, material: 'KTW', solid: true, interactive: false},

        {x:2, y:0, material: 'KTW', solid: true, interactive: false},
        {x:2, y:6, material: 'KHW', solid: true, interactive: false},
        {x:2, y:7, material: 'KHW', solid: true, interactive: false},
        {x:2, y:8, material: 'KHW', solid: true, interactive: false},
        {x:2, y:9, material: 'KHW', solid: true, interactive: false},
        {x:2, y:10, material: 'KHW', solid: true, interactive: false},
        {x:2, y:11, material: 'KHW', solid: true, interactive: false},
        {x:2, y:12, material: 'KHW', solid: true, interactive: false},
        {x:2, y:13, material: 'KHW', solid: true, interactive: false},
        {x:2, y:19, material: 'KTW', solid: true, interactive: false},

        {x:3, y:0, material: 'KTW', solid: true, interactive: false},
        {x:3, y:6, material: 'KHW', solid: true, interactive: false},
        {x:3, y:7, material: 'KHW', solid: true, interactive: false},
        {x:3, y:8, material: 'KHW', solid: true, interactive: false},
        {x:3, y:9, material: 'KHW', solid: true, interactive: false},
        {x:3, y:10, material: 'KHW', solid: true, interactive: false},
        {x:3, y:11, material: 'KHW', solid: true, interactive: false},
        {x:3, y:12, material: 'KHW', solid: true, interactive: false},
        {x:3, y:13, material: 'KHW', solid: true, interactive: false},
        {x:3, y:19, material: 'KTW', solid: true, interactive: false},

        {x:4, y:0, material: 'KTW', solid: true, interactive: false},
        {x:4, y:6, material: 'KHW', solid: true, interactive: false},
        {x:4, y:7, material: 'KHW', solid: true, interactive: false},
        {x:4, y:8, material: 'KHW', solid: true, interactive: false},
        {x:4, y:9, material: 'KHW', solid: true, interactive: false},
        {x:4, y:10, material: 'KHW', solid: true, interactive: false},
        {x:4, y:11, material: 'KHW', solid: true, interactive: false},
        {x:4, y:12, material: 'KHW', solid: true, interactive: false},
        {x:4, y:13, material: 'KHW', solid: true, interactive: false},
        {x:4, y:19, material: 'KTW', solid: true, interactive: false},

        {x:5, y:0, material: 'KTW', solid: true, interactive: false},
        {x:5, y:6, material: 'KHW', solid: true, interactive: false},
        {x:5, y:7, material: 'KHW', solid: true, interactive: false},
        {x:5, y:8, material: 'KHW', solid: true, interactive: false},
        {x:5, y:9, material: 'KHW', solid: true, interactive: false},
        {x:5, y:10, material: 'KHW', solid: true, interactive: false},
        {x:5, y:11, material: 'KHW', solid: true, interactive: false},
        {x:5, y:12, material: 'KHW', solid: true, interactive: false},
        {x:5, y:13, material: 'KHW', solid: true, interactive: false},
        {x:5, y:19, material: 'KTW', solid: true, interactive: false},

        {x:6, y:0, material: 'KTW', solid: true, interactive: false},
        {x:6, y:6, material: 'KHW', solid: true, interactive: false},
        {x:6, y:7, material: 'KHW', solid: true, interactive: false},
        {x:6, y:8, material: 'KHW', solid: true, interactive: false},
        {x:6, y:9, material: 'KHW', solid: true, interactive: false},
        {x:6, y:10, material: 'KHW', solid: true, interactive: false},
        {x:6, y:11, material: 'KHW', solid: true, interactive: false},
        {x:6, y:12, material: 'KHW', solid: true, interactive: false},
        {x:6, y:13, material: 'KHW', solid: true, interactive: false},
        {x:6, y:19, material: 'KTW', solid: true, interactive: false},

        {x:7, y:0, material: 'KTW', solid: true, interactive: false},
        {x:7, y:6, material: 'KHW', solid: true, interactive: false},
        {x:7, y:7, material: 'KHW', solid: true, interactive: false},
        {x:7, y:8, material: 'KHW', solid: true, interactive: false},
        {x:7, y:9, material: 'KHW', solid: true, interactive: false},
        {x:7, y:10, material: 'KHW', solid: true, interactive: false},
        {x:7, y:11, material: 'KHW', solid: true, interactive: false},
        {x:7, y:12, material: 'KHW', solid: true, interactive: false},
        {x:7, y:13, material: 'KHW', solid: true, interactive: false},
        {x:7, y:19, material: 'KTW', solid: true, interactive: false},

        {x:8, y:0, material: 'KTW', solid: true, interactive: false},
        {x:8, y:6, material: 'KHW', solid: true, interactive: false},
        {x:8, y:7, material: 'KHW', solid: true, interactive: false},
        {x:8, y:8, material: 'KHW', solid: true, interactive: false},
        {x:8, y:9, material: 'KHW', solid: true, interactive: false},
        {x:8, y:10, material: 'KHW', solid: true, interactive: false},
        {x:8, y:11, material: 'KHW', solid: true, interactive: false},
        {x:8, y:12, material: 'KHW', solid: true, interactive: false},
        {x:8, y:13, material: 'KHW', solid: true, interactive: false},
        {x:8, y:19, material: 'KTW', solid: true, interactive: false},

        {x:9, y:0, material: 'KTW', solid: true, interactive: false},
        {x:9, y:6, material: 'KHW', solid: true, interactive: false},
        {x:9, y:7, material: 'KHW', solid: true, interactive: false},
        {x:9, y:8, material: 'KHW', solid: true, interactive: false},
        {x:9, y:9, material: 'KHW', solid: true, interactive: false},
        {x:9, y:10, material: 'KHW', solid: true, interactive: false},
        {x:9, y:11, material: 'KHW', solid: true, interactive: false},
        {x:9, y:12, material: 'KHW', solid: true, interactive: false},
        {x:9, y:13, material: 'KHW', solid: true, interactive: false},
        {x:9, y:19, material: 'KTW', solid: true, interactive: false},

        {x:10, y:0, material: 'KTW', solid: true, interactive: false},
        {x:10, y:6, material: 'KHW', solid: true, interactive: false},
        {x:10, y:7, material: 'KHW', solid: true, interactive: false},
        {x:10, y:8, material: 'KHW', solid: true, interactive: false},
        {x:10, y:9, material: 'KHW', solid: true, interactive: false},
        {x:10, y:10, material: 'KHW', solid: true, interactive: false},
        {x:10, y:11, material: 'KHW', solid: true, interactive: false},
        {x:10, y:12, material: 'KHW', solid: true, interactive: false},
        {x:10, y:13, material: 'KHW', solid: true, interactive: false},
        {x:10, y:19, material: 'KTW', solid: true, interactive: false},

        {x:11, y:0, material: 'KTW', solid: true, interactive: false},
        {x:11, y:6, material: 'SSF', solid: true, interactive: false},
        {x:11, y:7, material: 'SSF', solid: true, interactive: false},
        {x:11, y:8, material: 'SSF', solid: true, interactive: false},
        {x:11, y:9, material: 'SSF', solid: true, interactive: false},
        {x:11, y:10, material: 'SSF', solid: true, interactive: true},
        {x:11, y:11, material: 'SSF', solid: true, interactive: true},
        {x:11,y:12, material: 'SSF', solid: true, interactive: false},
        {x:11, y:13, material: 'SSF', solid: true, interactive: false},
        {x:11, y:19, material: 'SSF', solid: true, interactive: false},

        {x:12, y:0, material: 'KTW', solid: true, interactive: false},
        {x:12, y:19, material: 'SSF', solid: true, interactive: false},

        {x:13, y:0, material: 'KTW', solid: true, interactive: false},
        {x:13, y:19, material: 'SSF', solid: true, interactive: false},

        {x:14, y:0, material: 'KTW', solid: true, interactive: false},
        {x:14, y:19, material: 'SSF', solid: true, interactive: false},

        {x:15, y:0, material: 'KTW', solid: true, interactive: false},
        {x:15, y:19, material: 'SSF', solid: true, interactive: false},

        {x:16, y:0, material: 'KTW', solid: true, interactive: false},
        {x:16, y:19, material: 'SSF', solid: true, interactive: false},

        {x:17, y:0, material: 'KTW', solid: true, interactive: false},
        {x:17, y:19, material: 'SSF', solid: true, interactive: false},

        {x:18, y:0, material: 'KTW', solid: true, interactive: false},
        {x:18, y:19, material: 'SSF', solid: true, interactive: false},

        {x:19, y:0, material: 'KTW', solid: true, interactive: false},
        {x:19, y:1, material: 'KTW', solid: true, interactive: false},
        {x:19, y:2, material: 'KTW', solid: true, interactive: false},
        {x:19, y:3, material: 'KTW', solid: true, interactive: false},
        {x:19, y:4, material: 'KTW', solid: true, interactive: false},
        {x:19, y:5, material: 'KTW', solid: true, interactive: false},
        {x:19, y:6, material: 'KTW', solid: true, interactive: false},
        {x:19, y:7, material: 'KTW', solid: true, interactive: false},
        {x:19, y:8, material: 'KTW', solid: true, interactive: false},
        {x:19, y:9, material: 'KTW', solid: true, interactive: false},
        {x:19, y:10, material: 'KTW', solid: true, interactive: false},
        {x:19, y:11, material: 'KTW', solid: true, interactive: false},
        {x:19, y:12, material: 'KtW', solid: true, interactive: false},
        {x:19, y:13, material: 'KTW', solid: true, interactive: false},
        {x:19, y:14, material: 'KTW', solid: true, interactive: false},
        {x:19, y:15, material: 'KTW', solid: true, interactive: false},
        {x:19, y:16, material: 'KTW', solid: true, interactive: false},
        {x:19, y:17, material: 'KTW', solid: true, interactive: false},
        {x:19, y:18, material: 'KTW', solid: true, interactive: false},
        {x:19, y:19, material: 'KTW', solid: true, interactive: false}
        
    ]
    }*/
]
