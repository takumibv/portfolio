import React, { useState, useEffect, useRef, useCallback } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [isVisible]);

  const handleScroll = useCallback(() => {
    
    if (window.scrollY > window.innerHeight) {
      isVisible && setIsVisible(false);
    } else {
      !isVisible && setIsVisible(true);
    }
  }, [isVisible]);


  return (
    <>
    <div className="hero" style={{ visibility: isVisible ? "visible": "hidden" }}>
      <canvas className="" ref={canvasRef}></canvas>
    </div>
    <div style={{ height: "100vh", zIndex: -1}}></div>
    </>
  );
};

export default Hero;
