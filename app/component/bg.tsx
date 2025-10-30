"use client";

import { useEffect, useRef } from "react";

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.VANTA) {
      const effect = window.VANTA.WAVES({
        el: vantaRef.current,
        mouseControls: false,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x162b47,
        shininess: 50,
        waveHeight: 20.0,
        waveSpeed: 0.5,
        zoom: 1.0,
      });

      return () => {
        if (effect) effect.destroy();
      };
    }
  }, []);

  return <div ref={vantaRef} className="w-full h-full"></div>;
}
