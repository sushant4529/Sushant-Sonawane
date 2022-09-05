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
    strings: ["Web developer","portfolio"],
    typeSpeed:100,
    backSpeed:100,
    loop:true 
})


function message(){
    alert("under development");
}