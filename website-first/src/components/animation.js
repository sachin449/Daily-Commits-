import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const animation = () => {
  // Get the text and image containers
  const textContainers = document.querySelectorAll('.text-balance');
  const imageContainers = document.querySelectorAll('.bg-gray-100');

  // Create a timeline for the animation
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.flex.justify-center.items-center.h-screen.bg-white',
      start: 'top top',
      end: '+=4000', // adjust the end value to control the scrolling distance
      scrub: true,
      markers: false,
    },

};
  });

  // Animate the text containers
  tl.to(textContainers, {
    x: () => `-=${textContainers[0].offsetWidth}`, // move each text container to the left by its own width
    duration: 1,
    ease: 'none',
    repeat: 4, // repeat the animation 4 times
    stagger: {
      each: 0.5, // stagger the animation by 0.5 seconds for each text container
    },
  });

  // Animate the image containers
  tl.to(imageContainers, {
    x: () => `-=${imageContainers[0].offsetWidth}`, // move each image container to the left by its own width
    duration: 1,
    ease: 'none',
    repeat: 4, // repeat the animation 4 times
    stagger: {
      each: 0.5, // stagger the animation by 0.5 seconds for each image container
    },

   