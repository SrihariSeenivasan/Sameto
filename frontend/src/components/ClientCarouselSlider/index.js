import React, { useRef, useEffect } from "react";

const images = [
   '/Clients/Cadila.png',
  '/Clients/Chemiplant-CONCORD.png',
  '/Clients/Chemiplant-GLENMARK.png',
  '/Clients/Chemiplant-RANBAXY.png',
  '/Clients/Chemiplant-UNICHEM.png',
  '/Clients/FBL.png',
  '/Clients/Harman.png',
  '/Clients/Macleods.png',
  '/Clients/Magma.png',
  '/Clients/Orchid_Pharma.png',
  '/Clients/Teva.png',
  '/Clients/Zee_Laboratories.png',
];

export default function AutoDragSlider() {
  const containerRef = useRef(null);

  // Duplicate images for infinite scroll effect
  const extendedImages = [...images, ...images];

  useEffect(() => {
    const container = containerRef.current;
    let scrollPos = 0;
    const scrollStep = 1; // px per frame
    const frameInterval = 16; // ~60fps

    let animationFrameId;

    const step = () => {
      if (!container) return;
      scrollPos += scrollStep;
      if (scrollPos >= container.scrollWidth / 2) {
        scrollPos = 0;
      }
      container.scrollLeft = scrollPos;
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Drag to scroll logic
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isDragging = false;
    let startX;
    let scrollLeft;

    const onMouseDown = (e) => {
      isDragging = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      container.style.scrollBehavior = "auto"; // disable smooth during drag
    };

    const onMouseLeave = () => {
      isDragging = false;
      container.style.scrollBehavior = "smooth";
    };

    const onMouseUp = () => {
      isDragging = false;
      container.style.scrollBehavior = "smooth";
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // scroll-fast multiplier
      container.scrollLeft = scrollLeft - walk;
    };

    // Touch events for mobile
    let isTouchDragging = false;
    let touchStartX;
    let touchScrollLeft;

    const onTouchStart = (e) => {
      isTouchDragging = true;
      touchStartX = e.touches[0].pageX - container.offsetLeft;
      touchScrollLeft = container.scrollLeft;
      container.style.scrollBehavior = "auto";
    };

    const onTouchMove = (e) => {
      if (!isTouchDragging) return;
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - touchStartX) * 2;
      container.scrollLeft = touchScrollLeft - walk;
    };

    const onTouchEnd = () => {
      isTouchDragging = false;
      container.style.scrollBehavior = "smooth";
    };

    // Attach event listeners
    container.addEventListener("mousedown", onMouseDown);
    container.addEventListener("mouseleave", onMouseLeave);
    container.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);

    container.addEventListener("touchstart", onTouchStart);
    container.addEventListener("touchmove", onTouchMove);
    container.addEventListener("touchend", onTouchEnd);

    return () => {
      container.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);

      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <>
      <style>{`
        .slider-container {
          overflow-x: scroll;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          white-space: nowrap;
          scrollbar-width: none;
          width: 100%;
          cursor: grab;
          user-select: none;
        }
        .slider-container:active {
          cursor: grabbing;
        }
        .slider-container::-webkit-scrollbar {
          display: none;
        }
        .slider-item {
          display: inline-block;
          width: 250px;
          margin-right: 10px;
          border-radius: 8px;
          user-select: none;
        }
        .slider-item img {
          width: 100%;
          height: auto;
          border-radius: 8px;
          pointer-events: none;
          display: block;
        }
      `}</style>
      <div ref={containerRef} className="slider-container">
        {extendedImages.map((src, idx) => (
          <div key={idx} className="slider-item">
            <img src={src} alt={`Slide ${idx}`} draggable={false} />
          </div>
        ))}
      </div>
    </>
  );
}
