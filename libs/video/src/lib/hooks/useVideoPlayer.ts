import { useEffect, useState } from 'react';
import { Player } from '@top/player-block-web';
import {
  PlayerConfigBuilder,
  ContentEntryOptionalData,
  MediaJSONPlayData
} from '@top/player-block-web';
import { TOP } from './TopPlayerSingleton';


export const useVideoPlayer = () => {
  const [player, setPlayer] = useState(new Player());
  useEffect(() => {
    TOP.topPlayer = player;
    player.events.playerReady.listen(() => {
     //playerReady
    });
    player.events.mediaError.listen(evt => {
      //media error
    })
    player.events.playerError.listen( evt => {
      //playererror
    })

    player.events.messageFromUI.listen( evt => {
      //message from ui
    });

    player.events.contentError.listen( evt => {
      //content error
      
    })

    player.events.contentEnded.listen( evt => {
     //content complete
    })

    player.events.mediaPaused.listen( evt => {
      //media paused
    })

    player.events.mediaResumed.listen( evt => {
     //media resumed
    })

  }, []);

  // Re-enable this if you want to view TOP video logs for debugging
  //Log.setTheme(LogTheme.Dark);
  //Log.setEnabled(true);

  useEffect(() => {
    return (): void => {
      TOP.topPlayer.events['unlistenAll']();
      player.events['unlistenAll']()
      player.stop();
      player.destroy();
      TOP.topPlayer.stop();
      TOP.topPlayer.destroy();
    };
  }, []);

  const playerConfigSetup = (config: PlayerConfigBuilder) => {
    player.setup(config);
  };

  const playByUrl = (
    videoStreamLink: string,
    entryData: ContentEntryOptionalData | undefined
  ) => {
    player.play(videoStreamLink, entryData);
  };

  const playByMediaJson = (
    playData: MediaJSONPlayData,
    entryData: ContentEntryOptionalData | undefined
  ) => {
    player.playByMediaJson(playData, entryData);
  };

  return {
    player,
    playerConfigSetup,
    playByUrl,
    playByMediaJson,
  };
};
