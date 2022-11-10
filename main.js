
    let stars = document.getElementById("stars");
    let moon = document.getElementById("moon");
    let mountains3 = document.getElementById("mountains3");
    let mountains4 = document.getElementById("mountains4");
    let river5 = document.getElementById("river5");
    let boat6 = document.getElementById("boat6");
    let ahmed = document.querySelector(".ahmed");

    // up btn
    let up = document.querySelector(".up");

    // header
    let header = document.querySelector("header");


window.onscroll = function() {
    let value = scrollY;
    console.log(value);
    stars.style.left = value + "px";
    moon.style.top = value * 4 + "px"; // to move faster use * 
    mountains3.style.top = value * 2 + "px"; 
    mountains4.style.top = value * 1.5+ "px"; 
    river5.style.top = value+ "px"; 
    boat6.style.left = value * 3+ "px"; 
    boat6.style.top = value + "px"; 

    ahmed.style.fontSize = value + "px";
    if (scrollY >= 45) {
        ahmed.style.fontSize = 35 + "px";
        ahmed.style.position = "fixed";
        if (scrollY >= 300) {
            ahmed.style.display = "none";
        } else {
            ahmed.style.display = "block";
        }
    }
    if (scrollY >= 77) {
        document.querySelector(".main").style.background = `linear-gradient(rgb(19 67 108), rgb(11 9 38))`
    } else {
        document.querySelector(".main").style.background = `linear-gradient(to top,rgb(0, 0, 0), #3a012c)`
    }
    scrollY >= 100?toggler.style.cssText = `left:-70px;transition: .5s;transform: rotate(${value /1000}turn)`:toggler.style.cssText = "left:0px ;transform: rotate(.5turn)";
    // btn up show 
    scrollY >= 400?up.classList.add("show"):up.classList.remove("show");

    

} 
// btn up on click
up.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

let toggler = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");

toggler.onclick = function() {
    nav.classList.add("open");
};

close.onclick = function() {
    this.parentElement.classList.remove("open");
};

document.onkeyup = function (e) {
    if(e.key === "Escape"){
        nav.classList.remove("open");
    };
};



// Scroll Down and Show on Scroll Up

var lastScrollTop; // This Varibale will store the top position

window.addEventListener('scroll',function(){
 //on every scroll this funtion will be called
  
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //This line will get the location on scroll
  
  if(scrollTop > lastScrollTop){ //if it will be greater than the previous
    header.style.transform = "translateY(-120px)"
    //set the value to the negetive of height of navbar 
  }
  
  else{
    header.style.transform = "translateY(0px)";
  }
  
  lastScrollTop = scrollTop; //New Position Stored
});

