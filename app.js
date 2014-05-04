/**
 * @overview
 *
 * @author
 * @version 2014/04/26
 */

var http = require("http");
var port = Number(process.env.PORT || 3000);
var request = require("request");
var fs = require("fs");
var url = "http://graph.facebook.com/Boo/photos?type=uploaded";
var template  = "";


fs.readFile("./index.html", "utf8", function (err, result) {
    template = result;
});

// also equal
// template = fs.readFileSync("./index.html", "utf8");

http.createServer(function (req, res) {
  res.writeHeader(200, {"Content-Type": "text/html"});
  request.get(url, function (err, body, response) {

    // init data
    var data = "";

    response = JSON.parse(response);
    response.data.forEach(function (val, idx) {
      data += "<img src='" + val.images[2].source + "'>";
    });

    // replace data
    data = template.replace("{{content}}", data);
    res.end(data);
  });


}).listen(port);

console.log("start server port: " + port);


