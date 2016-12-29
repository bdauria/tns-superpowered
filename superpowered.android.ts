import { Common } from "./superpowered.common";
import * as application from "application";
declare const com: any;

export class SuperpoweredPlayer extends Common {
  private superpoweredWrapper: any;

  constructor() {
    super();
    const context = application.android.context;
    this.superpoweredWrapper = new com.bubo.superpoweredandroidexport.SuperpoweredPlayerWrapper(context);
  }
  public playPause(play: boolean): void {
    this.superpoweredWrapper.playPause(play);
  }

  public setTempo(value: number): void {
    this.superpoweredWrapper.setTempo(value);
  }
}
