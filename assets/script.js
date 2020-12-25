// Regex Search
$(document).ready(function () {
      var wordsArray = arrayData;
     
      $("[name='username']").keyup(function () {
        var words = $(this).val().replace(/_/g, '.');
        
          console.log(words);
          try {
            var searchWord = words.toLowerCase()

            var reg = new RegExp(searchWord);
            $("#result").html('');
            for (var j = 0; j < wordsArray.length; j++) {
              var value = wordsArray[j];
              var eachWord = value.toLowerCase()

              if (reg.test(eachWord)) {

                var i;
                if (searchWord.length != eachWord.length)
                  continue;
                for (i = 0; i < searchWord.length; i++) {
                  if (searchWord[i] == '.')
                    continue;
                  if (searchWord[i] != eachWord[i])
                    break;

                }
                if (i == searchWord.length)
                  $("#result").append(value + '<br>');
              }
            }
          }
          catch (e) {
            // regular expression error
          }
        
      });
    });  

// Help Modal
  var helpModal = document.getElementById("help-modal");
  var helpBtn = document.getElementById("help-btn");
  var helpCloseBtn = document.getElementById("help-modal-close");

  helpBtn.addEventListener("click", function() {
    helpModal.style.display = "block";
  });
  helpCloseBtn.addEventListener("click", function() {
    helpModal.style.display = "none";
  });


// Character Count
var count = document.getElementById("count")
var input = document.getElementById("input")

input.addEventListener("input", function(e){
  count.innerHTML = e.target.value.length
})