    function moreinfoData() {
 
   //alert(storegloballit);
      // (A) VARIABLES TO PASS
      var first = storegloballit,
     second = ["Hello", storeglobal];
      sessionStorage.setItem("first", first);
   
   sessionStorage.setItem("second", JSON.stringify(second));
      // (C) REDIRECT
     // location.href = "1b-session.html";
      //window.open("1b-session.html");
    }
 