import { lastValueFrom, timer } from "rxjs";
import { BoardConfig } from "./interfaces/BoardConfig";
import { querySelector } from "./utils";

const DELAY = 300;

export class Command {
  callback: (newConfig: BoardConfig) => void = () => {};
  config: BoardConfig = {
    samples: 10,
    multiplicationFactor: 2,
  };
  isPlaying = false;

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

    const btn = querySelector("div.command button.play");
    btn.addEventListener("click", () => {
      this.isPlaying = !this.isPlaying;
      this.render();
      if (this.isPlaying) {
        this.play();
      }
    });
  }

  async play() {
    while (this.isPlaying) {
      this.config.multiplicationFactor++;
      if (this.config.multiplicationFactor > 100) {
        this.config.multiplicationFactor = 0;
      }
      this.render();
      this.callback(this.config);

      await lastValueFrom(timer(DELAY));
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

    const btn = querySelector("div.command button.play");
    btn.innerHTML = this.isPlaying ? "Pause" : "Play";
  }

  setConfig(config: BoardConfig) {
    this.config = config;
    this.render();
  }

  subscribe(callback: (newConfig: BoardConfig) => void) {
    this.callback = callback;
  }
}
