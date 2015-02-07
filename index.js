/*global require, console, setTimeout*/

(function () {
  'use strict';
  var Hapi, Good, _request, _, prettyjson, server, fs, Boom, Path,
    getPath, postPath, putPath,
    rooms, roomWithAreas, areas, areaWithIssues, listing, serviceReports,
    _listings, _rooms, _roomsWithAreas, _areas, _areasWithIssues, _serviceReports, _messages, _jobs, _inventories,
    postLogin, postListing, postRequest, putServiceReport, postNotificationToken, postFeedback, postChangePassword, postSRmail, postMessageServiceReport, postInventoryListing,
    getFromOneMap, getStreetName, token, renewToken = false;

  //NODE METHOD
  Hapi = require('hapi');
  Good = require('good');
  Boom = require('boom');
  Path = require('path');
  _ = require('lodash');
  fs = require('fs');
  prettyjson = require('prettyjson');
  _request = require('request');
  server = Hapi.createServer('0.0.0.0', 3000, { json: { space: 2 }, cors: true, router: { stripTrailingSlash: true }, files: { relativeTo: Path.join(__dirname, 'images')}});
  server.state('session', {
    ttl: 24 * 60 * 60 * 1000,     // One day
    isSecure: true,
    path: '/',
    encoding: 'base64json'
  });
  //JARVIS OBJECTS
  _inventories = require('./inventories.js');
  _listings = require('./listings.js');
  _rooms = require('./rooms.js');
  _roomsWithAreas = require('./roomWithAreass');
  _areas = require('./areas');
  _areasWithIssues = require('./areasWithIssues');
  _serviceReports = require('./serviceReports');
  _messages = [
    {
      "user": {
        "id": 12,
        "username": "deepan@afteryou.co"
      },
      "id": 50,
      "content": "Good bye",
      "creation_date": "01/12/2014 17:01"
    },
    {
      "user": {
        "id": 11,
        "username": "sebastian@afteryou.co"
      },
      "id": 49,
      "content": "Hello",
      "creation_date": "01/12/2014 17:01"
    }
  ];
  _jobs = require('./jobs');
  //HANDLER METHODS
  getPath = function (path, handler) {
    server.route({
      method: 'GET',
      path: path,
      handler: handler
    });
  };
  postPath = function (path, handler) {
    server.route({
      method: 'POST',
      path: path,
      handler: handler
    });
  };
  putPath = function (path, handler) {
    server.route({
      method: 'PUT',
      path: path,
      handler: handler
    });
  };
  //ONE MAP
  getFromOneMap = function (searchValue, reply, token) {
    var searchResult, coordinateX, coordinateY;
    function getName(token, x, y) {
      return 'http://www.onemap.sg/API/services.svc/revgeocode?token=' + token + '&location=' + x + ',' + y;
    }
    function getCoordinate(token, searchValue) {
      return 'http://www.onemap.sg/API/services.svc/basicSearch?token=' + token + '&searchVal=' + searchValue + '&otptFlds=SEARCHVAL,CATEGORY&returnGeom=0&rset=1';
    }
    try {
      _request(getCoordinate(token, searchValue), function (error, response, body) {
        if (!error && response.statusCode === 200) {
          try {
            searchResult = JSON.parse(body).SearchResults[1];
            coordinateX = searchResult.X;
            coordinateY = searchResult.Y;
          } catch (err) {
            renewToken = true;
            console.log(error);
          }
          console.log(prettyjson.render(JSON.parse(body)));
          _request(getName(token, coordinateX, coordinateY), function (error, response, body) {
            if (!error && response.statusCode === 200) {
              console.log(prettyjson.render(JSON.parse(body)));
              reply(JSON.parse(body).GeocodeInfo[0].ROAD);
            } else {
              renewToken = true;
              console.log(error);
            }
          });
        } else {
          renewToken = true;
          console.log(error);
        }
      });
    } catch (err) {
      token = 'invalid';
      console.log(err);
    }
  };
  getStreetName = function (request, reply) {
    function getOneMapToken(accessKey) {
      return 'http://www.onemap.sg/API/services.svc/getToken?accessKEY=' + accessKey;
    }
    var accessKey, searchValue;
    searchValue = request.params.searchValue;
    accessKey = 'J4sIOv0L4uclNQIYVlzmRJJUi1hajGYFF/fpL5quwMjgXz3zo8UpjFAz/zRsZkVLrco3KmgW7mTpaHRVSZDYVN57oQzzD/Of|mv73ZvjFcSo=';
    if (renewToken) {
      _request(getOneMapToken(accessKey), function (error, response, body) {
        if (!error && response.statusCode === 200) {
          console.log(prettyjson.render(JSON.parse(body)));
          token = JSON.parse(body).GetToken[0].NewToken;
          renewToken = false;
          getFromOneMap(searchValue, reply, token);
        } else {
          console.log(error);
        }
      });
    } else {
      getFromOneMap(searchValue, reply, token);
    }
  };
  //GET METHODS
  rooms = function (id) {
    if (isNaN(id)) {
      return _rooms.getAll();
    }
    return _.find(_rooms.getAll(), { id: +id });
  };
  roomWithAreas = function (id) {
    if (isNaN(id)) {
      return _roomsWithAreas.getAll();
    }
    return _.find(_roomsWithAreas.getAll(), { id: +id });
  };
  areas = function (id) {
    if (isNaN(id)) {
      return _areas.getAll();
    }
    return _.find(_areas.getAll(), { id: +id });
  };
  areaWithIssues = function (id) {
    if (isNaN(id)) {
      return _areasWithIssues.getAll();
    }
    return _.find(_areasWithIssues.getAll(), { id: +id });
  };
  listing = function () {
    return _listings.getAll();
  };
  serviceReports = function (id) {
    if (isNaN(id)) {
      return _serviceReports.getAll();
    }
    _serviceReports.setServiceReportLatest(290, false);
    return _serviceReports.getServiceReport(+id);
  };
  //GET PATHS
  getPath("/agent_app/template/areas/{id?}", function (request, reply) {
    reply(areas(encodeURIComponent(request.params.id)));
  });
  getPath("/agent_app/template/areas/issues", function (request, reply) {
    reply(areaWithIssues());
  });
  getPath("/agent_app/template/areas/{id}/issues", function (request, reply) {
    reply(areaWithIssues(encodeURIComponent(request.params.id)));
  });
  getPath("/agent_app/template/rooms/{id?}", function (request, reply) {
    reply(rooms(encodeURIComponent(request.params.id)));
  });
  getPath("/agent_app/template/rooms/{id}/areas", function (request, reply) {
    reply(roomWithAreas(encodeURIComponent(request.params.id)));
  });
  getPath("/agent_app/template/rooms/areas", function (request, reply) {
    reply(roomWithAreas());
  });
  getPath("/agent_app/listing", function (request, reply) {
    reply(listing());
  });
  getPath("/agent_app/service_report/{id?}", function (request, reply) {
    reply(serviceReports(encodeURIComponent(request.params.id)))
  });
  getPath("/agent_app/service_report/order_form/{slug?}", function (request, reply) {
    var slug = request.params.slug;
    if (slug) {
      reply(_serviceReports.getServiceReport(290));
    } else {
      reply(Boom.badRequest('No slug in params'));
    }
  });
  getPath("/agent_app/streetName/{searchValue}", getStreetName);
  getPath("/agent_app/messages/ServiceReport/{id}", function (request, reply) {
    reply(_messages);
  });
  getPath("/agent_app/jobs/{id?}", function (request, reply) {
    reply(_jobs.getJobs(encodeURIComponent(request.params.id)));
  });
  getPath("/agent_app/inventories/{id?}", function (request, reply) {
    var id = request.params.id;
    if (id) {
      reply(_inventories.getInventory());
    } else {
      reply(_inventories.getAll());
    }
  });
  getPath("/agent_app/news", function (request, reply) {
    var news = [
      {
        "id": 16,
        "title": "New order form",
        "message": "Order Form for 172, Bukit Batok West Ave 8, #15-160, S(650172) is ready",
        "type": "agent_new_orderform",
        "url": "",
        "created": "2015-02-03T09:26:21.621709Z"
      }
      //{
      //  "id": 15,
      //  "title": "CNY offer",
      //  "message": "50% discount on all spring cleaning services. Offer end on 21 Feb 2015 ",
      //  "type": "agent_app_offer",
      //  "url": "http://afteryou.co/#/",
      //  "created": "2015-02-03T09:26:19.320214Z"
      //},
      //{
      //  "id": 15,
      //  "title": "Job updates",
      //  "message": "1 job in 668C, Jurong West Central 2, #15-29, S(6444444) has been scheduled ",
      //  "type": "agent_app_job",
      //  "url": "http://afteryou.co/#/",
      //  "created": "2015-02-03T09:26:19.320214Z"
      //}
    ];
    reply(news);
  });
  server.route({
    method: 'GET',
    path: '/agent_app/images/{filename}',
    handler: {
      file: function (request) {
        return request.params.filename;
      }
    }
  });
  //POST METHODS
  function logRequest(request, request_name) {
    request_name = request_name || "DEBUG";
    var payload = request.payload;
    console.log('============================ ' + request_name + ' ==========================');
    console.log(prettyjson.render(payload));
  }
  postLogin = function (request, reply) {
    var payload = request.payload;
    logRequest(request, 'login');
    if (payload.username === 'sebastian@afteryou.co' && payload.password === 'password') {
      reply({ user_id: 123, full_name: "sebastian lee", token: "083f1b280baad0f1cd0b53dc759d433de0a687ectest" });
    } else {
      reply(Hapi.error.badRequest('Invalid Credential'));
    }
  };
  postListing = function (request, reply) {
    logRequest(request, 'Listing');
    _listings.addListing(request.payload);
    reply({ id: 4 });
  };
  postRequest = function (request, reply) {
    console.log(JSON.stringify(request.payload));
    logRequest(request, 'Request');
    setTimeout(function () {
      _serviceReports.setServiceReportLatest(290, true);
    }, 4000);

    reply({ id: 1 });
  };
  putServiceReport = function (request, reply) {
    logRequest(request, 'Put Service Report');
    _serviceReports.setUserChangeable(request.payload);
    reply(request.payload);
  };
  postNotificationToken = function (request, reply) {
    reply(request.payload);
    logRequest(request, 'Token');
  };
  postInventoryListing = function (request, reply) {

    _inventories.setInventory(request.payload);
    request.payload.id = 101;
    reply(request.payload);

    logRequest(request, 'Inventory Listing');
  };
  postFeedback = function (request, reply) {
    logRequest(request, "Feedback");
    reply("Feedback received");
  };
  postChangePassword = function (request, reply) {
    logRequest(request, "New Password");
  };
  postSRmail = function (request, reply) {
    //_request.post("http://localhost:3002/agent_app/service_report/send_mail");
    logRequest(request, "Mail SR");
    reply({slug: "TZO6BU"});
  };
  postMessageServiceReport = function (request, reply) {
    var newMessage = {
      "user": {
        "id": 11,
        "username": "sebastian@afteryou.co"
      },
      "id": 51,
      "content": request.payload.content || "HELLO",
      "creation_date": "01/12/2014 17:01"
    };
    _messages.unshift(newMessage);
    logRequest(request, "Messages Service Report");
    reply(newMessage);
  };
  //IMAGE UPLOAD
  server.route({
    method: 'POST',
    path: '/agent_app/request/image',
    config: {
      payload: {
        maxBytes: 209715200,
        output: 'stream',
        parse: true
      }
    },
    handler: function (request, reply) {
      var writeImage;
      writeImage = function (index) {
        request.payload.image.pipe(fs.createWriteStream("images/" + request.payload.client_image_id + "_" + index + ".jpg",
          {
            flags: 'wx',
            encoding: null
          }));
      };
      //make sure not to override images
      function imageExist(index) {
        if (fs.existsSync("images/" + request.payload.client_image_id + "_" + index + ".jpg")) {
          imageExist(index + 1);
        } else {
          writeImage(index);
        }
      }
      imageExist(0);
      reply("Received");
    }
  });
  server.route({
    method: 'POST',
    path: '/agent_app/inventories/image',
    config: {
      payload: {
        maxBytes: 209715200,
        output: 'stream',
        parse: true
      }
    },
    handler: function (request, reply) {
      var writeImage;
      writeImage = function (flag) {
        request.payload.image.pipe(fs.createWriteStream("images/" + request.payload.image.hapi.filename,
          {
            flags: flag,
            encoding: null
          }));
      };
      //make sure not to override images
      function imageExist() {
        if (fs.existsSync("images/" + request.payload.image.hapi.filename)) {
          imageExist("r+");
        } else {
          writeImage("w");
        }
      }
      imageExist();
      reply("Received");
    }
  });
  //POST PATHS
  postPath("/login", postLogin);
  postPath("/website/agent_app_signup", function (request, reply) {
    logRequest(request, "DEBUG");
    setTimeout(function () {
      reply("good");
    }, 100);
  });
  postPath("/agent_app/listing", postListing);
  postPath("/agent_app/request", postRequest);
  postPath("/agent_app/notification_token", postNotificationToken);
  postPath("/agent_app/feedback", postFeedback);
  postPath("/change_password", postChangePassword);
  postPath("/agent_app/service_report/send_mail", postSRmail);
  postPath("/agent_app/v2/service_report/order_form", postSRmail);
  postPath("/agent_app/messages/ServiceReport/{id}", postMessageServiceReport);
  postPath("/agent_app/inventory_listing", postInventoryListing);
  postPath("/agent_app/debug", function (request, reply) {
    logRequest(request, "DEBUG");
    setTimeout(function () {
      reply("good");
    }, 100);
  });
  putPath("/agent_app/service_report/order_form/{slug?}", function (request, reply) {
    var slug = request.params.slug;
    if (slug) {
      _serviceReports.setUserChangeable(request.payload);
      logRequest(request, "Order form");
      reply("received");
    } else {
      reply(Boom.badRequest('No slug in params'));
    }
  });
  putPath("/agent_app/service_report/{id}", putServiceReport);
  server.pack.register(Good, function (err) {
    if (err) {
      throw err; // something bad happened loading the plugin
    }
    server.start(function () {
      server.log('info', 'Server running at: ' + server.info.uri);
    });
  });
}());