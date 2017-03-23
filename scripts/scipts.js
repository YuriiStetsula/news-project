(function(){

    var closeButton = document.querySelector(".close")


  if (closeButton){
      closeButton.addEventListener ("click",function(){

          window.history.back()

      },false)
  }

  var cardsP = document.querySelectorAll(".about-content p")
    cardsP.forEach(function(e){
        if (e.innerText.length > 239){
          var replacedString = truncateString(e.innerText,239)
            e.innerHTML =   replacedString
        }
    })




    var cardH = document.querySelectorAll(".about-content h2")
    cardH.forEach(function(e){
        if (e.innerText.length > 41){
            var replacedString = truncateString(e.innerText,41)
            e.innerHTML =   replacedString
        }
    })

    function truncateString(str, num) {
        var newStr = "";
        if (num <= 3 ){
            newStr = str.slice(0,num) + "...";
        }else if (num >= str.length){
            return str;
        }else{
            newStr = str.slice(0,num-3) + "...";
        }

        return newStr;
    }



}())