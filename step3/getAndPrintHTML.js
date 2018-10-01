function getAndPrintHTML (options) {

  /* Add your code here */
  var https = require('https');
  https.get(options, function(respond){
    var buffStr = '';
    respond.on('data', function(data){
      buffStr += data;
    });
    respond.on('end',function(){
      console.log(buffStr);
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


getAndPrintHTML(requestOptions);