var http = require("http");
var request = require("request");
var port = Number(process.env.PORT || 3000); // to deploy on Heroku!!!!!!!~~~~~~~~

var url = "https://graph.facebook.com/2014.hsnu.at.ntu/photos?type=uploaded";
//JSON is a global module not need to require//


http.createServer (function(req, res) {

  var datas = "<html><head></head><body>";
  
  request.get(url, function (err,body,result) {

    //~~~~~~~~~~~~~
    result = JSON.parse(result);
    result.data.forEach(function (val,idx) {
      if (val.comments != null){
        datas += "<meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\">"
        datas += "<img src ='" + val.images[5].source + "'><br>";
        val.comments.data.forEach(function (tt,idx){
        
          datas += "<h3 style=\"color: blue \">" + tt.from.name + "</h3>";
          datas += "<p>  " + tt.message + "</p>";
          //console.log(datas);
        });
      }

    });
    datas += result;
    res.end(datas);
  });
  datas += "</body></html>";
  console.log("run");
}).listen(port);

console.log("Server Created\nPort Number : "+port);

