
// create slider container
const sliderContainer = document.createElement("div");
sliderContainer.style.className = "slideshow-container";
sliderContainer.style.maxWidth = "1000px";
sliderContainer.style.position= "relative";
sliderContainer.style.margin = "auto";
document.body.appendChild(sliderContainer);

// imgage container
const slider1 = document.createElement("div");
slider1.className = "mySlides";
const slider2 = document.createElement("div");
slider2.className = "mySlides";
const slider3 = document.createElement("div");
slider3.className = "mySlides";


// slider image
const iamge1 = document.createElement("img");
iamge1.src = "image1.jpg";
iamge1.style.width = "100%";
iamge1.style.height = "400px";
const iamge2 = document.createElement("img");
iamge2.src = "image2.jpg";
iamge2.style.width = "100%";
iamge2.style.height = "400px";
const iamge3 = document.createElement("img");
iamge3.src = "image3.jpg";
iamge3.style.width = "100%";
iamge3.style.height = "400px";


slider1.appendChild(iamge1);
slider2.appendChild(iamge2);
slider3.appendChild(iamge3);


sliderContainer.appendChild(slider1);
sliderContainer.appendChild(slider2);
sliderContainer.appendChild(slider3);

// Create previous element
const prevArrow = document.createElement("a");
sliderContainer.append(prevArrow);

prevArrow.innerHTML = "&#10094;";
prevArrow.className = "prev";

prevArrow.style.cursor = "pointer";
prevArrow.style.position = "absolute";
prevArrow.style.top = "50%";
prevArrow.style.width = "auto";
prevArrow.style.padding= "16px";
prevArrow.style.marginTop= "-22px";
prevArrow.style.color= "white";
prevArrow.style.fontWeight= "bold";
prevArrow.style.fontSize= "18px";
prevArrow.style.transition= "0.6s ease";
prevArrow.style.backgroundColor="red";
prevArrow.style.borderRadius= "0 3px 3px 0";
prevArrow.style.userSelect= "none";




// Create next arrow
const nextArrow = document.createElement("a");

sliderContainer.append(nextArrow);

nextArrow.innerHTML = "&#10095;";
nextArrow.className = "next";
nextArrow.style.cursor = "pointer";
nextArrow.style.position = "absolute";
nextArrow.style.top = "50%";
nextArrow.style.width = "auto";
nextArrow.style.padding= "16px";
nextArrow.style.marginTop= "-22px";
nextArrow.style.color= "white";
nextArrow.style.fontWeight= "bold";
nextArrow.style.fontSize= "18px";
nextArrow.style.transition= "0.6s ease";
nextArrow.style.borderRadius= "0 3px 3px 0";
nextArrow.style.backgroundColor="red";
nextArrow.style.userSelect= "none";
nextArrow.style.right = "0px";
nextArrow.style.borderRadius = "3px 0 0 3px";

// add bottom dot
var bottomDot =  document.createElement("div");
bottomDot.style.textAlign = "center";
var dot1 =  document.createElement("span");
dot1.className = "dot";

var dot2 =  document.createElement("span");
dot2.className = "dot";

var dot3 =  document.createElement("span");
dot3.className = "dot";


bottomDot.appendChild(dot1);
bottomDot.appendChild(dot2);
bottomDot.appendChild(dot3);

document.body.appendChild(bottomDot);
var dot = document.getElementsByClassName("dot");

for (let index = 0; index < dot.length; index++){
  dot[index].style.cursor = "pointer";
  dot[index].style.heigh = "15px";
  dot[index].style.width = "15px";
  dot[index].style.margin= "0 2px";
  dot[index].style.backgroundColor = "red";
  dot[index].style.borderRadius = "50%";
  dot[index].style.display = "inline-block";
  dot[index].style.transition = "background-color 0.6s ease";
}

// dot.forEach(element => {
//   element.style.cursor = "pointer";
//   element.style.heigh = "15px";
//   element.style.width = "15px";
//   element.style.margin = "0 2px";
//   element.style.backgroundColor = "red";
//   element.style.borderRadius = "50%";
//   element.style.display = "inline-block";
//   element.style.transition = "background-color 0.6s ease";
// });


// slide manipulation

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
console.log(n);
 
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
  
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

document.querySelector(".prev").addEventListener("click",function(){
  plusSlides(-1);
});

document.querySelector(".next").addEventListener("click",function(){
  plusSlides(1);
});


// Dots eventListner
dot1.addEventListener("click",function (){
  currentSlide(1);
});

dot2.addEventListener("click",function (){
  currentSlide(2);
});

dot3.addEventListener("click",function (){
  currentSlide(3);
});




