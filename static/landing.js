var myVar, landing2, var1;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
  landing2=setTimeout(landing2,4000);

}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("hero").style.display = "flex";
  document.getElementById("slogan").style.display = "flex";
  
}
function landing2(){
  document.getElementById("hero").innerHTML="";
  document.location.href="./landing2.html";
}
