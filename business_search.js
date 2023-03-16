var pick="";
var second = "";
var first = "";
var locsearch="";
function activeSearch(){
  pick=document.getElementById("catselect").value;
  locsearch=document.getElementById("locselect").value;
  store();

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
  // (C) REDIRECT
  location.href = "search.html";

}