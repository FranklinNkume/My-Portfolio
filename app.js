// sticky Navbar
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
     navbar.classList.remove('active');
}

// Dark Mode
let darkmood = document.querySelector('#darkmood');

darkmood.onclick = () => {
   if(darkmood.classList.contains('fa-moon')){
    darkmood.classList.replace('fa-moon','fa-sun');
    document.body.classList.add('active');
   }else{
     darkmood.classList.replace('fa-sun','fa-moon');
      document.body.classList.remove('active');
   }
   } 