import {
  PlayerConfigBuilder,
  PlayerConfigMetadata,
  PlayerConfigAdData,
  DeepPartial,
  ConvivaAnalyticsConfig,
  PlayConfig,
  PlayerConfigUIData,
  PlayerConfigDRMPlaybackData,
  KeySystems,
  UIControlName,
  UISlate
} from '@top/player-block-web';

const TOP_DEBUG_PARAM = 'videoDebug';

export const usePlayerConfigBuilder = () => {
  const getUrlParam = (name: string): string => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]').toLowerCase();
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(window.location.search.toLowerCase());
    return results === null
      ? ''
      : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  const uiPlayerControlsDefault = {
    controls: [
      UIControlName.Play,
      UIControlName.Progress_Bar,
      UIControlName.Fullscreen,
      UIControlName.Air_Play,
      UIControlName.Volume,
      UIControlName.Closed_Captions,
      UIControlName.Live,
      UIControlName.Time_Duration,
    ],
    slates: [
      UISlate.Buffering,
      UISlate.Start,
      UISlate.End,
      UISlate.Media_Playback,
      UISlate.Giant_Play,
    ],
    order: {
      left: [],
      right: [],
      center: [],
      topLeft: [],
      topRight: []
    }
  };

  const debugTop = () => {
    return getUrlParam(TOP_DEBUG_PARAM) === 'true';
  };

  const setupConfig = (
    container: HTMLDivElement,
    autoPlay: boolean,
    appId: string,
    configUI: DeepPartial<PlayerConfigUIData>,
    convivaConfig: DeepPartial<ConvivaAnalyticsConfig>,
    additionalMetadata: PlayerConfigMetadata | undefined,
  ) => {
    const additionalMeta = additionalMetadata ? additionalMetadata : {};
    const setupConfiguration = PlayerConfigBuilder.forSetup()
      .withContainer(container)
      .withUI(configUI)
      .withPlayback({ autoPlay })
      .withConviva(convivaConfig)
      .withDebug({ enabled: true })
      .withMetadata({
        ...additionalMeta,
        appId
      })
      .build();
    return setupConfiguration;
  };

  const updateConfig = (
    metadata: PlayerConfigMetadata | undefined,
    ads: DeepPartial<PlayerConfigAdData> | undefined,
    conviva: DeepPartial<ConvivaAnalyticsConfig> | undefined,
    drm: DeepPartial<PlayerConfigDRMPlaybackData> | undefined,
    configUI: DeepPartial<PlayerConfigUIData>
  ): DeepPartial<PlayConfig> => {
    let updateConfiguration = PlayerConfigBuilder.forUpdate();
    if (metadata) {
      updateConfiguration = updateConfiguration.withMetadata(metadata);
    }
    if (ads) {
      updateConfiguration = updateConfiguration.withAds(ads);
    }
    if (conviva) {
      updateConfiguration = updateConfiguration.withConviva(conviva);
    }
    if (drm) {
      updateConfiguration = updateConfiguration.withDrm(drm);
      updateConfiguration = updateConfiguration.withCms({
        forceKeySystem: KeySystems.Widevine
      });
    }
    if (configUI) {
      updateConfiguration = updateConfiguration.withUI(configUI);
    }
    return updateConfiguration.build();
  };

  return {
    setupConfig,
    updateConfig,
    uiPlayerControlsDefault
  };
};
