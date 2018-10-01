function getHTML (options, callback) {

  /* Add your code here */
  var https = require('https');
  var buffStr = '';
  https.get(options, function(respond){
    respond.on('data', function(data){
    buffStr += data;
    });
    respond.on('end', function(){
      callback(buffStr);
    })
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);