// Spoiler: Tut nicht ganz (:
let ITEM_TEXTURE_ATLAS = {
  item_keycard_bob: "./img/keyCards/keycard_bob.png",
  item_keycard_daniel: "./img/keyCards/keycard_daniel.png",
  item_keycard_olli: "./img/keyCards/keycard_olli.png",
}
let LEVEL = [
  {
    name: 'foyer',
    meta: {
      start_x: 10,
      start_y: 14,
      default_material: 'fu'
    },
    data: [
      { x: 19, y: 7, material: 'door', solid: false, interactive: true, interaction: "teleport_serverraum", keycard: "keycard_olli" }, //serverrraum
      { x: 12, y: 0, material: 'door', solid: false, interactive: true, interaction: "teleport_office", keycard: "keycard_bob" }, //eigenes büro
      { x: 3, y: 0, material: 'door', solid: false, interactive: true, interaction: "teleport_ceo", keycard: "keycard_daniel" }, //aufzug ceo
      { x: 0, y: 7, material: 'door', solid: false, interactive: true, interaction: "teleport_kaffeeecke" }, //cafeteria

      { x: 19, y: 0, material: 'FBKP', solid: false, interactive: true, interaction: "item_keycard_olli" },
      { x: 18, y: 0, material: 'FBKP', solid: false, interactive: false },
      { x: 19, y: 1, material: 'FBKP', solid: false, interactive: false },
      { x: 17, y: 0, material: 'FBKP', solid: false, interactive: false },
      { x: 17, y: 1, material: 'FBKP', solid: false, interactive: false },
      { x: 18, y: 1, material: 'FBKP', solid: false, interactive: false }
      /*{x:10, y:0, material: 'SPRU', solid: true, interactive: false},
      
      
      {x:14, y:7, material: 'FPKF', solid: true, interactive: false},
      {x:14, y:10, material: 'FPKF', solid: true, interactive: false}  */

    ]
  },


  {
    name: 'office',
    meta: {
      start_x: 10,
      start_y: 14,
      default_material: 'fu'
    },
    data: [
      { x: 9, y: 0, material: 'door', solid: false, interactive: true, interaction: "teleport_foyer" },
      /*{x:10, y:0, material: 'SPRU', solid: true, interactive: false},
      
      
      {x:14, y:7, material: 'FPKF', solid: true, interactive: false},
      {x:14, y:10, material: 'FPKF', solid: true, interactive: false}  */

    ]
  },


  {
    name: 'ceo',
    meta: {
      start_x: 10,
      start_y: 14,
      default_material: 'fu'
    },
    data: [
      /* { x: 9, y: 0, material: 'door', solid: false, interactive: true, interaction: "teleport_foyer" },
     {x:10, y:0, material: 'SPRU', solid: true, interactive: false},
      
      
      {x:14, y:7, material: 'FPKF', solid: true, interactive: false},
      {x:14, y:10, material: 'FPKF', solid: true, interactive: false}  */

    ]
  },

  {
    name: 'kaffeeecke',
    meta: {
      start_x: 19,
      start_y: 5,
      default_material: 'fu'
    },
    data: [

      { y: 12, x: 2, material: 'KEKM', solid: false, interactive: false },
      { x: 9, y: 0, material: 'door', solid: false, interactive: true, interaction: "teleport_foyer" },
      { y: 0, x: 0, material: 'KEW', solid: true, interactive: false },
      { y: 0, x: 1, material: 'KEW', solid: true, interactive: false },
      { y: 0, x: 2, material: 'KEW', solid: true, interactive: false },
      { y: 0, x: 3, material: 'KEW', solid: true, interactive: false },
      { y: 0, x: 4, material: 'KEW', solid: true, interactive: false },
      { y: 0, x: 5, material: 'KEW', solid: true, interactive: false },
      { y: 0, x: 6, material: 'KEW', solid: true, interactive: false },
      { y: 0, x: 7, material: 'KEW', solid: true, interactive: false },
      { y: 0, x: 8, material: 'KEW', solid: true, interactive: false },
      { y: 0, x: 9, material: 'KEW', solid: true, interactive: false },
      { y: 0, x: 10, material: 'KEW', solid: true, interactive: false },
      { y: 0, x: 11, material: 'KEW', solid: true, interactive: false },
      { y: 0, x: 12, material: 'KEW', solid: true, interactive: false },
      { y: 0, x: 13, material: 'KEW', solid: true, interactive: false },
      { y: 0, x: 14, material: 'KEW', solid: true, interactive: false },
      { y: 0, x: 15, material: 'KEW', solid: true, interactive: false },
      { y: 0, x: 16, material: 'KEW', solid: true, interactive: false },
      { y: 0, x: 17, material: 'KEW', solid: true, interactive: false },
      { y: 0, x: 18, material: 'KEW', solid: true, interactive: false },
      { y: 0, x: 19, material: 'KEW', solid: true, interactive: false },

      { y: 1, x: 0, material: 'KEW', solid: true, interactive: false },
      { y: 1, x: 2, material: 'KEW', solid: true, interactive: false },
      { y: 1, x: 4, material: 'KEW', solid: true, interactive: false },
      { y: 1, x: 5, material: 'KEW', solid: true, interactive: false },
      { y: 1, x: 6, material: 'KEW', solid: true, interactive: false },
      { y: 1, x: 7, material: 'KEW', solid: true, interactive: false },
      { y: 1, x: 12, material: 'KEW', solid: true, interactive: false },
      { y: 1, x: 14, material: 'KEW', solid: true, interactive: false },
      { y: 1, x: 15, material: 'KEW', solid: true, interactive: false },
      { y: 1, x: 16, material: 'KEW', solid: true, interactive: false },
      { y: 1, x: 19, material: 'KEW', solid: true, interactive: false },

      { y: 2, x: 0, material: 'KEW', solid: true, interactive: false },
      { y: 2, x: 2, material: 'KEW', solid: true, interactive: false },
      { y: 2, x: 7, material: 'KEW', solid: true, interactive: false },
      { y: 2, x: 8, material: 'KEW', solid: true, interactive: false },
      { y: 2, x: 9, material: 'KEW', solid: true, interactive: false },
      { y: 2, x: 10, material: 'KEW', solid: true, interactive: false },
      { y: 2, x: 12, material: 'KEW', solid: true, interactive: false },
      { y: 2, x: 14, material: 'KEW', solid: true, interactive: false },
      { y: 2, x: 15, material: 'KEW', solid: true, interactive: false },
      { y: 2, x: 16, material: 'KEW', solid: true, interactive: false },
      { y: 2, x: 19, material: 'KEW', solid: true, interactive: false },

      { y: 3, x: 0, material: 'KEW', solid: true, interactive: false },
      { y: 3, x: 2, material: 'KEW', solid: true, interactive: false },
      { y: 3, x: 3, material: 'KEW', solid: true, interactive: false },
      { y: 3, x: 4, material: 'KEW', solid: true, interactive: false },
      { y: 3, x: 5, material: 'KEW', solid: true, interactive: false },
      { y: 3, x: 12, material: 'KEW', solid: true, interactive: false },
      { y: 3, x: 19, material: 'KEW', solid: true, interactive: false },

      { y: 4, x: 0, material: 'KEW', solid: true, interactive: false },
      { y: 4, x: 5, material: 'KEW', solid: true, interactive: false },
      { y: 4, x: 7, material: 'KEW', solid: true, interactive: false },
      { y: 4, x: 8, material: 'KEW', solid: true, interactive: false },
      { y: 4, x: 10, material: 'KEW', solid: true, interactive: false },
      { y: 4, x: 12, material: 'KEW', solid: true, interactive: false },
      { y: 4, x: 14, material: 'KEW', solid: true, interactive: false },
      { y: 4, x: 15, material: 'KEW', solid: true, interactive: false },
      { y: 4, x: 16, material: 'KEW', solid: true, interactive: false },
      { y: 4, x: 17, material: 'KEW', solid: true, interactive: false },
      { y: 4, x: 18, material: 'KEW', solid: true, interactive: false },
      { y: 4, x: 19, material: 'KEW', solid: true, interactive: false },

      { y: 5, x: 0, material: 'KEW', solid: true, interactive: false },
      { y: 5, x: 1, material: 'KEW', solid: true, interactive: false },
      { y: 5, x: 4, material: 'KEW', solid: true, interactive: false },
      { y: 5, x: 5, material: 'KEW', solid: true, interactive: false },
      { y: 5, x: 8, material: 'KEW', solid: true, interactive: false },
      { y: 5, x: 10, material: 'KEW', solid: true, interactive: false },
      { y: 5, x: 12, material: 'KEW', solid: true, interactive: false },

      { y: 6, x: 0, material: 'KEW', solid: true, interactive: false },
      { y: 6, x: 7, material: 'KEW', solid: true, interactive: false },
      { y: 6, x: 8, material: 'KEW', solid: true, interactive: false },
      { y: 6, x: 10, material: 'KEW', solid: true, interactive: false },
      { y: 6, x: 11, material: 'KEW', solid: true, interactive: false },
      { y: 6, x: 12, material: 'KEW', solid: true, interactive: false },
      { y: 6, x: 13, material: 'KEW', solid: true, interactive: false },
      { y: 6, x: 14, material: 'KEW', solid: true, interactive: false },
      { y: 6, x: 15, material: 'KEW', solid: true, interactive: false },
      { y: 6, x: 19, material: 'KEW', solid: true, interactive: false },
      { y: 6, x: 17, material: 'KEW', solid: true, interactive: false },
      { y: 6, x: 18, material: 'KEW', solid: true, interactive: false },

      { y: 7, x: 0, material: 'KEW', solid: true, interactive: false },
      { y: 7, x: 1, material: 'KEW', solid: true, interactive: false },
      { y: 7, x: 2, material: 'KEW', solid: true, interactive: false },
      { y: 7, x: 3, material: 'KEW', solid: true, interactive: false },
      { y: 7, x: 4, material: 'KEW', solid: true, interactive: false },
      { y: 7, x: 5, material: 'KEW', solid: true, interactive: false },
      { y: 7, x: 6, material: 'KEW', solid: true, interactive: false },
      { y: 7, x: 7, material: 'KEW', solid: true, interactive: false },
      { y: 7, x: 17, material: 'KEW', solid: true, interactive: false },
      { y: 7, x: 19, material: 'KEW', solid: true, interactive: false },

      { y: 8, x: 0, material: 'KEW', solid: true, interactive: false },
      { y: 8, x: 2, material: 'KEW', solid: true, interactive: false },
      { y: 8, x: 3, material: 'KEW', solid: true, interactive: false },
      { y: 8, x: 4, material: 'KEW', solid: true, interactive: false },
      { y: 8, x: 5, material: 'KEW', solid: true, interactive: false },
      { y: 8, x: 6, material: 'KEW', solid: true, interactive: false },
      { y: 8, x: 7, material: 'KEW', solid: true, interactive: false },
      { y: 8, x: 9, material: 'KEW', solid: true, interactive: false },
      { y: 8, x: 10, material: 'KEW', solid: true, interactive: false },
      { y: 8, x: 11, material: 'KEW', solid: true, interactive: false },
      { y: 8, x: 12, material: 'KEW', solid: true, interactive: false },
      { y: 8, x: 13, material: 'KEW', solid: true, interactive: false },
      { y: 8, x: 15, material: 'KEW', solid: true, interactive: false },
      { y: 8, x: 17, material: 'KEW', solid: true, interactive: false },
      { y: 8, x: 19, material: 'KEW', solid: true, interactive: false },

      { y: 9, x: 2, material: 'KEW', solid: true, interactive: false },
      { y: 9, x: 7, material: 'KEW', solid: true, interactive: false },
      { y: 9, x: 9, material: 'KEW', solid: true, interactive: false },
      { y: 9, x: 13, material: 'KEW', solid: true, interactive: false },
      { y: 9, x: 15, material: 'KEW', solid: true, interactive: false },
      { y: 9, x: 17, material: 'KEW', solid: true, interactive: false },
      { y: 9, x: 19, material: 'KEW', solid: true, interactive: false },

      { y: 10, x: 0, material: 'KEW', solid: true, interactive: false },
      { y: 10, x: 4, material: 'KEW', solid: true, interactive: false },
      { y: 10, x: 5, material: 'KEW', solid: true, interactive: false },
      { y: 10, x: 7, material: 'KEW', solid: true, interactive: false },
      { y: 10, x: 9, material: 'KEW', solid: true, interactive: false },
      { y: 10, x: 17, material: 'KEW', solid: true, interactive: false },
      { y: 10, x: 19, material: 'KEW', solid: true, interactive: false },

      { y: 11, x: 0, material: 'KEW', solid: true, interactive: false },
      { y: 11, x: 1, material: 'KEW', solid: true, interactive: false },
      { y: 11, x: 2, material: 'KEW', solid: true, interactive: false },
      { y: 11, x: 3, material: 'KEW', solid: true, interactive: false },
      { y: 11, x: 4, material: 'KEW', solid: true, interactive: false },
      { y: 11, x: 7, material: 'KEW', solid: true, interactive: true },
      { y: 11, x: 11, material: 'KEW', solid: true, interactive: true },
      { y: 11, x: 13, material: 'KEW', solid: true, interactive: false },
      { y: 11, x: 17, material: 'KEW', solid: true, interactive: false },
      { y: 11, x: 18, material: 'KEW', solid: true, interactive: false },
      { y: 11, x: 19, material: 'KEW', solid: true, interactive: false },

      { y: 12, x: 0, material: 'KEW', solid: true, interactive: false },
      { y: 12, x: 3, material: 'KEW', solid: true, interactive: false },
      { y: 12, x: 4, material: 'KEW', solid: true, interactive: false },
      { y: 12, x: 5, material: 'KEW', solid: true, interactive: false },
      { y: 12, x: 7, material: 'KEW', solid: true, interactive: false },
      { y: 12, x: 8, material: 'KEW', solid: true, interactive: false },
      { y: 12, x: 9, material: 'KEW', solid: true, interactive: false },
      { y: 12, x: 10, material: 'KEW', solid: true, interactive: false },
      { y: 12, x: 11, material: 'KEW', solid: true, interactive: false },
      { y: 12, x: 13, material: 'KEW', solid: true, interactive: false },
      { y: 12, x: 14, material: 'KEW', solid: true, interactive: false },
      { y: 12, x: 19, material: 'KEW', solid: true, interactive: false },

      { y: 13, x: 0, material: 'KEW', solid: true, interactive: false },
      { y: 13, x: 13, material: 'KEW', solid: true, interactive: false },
      { y: 13, x: 14, material: 'KEW', solid: true, interactive: false },
      { y: 13, x: 15, material: 'KEW', solid: true, interactive: false },
      { y: 13, x: 16, material: 'KEW', solid: true, interactive: false },
      { y: 13, x: 17, material: 'KEW', solid: true, interactive: false },
      { y: 13, x: 18, material: 'KEW', solid: true, interactive: false },
      { y: 13, x: 19, material: 'KEW', solid: true, interactive: false },

      { y: 14, x: 0, material: 'KEW', solid: true, interactive: false },
      { y: 14, x: 1, material: 'KEW', solid: true, interactive: false },
      { y: 14, x: 2, material: 'KEW', solid: true, interactive: false },
      { y: 14, x: 3, material: 'KEW', solid: true, interactive: false },
      { y: 14, x: 4, material: 'KEW', solid: true, interactive: false },
      { y: 14, x: 5, material: 'KEW', solid: true, interactive: false },
      { y: 14, x: 6, material: 'KEW', solid: true, interactive: false },
      { y: 14, x: 7, material: 'KEW', solid: true, interactive: false },
      { y: 14, x: 8, material: 'KEW', solid: true, interactive: false },
      { y: 14, x: 9, material: 'KEW', solid: true, interactive: false },
      { y: 14, x: 10, material: 'KEW', solid: true, interactive: false },
      { y: 14, x: 11, material: 'KEW', solid: true, interactive: false },
      { y: 14, x: 12, material: 'KEW', solid: true, interactive: false },
      { y: 14, x: 13, material: 'KEW', solid: true, interactive: false },
      { y: 14, x: 14, material: 'KEW', solid: true, interactive: false },
      { y: 14, x: 15, material: 'KEW', solid: true, interactive: false },
      { y: 14, x: 16, material: 'KEW', solid: true, interactive: false },
      { y: 14, x: 17, material: 'KEW', solid: true, interactive: false },
      { y: 14, x: 18, material: 'KEW', solid: true, interactive: false },
      { y: 14, x: 19, material: 'KEW', solid: true, interactive: false },

    ]
  },
  {
    name: 'serverraum',
    meta: {
      start_x: 1,
      start_y: 3,
      default_material: "SRB"
    },
    data: [
      { x: 0, y: 3, material: 'door', solid: false, interactive: true, interaction: 'teleport_foyer' },
      { x: 0, y: 0, material: 'SSF', solid: true, interactive: false },
      { x: 2, y: 0, material: 'SSF', solid: true, interactive: false },
      { x: 3, y: 0, material: 'SSF', solid: true, interactive: false, },
      {
        x: 4,
        y: 0,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 5,
        y: 0,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 8,
        y: 0,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 9,
        y: 0,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 10,
        y: 0,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 11,
        y: 0,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 12,
        y: 0,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 19,
        y: 0,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 0,
        y: 1,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 5,
        y: 1,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 6,
        y: 1,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 11,
        y: 1,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 12,
        y: 1,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 13,
        y: 1,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 14,
        y: 1,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 15,
        y: 1,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 17,
        y: 1,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 19,
        y: 1,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 0,
        y: 2,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 2,
        y: 2,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 5,
        y: 2,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 6,
        y: 2,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 7,
        y: 2,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 8,
        y: 2,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 9,
        y: 2,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 12,
        y: 2,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 13,
        y: 2,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 17,
        y: 2,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 19,
        y: 2,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 2,
        y: 3,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 8,
        y: 3,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 9,
        y: 3,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 10,
        y: 3,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 12,
        y: 3,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 15,
        y: 3,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 16,
        y: 3,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 17,
        y: 3,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 19,
        y: 3,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 0,
        y: 4,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 2,
        y: 4,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 4,
        y: 4,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 5,
        y: 4,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 6,
        y: 4,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 10,
        y: 4,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 12,
        y: 4,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 15,
        y: 4,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 17,
        y: 4,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 18,
        y: 4,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 19,
        y: 4,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 0,
        y: 5,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 2,
        y: 5,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 4,
        y: 5,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 6,
        y: 5,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 8,
        y: 5,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 12,
        y: 5,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 14,
        y: 5,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 15,
        y: 5,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 17,
        y: 5,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 19,
        y: 5,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 0,
        y: 6,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 2,
        y: 6,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 6,
        y: 6,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 8,
        y: 6,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 9,
        y: 6,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 12,
        y: 6,
        material: 'SSF',
        solid: true,
        interactive: false,
      },

      {
        x: 19,
        y: 6,
        material: 'SRF',
        solid: false,
        interactive: true,
        interaction: 'game_server'
      },

      {
        x: 0,
        y: 7,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 2,
        y: 7,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 3,
        y: 7,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 4,
        y: 7,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 5,
        y: 7,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 6,
        y: 7,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 8,
        y: 7,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 9,
        y: 7,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 10,
        y: 7,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 12,
        y: 7,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 16,
        y: 7,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 18,
        y: 7,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 19,
        y: 7,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 0,
        y: 8,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 5,
        y: 8,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 8,
        y: 8,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 9,
        y: 8,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 12,
        y: 8,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 14,
        y: 8,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 15,
        y: 8,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 16,
        y: 8,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 18,
        y: 8,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 19,
        y: 8,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 0,
        y: 9,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 1,
        y: 9,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 2,
        y: 9,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 3,
        y: 9,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 5,
        y: 9,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 6,
        y: 9,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 7,
        y: 9,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 9,
        y: 9,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 10,
        y: 9,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 12,
        y: 9,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 14,
        y: 9,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 15,
        y: 9,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 16,
        y: 9,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 19,
        y: 9,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 0,
        y: 10,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 7,
        y: 10,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 9,
        y: 10,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 10,
        y: 10,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 14,
        y: 10,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 16,
        y: 10,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 19,
        y: 10,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 0,
        y: 11,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 2,
        y: 11,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 3,
        y: 11,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 4,
        y: 11,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 5,
        y: 11,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 7,
        y: 11,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 9,
        y: 11,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 10,
        y: 11,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 11,
        y: 11,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 12,
        y: 11,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 13,
        y: 11,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 14,
        y: 11,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 19,
        y: 11,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 0,
        y: 12,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 7,
        y: 12,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 14,
        y: 12,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 16,
        y: 12,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 17,
        y: 12,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 19,
        y: 12,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 0,
        y: 13,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 2,
        y: 13,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 4,
        y: 13,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 5,
        y: 13,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 6,
        y: 13,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 7,
        y: 13,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 8,
        y: 13,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 9,
        y: 13,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 10,
        y: 13,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 11,
        y: 13,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 12,
        y: 13,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 14,
        y: 13,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 16,
        y: 13,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 17,
        y: 13,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 19,
        y: 13,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 0,
        y: 14,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 1,
        y: 14,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 2,
        y: 14,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 16,
        y: 14,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 17,
        y: 14,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 18,
        y: 14,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
      {
        x: 19,
        y: 14,
        material: 'SSF',
        solid: true,
        interactive: false,
      },
    ],
  },
];
