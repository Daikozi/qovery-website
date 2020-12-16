import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animation = () => {
  gsap.from([".qovery_logo", ".hero__img"], {
    y: 20,
    opacity: 0,
    duration: 1.5,
  });
  gsap.from([".hero__text > *"], {
    y: 20,
    opacity: 0,
    stagger: { each: 0.3 },
  });
  gsap.from(".about__container > *", {
    scrollTrigger: ".about__container > *",
    y: 20,
    opacity: 0,
    delay: 0.2,
    stagger: { each: 0.3 },
  });
  gsap.from(".usage__container > *", {
    scrollTrigger: ".usage__container > *",
    y: 20,
    opacity: 0,
    delay: 0.2,
    stagger: { each: 0.3 },
  });
  gsap.from(".features__container > *", {
    scrollTrigger: ".features__container > *",
    y: 20,
    opacity: 0,
    delay: 0.2,
    stagger: { each: 0.3 },
  });
  gsap.from(".clients__container > *", {
    scrollTrigger: ".clients__container > *",
    y: 20,
    opacity: 0,
    delay: 0.2,
    stagger: { each: 0.3 },
  });
};
