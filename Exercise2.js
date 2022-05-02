function myClickEvent() {
  var element = document.getElementById("circle");
  element.style.backgroundColor = "blue";
}
function myLoadFunction() {
  var element = document.getElementById("circle");
  element.addEventListener("click", myClickEvent);
}
document.addEventListener("DOMContentLoaded", myLoadFunction);
