import { BoardConfig } from "./interfaces/BoardConfig.js";
import {
  getAngleFromIndex,
  getPositionFromAngle,
  querySelector,
  setAttributeNbr,
} from "./utils.js";

export class Board {
  config: BoardConfig = {
    samples: 10,
    multiplicationFactor: 2,
  };

  draw() {
    this.drawCircles();
  }

  drawCircles() {
    const samples = this.config.samples;

    const r = 1;

    const svgns = "http://www.w3.org/2000/svg";
    const container = querySelector("svg g.samples");

    for (let i = 0; i < samples; i++) {
      const angle = getAngleFromIndex(i, samples);

      const { x, y } = getPositionFromAngle(angle);

      const circle = document.createElementNS(svgns, "circle");
      setAttributeNbr(circle, "cx", x);
      setAttributeNbr(circle, "cy", y);
      setAttributeNbr(circle, "r", r);
      container.appendChild(circle);
    }
  }

  setConfig(config: BoardConfig) {
    this.config = config;
  }
}
