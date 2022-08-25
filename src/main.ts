import { Point } from "./interfaces/Point";

const samples = 10;

const getAngleFromIndex = (index: number, samples: number) => {
  return (index * 2 * Math.PI) / samples;
};

const x0 = 50;
const y0 = 50;
const r0 = 45;
const r = 1;

const getPositionFromAngle = (angle: number): Point => {
  const x = x0 + r0 * Math.cos(angle);
  const y = y0 + r0 * Math.sin(angle);
  return { x, y };
};

const svgns = "http://www.w3.org/2000/svg";
const container = document.querySelector("svg g.samples");
if (container === null) {
  throw new Error("Cannot find selector: svg g.samples");
}

for (let i = 0; i < samples; i++) {
  const angle = getAngleFromIndex(i, samples);

  const { x, y } = getPositionFromAngle(angle);

  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", x + "");
  circle.setAttributeNS(null, "cy", String(y));
  circle.setAttributeNS(null, "r", `${r}`);
  container.appendChild(circle);
}
