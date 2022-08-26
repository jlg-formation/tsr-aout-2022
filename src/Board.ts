import { BoardConfig } from "./interfaces/BoardConfig";
import { test51 } from "./test-decorator";
import {
  drawLine,
  getAngleFromIndex,
  getPositionFromAngle,
  querySelector,
  setAttributeNbr,
} from "./utils";

@test51
export class Board {
  config: BoardConfig = {
    samples: 10,
    multiplicationFactor: 2,
  };

  clean() {
    const lines = querySelector("svg g.lines");
    lines.innerHTML = "";
    const circles = querySelector("svg g.samples");
    circles.innerHTML = "";
  }

  draw() {
    this.drawCircles();
    this.drawLines();
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

  drawLine(index: number) {
    const angle1 = getAngleFromIndex(index, this.config.samples);
    const angle2 = getAngleFromIndex(
      this.config.multiplicationFactor * index,
      this.config.samples
    );
    const p1 = getPositionFromAngle(angle1);
    const p2 = getPositionFromAngle(angle2);

    drawLine(p1, p2);
  }

  drawLines() {
    for (let i = 0; i < this.config.samples; i++) {
      this.drawLine(i);
    }
  }

  redraw() {
    this.clean();
    this.draw();
  }

  setConfig(config: BoardConfig) {
    this.config = config;
  }
}
