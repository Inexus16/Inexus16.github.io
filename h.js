function getCharacterLength(str) {
    return [...str].length;
  }

function myFunction() {
    var text = document.getElementById("name");
    var text2 = document.getElementById("message");
    var n = getCharacterLength(text2.value)

    if(text != null && text.value == '' || n < 4) 
    {
        alert("Name is empty or message not enough characters");

    }
  }



