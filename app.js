var w = window.innerWidth;
var header = document.getElementById('header');
var header_links = document.getElementById('header-links');
var explore_img = document.getElementById('explore-img');
var explore_btn_container = document.getElementById('explore-btn-container');
var explore_btn = document.getElementById('explore-btn');


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



explore_img.addEventListener('mouseenter', ()=>{
    explore_btn_container.animate([
			{
                background: 'rgba(255, 255, 255, 0.4)',
                width: 'fit-content',
                borderRadius: '50%',
                height: 'fit-content',
                padding : '10px'
			},{
                background: 'rgba(255, 255, 255, 0.6)',
                padding : '0px',
                width: '100%',
                borderRadius: '0%',
                height: '100%',
                paddingTop: '20%'
			}
		], {
			duration: 700,
			fill: 'forwards',
			easing: 'ease-in-out'
			
		});
});

explore_img.addEventListener('mouseleave', ()=>{
    explore_btn_container.animate([
            {
                background: 'rgba(255, 255, 255, 0.6)',
                padding : '0px',
                width: '100%',
                borderRadius: '0%',
                height: '100%',
                paddingTop: '20%'
			},{
                background: 'rgba(255, 255, 255, 0.4)',
                width: 'fit-content',
                borderRadius: '50%',
                height: 'fit-content',
                padding : '10px'
			}
		], {
			duration: 700,
			fill: 'forwards',
			easing: 'ease-in-out'
			
		});
});
    