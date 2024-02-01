import React, { useEffect, useRef } from "react";
import { createCelebrationButton } from "./index";

export default function ClickToCelebrate() {
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return;
    createCelebrationButton(containerRef.current);
  }, [containerRef]);

  return <div ref={containerRef} className="celebrate-container"></div>;
}
