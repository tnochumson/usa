<script type="text/javascript">

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