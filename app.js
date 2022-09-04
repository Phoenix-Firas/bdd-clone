// initializig variables
var w = window.innerWidth;
var landing_page = document.getElementById('landing-page');
var header = document.getElementById('header');
var header_links = document.getElementById('header-links');
var explore_img = document.getElementById('explore-img');
var explore_btn_container = document.getElementById('explore-btn-container');
var explore_btn = document.getElementById('explore-btn');

var slide_show_images = [
            'radial-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(images/slider/slide1.jpg)',
                        'radial-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(images/slider/slide2.jpg)',
                        'radial-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(images/slider/slide3.jpg)',
                        'radial-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(images/slider/slide4.jpg)',
                        'radial-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(images/slider/slide5.jpg)',
                        'radial-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(images/slider/slide6.jpg)',
                        'radial-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(images/slider/slide7.jpg)',
                        'radial-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(images/slider/slide8.jpg)',
                        'radial-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(images/slider/slide9.jpg)',
                        'radial-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(images/slider/slide10.jpg)',
                        'radial-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(images/slider/slide11.jpg)'];


// creating timed slide-show 
var img_num = 0;

setInterval(()=>{
    if(img_num < slide_show_images.length){
        img_num += 1;
    }else{
        img_num = 0;
    }
    landing_page.style.background =  slide_show_images[img_num];
}, 5000);


// creating navigation button 
    var nav_btn = document.createElement('div');
    nav_btn.classList.add('nav-btn')
    header.append(nav_btn);
    var nav_hidden = true;

    nav_btn.addEventListener('click', ()=>{
        if(nav_hidden){
            header_links.style.animation = 'show-nav 1s ease-out forwards';
            nav_btn.style.animation = 'collapse-nav-btn .5s ease forwards';
            header_links.style.display = 'block';
            nav_hidden = false;
        }else{
            header_links.style.animation = 'hide-nav 1s ease-out forwards';
            nav_btn.style.animation = 'grow-nav-btn .5s ease forwards';
            // This will result in a bug where when you switch to mobile view, click the nav-btn to show the menu, then click again to hide it then switch back to laptop view you wont find the  header links displayed again and the only way to display them is to go back to mobile view and click the nav-btn again.
            // This should not be a problem for real users who dont switch screen sizes on their device.
            header_links.style.display = 'none';
            nav_hidden = true;
        }
    })

// animating a background effect
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
// animating a background effect
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
    

// creating and appending the scroll-up button
var scroll_btn = document.createElement('a');
scroll_btn.href = '#';
scroll_btn.classList.add('scroll-btn');
scroll_btn.innerText = '^';
document.body.append(scroll_btn);

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 100){
        scroll_btn.classList.add('active')
    }else{
        scroll_btn.classList.remove('active')
    }
});
