import { Observable } from "data/observable";
import { SuperpoweredWrapper } from "nativescript-superpowered";

export class HelloWorldModel extends Observable {
  public message: string;
  private superpowered: SuperpoweredWrapper;

  constructor() {
    super();

    this.superpowered = new SuperpoweredWrapper();
    this.message = this.superpowered.message;
  }

  play() {
    this.superpowered.play();
  }

  setBpm() {
    // this.superpowered.setBpm();
  }
}
