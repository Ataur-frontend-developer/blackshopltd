const nav_list = document.querySelector('.navbar'); 
const navbar = document.querySelector('.bar');
const content_main = document.querySelector('.content-main');
const navs = document.querySelectorAll('.nav-list a');

navs.forEach(nav => {
    nav.addEventListener('click', () => {
        document.querySelector('.nav-list a.active').classList.remove('active');
        nav.classList.add('active');
    })
});

navbar.addEventListener('click', () => {
    nav_list.classList.toggle('nav-hide');
    content_main.classList.toggle('content-full');
});

window.addEventListener('DOMContentLoaded', function (){
    if(window.screen.width <= 650){
        nav_list.classList.add('nav-hide');
    }
});

window.addEventListener('resize', function (){
    if(window.screen.width <= 650){
        nav_list.classList.add('nav-hide');
        content_main.classList.add('content-full');
    }else{
        nav_list.classList.remove('nav-hide');
        content_main.classList.remove('content-full');
    }
});