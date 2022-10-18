let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}


// typed js code

var typed = new Typed(".auto-type",{
    strings: ["Web developer","Full Dtack Developer"],
    typeSpeed:100,
    backSpeed:100,
    loop:true 
})


function message(){
    alert("Under Development");
}





// back to top btn

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }


// progress bar scrit


// let circularProgress = document.querySelector(".progress"),
// progressValue = document.querySelector(".progress-value");

// let progressStartValue = 0,    
// progressEndValue = 90,    
// speed = 50;

// let progress = setInterval(() => {
// progressStartValue++;

// progressValue.textContent = `${progressStartValue}%`
// circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

// if(progressStartValue == progressEndValue){
//     clearInterval(progress);
// }    
// }, speed);


document.querySelector(".progress").style.background = `conic-gradient(#7d2ae8 ${90 * 3.6}deg, #ededed 0deg)`;
document.querySelector(".progress-js").style.background = `conic-gradient(#7d2ae8 ${50 * 3.6}deg, #ededed 0deg)`;
document.querySelector(".progress-node").style.background = `conic-gradient(#7d2ae8 ${20 * 3.6}deg, #ededed 0deg)`;
document.querySelector(".progress-react").style.background = `conic-gradient(#7d2ae8 ${20 * 3.6}deg, #ededed 0deg)`;
document.querySelector(".progress-mongo").style.background = `conic-gradient(#7d2ae8 ${50 * 3.6}deg, #ededed 0deg)`;
document.querySelector(".progress-exp").style.background = `conic-gradient(#7d2ae8 ${5 * 3.6}deg, #ededed 0deg)`;

