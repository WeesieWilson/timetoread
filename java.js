var body = document.getElementsByTagName('body');
var bodyString = "";
for(var i = 0; i < body.length; i++){
  bodyString += body[i].innerHTML + " ";
};

var wordsArray = bodyString.split(" ");
console.log(wordsArray.length);

var timeToRead = function(){
  var min = 0;
  for(var i = 0; i < wordsArray.length; i+= 230){
    min = min += 1;
    }
    console.log(min + "minutes");
    return min + "minutes";
  }

  timeToRead();
