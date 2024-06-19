import { gsap } from 'gsap';

export const initAnimations = (textRef, imageRef) => {
  // GSAP animation for horizontal scrolling of the text
  gsap.to(textRef.current, {
    xPercent: -100,
    duration: 20,
    repeat: -1,
    ease: 'none',
  });

  // GSAP animation for horizontal scrolling of the images
  gsap.to(imageRef.current, {
    xPercent: -100,
    duration: 20,
    repeat: -1,
    ease: 'none',
  });
};
