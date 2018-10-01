var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printReverse (html) {

  /* Write your code here! */
  var reverseStr = "";
  for (i=html.length-1;i>-1;i--){
    reverseStr += html[i];
  }

  console.log(reverseStr);


}

getHTML(requestOptions, printReverse);