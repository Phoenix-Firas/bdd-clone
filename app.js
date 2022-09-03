var w = window.innerWidth;
var header = document.getElementById('header');
var header_links = document.getElementById('header-links');

var explore_img = document.getElementById('explore-img');

    var nav_btn = document.createElement('div');
    nav_btn.classList.add('nav-btn')
    header.append(nav_btn);
    var nav_hidden = true;

    nav_btn.addEventListener('click', ()=>{
        if(nav_hidden){
            header_links.style.animation = 'show-nav 1s ease-out forwards';
            nav_btn.style.animation = 'collapse-nav-btn .5s ease forwards';
            nav_hidden = false;
        }else{
            header_links.style.animation = 'hide-nav 1s ease-out forwards';
            nav_btn.style.animation = 'grow-nav-btn .5s ease forwards';
            nav_hidden = true;
        }

    })


