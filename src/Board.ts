import { BoardConfig } from "./interfaces/BoardConfig.js";
import { getAngleFromIndex, getPositionFromAngle } from "./utils.js";

export class Board {
  config: BoardConfig = {
    samples: 10,
    multiplicationFactor: 2,
  };

  draw() {
    const samples = this.config.samples;

    const r = 1;

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
  }

  setConfig(config: BoardConfig) {
    this.config = config;
  }
}
