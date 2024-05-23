var myVar, addNewDiv, var1;

function myFunction() {
  myVar = setTimeout(showPage, 1000);

}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("hero").style.display = "flex";
  document.getElementById("slogan").style.display = "flex";
}
