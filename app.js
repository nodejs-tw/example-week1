var http = require("http");
var request = require("request");
var port = 1337;
<<<<<<< HEAD


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
        datas += "<table> <thead><th colspan=\"3\">Facebook Messages</th></thead> <tbody>" + "<tr><td>";
        datas += "<img src ='" + val.images[5].source + "'><br></td></tr>";
        datas += "<tr><td>"
        val.comments.data.forEach(function (tt,idx){
        
          datas += "<h3 style=\"font-color: 'blue' \">" + tt.from.name + "</h3></td>";
          datas += "<p>  " + tt.message + "</p>";
          //console.log(datas);
        });
        datas += "</td></tr>"
      }

    });
    datas += result;
    res.end(datas);
  });
  datas += "</body></html>";
  console.log("run");
  //console.log(datas);
=======
>>>>>>> 7e238118b0c9ffa67e53359cc9370222fa718a18


<<<<<<< HEAD
=======
var url = "https://graph.facebook.com/2014.hsnu.at.ntu/photos?type=uploaded";
//JSON is a global module not need to require//


http.createServer (function(req, res) {

	var datas = "<html><head></head><body>";
	
	request.get(url, function (err,body,result) {


		result = JSON.parse(result);
		result.data.forEach(function (val,idx) {
			if (val.comments != null){
				datas += "<meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\">"
				
				//data += "<p>this</p> <img src ='" + val.source + "'><br>";
				//data += "<td><img src ='" + val.images[3].source + "'></td><br>";
				//datas += "<p>" + val.images[1].source + "</p>";
				datas += "<img src ='" + val.images[5].source + "'><br>";
				val.comments.data.forEach(function (tt,idx){
				datas += "<h3>" + tt.from.name + "</h3>";
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
	console.log(datas);

}).listen(port);

>>>>>>> 7e238118b0c9ffa67e53359cc9370222fa718a18
console.log("Server Created\nPort Number : "+port);
