import { BoardConfig } from "./interfaces/BoardConfig";
import { querySelector } from "./utils";

export class Command {
  config: BoardConfig = {
    samples: 10,
    multiplicationFactor: 2,
  };

  constructor() {
    this.render();
  }

  setConfig(config: BoardConfig) {
    this.config = config;
    this.render();
  }

  subscribe(arg0: (newConfig: any) => void) {
    throw new Error("Method not implemented.");
  }

  render() {
    const keys: (keyof BoardConfig)[] = ["samples", "multiplicationFactor"];
    for (const key of keys) {
      const elt = querySelector(`.command label.${key} span`);
      elt.innerHTML = this.config[key] + "";
    }
  }
}
