import { gsap } from "gsap";

console.log("gsap", gsap);

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