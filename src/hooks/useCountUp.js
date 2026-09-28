import { useState, useEffect, useRef } from 'react';

export const useCountUp = (targets, duration = 1600) => {
  const initialCounts = Object.keys(targets).reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {});

  const [counts, setCounts] = useState(initialCounts);
  const elementRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      let startTime = null;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeOut = progress * (2 - progress);

        const currentCounts = {};
        for (const [key, val] of Object.entries(targets)) {
          currentCounts[key] = Math.floor(easeOut * val);
        }

        setCounts(currentCounts);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setCounts(targets);
        }
      };

      animationFrameId = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCounts(initialCounts);
          animate();
        } else {
          cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0.2 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [duration]);

  return [counts, elementRef];
};