
/*global require*/

(function () {
  'use strict';
  var Hapi, Good, gulp, _request, _, prettyjson, server, service_reports, service_report_134, listings;
  Hapi = require('hapi');
  Good = require('good');
  gulp = require('gulp');
  _request = require('request');
  _ = require('lodash');
  prettyjson = require('prettyjson');
  listings = require('./listings.js');


  server = Hapi.createServer('0.0.0.0', 3000, {json: { space: 2 }, cors: true, router: { stripTrailingSlash: true }});

  service_reports = [
    {
      "id": 133,
      "number_of_submission": 0,
      "latest": false,
      "address": {
        "name": "Parc Oasis",
        "block_number": "142",
        "street_name": "Bukit Batok",
        "unit_number": "12-03",
        "postal_code": 650142
      },
      "request_submitted_date": "15/10/2014",
      "sent_to_agent": false,
      "new_admin_message": false
    },
    {
      "id": 132,
      "number_of_submission": 0,
      "latest": false,
      "address": {
        "name": "Parc Oasis",
        "block_number": "142",
        "street_name": "Jurong West Central 1",
        "unit_number": "12-345",
        "postal_code": 650142
      },
      "request_submitted_date": "15/10/2014",
      "sent_to_agent": true,
      "new_admin_message": true
    },
    {
      "id": 131,
      "number_of_submission": 0,
      "latest": false,
      "address": {
        "name": "Parc Oasis",
        "block_number": "142",
        "street_name": "Jurong West Central 1",
        "unit_number": "12-345",
        "postal_code": 650142
      },
      "request_submitted_date": "15/10/2014",
      "sent_to_agent": true,
      "new_admin_message": true
    }
  ];

  service_report_134 = {
    "listing_id": 380,
    "service_by_date": "01/12/2014",
    "service_report_generated_date": "15/10/2014",
    "request_generated_date": "15/10/2014",
    "service_manager": null,
    "new_admin_message": false,
    "address": {
      "name": "Parc Oasis",
      "block_number": "142",
      "street_name": "Bukit Batok",
      "unit_number": "12-03",
      "postal_code": 650142
    },
    "area_services": [
      {
        "room": {
          "id": 589,
          "template_room": 6,
          "name": "Bedroom 1",
          "description": "First room from left"
        },
        "area": {
          "id": 12,
          "name": "Air Conditioner"
        },
        "issue": {
          "template_issue": {
            "id": 56,
            "template_area": 12,
            "name": "Air is not cold",
            "status": "damaged",
            "quotation_required": true,
            "additional_instructions": "1. Take Photo <br/>"
          },
          "id": 956,
          "remarks": "",
          "client_image_id": "1413343087884"
        },
        "solution": {
          "id": 44,
          "name": "Aircon Servicing"
        },
        "id": 956,
        "service_report": 134,
        "unit_price": "120.00",
        "unit": "",
        "quantity": 1,
        "remarks": "",
        "user_changeable": true,
        "selected": false,
        "selected_datetime": null,
        "user_data_remarks": "",
        "requires_quotation": false,
        "service_provider_selected": false,
        "is_quotable": true
      },
      {
        "room": {
          "id": 589,
          "template_room": 6,
          "name": "Bedroom 1",
          "description": "First room from left"
        },
        "area": {
          "id": 15,
          "name": "Window Curtains/Blinds"
        },
        "issue": {
          "template_issue": {
            "id": 72,
            "template_area": 15,
            "name": "Dirty",
            "status": "dirty",
            "quotation_required": true,
            "additional_instructions": ""
          },
          "id": 958,
          "remarks": "",
          "client_image_id": "1413343087886"
        },
        "solution": {
          "id": 45,
          "name": "Dry cleaning of curtains"
        },
        "id": 958,
        "service_report": 134,
        "unit_price": "20.00",
        "unit": "per kg",
        "quantity": 2,
        "remarks": "Inclusive of taking down and hanging back of curtains",
        "user_changeable": true,
        "selected": false,
        "selected_datetime": null,
        "user_data_remarks": "",
        "requires_quotation": false,
        "service_provider_selected": false,
        "is_quotable": false
      },
      {
        "room": {
          "id": 589,
          "template_room": 6,
          "name": "Bedroom 1",
          "description": "First room from left"
        },
        "area": {
          "id": 16,
          "name": "Bed & Mattress"
        },
        "issue": {
          "template_issue": {
            "id": 78,
            "template_area": 16,
            "name": "Disposal",
            "status": "disposal",
            "quotation_required": true,
            "additional_instructions": "1. Take Photo <br/> 2. Location <br/> 3. Dimensions <br/>"
          },
          "id": 959,
          "remarks": "",
          "client_image_id": "1413343087887"
        },
        "solution": {
          "id": 46,
          "name": "Disposal of bed"
        },
        "id": 959,
        "service_report": 134,
        "unit_price": "100.00",
        "unit": "per bed",
        "quantity": 1,
        "remarks": "Extra charges will be incurred if the bed cannot fit through the door or lift",
        "user_changeable": true,
        "selected": false,
        "selected_datetime": null,
        "user_data_remarks": "",
        "requires_quotation": false,
        "service_provider_selected": false,
        "is_quotable": true
      },
      {
        "room": {
          "id": 590,
          "template_room": 8,
          "name": "Bathroom 1",
          "description": "Attached to bedroom 1"
        },
        "area": {
          "id": 19,
          "name": "Chair/Stool"
        },
        "issue": {
          "template_issue": {
            "id": 93,
            "template_area": 19,
            "name": "Disposal",
            "status": "disposal",
            "quotation_required": true,
            "additional_instructions": "1. Take Photo <br/> 2. Location <br/> 3. Dimensions <br/>"
          },
          "id": 968,
          "remarks": "",
          "client_image_id": "1413343287069"
        },
        "solution": {
          "id": 47,
          "name": "Disposal of chair"
        },
        "id": 968,
        "service_report": 134,
        "unit_price": "5.00",
        "unit": "per chair",
        "quantity": 1,
        "remarks": "",
        "user_changeable": true,
        "selected": false,
        "selected_datetime": null,
        "user_data_remarks": "",
        "requires_quotation": false,
        "service_provider_selected": false,
        "is_quotable": true
      }
    ],
    "house_services": [
      {
        "name": "Tidying",
        "id": 39,
        "service_report": 134,
        "template_service": 2,
        "unit_price": "240.00",
        "unit": null,
        "quantity": 1,
        "remarks": "3 Cleaners for 2 hours",
        "user_changeable": true,
        "selected": false,
        "selected_datetime": null,
        "user_data_remarks": "",
        "requires_quotation": false
      }
    ],
    "service_start_date": null,
    "id": 134,
    "type": "walkthrough",
    "sent_to_agent": true,
    "remarks": "",
    "additional_request_data": "{\"service_manager\":{\"required\":false,\"appointment\":{\"date\":\"10/16/2014\",\"time\":\"0800-1000\"}}}",
    "service_start_time": "",
    "service_start_changeable": true,
    "is_quotable": true
  }

  var reply_service_report = 133;

  var token, renewToken = false;

  var getPath = function (path, handler) {

    server.route({
      method: 'GET',
      path: path,
      handler: handler

    });

  };

  var postPath = function (path, handler) {
    server.route({
      method: 'POST',
      path: path,
      handler: handler
    });
  };

  var patchPath = function (path, handler) {
    server.route({
      method: 'PATCH',
      path: path,
      handler: handler
    });
  };

  var putPath = function (path, handler) {
    server.route({
      method: 'PUT',
      path: path,
      handler: handler
    });
  };


//ONE MAP
  var getName = function (token, x, y) {
    return 'http://www.onemap.sg/API/services.svc/revgeocode?token=' + token + '&location=' + x + ',' + y;
  }

  var getCoordinate = function (token, searchValue) {
    return 'http://www.onemap.sg/API/services.svc/basicSearch?token=' + token + '&searchVal=' + searchValue + '&otptFlds=SEARCHVAL,CATEGORY&returnGeom=0&rset=1'
  };

  var getOneMapToken = function (accessKey) {
    return 'http://www.onemap.sg/API/services.svc/getToken?accessKEY=' + accessKey;
  };

  var getFromOneMap = function (searchValue, reply, token) {

    var searchResult, coordinateX, coordinateY;

    try {
      _request(getCoordinate(token, searchValue), function (error, response, body) {
        if (!error && response.statusCode == 200) {
          try {
            searchResult = JSON.parse(body).SearchResults[1];
            coordinateX = searchResult["X"];
            coordinateY = searchResult["Y"];
          } catch (err) {
            renewToken = true;
            console.log(error);
          }
          console.log(prettyjson.render(JSON.parse(body)));
          _request(getName(token, coordinateX, coordinateY), function (error, response, body) {
            if (!error && response.statusCode == 200) {
              console.log(prettyjson.render(JSON.parse(body)));
              reply(JSON.parse(body).GeocodeInfo[0].ROAD);
            } else {
              renewToken = true;
              console.log(error);
            }
          })
        } else {
          renewToken = true;
          console.log(error);
        }

      })
    } catch (err) {
      token = 'invalid';
      console.log(error);
    }
  }

  var getStreetName = function (request, reply) {

    var accessKey, searchValue;
    searchValue = request.params.searchValue;
    accessKey = 'J4sIOv0L4uclNQIYVlzmRJJUi1hajGYFF/fpL5quwMjgXz3zo8UpjFAz/zRsZkVLrco3KmgW7mTpaHRVSZDYVN57oQzzD/Of|mv73ZvjFcSo=';
    if (renewToken) {
      _request(getOneMapToken(accessKey), function (error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log(prettyjson.render(JSON.parse(body)));
          token = JSON.parse(body).GetToken[0].NewToken;
          renewToken = false;
          getFromOneMap(searchValue, reply, token);

        } else {
          console.log(error);
        }
      })
    } else {
      getFromOneMap(searchValue, reply, token);

    }


  };


//JARVIS
  var rooms = function (id) {
    var rooms = [
      {
        "id": 6,
        "type": "Bedroom",
        "default_number": 2,
        "position": 1
      },
      {
        "id": 8,
        "type": "Bathroom",
        "default_number": 2,
        "position": 2
      },
      {
        "id": 5,
        "type": "Living Room",
        "default_number": 1,
        "position": 3
      },
      {
        "id": 7,
        "type": "Kitchen",
        "default_number": 1,
        "position": 4
      },
      {
        "id": 10,
        "type": "Store Room",
        "default_number": 1,
        "position": 5
      },
      {
        "id": 9,
        "type": "Balcony/Patio",
        "default_number": 0,
        "position": 6
      }
    ]


    if (isNaN(id)) {

      return rooms
    }

    return _.find(rooms, { id: parseInt(id) });


  }

  var roomWithAreas = function (id) {
    var roomsWithAreas = [
      {
        "template_areas": [
          {
            "id": 2,
            "name": "Sofa Set"
          },
          {
            "id": 3,
            "name": "Coffee Table"
          },
          {
            "id": 4,
            "name": "Sideboard"
          },
          {
            "id": 5,
            "name": "Bar Counter"
          },
          {
            "id": 6,
            "name": "Display Cabinet"
          },
          {
            "id": 7,
            "name": "Television"
          },
          {
            "id": 8,
            "name": "Telephone"
          },
          {
            "id": 9,
            "name": "Chandelier"
          },
          {
            "id": 10,
            "name": "Ceiling Light"
          },
          {
            "id": 11,
            "name": "Wall Light"
          },
          {
            "id": 12,
            "name": "Air Conditioner"
          },
          {
            "id": 13,
            "name": "Fan"
          },
          {
            "id": 14,
            "name": "Shoe Rack"
          },
          {
            "id": 15,
            "name": "Window Curtains/Blinds"
          }
        ],
        "id": 5,
        "type": "Living Room",
        "default_number": 1
      },
      {
        "template_areas": [
          {
            "id": 10,
            "name": "Ceiling Light"
          },
          {
            "id": 11,
            "name": "Wall Light"
          },
          {
            "id": 12,
            "name": "Air Conditioner"
          },
          {
            "id": 13,
            "name": "Fan"
          },
          {
            "id": 15,
            "name": "Window Curtains/Blinds"
          },
          {
            "id": 16,
            "name": "Bed & Mattress"
          },
          {
            "id": 17,
            "name": "Wardrobe"
          },
          {
            "id": 18,
            "name": "Dressing Table"
          },
          {
            "id": 19,
            "name": "Chair/Stool"
          },
          {
            "id": 20,
            "name": "Side Table"
          }
        ],
        "id": 6,
        "type": "Bedroom",
        "default_number": 2
      },
      {
        "template_areas": [
          {
            "id": 10,
            "name": "Ceiling Light"
          },
          {
            "id": 11,
            "name": "Wall Light"
          },
          {
            "id": 13,
            "name": "Fan"
          },
          {
            "id": 21,
            "name": "Dining Table"
          },
          {
            "id": 22,
            "name": "Dining Chairs"
          },
          {
            "id": 23,
            "name": "Kitchen Cabinet"
          },
          {
            "id": 24,
            "name": "Cooker Hood"
          },
          {
            "id": 25,
            "name": "Cooker Hob"
          },
          {
            "id": 26,
            "name": "Refrigerator"
          },
          {
            "id": 27,
            "name": "Microwave Oven"
          },
          {
            "id": 28,
            "name": "Oven"
          },
          {
            "id": 29,
            "name": "Washing Machine"
          }
        ],
        "id": 7,
        "type": "Kitchen",
        "default_number": 1
      },
      {
        "template_areas": [
          {
            "id": 10,
            "name": "Ceiling Light"
          },
          {
            "id": 11,
            "name": "Wall Light"
          },
          {
            "id": 30,
            "name": "Water Heater"
          },
          {
            "id": 31,
            "name": "Shower Curtain"
          },
          {
            "id": 32,
            "name": "Cabinet"
          },
          {
            "id": 33,
            "name": "Toilet Bowl"
          },
          {
            "id": 34,
            "name": "Sink & Tap"
          },
          {
            "id": 35,
            "name": "Bathtub"
          }
        ],
        "id": 8,
        "type": "Bathroom",
        "default_number": 2
      },
      {
        "template_areas": [
          {
            "id": 10,
            "name": "Ceiling Light"
          },
          {
            "id": 11,
            "name": "Wall Light"
          },
          {
            "id": 15,
            "name": "Window Curtains/Blinds"
          },
          {
            "id": 36,
            "name": "Patio Table"
          },
          {
            "id": 37,
            "name": "Patio Chairs"
          }
        ],
        "id": 9,
        "type": "Balcony/Patio",
        "default_number": 0
      },
      {
        "template_areas": [
          {
            "id": 10,
            "name": "Ceiling Light"
          },
          {
            "id": 11,
            "name": "Wall Light"
          },
          {
            "id": 38,
            "name": "Cabinet/Shelf"
          }
        ],
        "id": 10,
        "type": "Store Room",
        "default_number": 1
      }
    ];

    if (isNaN(id)) {
      return roomsWithAreas;
    }
    return _.find(roomsWithAreas, { id: parseInt(id) });

  }

  var areas = function (id) {

    var areas = [
      {
        "id": 2,
        "name": "Sofa Set"
      },
      {
        "id": 3,
        "name": "Coffee Table"
      },
      {
        "id": 4,
        "name": "Sideboard"
      },
      {
        "id": 5,
        "name": "Bar Counter"
      },
      {
        "id": 6,
        "name": "Display Cabinet"
      },
      {
        "id": 7,
        "name": "Television"
      },
      {
        "id": 8,
        "name": "Telephone"
      },
      {
        "id": 9,
        "name": "Chandelier"
      },
      {
        "id": 10,
        "name": "Ceiling Light"
      },
      {
        "id": 11,
        "name": "Wall Light"
      },
      {
        "id": 12,
        "name": "Air Conditioner"
      },
      {
        "id": 13,
        "name": "Fan"
      },
      {
        "id": 14,
        "name": "Shoe Rack"
      },
      {
        "id": 15,
        "name": "Window Curtains/Blinds"
      },
      {
        "id": 16,
        "name": "Bed & Mattress"
      },
      {
        "id": 17,
        "name": "Wardrobe"
      },
      {
        "id": 18,
        "name": "Dressing Table"
      },
      {
        "id": 19,
        "name": "Chair/Stool"
      },
      {
        "id": 20,
        "name": "Side Table"
      },
      {
        "id": 21,
        "name": "Dining Table"
      },
      {
        "id": 22,
        "name": "Dining Chairs"
      },
      {
        "id": 23,
        "name": "Kitchen Cabinet"
      },
      {
        "id": 24,
        "name": "Cooker Hood"
      },
      {
        "id": 25,
        "name": "Cooker Hob"
      },
      {
        "id": 26,
        "name": "Refrigerator"
      },
      {
        "id": 27,
        "name": "Microwave Oven"
      },
      {
        "id": 28,
        "name": "Oven"
      },
      {
        "id": 29,
        "name": "Washing Machine"
      },
      {
        "id": 30,
        "name": "Water Heater"
      },
      {
        "id": 31,
        "name": "Shower Curtain"
      },
      {
        "id": 32,
        "name": "Cabinet"
      },
      {
        "id": 33,
        "name": "Toilet Bowl"
      },
      {
        "id": 34,
        "name": "Sink & Tap"
      },
      {
        "id": 35,
        "name": "Bathtub"
      },
      {
        "id": 36,
        "name": "Patio Table"
      },
      {
        "id": 37,
        "name": "Patio Chairs"
      },
      {
        "id": 38,
        "name": "Cabinet/Shelf"
      },
      {
        "id": 39,
        "name": "Others"
      }
    ]


    if (isNaN(id)) {

      return areas;
    }

    return _.find(areas, { id: parseInt(id) });


  }

  var areaWithIssues = function (id) {
    var areaWithIssues = [
      {
        "issues": [
          {
            "id": 4,
            "name": "Okay",
            "status": "ok"

          },
          {
            "id": 5,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 6,
            "name": "Damaged",
            "status": "damaged",
            "additional_instructions": "Take a photo of the damaged portion"
          },
          {
            "id": 7,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 8,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 2,
        "name": "Sofa Set"
      },
      {
        "issues": [
          {
            "id": 9,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 10,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 11,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 12,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 13,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 3,
        "name": "Coffee Table"
      },
      {
        "issues": [
          {
            "id": 14,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 15,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 16,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 17,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 18,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 4,
        "name": "Sideboard"
      },
      {
        "issues": [
          {
            "id": 19,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 20,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 21,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 22,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 23,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 5,
        "name": "Bar Counter"
      },
      {
        "issues": [
          {
            "id": 24,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 25,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 26,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 27,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 28,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 6,
        "name": "Display Cabinet"
      },
      {
        "issues": [
          {
            "id": 29,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 30,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 31,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 32,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 33,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 7,
        "name": "Television"
      },
      {
        "issues": [
          {
            "id": 34,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 35,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 36,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 37,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 38,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 8,
        "name": "Telephone"
      },
      {
        "issues": [
          {
            "id": 39,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 40,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 41,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 42,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 43,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 9,
        "name": "Chandelier"
      },
      {
        "issues": [
          {
            "id": 44,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 45,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 46,
            "name": "Damaged",
            "status": "damaged",
            "additional_instructions": "<strong>Take a photo of the damaged portion</strong><br/>Take a photo of me"
          },
          {
            "id": 47,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 48,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 10,
        "name": "Ceiling Light"
      },
      {
        "issues": [
          {
            "id": 49,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 50,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 51,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 52,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 53,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 11,
        "name": "Wall Light"
      },
      {
        "issues": [
          {
            "id": 54,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 55,
            "name": "Air is not cold",
            "status": "damaged"
          },
          {
            "id": 56,
            "name": "Leaking",
            "status": "damaged"
          },
          {
            "id": 57,
            "name": "Making loud noises",
            "status": "damaged"
          },
          {
            "id": 58,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 12,
        "name": "Air Conditioner"
      },
      {
        "issues": [
          {
            "id": 59,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 60,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 61,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 62,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 63,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 13,
        "name": "Fan"
      },
      {
        "issues": [
          {
            "id": 64,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 65,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 66,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 67,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 68,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 14,
        "name": "Shoe Rack"
      },
      {
        "issues": [
          {
            "id": 69,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 70,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 71,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 72,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 73,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 15,
        "name": "Window Curtains/Blinds"
      },
      {
        "issues": [
          {
            "id": 74,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 75,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 76,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 77,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 78,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 16,
        "name": "Bed & Mattress"
      },
      {
        "issues": [
          {
            "id": 79,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 80,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 81,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 82,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 83,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 17,
        "name": "Wardrobe"
      },
      {
        "issues": [
          {
            "id": 84,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 85,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 86,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 87,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 88,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 18,
        "name": "Dressing Table"
      },
      {
        "issues": [
          {
            "id": 89,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 90,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 91,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 92,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 93,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 19,
        "name": "Chair/Stool"
      },
      {
        "issues": [
          {
            "id": 94,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 95,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 96,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 97,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 98,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 20,
        "name": "Side Table"
      },
      {
        "issues": [
          {
            "id": 99,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 100,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 101,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 102,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 103,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 21,
        "name": "Dining Table"
      },
      {
        "issues": [
          {
            "id": 104,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 105,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 106,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 107,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 108,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 22,
        "name": "Dining Chairs"
      },
      {
        "issues": [
          {
            "id": 109,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 110,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 111,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 112,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 113,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 23,
        "name": "Kitchen Cabinet"
      },
      {
        "issues": [
          {
            "id": 114,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 115,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 116,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 117,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 118,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 24,
        "name": "Cooker Hood"
      },
      {
        "issues": [
          {
            "id": 119,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 120,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 121,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 122,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 123,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 25,
        "name": "Cooker Hob"
      },
      {
        "issues": [
          {
            "id": 124,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 125,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 126,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 127,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 128,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 26,
        "name": "Refrigerator"
      },
      {
        "issues": [
          {
            "id": 129,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 130,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 131,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 132,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 133,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 27,
        "name": "Microwave Oven"
      },
      {
        "issues": [
          {
            "id": 134,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 135,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 136,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 137,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 138,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 28,
        "name": "Oven"
      },
      {
        "issues": [
          {
            "id": 139,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 140,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 141,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 142,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 143,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 29,
        "name": "Washing Machine"
      },
      {
        "issues": [
          {
            "id": 144,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 145,
            "name": "No hot water",
            "status": "damaged"
          },
          {
            "id": 146,
            "name": "Pipe is burst",
            "status": "damaged"
          },
          {
            "id": 147,
            "name": "Rusty pipe",
            "status": "dirty"
          },
          {
            "id": 148,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 30,
        "name": "Water Heater"
      },
      {
        "issues": [
          {
            "id": 149,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 150,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 151,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 152,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 153,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 31,
        "name": "Shower Curtain"
      },
      {
        "issues": [
          {
            "id": 154,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 155,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 156,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 157,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 158,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 32,
        "name": "Cabinet"
      },
      {
        "issues": [
          {
            "id": 159,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 160,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 161,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 162,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 163,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 33,
        "name": "Toilet Bowl"
      },
      {
        "issues": [
          {
            "id": 164,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 165,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 166,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 167,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 168,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 34,
        "name": "Sink & Tap"
      },
      {
        "issues": [
          {
            "id": 169,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 170,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 171,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 172,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 173,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 35,
        "name": "Bathtub"
      },
      {
        "issues": [
          {
            "id": 174,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 175,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 176,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 177,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 178,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 36,
        "name": "Patio Table"
      },
      {
        "issues": [
          {
            "id": 179,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 180,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 181,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 182,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 183,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 37,
        "name": "Patio Chairs"
      },
      {
        "issues": [
          {
            "id": 184,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 185,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 186,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 187,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 188,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 38,
        "name": "Cabinet/Shelf"
      },
      {
        "issues": [
          {
            "id": 189,
            "name": "Okay",
            "status": "ok"
          },
          {
            "id": 190,
            "name": "Unknown",
            "status": "unknown"
          },
          {
            "id": 191,
            "name": "Damaged",
            "status": "damaged"
          },
          {
            "id": 192,
            "name": "Dirty",
            "status": "dirty"
          },
          {
            "id": 193,
            "name": "Disposal",
            "status": "disposal"
          }
        ],
        "id": 39,
        "name": "Others"
      }
    ]

    if (isNaN(id)) {
      return areaWithIssues;
    }


    return _.find(areaWithIssues, { id: parseInt(id) });

  }

  var services = function (id) {
    var services_name = [{
      tid: 1, name: "spring_cleaning",
      help_text: "we are spring cleaning your place"
    }, { tid: 2, name: "tidying", help_text: "we are tidying up your place" }];

    return services_name;
  }

  var listing = function (id) {

    return listings.getAll();

  }

  var getAreas = function (request, reply) {
    reply(areas(encodeURIComponent(request.params.id)));
  }

  var getAreaWithIssues = function (request, reply) {
    reply(areaWithIssues(encodeURIComponent(request.params.id)));
  }

  var getAreasWithIssues = function (request, reply) {
    reply(areaWithIssues());
  }

  var getRooms = function (request, reply) {
    reply(rooms(encodeURIComponent(request.params.id)));
  }

  var getRoomWithAreas = function (request, reply) {
    reply(roomWithAreas(encodeURIComponent(request.params.id)));
  }

  var getRoomsWithAreas = function (request, reply) {

    reply(roomWithAreas());
  }

  var getServices = function (request, reply) {
    reply(services(encodeURIComponent(request.params.id)));
  }

  var getListing = function (request, reply) {


    reply(listing());
  }

  var getServiceReports = function (request, reply) {

    reply(service_reports);

  }

  var messageServiceReport = [

    {
      "user": {
        "id": 111,
        "username": "deepan@afteryou.co"

      },
      "creation_date": "2014/11/03 13:00:12",
      "id": 5,
      "content": "Yes. Service is included"
    },
    {
      "user": {
        "id": 123,
        "username": "sebastian@afteryou.co"

      },
      "creation_date": "2014/11/03 12:00:12",
      "id": 11,
      "content": "Hi, Does the aircon servicing includes gas top up?"
    }
  ]

  var getMessageServiceReport = function (request, reply) {
    try {
      //service report 134
      var service_report = _.find(service_reports, { id: 134 })
      service_report.new_admin_message = false;
      service_report_134.new_admin_message = false;
      console.log("set new admin message to false")
    } catch (e) {

    }
    reply(messageServiceReport);

  }

  var getServiceReport = function (request, reply) {

    var id = encodeURIComponent(request.params.id);


    var service_report_133 = {
      "listing_id": 380,
      "service_by_date": "01/12/2014",
      "service_report_generated_date": null,
      "request_generated_date": "15/10/2014",
      "service_manager": null,
      "new_admin_message": false,
      "address": {
        "name": "Parc Oasis",
        "block_number": "142",
        "street_name": "Bukit Batok",
        "unit_number": "12-03",
        "postal_code": 650142
      },
      "area_services": [
        {
          "room": {
            "id": 589,
            "template_room": 6,
            "name": "Bedroom 1",
            "description": "First room from left"
          },
          "area": {
            "id": 12,
            "name": "Air Conditioner"
          },
          "issue": {
            "template_issue": {
              "id": 56,
              "template_area": 12,
              "name": "Air is not cold",
              "status": "damaged",
              "quotation_required": true,
              "additional_instructions": "1. Take Photo <br/>"
            },
            "id": 956,
            "remarks": "",
            "client_image_id": "1413343087884"
          },
          "solution": null,
          "id": 956,
          "service_report": 134,
          "unit_price": null,
          "unit": null,
          "quantity": 1,
          "remarks": "",
          "user_changeable": false,
          "selected": false,
          "selected_datetime": null,
          "user_data_remarks": "",
          "requires_quotation": true,
          "service_provider_selected": false
        },
        {
          "room": {
            "id": 589,
            "template_room": 6,
            "name": "Bedroom 1",
            "description": "First room from left"
          },
          "area": {
            "id": 15,
            "name": "Window Curtains/Blinds"
          },
          "issue": {
            "template_issue": {
              "id": 72,
              "template_area": 15,
              "name": "Dirty",
              "status": "dirty",
              "quotation_required": true,
              "additional_instructions": ""
            },
            "id": 958,
            "remarks": "",
            "client_image_id": "1413343087886"
          },
          "solution": null,
          "id": 958,
          "service_report": 134,
          "unit_price": null,
          "unit": null,
          "quantity": 1,
          "remarks": "",
          "user_changeable": false,
          "selected": false,
          "selected_datetime": null,
          "user_data_remarks": "",
          "requires_quotation": true,
          "service_provider_selected": false
        },
        {
          "room": {
            "id": 589,
            "template_room": 6,
            "name": "Bedroom 1",
            "description": "First room from left"
          },
          "area": {
            "id": 16,
            "name": "Bed & Mattress"
          },
          "issue": {
            "template_issue": {
              "id": 78,
              "template_area": 16,
              "name": "Disposal",
              "status": "disposal",
              "quotation_required": true,
              "additional_instructions": "1. Take Photo <br/> 2. Location <br/> 3. Dimensions <br/>"
            },
            "id": 959,
            "remarks": "",
            "client_image_id": "1413343087887"
          },
          "solution": null,
          "id": 959,
          "service_report": 134,
          "unit_price": null,
          "unit": null,
          "quantity": 1,
          "remarks": "",
          "user_changeable": false,
          "selected": false,
          "selected_datetime": null,
          "user_data_remarks": "",
          "requires_quotation": true,
          "service_provider_selected": false
        },
        {
          "room": {
            "id": 590,
            "template_room": 8,
            "name": "Bathroom 1",
            "description": "Attached to bedroom 1"
          },
          "area": {
            "id": 19,
            "name": "Chair/Stool"
          },
          "issue": {
            "template_issue": {
              "id": 93,
              "template_area": 19,
              "name": "Disposal",
              "status": "disposal",
              "quotation_required": true,
              "additional_instructions": "1. Take Photo <br/> 2. Location <br/> 3. Dimensions <br/>"
            },
            "id": 968,
            "remarks": "",
            "client_image_id": "1413343287069"
          },
          "solution": null,
          "id": 968,
          "service_report": 134,
          "unit_price": null,
          "unit": null,
          "quantity": 1,
          "remarks": "",
          "user_changeable": false,
          "selected": false,
          "selected_datetime": null,
          "user_data_remarks": "",
          "requires_quotation": true,
          "service_provider_selected": false
        }
      ],
      "house_services": [
        {
          "name": "Tidying",
          "id": 39,
          "service_report": 134,
          "template_service": 2,
          "unit_price": null,
          "unit": null,
          "quantity": 1,
          "remarks": "",
          "user_changeable": false,
          "selected": false,
          "selected_datetime": null,
          "user_data_remarks": "",
          "requires_quotation": true
        }
      ],
      "service_start_date": null,
      "id": 134,
      "type": "walkthrough",
      "sent_to_agent": false,
      "remarks": "",
      "additional_request_data": "{\"service_manager\":{\"required\":false,\"appointment\":{\"date\":\"10/16/2014\",\"time\":\"0800-1000\"}}}",
      "service_start_time": "",
      "service_start_changeable": true
    }

    var service_report_135 = {
      "listing_id": 380,
      "service_by_date": "01/12/2014",
      "service_report_generated_date": "16/10/2014",
      "request_generated_date": "15/10/2014",
      "service_manager": null,
      "new_admin_message": true,
      "address": {
        "name": "Parc Oasis",
        "block_number": "142",
        "street_name": "Bukit Batok",
        "unit_number": "12-03",
        "postal_code": 650142
      },
      "area_services": [
        {
          "room": {
            "id": 591,
            "template_room": 5,
            "name": "Bathroom 1",
            "description": ""
          },
          "area": {
            "id": 9,
            "name": "Water Heater"
          },
          "issue": {
            "template_issue": {
              "id": 41,
              "template_area": 9,
              "name": "Damaged",
              "status": "damaged",
              "quotation_required": true,
              "additional_instructions": "1. Take Photo <br/> 2. Type of lightbulb <br/> 3. Voltage of lightbulb <br/>"
            },
            "id": 969,
            "remarks": "",
            "client_image_id": "1413345118531"
          },
          "solution": {
            "id": 48,
            "name": "No hot water"
          },
          "id": 969,
          "service_report": 135,
          "unit_price": "40.00",
          "unit": "",
          "quantity": 1,
          "remarks": "",
          "user_changeable": false,
          "selected": false,
          "selected_datetime": null,
          "user_data_remarks": "",
          "requires_quotation": false,
          "service_provider_selected": false
        }
      ],
      "house_services": [],
      "service_start_date": null,
      "id": 135,
      "type": "quick_request",
      "sent_to_agent": false,
      "remarks": "",
      "additional_request_data": "{\"service_manager\":{\"required\":false,\"appointment\":{\"date\":\"10/16/2014\",\"time\":\"0800-1000\"}}}",
      "service_start_time": "",
      "service_start_changeable": true
    };

    switch (+id) {

      case 135 :
        reply(service_report_135);

      case 134 :
        if (reply_service_report === 134) {
          reply(service_report_134);
        } else {
          reply(service_report_133);
        }


        break;

      case 133 :
        reply(service_report_133);

        break;

      case 132 :
        reply(service_report_134);
        break;

    }
  }

//POST

  var logRequest = function (request, request_name) {

    request_name = request_name || "DEBUG";
    var payload = request.payload;
    console.log('============================ ' + request_name + ' ==========================')
    console.log(prettyjson.render(payload));

  }

  var login = function (request, reply) {
    var payload = request.payload;
    logRequest(request, 'login');
    if (payload.username === 'sebastian@afteryou.co' && payload.password === 'password') {
      reply({ user_id: 123, full_name: "sebastian lee", token: "083f1b280baad0f1cd0b53dc759d433de0a687ectest" })
    } else {
      var error = Hapi.error.badRequest('Invalid Credential');

      reply(error);
    }

  }

  var postListing = function (request, reply) {
    logRequest(request, 'Listing');
    reply({ id: 1 });
  }

  var postRequest = function (request, reply) {
    logRequest(request, 'Request');

    if (request.payload.type === "walkthrough") {
      service_reports.push({
        "id": 134,
        "number_of_submission": 0,
        "latest": false,
        "address": {
          "name": "Parc Oasis",
          "block_number": "142",
          "street_name": "Bukit Batok",
          "unit_number": "12-03",
          "postal_code": 650142
        },
        "request_submitted_date": "15/10/2014",
        "sent_to_agent": false,
        "new_admin_message": false
      });

      reply({ id: 134 });
    }

    else {
      service_reports.push({
        "id": 135,
        "number_of_submission": 0,
        "latest": false,
        "address": {
          "name": "Sentinal",
          "block_number": "172",
          "street_name": "Jurong West",
          "unit_number": "12-345",
          "postal_code": 650172
        },
        "request_submitted_date": "15/10/2014",
        "sent_to_agent": false,
        "new_admin_message": false
      });

      setTimeout(function () {

        var service_report = _.find(service_reports, { id: 134 }) || _.find(service_reports, { id: 132 });
        service_report.latest = true;
        service_report.sent_to_agent = true;

      }, 1000);

      reply_service_report = 134;

      reply({ id: 135 });
    }


  }

  var postImage = function (request, reply) {
    // console.log(request);
    logRequest(request, 'Image');


  }

  var putServiceReport = function (request, reply) {

    var id = encodeURIComponent(request.params.id);
    reply(request.payload);


    logRequest(request, 'Service Report');


    if (+id === 134) {

      var service_report = _.find(service_reports, { id: 134 }) || _.find(service_reports, { id: 132 });

      service_report.latest = false;

      service_report_134 = request.payload;
      var area_services = _.filter(service_report_134.area_services, { selected: true });
      _.each(area_services, function (area_service) {
        area_service.user_changeable = false
        area_service.selected_datetime = new Date();
      });


      var house_services = _.filter(service_report_134.house_services, { selected: true });
      _.each(house_services, function (house_service) {
        house_service.user_changeable = false;

        house_service.selected_datetime = new Date();
      });

    }

  }

  var postToken = function (request, reply) {
    reply(request.payload);
    logRequest(request, 'Token');

  }

  var postDebug = function (request, reply) {

    reply("GOOD");
    logRequest(request, "DEBUG");

  }

  var postFeedback = function (request, reply) {

    reply("GOOD");
    logRequest(request, "Feedback");

  }

  var postChangePassword = function (request, reply) {

    reply("GOOD");
    logRequest(request, "New Password");

  }

  var postSRmail = function (request, reply) {
    reply("GOOD");
    logRequest(request, "Mail SR");
  }

  var postMessageServiceReport = function (request, reply) {

    var message = {
      "user": {
        "id": 123,
        "username": "sebastian@afteryou.co"

      },
      "creation_date": "2014/11/04 13:00:12",
      "id": 5,
      "content": request.payload.content
    }
    reply(message);
    setTimeout(function () {
      messageServiceReport.unshift(message)
      messageServiceReport.unshift(
        {
          "user": {
            "id": 111,
            "username": "deepan@afteryou.co"

          },
          "creation_date": "2014/11/04 13:00:12",
          "id": 6,
          "content": "Sure. Have a nice day"
        }
      )
      try {
        //service report 134

        var service_report = _.find(service_reports, { id: 134 })
        service_report.new_admin_message = true;
        service_report_134.new_admin_message = true;
      } catch (e) {

      }

    }, 3000);

    logRequest(request, "Messages Service Report");


  }


  getPath("/agent_app/template/areas/{id?}", getAreas);
  getPath("/agent_app/template/areas/issues", getAreasWithIssues)
  getPath("/agent_app/template/areas/{id}/issues", getAreaWithIssues);
  getPath("/agent_app/template/rooms/{id?}", getRooms);
  getPath("/agent_app/template/rooms/{id}/areas", getRoomWithAreas);
  getPath("/agent_app/template/rooms/areas", getRoomsWithAreas);
  getPath("/agent_app/template/services/{id?}", getServices);
  getPath("/agent_app/listing", getListing);
  getPath("/agent_app/service_report", getServiceReports);
  getPath("/agent_app/service_report/{id}", getServiceReport);
  getPath("/agent_app/messages/ServiceReport/{id}", getMessageServiceReport);
  getPath("/agent_app/streetName/{searchValue}", getStreetName);


  postPath("/login", login);
  postPath("/agent_app/listing", postListing);
  postPath("/agent_app/request", postRequest);
  postPath("/agent_app/request/image", postImage);
  postPath("/agent_app/notification_token", postToken);
  postPath("/agent_app/feedback", postFeedback);
  postPath("/change_password", postChangePassword);
  postPath("/agent_app/service_report/send_mail", postSRmail);
  postPath("/agent_app/messages/ServiceReport/{id}", postMessageServiceReport);
  postPath("/agent_app/debug", postDebug);


  putPath("/agent_app/service_report/{id}", putServiceReport);


  server.pack.register(Good, function (err) {
    if (err) {
      throw err; // something bad happened loading the plugin
    }

    server.start(function () {
      server.log('info', 'Server running at: ' + server.info.uri);
    });
  });


}())