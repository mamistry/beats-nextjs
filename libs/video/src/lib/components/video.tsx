import {useEffect, useRef} from 'react';
import { useVideoPlayer, useContentEntryBuilder, usePlayerConfigBuilder } from '@gsp-nextjs/video';

export const VideoPlayer = () => {
  const { playerConfigSetup, playByUrl, player } = useVideoPlayer();
  const { setupEntryOptions } = useContentEntryBuilder();
  const { setupConfig, updateConfig } = usePlayerConfigBuilder();
  const appID = '<PLACE APPID FOR TOP HERE>';
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const soccerVideo = 'https://nba-ssl.cdn.turner.com/nba/big/teams/pelicans/2019/10/24/2853685/1571930288682-big_buck_bunny_720p_2mb-2853685_nba_android_med.mp4';

  useEffect(() => {
    player.events.playerReady.listen(() => {
      const playConfig = updateConfig(
        {
          appId: appID,
          env: 'ite',
        },
        undefined,
        {
          assetName: 'test',
        },
        undefined,
        {}
      );
      const entryData = setupEntryOptions(undefined, playConfig, undefined);
      playByUrl(soccerVideo, entryData);
    });
  }, [player])
  
  useEffect(() => {
    if (videoContainerRef.current) {
      const autoPlay = true;
      playerConfigSetup(
        setupConfig(
          videoContainerRef.current,
          autoPlay,
          appID,
          {},
          {},
          {}
        )
      );
    }
  }, [videoContainerRef]);

  return (
    <div>
      <div id="player-container" style={{ width: '100%', height: '95%', position: 'fixed'}} ref={videoContainerRef}></div>
    </div>
  );

}
