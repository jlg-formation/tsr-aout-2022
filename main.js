"use strict";

const samples = 10;

const getAngleFromIndex = (index, samples) => {
  return (index * 2 * Math.PI) / samples;
};

const x0 = 50;
const y0 = 50;
const r0 = 45;

const getPositionFromAngle = (angle) => {
  const x = x0 + r0 * Math.cos(angle);
  const y = y0 + r0 * Math.sin(angle);
  return { x, y };
};

const svgns = "http://www.w3.org/2000/svg";
const container = document.querySelector("svg g.samples");

for (let i = 0; i < samples; i++) {
  const angle = getAngleFromIndex(i, samples);

  const { x, y } = getPositionFromAngle(angle);

  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", x);
  circle.setAttributeNS(null, "cy", y);
  circle.setAttributeNS(null, "r", 1);
  container.appendChild(circle);
}
