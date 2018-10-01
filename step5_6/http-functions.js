module.exports = function getHTML (options, callback) {
    /* Your code here */
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
};