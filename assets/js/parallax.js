let controller = new ScrollMagic.Controller();

const intro = document.querySelector("#introVideo");
const video = intro.querySelector("video");

let tl1 = new TimelineMax();

let scene = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0
})
  // .addIndicators()
  .setPin(tl1)
  .addTo(controller);

let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = delay;
}, 100);


let tl2 = new TimelineMax()
				.from($(".parallax1extra, .parallax2, .parallax3, .parallax4, .parallax5, .parallax6"), 1, {x: "0%", y: "100%", autoAlpha:0})
				/* .to(".parallax1", 1, {x: "0%", y: "0%", autoAlpha:1})
        .to(".parallax1", 1, {x: "0%", y: "-=10%", autoAlpha:0}) */
        .to(".parallax1extra", -2, {x: "-200%", y: "-300%", autoAlpha:0})
        .to(".parallax1extra", 2, {x: "-200%", y: "-300%", autoAlpha:1})
				.to(".parallax2", 5, {x: "0%", y: "0%", autoAlpha:1})
				.to(".parallax2", 5, {x: "0%", y: "-=0%", autoAlpha:0})
        .to(".parallax3", 5, {x: "0%", y: "0%", autoAlpha:1})
        .to(".parallax3", 5, {x: "0%", y: "-=0%", autoAlpha:0})
        .to(".parallax4", 5, {x: "0%", y: "0%", autoAlpha:1})
        .to(".parallax4", 5, {x: "0%", y: "-=0%", autoAlpha:0})
        .to(".parallax5", 5, {x: "0%", y: "0%", autoAlpha:1})
        .to(".parallax5", 5, {x: "0%", y: "-=0%", autoAlpha:0})
        .to(".parallax6", 5, {x: "0%", y: "0%", autoAlpha:1});


tl2.duration(tl1.duration());

let slideAnimation = new TimelineMax();

slideAnimation.add(tl1, 0).add(tl2, 0);

new ScrollMagic.Scene({
  triggerElement: intro,
  triggerHook: "onLeave",
  duration: 9000
}).setPin(intro).setTween(slideAnimation).addTo(controller);