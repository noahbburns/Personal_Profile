// FadeInOutText.js

import React, { useEffect, useState } from 'react';
import './FadeInOutText.css';

const FadeInOutText = ({ text, additionalClass }) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeOutThreshold = 400;

      // Calculate opacity based on scroll position
      const calculatedOpacity = Math.max(0, 1 - (scrollY / fadeOutThreshold));

      setOpacity(calculatedOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fade ${additionalClass}`} style={{ opacity }}>
      {text}
    </div>
  );
};

export default FadeInOutText;
