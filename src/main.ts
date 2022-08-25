import { Board } from "./Board.js";

const board = new Board();
board.setConfig({
  samples: 10,
  multiplicationFactor: 2,
});
board.draw();
