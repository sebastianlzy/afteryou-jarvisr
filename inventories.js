/**
 * Created by sebastianlee on 11/28/14.
 *
 */

/*global exports */
var inventory, areas;
var areas = [{
  tid: 10,
  name: "Ceiling Light",
  image_uris: [],
  furniture_type: "fixed",
  quantity: 2,
  brand: "LG",
  notes: "Ceiling lights have yellowish stain on them"
},
  {
    tid: 11,
    name: "Wall Light",
    image_uris: [{ image: "http://afteryou.co//media/service_images/365_1421117155689_0.jpg" }, { image: "http://afteryou.co//media/service_images/365_1421117155689_0.jpg" }, { image: "http://afteryou.co//media/service_images/365_1421117155689_0.jpg" }, { image: "http://afteryou.co//media/service_images/365_1421117155689_0.jpg" }],
    furniture_type: "fixed",
    quantity: 2,
    brand: "LG",
    notes: "One of the wall light has its fused blown"
  },
  {
    tid: 12,
    name: "Air Conditioner",
    image_uris: [],
    furniture_type: "fixed",
    quantity: 1,
    brand: "Daikin",
    notes: "Remote controller missing"
  },
  {
    tid: 16,
    name: "Bed & Mattress",
    image_uris: [],
    furniture_type: "fixture",
    quantity: 1,
    brand: "Seahorse",
    notes: "Springy sound"
  }];
inventory = {
  address: {
    "room_count": [{ "position": 1, "type": "Bedroom", "id": 6, "default_number": 2 },
      { "position": 2, "type": "Bathroom", "id": 8, "default_number": 2 },
      { "position": 3, "type": "Living Room", "id": 5, "default_number": 1 },
      { "position": 4, "type": "Kitchen", "id": 7, "default_number": 1 },
      { "position": 5, "type": "Store Room", "id": 10, "default_number": 1 },
      { "position": 6, "type": "Balcony/Patio", "id": 9, "default_number": 0 },
      { "position": 7, "type": "Others", "id": 11, "default_number": 0 }],
    "number_of_bedroom": 3,
    "number_of_bathroom": 2,
    "name": "Sentinal",
    "block_number": "172",
    "street_name": "Jurong West",
    "unit_number": "12-345",
    "square_feet": 1111,
    "postal_code": 123444,
    "id": 293
  },
  rooms: [{ tid: 6, name: 'Bedroom ', description: "master bedroom", areas: areas },
    {
      tid: 6,
      name: 'Bedroom 1',
      areas: [{ tid: 10, name: "Ceiling Light", image_uris: [], quantity: 2, brand: "LG" }]
    },
    {
      tid: 6,
      name: 'Bedroom 2',
      areas: [{ tid: 10, name: "Ceiling Light", image_uris: [], quantity: 2, brand: "LG" }]
    },
    {
      tid: 8,
      name: 'Bathroom ',
      areas: [{ tid: 10, name: "Ceiling Light", image_uris: [], quantity: 2, brand: "LG" }]
    },
    {
      tid: 8,
      name: 'Bathroom 1',
      areas: [{ tid: 10, name: "Ceiling Light", image_uris: [], quantity: 2, brand: "LG" }]
    },
    {
      tid: 5,
      name: 'Living Room ',
      areas: [{ tid: 10, name: "Ceiling Light", image_uris: [], quantity: 2, brand: "LG" }]
    },
    {
      tid: 7,
      name: 'Kitchen ',
      areas: [{ tid: 10, name: "Ceiling Light", image_uris: [], quantity: 2, brand: "LG" }]
    },
    {
      tid: 10,
      name: 'Store Room ',
      areas: [{ tid: 10, name: "Ceiling Light", image_uris: [], quantity: 2, brand: "LG" }]
    }]
};

exports.getInventory = function () {
  'use strict';
  return inventory;
};

exports.setInventory = function (_inventory) {
  'use strict';
  inventory = _inventory;
};