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

// var inst1 = document.getElementById('inst1');

// inst1.addEventListener("mouseover", function() {
//   imageItemHover(inst1, 'block');
//   console.log("inst1:", "clicked");
// });
// inst1.addEventListener("mouseout", function() {
//   imageItemHover(inst1, 'none');
// });



// var imageItemHover = function(imageItemElement, option) {
//   imageItemElement.children[0].style.display = option;
// }

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function currentDiv(n) {
//   showDivs(slideIndex = n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("slides");
//   var dots = document.getElementsByClassName("demo");
//   if (n > x.length) {
//     slideIndex = 1
//   }
//   if (n < 1) {
//     slideIndex = x.length
//   }
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" opacity-off", "");
//   }
//   x[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " opacity-off";
// }