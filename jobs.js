

/**
 * Created by sebastianlee on 11/28/14.
 *
 */

/*global exports */

var area_services = [
  {
    "id": 44,
    "room": "Bedroom, Bedroom 1",
    "area": "Cabinet/Shelf",
    "issue": {
      "id": 44,
      "template_issue": {
        "id": 183,
        "name": "Damaged",
        "status": "damaged",
        "quotation_required": true,
        "additional_instructions": "",
        "template_area": 37
      },
      "remarks": "Cabinet is damaged",
      "client_image_id": "1420359546928",
      "image_count": 0
    },
    "service_images": [],
    "service_solutions": [
      {
        "id": 72,
        "unit_price": 100,
        "name": "Carpenter will fix the problem",
        "unit": "",
        "quantity": 1,
        "description": "Shelving will be fixed by carpenter who can re-install and do x,y & z.",
        "selected": true,
        "selected_datetime": "2015-01-07T10:46:39.988995Z",
        "optional": false,
        "solution": 35,
        "area_service": 44,
        "customer_status": "scheduled",
        "au_status": "Drop off",
        "service_scheduled_date": "2015-01-07",
        "service_scheduled_time": "0800 - 1000",
      }
    ],
    "service_type": "area_service",
    "user_changeable": false,
    "user_data_remarks": "Cabinet is damaged",
    "requires_quotation": true,
    "service_provider_selected": false,
    "selected": true,
    "selected_datetime": "2015-01-07T10:46:39.992506Z",
    "description": "",
    "service_report": 30,
    "job": 1,
    "accepted_quotation": null
  },
  {
    "id": 45,
    "room": "Bedroom, Bedroom 1",
    "area": "Ceiling Light",
    "issue": {
      "id": 45,
      "template_issue": {
        "id": 43,
        "solutions": [
          {
            "id": 33,
            "service_types": [
              {
                "id": 1,
                "name": "Electrician"
              }
            ],
            "name": "Electrician will fix",
            "recommended_unit_price": "100.00",
            "unit": "",
            "description": "",
            "issue": 43
          }
        ],
        "name": "Damaged",
        "status": "damaged",
        "quotation_required": true,
        "additional_instructions": "",
        "template_area": 9
      },
      "remarks": "Light not shining",
      "client_image_id": "1420359752285",
      "image_count": 0
    },
    "service_images": [],
    "service_solutions": [
      {
        "id": 73,
        "unit_price": 200,
        "name": "Electrician will fix",
        "unit": "per piece",
        "quantity": 1,
        "description": "",
        "selected": true,
        "selected_datetime": "2015-01-07T10:46:39.998485Z",
        "optional": false,
        "solution": 33,
        "area_service": 45,
        "customer_status": "scheduled",
        "au_status": "Drop off",
        "service_scheduled_date": "2015-01-07",
        "service_scheduled_time": "0800 - 1000",
      }
    ],
    "service_type": "area_service",
    "user_changeable": false,
    "user_data_remarks": "Light not shining",
    "requires_quotation": true,
    "service_provider_selected": false,
    "selected": true,
    "selected_datetime": "2015-01-07T10:46:40.001454Z",
    "description": "",
    "service_report": 30,
    "job": 1,
    "accepted_quotation": null
  },
  {
    "id": 46,
    "room": "Kitchen, Kitchen 1",
    "area": "Oven",
    "issue": {
      "id": 46,
      "template_issue": {
        "id": 133,
        "solutions": [
          {
            "id": 34,
            "service_types": [
              {
                "id": 1,
                "name": "Electrician"
              }
            ],
            "name": "Requires Viewing",
            "recommended_unit_price": "0.00",
            "unit": "",
            "description": "",
            "issue": 133
          }
        ],
        "name": "Damaged",
        "status": "damaged",
        "quotation_required": true,
        "additional_instructions": "",
        "template_area": 27
      },
      "remarks": "Over not working, can it be repaired",
      "client_image_id": "1420359915217",
      "image_count": 0
    },
    "service_images": [],
    "service_solutions": [
      {
        "id": 74,
        "unit_price": 0,
        "name": "Requires Viewing",
        "unit": "To be advised",
        "quantity": 1,
        "description": "",
        "selected": true,
        "selected_datetime": "2015-01-07T10:46:40.007699Z",
        "optional": false,
        "solution": 34,
        "area_service": 46,
        "customer_status": "completed",
        "au_status": "Drop off",
        "service_scheduled_date": "2015-01-07",
        "service_scheduled_time": "0800 - 1000",
      }
    ],
    "service_type": "area_service",
    "user_changeable": false,
    "user_data_remarks": "Over not working, can it be repaired",
    "requires_quotation": true,
    "service_provider_selected": false,
    "selected": true,
    "selected_datetime": "2015-01-07T10:46:40.011397Z",
    "description": "",
    "service_report": 30,
    "job": 1,
    "accepted_quotation": null
  },
  {
    "id": 47,
    "room": "Kitchen, Kitchen 1",
    "area": "Sink & Tap",
    "issue": {
      "id": 47,
      "template_issue": {
        "id": 163,
        "solutions": [
          {
            "id": 13,
            "service_types": [],
            "name": "Replace Tap (Basic)",
            "recommended_unit_price": null,
            "unit": "",
            "description": "some stuff",
            "issue": 163
          },
          {
            "id": 14,
            "service_types": [],
            "name": "Replace Tap (Premium)",
            "recommended_unit_price": null,
            "unit": "",
            "description": "some stuff",
            "issue": 163
          }
        ],
        "name": "Damaged",
        "status": "damaged",
        "quotation_required": true,
        "additional_instructions": "",
        "template_area": 33
      },
      "remarks": "Main sink tap leaking",
      "client_image_id": "1420359945513",
      "image_count": 0
    },
    "service_images": [],
    "service_solutions": [
      {
        "id": 76,
        "unit_price": 180,
        "name": "Replace Tap (Premium)",
        "unit": "each",
        "quantity": 1,
        "description": "some stuff",
        "selected": false,
        "selected_datetime": null,
        "optional": false,
        "solution": 14,
        "area_service": 47,
        "customer_status": "completed",
        "au_status": "Drop off",
        "service_scheduled_date": "2015-01-07",
        "service_scheduled_time": "0800 - 1000",
      },
      {
        "id": 75,
        "unit_price": 120,
        "name": "Replace Tap (Basic)",
        "unit": "each",
        "quantity": 3,
        "description": "some stuff",
        "selected": true,
        "selected_datetime": "2015-01-07T10:46:40.017965Z",
        "optional": false,
        "solution": 13,
        "area_service": 47,
        "customer_status": "pending",
        "au_status": "Drop off",
        "service_scheduled_date": "TBC",
        "service_scheduled_time": "TBC",
      }
    ],
    "service_type": "area_service",
    "user_changeable": false,
    "user_data_remarks": "Main sink tap leaking",
    "requires_quotation": true,
    "service_provider_selected": false,
    "selected": true,
    "selected_datetime": "2015-01-07T10:46:40.021327Z",
    "description": "",
    "service_report": 30,
    "job": 1,
    "accepted_quotation": null
  }
];

var carpets = [{
        "id": 15,
        "price": 120,
        "return_date": "07/01/2015",
        "service_type": "carpets",
        "user_changeable": false,
        "user_data_remarks": "this is some extra information about this carpet",
        "requires_quotation": false,
        "selected": true,
        "selected_datetime": "2015-01-07T12:14:34.765260Z",
        "unit": "",
        "remarks": "",
        "description": "Cleaned by dry cleaning",
        "quantity": 2,
        "material": "Wool and wools-bend carpet",
        "dimension_x": 5,
        "dimension_y": 5,
        "dimension_unit": "feet",
        "service_report": 30,
        "job": 4,
        "customer_status": "pending",
        "au_status": "Drop off",
        "service_scheduled_date": "TBC",
        "service_scheduled_time": "TBC"
      }];

var curtains =  [
      {
        "id": 10,
        "price": 207,
        "return_date": "07/01/2015",
        "service_type": "curtains",
        "user_changeable": false,
        "user_data_remarks": "this is a curtain service",
        "requires_quotation": false,
        "selected": true,
        "selected_datetime": "2015-01-07T12:14:53.612003Z",
        "unit": "",
        "remarks": "",
        "description": "Day Curtain at $9 per kg",
        "type": "Day curtain",
        "quantity": 23,
        "dimension": "Full length",
        "service_report": 30,
        "job": 5,
        "customer_status": "scheduled",
        "au_status": "Drop off",
        "service_scheduled_date": "15/01/2015",
        "service_scheduled_time": "0800-1000"
      }
    ];

var cleaning = [
      {
        "id": 15,
        "price": 350,
        "service_type": "cleaning",
        "user_changeable": false,
        "user_data_remarks": "",
        "requires_quotation": false,
        "selected": true,
        "selected_datetime": "2015-01-07T12:02:57.868330Z",
        "unit": "",
        "remarks": "",
        "description": "Spring Cleaning Includes X, Y & Z",
        "name": "Spring Cleaning",
        "service_report": 30,
        "job": 3,
        "customer_status": "completed",
        "au_status": "Drop off",
        "service_scheduled_date": "TBC",
        "service_scheduled_time": "TBC"
      }
    ];
var jobs = [
  {
    "id": 1,
    "service_manager": null,
    "address": "Blk 115, Ho ching road, Unit 17-104, S(610115)",
    "cleaning": cleaning,
    "curtains": curtains,
    "carpets": carpets,
    "area_services": area_services,
    "selected_datetime": "07/01/2015 12:04",
    "user": null
  },
  {
    "id": 2,
    "service_manager": null,
    "address": "Blk 685C, Jurong West Central 1, S(643685)",
    "cleaning": [],
    "curtains": [],
    "carpets": [],
    "area_services": area_services,
    "selected_datetime": "07/01/2015 12:04",
    "user": null
  }
];

exports.getJobs = function (id) {
  'use strict';
  if (+id) {
    var job = jobs.filter(function (job) {
      return job.id === +id;
    });
    return job[0];
  }
  return jobs;
};