var pick="";
var second = "";
var first = "";
var locsearch="";
function activeSearch(){
  pick=document.getElementById("catselect").value;
  locsearch=document.getElementById("locselect").value;
  store();

if (pick=="Boutique"){
//alert("Oga ND");
//window.open("search.html");
store();
}else{
  store();
 // alert("Not Boutique");
}
}

function store () {
  // (A) VARIABLES TO PASS
 
first= pick;
second =locsearch;

  // (B) SAVE TO SESSION STORAGE
  // (B1) FLAT STRING OR NUMBER
  // SESSIONSTORAGE.SETITEM("KEY", "VALUE");
  sessionStorage.setItem("first", first);
  sessionStorage.setItem("second", second);
  // (B2) ARRAY OR OBJECT
  // SESSION STORAGE CANNOT STORE ARRAY AND OBJECTS
  // JSON ENCODE BEFORE STORING, CONVERT TO STRING
  sessionStorage.setItem("second", JSON.stringify(first));
sessionStorage.setItem("second", JSON.stringify(second));
 
  // (C) REDIRECT
  location.href = "search.html";
  // window.open("1b-session.html");
}