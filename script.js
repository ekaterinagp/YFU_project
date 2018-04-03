document.onre

var peru = document.getElementById('peru');
console.log("peru: ", peru);
var span = document.getElementsByClassName("close")[0];
var peruModal = document.querySelector(".peru-modal");

peru.addEventListener("click", function() {
  peruModal.style.display = "block";
  console.log("peru clicked", peruModal);
});


span.onclick = function() {
  peruModal.style.display = "none";
}

window.onclick = function(event) {
  console.log("window.onclick", event.target);
  if (event.target == peruModal) {
    peruModal.style.display = "none";
  }
}