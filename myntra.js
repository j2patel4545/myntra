var men = document.querySelector(".men");
var women = document.querySelector(".women");
var kids = document.querySelector(".kids");
var living = document.querySelector(".livings");
var beauty = document.querySelector(".beauty");
var studio = document.querySelector(".studio");

var box1 = document.querySelector("#box1"); // Use # to select by id
var box2 = document.querySelector("#box2");
var box3 = document.querySelector("#box3");
var box4 = document.querySelector("#box4");
var box5 = document.querySelector("#box5");
var box6 = document.querySelector("#box6");

var page = document.querySelector("#page1"); // Use # to select by id
var page = document.querySelector("#page1"); // Use # to select by id

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlidePosition();
}

function updateSlidePosition() {
  const offset = -currentIndex * slides[0].offsetWidth;
  slider.style.transform = `translateX(${offset}px)`;
}

// Auto swipe every 3 seconds
setInterval(nextSlide, 3000);

// Initial slide position
updateSlidePosition();











men.addEventListener("mouseenter", function(){
    box1.style.marginTop = "13vh"; 
    page.style.filter = "brightness(0.9)";
    men.style.borderBottom = "2px solid #f7237f";
});

men.addEventListener("mouseleave", function(){
    box1.style.marginTop = "-130vh"; 
    page.style.filter = "brightness(1)";
    men.style.borderBottom = "none";
});

box1.addEventListener("mouseenter", function(){
    box1.style.marginTop = "13vh"; 
    page.style.filter = "brightness(0.9)";
    men.style.borderBottom = "2px solid #f7237f";
});

box1.addEventListener("mouseleave", function(){
    box1.style.marginTop = "-130vh"; 
    page.style.filter = "brightness(1)";
    men.style.borderBottom = "none";
});
// woomen
women.addEventListener("mouseenter", function(){
    box2.style.marginTop = "13vh"; 
    page.style.filter = "brightness(0.9)";
    women.style.borderBottom = "2px solid #fd3eca";
});

women.addEventListener("mouseleave", function(){
    box2.style.marginTop = "-130vh"; 
    page.style.filter = "brightness(1)";
    women.style.borderBottom = "none";
});

box2.addEventListener("mouseenter", function(){
    box2.style.marginTop = "13vh"; 
    page.style.filter = "brightness(0.9)";
    women.style.borderBottom = "2px solid #fd3eca";
});

box2.addEventListener("mouseleave", function(){
    box2.style.marginTop = "-130vh"; 
    page.style.filter = "brightness(1)";
    women.style.borderBottom = "none";
});
// kids
kids.addEventListener("mouseenter", function(){
    box3.style.marginTop = "13vh"; 
    page.style.filter = "brightness(0.9)";
    kids.style.borderBottom = "2px solid #fd7b2f";
});

kids.addEventListener("mouseleave", function(){
    box3.style.marginTop = "-130vh"; 
    page.style.filter = "brightness(1)";
    kids.style.borderBottom = "none";
});

box3.addEventListener("mouseenter", function(){
    box3.style.marginTop = "13vh"; 
    page.style.filter = "brightness(0.9)";
    kids.style.borderBottom = "2px solid #fd7b2f";
});

box3.addEventListener("mouseleave", function(){
    box3.style.marginTop = "-130vh"; 
    page.style.filter = "brightness(1)";
    kids.style.borderBottom = "none";
});
// livings
living.addEventListener("mouseenter", function(){
    box4.style.marginTop = "13vh"; 
    page.style.filter = "brightness(0.9)";
    living.style.borderBottom = "2px solid #effd2f";
});

living.addEventListener("mouseleave", function(){
    box4.style.marginTop = "-130vh"; 
    page.style.filter = "brightness(1)";
    living.style.borderBottom = "none";
});

box4.addEventListener("mouseenter", function(){
    box4.style.marginTop = "13vh"; 
    page.style.filter = "brightness(0.9)";
    living.style.borderBottom = "2px solid #effd2f";
});

box4.addEventListener("mouseleave", function(){
    box4.style.marginTop = "-130vh"; 
    page.style.filter = "brightness(1)";
    living.style.borderBottom = "none";
});

// beauty
beauty.addEventListener("mouseenter", function(){
    box5.style.marginTop = "13vh"; 
    page.style.filter = "brightness(0.9)";
    beauty.style.borderBottom = "2px solid #2ff3fd";
});

beauty.addEventListener("mouseleave", function(){
    box5.style.marginTop = "-130vh"; 
    page.style.filter = "brightness(1)";
    beauty.style.borderBottom = "none";
});

box5.addEventListener("mouseenter", function(){
    box5.style.marginTop = "13vh"; 
    page.style.filter = "brightness(0.9)";
    beauty.style.borderBottom = "2px solid #2ff3fd";
});

box5.addEventListener("mouseleave", function(){
    box5.style.marginTop = "-130vh"; 
    page.style.filter = "brightness(1)";
    beauty.style.borderBottom = "none";
});
// studio
studio.addEventListener("mouseenter", function(){
    box6.style.marginTop = "13vh"; 
    page.style.filter = "brightness(0.9)";
    studio.style.borderBottom = "2px solid #9a3939";
});

studio.addEventListener("mouseleave", function(){
    box6.style.marginTop = "-130vh"; 
    page.style.filter = "brightness(1)";
    studio.style.borderBottom = "none";
});

box6.addEventListener("mouseenter", function(){
    box6.style.marginTop = "13vh"; 
    page.style.filter = "brightness(0.9)";
    studio.style.borderBottom = "2px solid #9a3939";
});

box6.addEventListener("mouseleave", function(){
    box6.style.marginTop = "-130vh"; 
    page.style.filter = "brightness(1)";
    studio.style.borderBottom = "none";
});

