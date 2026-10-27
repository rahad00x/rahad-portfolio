"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

type Cube = { x: number; y: number; z: number };

const cubes: Cube[] = [];
for (let x = 0; x < 3; x++)
  for (let y = 0; y < 3; y++)
    for (let z = 0; z < 3; z++) if (x + y + z <= 3) cubes.push({ x, y, z });
cubes.sort((a, b) => a.x + a.y + a.z - (b.x + b.y + b.z));

const P = (x: number, y: number, z: number) => `${(x - y) * 30},${(x + y) * 17 - z * 34}`;

export default function HeroArt() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 90, damping: 18 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 90, damping: 18 });

  return (
    <div
      className="w-full max-w-md [perspective:900px]"
      onMouseMove={(e) => {
        if (reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <motion.div style={reduce ? undefined : { rotateX, rotateY }}>
        <svg viewBox="-110 -120 220 220" role="img" aria-label="Abstract stack of dark geometric cubes" className="float h-auto w-full">
          {cubes.map(({ x, y, z }, i) => {
            const lit = (x * 7 + y * 3 + z) % 5 === 0;
            return (
              <motion.g
                key={`${x}${y}${z}`}
                stroke="rgba(255,255,255,0.16)"
                strokeWidth="0.8"
                strokeLinejoin="round"
                initial={reduce ? false : { opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.07, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <polygon points={[P(x, y, z + 1), P(x + 1, y, z + 1), P(x + 1, y + 1, z + 1), P(x, y + 1, z + 1)].join(" ")} fill={lit ? "#3b3b3b" : "#1d1d1d"} stroke={lit ? "rgba(255,255,255,0.4)" : undefined} />
                <polygon points={[P(x, y + 1, z + 1), P(x + 1, y + 1, z + 1), P(x + 1, y + 1, z), P(x, y + 1, z)].join(" ")} fill="#0f0f0f" />
                <polygon points={[P(x + 1, y, z + 1), P(x + 1, y + 1, z + 1), P(x + 1, y + 1, z), P(x + 1, y, z)].join(" ")} fill="#161616" />
              </motion.g>
            );
          })}
        </svg>
      </motion.div>
    </div>
  );
}
