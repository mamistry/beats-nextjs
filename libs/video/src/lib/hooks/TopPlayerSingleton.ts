import { Player } from '@top/player-block-web';

class TopPlayerSingleton {
  private static _instance: TopPlayerSingleton;
  private static _topPlayer: Player;

  private constructor() {
    // nothing here ... just closed off
  }

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  // Dalton token getters/setters
  public get topPlayer(): Player {
    return TopPlayerSingleton._topPlayer;
  }

  public set topPlayer(value: Player) {
    if (value != null) {
      TopPlayerSingleton._topPlayer = value;
    }
  }
}

export const TOP = TopPlayerSingleton.Instance;
