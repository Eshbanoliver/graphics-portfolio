import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If it's a mobile/touch device, don't show the custom cursor
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const cursorDot = cursorDotRef.current;
    const cursorRing = cursorRingRef.current;

    if (!cursorDot || !cursorRing) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let isHovering = false;
    let isClicking = false;
    let isHidden = true;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (isHidden) {
        isHidden = false;
        cursorDot.style.opacity = '1';
        cursorRing.style.opacity = '1';
      }
    };

    const onMouseDown = () => {
      isClicking = true;
      cursorDot.style.transform = 'scale(0.8)';
      cursorRing.style.transform = `scale(0.8) translate(-50%, -50%)`;
      cursorRing.style.borderColor = 'var(--accent-blue)';
    };

    const onMouseUp = () => {
      isClicking = false;
      cursorDot.style.transform = 'scale(1)';
      cursorRing.style.borderColor = 'var(--accent-purple)';
      updateRingScale();
    };

    const onMouseLeave = () => {
      isHidden = true;
      cursorDot.style.opacity = '0';
      cursorRing.style.opacity = '0';
    };

    const updateRingScale = () => {
      if (isClicking) return;
      if (isHovering) {
        cursorRing.style.transform = `scale(1.8) translate(-50%, -50%)`;
        cursorRing.style.backgroundColor = 'rgba(168, 85, 247, 0.15)';
        cursorRing.style.borderColor = 'transparent';
      } else {
        cursorRing.style.transform = `scale(1) translate(-50%, -50%)`;
        cursorRing.style.backgroundColor = 'transparent';
        cursorRing.style.borderColor = 'rgba(255, 255, 255, 0.4)';
      }
    };

    // Smooth animation loop using requestAnimationFrame
    const render = () => {
      // Ring follows cursor with an easing lag (lerp)
      const ease = 0.12;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      // Position the dot instantly
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;

      // Position the ring
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;

      requestAnimationFrame(render);
    };

    const animationFrameId = requestAnimationFrame(render);

    // Event listeners
    window.addEventListener('mousemove', onMouseMove as any);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);

    // Check hovered elements for scale effect
    const addHoverListeners = () => {
      const interactives = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], .interactive, .portfolio-card, .service-card, .timeline-card, .skill-tag'
      );

      interactives.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          isHovering = true;
          updateRingScale();
        });
        el.addEventListener('mouseleave', () => {
          isHovering = false;
          updateRingScale();
        });
      });
    };

    // Add initial listeners
    addHoverListeners();

    // Create a MutationObserver to handle dynamically added elements
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove as any);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        .custom-cursor-dot {
          position: fixed;
          width: 6px;
          height: 6px;
          background-color: #ffffff;
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease, opacity 0.3s ease;
          opacity: 0;
        }

        .custom-cursor-ring {
          position: fixed;
          width: 32px;
          height: 32px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform-origin: 0% 0%; /* Critical for accurate scaling relative to center */
          transform: translate(-50%, -50%);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), 
                      background-color 0.3s ease, 
                      border-color 0.3s ease,
                      opacity 0.3s ease;
          opacity: 0;
        }

        @media (pointer: coarse) {
          .custom-cursor-dot,
          .custom-cursor-ring {
            display: none !important;
          }
          * {
            cursor: auto !important;
          }
          a, button, input, textarea {
            cursor: pointer !important;
          }
        }
      `}</style>
      <div ref={cursorDotRef} className="custom-cursor-dot" />
      <div ref={cursorRingRef} className="custom-cursor-ring" />
    </>
  );
};

export default CustomCursor;
