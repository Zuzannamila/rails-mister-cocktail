// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
import 'bootstrap';



// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
document.addEventListener('turbolinks:load', () => {

//  let cards = document.querySelector('.container-lazy-scrolling'),
//     lastScrollY     = 0,
//     ticking         = false;


//   function onScroll() {
//     lastScrollY = window.scrollY;  //number of pixels crolled so far
//     requestTick();
//   }

//   function requestTick() {
//   if(!ticking) {
//     requestAnimationFrame(update);
//   }
//   ticking = true;
// }


// // animation in action!!!!!!!!!
// function update() {

//   ticking = false;

//   let currentScrollY = lastScrollY;

//   cards.classList.add("scrolly");
//   // images.forEach ((image) => {
//   //   image.classList.add("stretchy-images")
//   // })
//   console.log("scrolllllin");
// }

// window.addEventListener('scroll', onScroll, false);


  //second round!!!!
//   window.onscroll = function() {
//     let target = document.querySelector(".container-lazy-scrolling");
//     console.log(target);

//     let height = window.innerHeight;

//     let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

//     // Change this if you want it to fade faster
//     height = height / 1;

//     // target.style.opacity = (height - scrollTop) / height;
//     target.style.transform = "translate3d(0px, 100px, 0px)";
// };
  let controller = new ScrollMagic.Controller();

  $(".list-item").each(function() {
    let tl = new TimelineMax();
    let child = $(this).find(".cocktail-image");
    // console.log(child)
    tl.to(child, 1, { y: -280, ease: Linear.easeNone });

    let scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.4,
      duration: "100%"
    })
      .setTween(tl)
      .addIndicators()
      .addTo(controller);
  });


  // cursor
  let mouseCursor = document.querySelector(".cursor")
  let navLinks = document.querySelectorAll(".list-item")
  console.log(navLinks)

  window.addEventListener("mousemove", cursor);

  function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
  }

  navLinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
      mouseCursor.classList.remove('link-grow')
    });
    link.addEventListener('mouseover', () => {
      mouseCursor.classList.add('link-grow')
    });
  });
});



// cursor

