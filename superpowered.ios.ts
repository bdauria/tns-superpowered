import {Common} from "./superpowered.common";

declare const Superpowered: any;

export class SuperpoweredWrapper extends Common {
  public play(): void {
    const sp = new Superpowered();
    sp.play();
  }
}
