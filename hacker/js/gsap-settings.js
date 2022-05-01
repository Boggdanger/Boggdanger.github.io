var tl = gsap.timeline();
    tl.from(".logo-wrapper", {duration: 1.2, scale: 0.1})
      .to(".logo-wrapper", {duration: 1, delay: 0.3, scale: 1.0});

gsap.from(".buttons-wrapper", {duration: 1.4, delay: 1.4, opacity:0, scale: 0.1})


// var popTwitter = gsap.from("#pop-up-twitter", {
//     duration: 0.5, 
//     y: -50, 
//     opacity: 0, 
//     ease: "none", 
//     paused: true,
//   });

//   document.querySelector("#btn-twitter").onclick = () => popTwitter.play();
//   document.querySelector(".pop-up-header__close").onclick = () => popTwitter.reverse();