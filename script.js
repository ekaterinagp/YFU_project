//document.onre

var china = document.getElementById('china');
console.log("china: ", china);
var span = document.getElementsByClassName("close")[0];
var chinaModal = document.querySelector(".china-modal");

china.addEventListener("click", function() {
  chinaModal.style.display = "block";
  console.log("china clicked", chinaModal);
});


span.onclick = function() {
  chinaModal.style.display = "none";
}

window.onclick = function(event) {
  console.log("window.onclick", event.target);
  if (event.target == chinaModal) {
    chinaModal.style.display = "none";
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

let stickyLogo = document.querySelector('.logo-black');
let stickyNavi = document.querySelector('.ul-sticky');
let des = document.querySelector('#destinations');
window.addEventListener('scroll', getAndCheckNavOffsetTop);
function getAndCheckNavOffsetTop() {
  let offset = des.getBoundingClientRect();
  if (offset.top <= 117) {
    stickyLogo.style.position = "fixed";
    stickyLogo.style.top = "-15px";
    stickyLogo.classList.add('show');
    stickyNavi.classList.add('show');
    stickyNavi.style.position = "fixed";
    stickyNavi.style.top = "6vw";
  } else {
    stickyNavi.classList.remove('show');
  }
}
