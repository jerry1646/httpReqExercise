var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  https.get(requestOptions, function(respond){
    var buffStr = '';
    respond.on('data', function(data){
      buffStr += data;
    });
    respond.on('end', function(){
      console.log(buffStr);
    });
  });
}

getAndPrintHTML();