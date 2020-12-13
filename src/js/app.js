import { gsap } from "gsap";
import Rellax from "rellax";

console.log("gsap", gsap);

new Rellax('.js-rellax', {
  // center: true
});

// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#hero",
//     start: "top top",
//     end: "bottom top",
//     scrub: true
//   }
// });

// gsap.utils.toArray(".js-parallax").forEach(layer => {
//   const depth = layer.dataset.depth;
//   const movement = -(layer.offsetHeight * depth)
//   tl.to(layer, { y: movement, ease: "none" }, 0)
// });