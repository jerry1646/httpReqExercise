var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printLeetspeak (html) {

  /* Write your code here! */

// ---- if method ---
  html += "leetspeak hackeryou"
  var myStr = html.split("");
  for (i=0; i<myStr.length; i++){
    if (myStr[i] === "a"){
      myStr[i] = '4';
    }
    if (myStr[i] === 'e'){
      if(myStr [i+1] !== 'r'){
        myStr[i] = '3';
      } else{
        myStr[i] = '0';
        myStr[i+1] = 'r';
        i++;
      }
    }
    if (myStr[i] === 'l'){
      myStr[i] = '1';
    }
    if (myStr[i] === 'o'){
      myStr[i] = '0';
    }
    if (myStr[i] === 's'){
      myStr[i] = '5';
    }
    if (myStr[i] === 't'){
      myStr[i] = '7';
    }
    if (myStr[i] === 'c' && myStr[i+1] === 'k'){
      myStr[i] = 'x';
      myStr.splice(i+1, 1);
    }
    if (myStr[i] === 'y' && myStr[i+1] === 'o' && myStr[i+2] === 'u'){
      myStr[i] = 'j';
      myStr[i+1] = '0';
      myStr[i+2] = '0';
    }
  }
  var newStr = myStr.join("");
  // console.log(newStr);

// ---- replace method ----

var newHTML = html.replace(/ck/g, 'x').replace(/a/g, 4).replace(/er/g, '0r').replace(/you/g, 'j00').replace(/e/g, 3).replace(/l/g, 1).replace(/o/g, 0).replace(/s/g, 5).replace(/t/g, 7).replace(/you/g, 'j00');
console.log(newHTML == newStr);
// console.log(newHTML);
}





getHTML(requestOptions, printLeetspeak);


