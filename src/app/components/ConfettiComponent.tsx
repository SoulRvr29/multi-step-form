"use client";

import React, { useState } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const ConfettiComponent = () => {
  const { width, height } = useWindowSize();
  const [confettiActive, setConfettiActive] = useState(true);
  setTimeout(() => {
    setConfettiActive(false);
  }, 3000);
  return (
    <div className="fixed -top-10 left-0 max-md:-top-32 max-md:-left-4 z-20">
      <Confetti
        recycle={confettiActive}
        width={width}
        height={height}
        numberOfPieces={400}
        gravity={0.2}
      />
    </div>
  );
};

export default ConfettiComponent;
