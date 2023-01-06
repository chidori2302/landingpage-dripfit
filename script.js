let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
let dot = ["dot1", "dot2"]
showSlides(1, 0);
showSlides(1, 1);

function currentSlide(n, no) {
  showSlides(slideIndex[no]= n, no);
}

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  let dots = document.getElementsByClassName(dot[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  x[slideIndex[no]-1].style.display = "block";  
  dots[slideIndex[no]-1].className += " active";
}



