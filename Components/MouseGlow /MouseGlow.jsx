"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import styled from "styled-components";

export default function MouseGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 70,
    damping: 18,
  });

  const y = useSpring(mouseY, {
    stiffness: 70,
    damping: 18,
  });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return <Glow style={{ x, y }} />;
}

const Glow = styled(motion.div)`
  position: fixed;

  width: 300px;
  height: 300px;

  border-radius: 50%;

  pointer-events: none;

  z-index: 2;

  background: radial-gradient(
    circle,
    rgba(88,120,255,0.4),
    transparent 70%
  );

  filter: blur(80px);
  mix-blend-mode: screen;
`;
