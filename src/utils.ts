import { Point } from "./interfaces/Point.js";

export const getAngleFromIndex = (index: number, samples: number) => {
  return (index * 2 * Math.PI) / samples;
};

const x0 = 50;
const y0 = 50;
const r0 = 45;

export const getPositionFromAngle = (angle: number): Point => {
  const x = x0 + r0 * Math.cos(angle);
  const y = y0 + r0 * Math.sin(angle);
  return { x, y };
};
