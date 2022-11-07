import {
  ContentEntryBuilder, DeepPartial, ContentEntryOptionalData, PlayConfig
} from '@top/player-block-web';

export const useContentEntryBuilder = () => {

  const setupEntryOptions = (
    contentEntryOptions: DeepPartial<ContentEntryOptionalData> | undefined,
    playConfigOverrides: DeepPartial<PlayConfig> | undefined,
    accessToken: string | undefined,
    ) => {
    let entryOptions = ContentEntryBuilder
    .forEntryOptions()
    if (contentEntryOptions) {
      entryOptions = entryOptions.withContentEntryOptions(contentEntryOptions);
    }
    if (playConfigOverrides) {
      entryOptions = entryOptions.withPlayConfigOverrides(playConfigOverrides)
    }
    if (accessToken) {
      entryOptions = entryOptions.withAccessToken(accessToken);
      entryOptions = entryOptions.withAccessTokenType('jws');
    }
    return entryOptions.build();
  }

  return {
    setupEntryOptions
  }
}
