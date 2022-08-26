import { Point } from "./interfaces/Point";

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

export const querySelector = (cssSelector: string) => {
  const container = document.querySelector(cssSelector);
  if (container === null) {
    throw new Error(`Cannot find selector: ${cssSelector}`);
  }
  return container;
};

export const setAttributeNbr = (elt: Element, key: string, value: number) => {
  return elt.setAttributeNS(null, key, value + "");
};

const svgns = "http://www.w3.org/2000/svg";

export const drawLine = (p1: Point, p2: Point) => {
  const container = querySelector("svg g.lines");
  const line = document.createElementNS(svgns, "line");
  setAttributeNbr(line, "x1", p1.x);
  setAttributeNbr(line, "y1", p1.y);
  setAttributeNbr(line, "x2", p2.x);
  setAttributeNbr(line, "y2", p2.y);
  container.appendChild(line);
};

export const sleep = (delay: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
};
