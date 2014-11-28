

/**
 * Created by sebastianlee on 11/28/14.
 *
 */

/*global exports */
exports.getAll = function () {
  'use strict';
  return {results: [
    {
      "room_count": [{ "position": 1, "type": "Bedroom", "id": 6, "default_number": 2 },
        { "position": 2, "type": "Bathroom", "id": 8, "default_number": 2 },
        { "position": 3, "type": "Living Room", "id": 5, "default_number": 1 },
        { "position": 4, "type": "Kitchen", "id": 7, "default_number": 1 },
        { "position": 5, "type": "Store Room", "id": 10, "default_number": 1 },
        { "position": 6, "type": "Balcony/Patio", "id": 9, "default_number": 0 },
        { "position": 7, "type": "Others", "id": 11, "default_number": 0 }],
      "number_of_bedroom": 3,
      "number_of_bathroom": 2,
      "name": "Parc Oasis",
      "block_number": "142",
      "street_name": "Bukit Batok",
      "unit_number": "12-03",
      "square_feet": 1234,
      "postal_code": 650123,
      "id": 292
    },
    {
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
      "id": 292
    }
  ]};
};