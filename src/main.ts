import "./style.css";

import { Board } from "./Board";

const board = new Board();
board.setConfig({
  samples: 100,
  multiplicationFactor: 5,
});
board.draw();
