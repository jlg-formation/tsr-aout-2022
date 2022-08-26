import "./style.scss";

import { Board } from "./Board";
import { Command } from "./Command";
import { BoardConfig } from "./interfaces/BoardConfig";

const board = new Board();
const config: BoardConfig = {
  samples: 100,
  multiplicationFactor: 5,
};
board.setConfig(config);
board.draw();

const command = new Command();
command.setConfig(config);
command.subscribe((newConfig) => {
  board.setConfig(newConfig);
  board.redraw();
});
