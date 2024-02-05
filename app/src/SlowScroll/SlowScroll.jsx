import React, { useEffect } from 'react';

export const SlowScrollComponent = () => {
  useEffect(() => {
    const handleSlowScroll = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const distanceToScroll = targetElement.offsetTop - window.scrollY;
        const scrollSpeed = 5; // You can adjust this value for slower or faster scrolling

        // Calculate the number of steps based on the distance and speed
        const numSteps = Math.abs(distanceToScroll) / scrollSpeed;

        // Calculate the step size for each interval
        const stepSize = distanceToScroll / numSteps;

        // Perform the smooth scroll animation
        const scrollInterval = setInterval(() => {
          if (window.scrollY !== targetElement.offsetTop) {
            window.scrollBy(0, stepSize);
          } else {
            clearInterval(scrollInterval);
          }
        }, 15); // You can adjust this interval for smoother or choppier animation
      }
    };

    // Attach slow scroll behavior to anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => {
      link.addEventListener('click', handleSlowScroll);
    });

    return () => {
      // Remove event listeners on component unmount
      anchorLinks.forEach((link) => {
        link.removeEventListener('click', handleSlowScroll);
      });
    };
  }, []);
};

export default SlowScrollComponent;
