
// script for quiz here:
<script type="text/javascript">// 

   var result;
   
   function check()

   {

      var question;
      var value1;
      var value2;
      var value3;
      var value4;
      var value5;
      var value6;
      
      question = 1;
      value1 = 0;
      value2 = 0;
      value3 = 0;
      value4 = 0;
      value5 = 0;
      value6 = 0;
      
      result = "";

      var choice;
      
      for (question = 1; question <= 3; question++) {
      
         var q = document.forms['quiz'].elements['q'+question];

            for (var i = 0; i < q.length; i++) {
               if (q[i].checked) {
                  choice = q[i].value;
               }
            }

            if (choice == "value1") {
               value1++;
            }

            if (choice == "value2") {
               value2++;
            }

            if (choice == "value3") {
               value3++;
            }

            if (choice == "value4") {
               value4++;
            }

            if (choice == "value5") {
               value5++;
            }

            if (choice == "value6") {
               value6++;
            }

         }

      if (value1 >= value2 && value1 >= value3 && value1 >= value4 && value1 >= value5 && value1 >= value6 && value1 > 0) {

         // value1 is the highest
         result = "value1";

      }

      else if (value2 > value1 && value2 >= value3 && value2 >= value4 && value2 >= value5 && value2 >= value6 && value2  > 0) {

         // value2 is the highest
         result = "value2";

      }

      else if (value3 > value1 && value3 > value2 && value3 >= value4 && value3 >= value5 && value3 >= value6 && value3 > 0) {

         // value3 is the highest
         result = "value3";

      }

      else if (value4 > value1 && value4 > value2 && value4 > value3 && value4 >= value5 && value4 >= value6 && value4 > 0) {

         // value4 is the highest
         result = "value4"; 

      }

      else if (value5 > value1 && value5 > value2 && value5 > value3 && value5 > value4 && value5 >= value6 && value5 > 0) {

         // value5 is the highest
         result = "value5";

      }

      else if (value6 > value1 && value6 > value2 && value6 > value3 && value6 > value4 && value6 > value5 && value6 > 0) {

         // value6 is the highest
         result = "value6";

      }

      else {
         result = "404";
      }

      window.location = result + '.html';

   }

// ]]>
	





//script for images switching
var interval = 1500; 
var random_display = 0;
var image_dir = "images/";
var ImageNum = 0;
imageArray = new Array();
imageArray[ImageNum++] = new imageItem(image_dir + "state-flower.png");
imageArray[ImageNum++] = new imageItem(image_dir + "state-song.png");
imageArray[ImageNum++] = new imageItem(image_dir + "state-bird.png");
imageArray[ImageNum++] = new imageItem(image_dir + "state-tree.png");
imageArray[ImageNum++] = new imageItem(image_dir + "weather.png");

var number_of_image = imageArray.length;
function imageItem(image_location) {
this.image_item = new Image();
this.image_item.src = image_location;
}
function get_ImageItemLocation(imageObj) {
return(imageObj.image_item.src)
}
function randNum(x, y) {
var range = y - x + 1;
return Math.floor(Math.random() * range) + x;
}
function getNextImage() {
if (random_display) {
ImageNum = randNum(0, number_of_image-1);
}
else {
ImageNum = (ImageNum+1) % number_of_image;
}
var new_image = get_ImageItemLocation(imageArray[ImageNum]);
return(new_image);
}

function getPrevImage() {
ImageNum = (ImageNum-1) % number_of_image;
var new_image = get_ImageItemLocation(imageArray[ImageNum]);
return(new_image);
}

function prevImage(place) {
var new_image = getPrevImage();
document[place].src = new_image;
}

function rotateImage(place) {
var new_image = getNextImage();
document[place].src = new_image;
var recur_call = "rotateImage('"+place+"')";
timerID = setTimeout(recur_call, interval);
}

//   -->