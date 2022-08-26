import { BoardConfig } from "./interfaces/BoardConfig";
import { querySelector } from "./utils";

export class Command {
  callback: (newConfig: BoardConfig) => void = () => {};
  config: BoardConfig = {
    samples: 10,
    multiplicationFactor: 2,
  };

  constructor() {
    this.render();
    this.init();
  }

  init() {
    const keys: (keyof BoardConfig)[] = ["samples", "multiplicationFactor"];
    for (const key of keys) {
      const slider = querySelector(`.command label.${key} input`);
      if (!(slider instanceof HTMLInputElement)) {
        throw new Error("Cannot find an input");
      }
      slider.addEventListener("input", (event) => {
        this.config[key] = +slider.value;
        this.render();
        this.callback(this.config);
      });
    }
  }

  render() {
    const keys: (keyof BoardConfig)[] = ["samples", "multiplicationFactor"];
    for (const key of keys) {
      const elt = querySelector(`.command label.${key} span`);
      elt.innerHTML = this.config[key] + "";

      const slider = querySelector(`.command label.${key} input`);
      if (!(slider instanceof HTMLInputElement)) {
        throw new Error("Cannot find an input");
      }
      slider.value = this.config[key] + "";
    }
  }

  setConfig(config: BoardConfig) {
    this.config = config;
    this.render();
  }

  subscribe(callback: (newConfig: BoardConfig) => void) {
    this.callback = callback;
  }
}
