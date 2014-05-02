/**
 * @overview
 *
 * @author
 * @version 2014/04/26
 */

var data = "";

var http = require("http");
var request = require("request");
var fs = require("fs"), filename = "main.html", encode = "utf8";
var jsFile = "main.js";

  fs.readFile(filename, encode, function(err, file) {
  data += file;
  data += '<div id="_container" class="box" style="height:800px; width:80%; overflow:hidden; margin:0 auto;">';
  }); 


var port = 1337;
var url = "http://graph.facebook.com/aDozenOnions/photos?type=uploaded";

http.createServer(function (req, res) {
  res.writeHeader(200, {"Content-Type": "text/html"});
 
  getPhoto(url, res);

  
}).listen(port);

console.log("start server port: " + port);

function getPhoto(url, res) {

  request.get(url, function (err, body, response) {

    response = JSON.parse(response);
    response.data.forEach(function (val, idx) {
      if( val.images[5].width < val.images[5].height){
        data += "<img  class='item H' src='" + val.images[5].source + "' />";
      }
      else if( val.images[5].width > val.images[5].height){
        data += "<img class='item W' src='" + val.images[5].source + "' />";
      }
      
      
    });
    
    data += "</div></body></html>";
    res.end(data);
  });

  
}


