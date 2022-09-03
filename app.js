var w = window.innerWidth;
var header = document.getElementById('header');
var header_links = document.getElementById('header-links');


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
















// if(w<1000){
//     console.log('hh')
// }



// if(w <1000){
//     // var header_links_w = header_links_w.innerWidth;
//     header_links.style.marginRight = '-350px'


//     nav_btn.addEventListener('click', ()=>{
//         if(header_links.style.marginRight <= '-350px'){
//             header_links.style.animation = 'margin-left 1s ease forwards'
//             console.log(here)
            
//         }else{
//             header_links.style.animation = 'margin-right 1s ease forwards';
//             console.log(here)
//         }
//     })
    
// }