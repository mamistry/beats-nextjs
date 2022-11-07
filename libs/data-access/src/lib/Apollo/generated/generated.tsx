import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /**
   * The `ID` scalar type represents a unique MongoDB identifier in collection.
   * MongoDB by default use 12-byte ObjectId value
   * (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB
   * also may accepts string or integer as correct values for _id field.
   */
  MongoID: any;
  /**
   * The string representation of JavaScript regexp. You may provide it with flags
   * "/^abc.*\/i" or without flags like "^abc.*". More info about RegExp characters and flags: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
   */
  RegExpAsString: any;
};

export type Article = {
  __typename?: 'Article';
  _id: Scalars['MongoID'];
  body?: Maybe<ArticleBody>;
  changed?: Maybe<Scalars['String']>;
  cmsId: Scalars['String'];
  created?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  promote?: Maybe<Scalars['Boolean']>;
  schemaVersion?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  tenant?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  uuid: Scalars['String'];
};

export type ArticleBody = {
  __typename?: 'ArticleBody';
  _id?: Maybe<Scalars['MongoID']>;
  format?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Clock = {
  __typename?: 'Clock';
  hours?: Maybe<Scalars['String']>;
  milliseconds?: Maybe<Scalars['String']>;
  minutes?: Maybe<Scalars['String']>;
  seconds?: Maybe<Scalars['String']>;
  stoppage?: Maybe<Scalars['String']>;
};

export type Competitor = {
  __typename?: 'Competitor';
  description?: Maybe<Scalars['String']>;
  display_name_1?: Maybe<Scalars['String']>;
  display_name_2?: Maybe<Scalars['String']>;
  draws?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  header_image_bucket?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  league?: Maybe<League>;
  leagues?: Maybe<Array<Maybe<League>>>;
  logo_dark?: Maybe<Scalars['String']>;
  logo_light?: Maybe<Scalars['String']>;
  logo_split?: Maybe<Scalars['String']>;
  losses?: Maybe<Scalars['String']>;
  market?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  overtime_losses?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['String']>;
  sport?: Maybe<Sport>;
  sportradar_id?: Maybe<Scalars['String']>;
  team_abbr?: Maybe<Scalars['String']>;
  team_alias?: Maybe<Scalars['String']>;
  tournaments?: Maybe<Array<Maybe<Tournament>>>;
  wins?: Maybe<Scalars['String']>;
};


export type CompetitorLeaguesArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type CompetitorTournamentsArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Component = {
  __typename?: 'Component';
  _id?: Maybe<Scalars['MongoID']>;
  content?: Maybe<Array<Maybe<Content>>>;
  description?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
  isFavoriteTeam?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
};

export type Conference = {
  __typename?: 'Conference';
  divisions?: Maybe<Array<Maybe<Division>>>;
  id?: Maybe<Scalars['ID']>;
  league?: Maybe<League>;
  name?: Maybe<Scalars['String']>;
  sport?: Maybe<Sport>;
  sportradar_id?: Maybe<Scalars['String']>;
  teams?: Maybe<Array<Maybe<Competitor>>>;
};


export type ConferenceDivisionsArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type ConferenceTeamsArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Content = {
  __typename?: 'Content';
  _id?: Maybe<Scalars['MongoID']>;
  allowedTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** @deprecated This field will be removed. Please use the "clips" (plural) field to get Video entity data */
  clip?: Maybe<Scalars['String']>;
  clips?: Maybe<Array<Maybe<Video>>>;
  episodes?: Maybe<Array<Maybe<Show>>>;
  /** @deprecated This field is deprecated. Please use the "events" (plural) field to get the full Event entity */
  event?: Maybe<Scalars['String']>;
  events?: Maybe<Array<Maybe<Event>>>;
  filters?: Maybe<ContentFilters>;
  form?: Maybe<ContentForm>;
  hash?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
  league?: Maybe<Scalars['String']>;
  liveStream?: Maybe<Scalars['String']>;
  product?: Maybe<Array<Maybe<Product>>>;
  series?: Maybe<Array<Maybe<Series>>>;
  show?: Maybe<ContentShow>;
  sort?: Maybe<ContentSort>;
  /** @deprecated This field is deprecated. Please use the "teams" (plural) field to get the full Competitor entity */
  team?: Maybe<Scalars['String']>;
  teams?: Maybe<Array<Maybe<Competitor>>>;
  /** @deprecated This field is deprecated. Please use the "tournaments" (plural) field to get the full Tournament entity */
  tournament?: Maybe<Scalars['String']>;
  tournaments?: Maybe<Array<Maybe<Tournament>>>;
  weight?: Maybe<Scalars['Float']>;
};

export type ContentFilters = {
  __typename?: 'ContentFilters';
  _id?: Maybe<Scalars['MongoID']>;
  collections?: Maybe<Array<Maybe<Scalars['String']>>>;
  isFavoriteTeam?: Maybe<Scalars['Boolean']>;
  maxItems?: Maybe<Scalars['Float']>;
  shows?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  timeWindow?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ContentForm = {
  __typename?: 'ContentForm';
  element?: Maybe<FormElement>;
};

export type ContentShow = {
  __typename?: 'ContentShow';
  _id?: Maybe<Scalars['MongoID']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
  title?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
};

export type ContentSort = {
  __typename?: 'ContentSort';
  field?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['String']>;
};

export type Division = {
  __typename?: 'Division';
  conference?: Maybe<Conference>;
  division_alias?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  league?: Maybe<League>;
  name?: Maybe<Scalars['String']>;
  sport?: Maybe<Sport>;
  sportradar_id?: Maybe<Scalars['String']>;
  teams?: Maybe<Array<Maybe<Competitor>>>;
};


export type DivisionTeamsArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Event = {
  __typename?: 'Event';
  away?: Maybe<Competitor>;
  away_team_points?: Maybe<Scalars['String']>;
  card_type?: Maybe<Scalars['String']>;
  color_1?: Maybe<Scalars['String']>;
  color_2?: Maybe<Scalars['String']>;
  event_image?: Maybe<Scalars['String']>;
  event_image_bucket?: Maybe<Scalars['String']>;
  free_event?: Maybe<Scalars['Boolean']>;
  free_preview?: Maybe<Scalars['Boolean']>;
  game?: Maybe<Game>;
  has_media?: Maybe<Scalars['Boolean']>;
  hash?: Maybe<Scalars['String']>;
  header_image_bucket?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['Boolean']>;
  home?: Maybe<Competitor>;
  home_team_points?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  is_live?: Maybe<Scalars['Boolean']>;
  league?: Maybe<League>;
  logo_dark?: Maybe<Scalars['String']>;
  logo_light?: Maybe<Scalars['String']>;
  media_asset_id_live?: Maybe<Scalars['String']>;
  media_asset_id_vod?: Maybe<Scalars['String']>;
  medium_vod?: Maybe<Scalars['Boolean']>;
  period?: Maybe<Scalars['String']>;
  recommended?: Maybe<Scalars['Boolean']>;
  scheduled_utc?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['String']>;
  season_type?: Maybe<Scalars['String']>;
  series_id?: Maybe<Scalars['Int']>;
  series_name?: Maybe<Scalars['String']>;
  sponsor_text?: Maybe<Scalars['String']>;
  sport?: Maybe<Sport>;
  sportradar_id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  territories_available?: Maybe<Array<Maybe<Territories>>>;
  time_zone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  tournament?: Maybe<Tournament>;
  trending?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  venue?: Maybe<Venue>;
  week?: Maybe<Scalars['String']>;
};

export enum EventFilterNames {
  League = 'league',
  Series = 'series',
  Sport = 'sport',
  SportRadar = 'sportRadar',
  Team = 'team',
  Tournament = 'tournament'
}

export type EventFilterType = {
  id: Scalars['String'];
  name: EventFilterNames;
};

export enum EventSort {
  Date = 'date',
  Rating = 'rating'
}

export enum EventTypes {
  Manual = 'manual',
  Match = 'match'
}

export type Feed = {
  __typename?: 'Feed';
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  shows?: Maybe<Array<Maybe<Show>>>;
};

export enum Feeds {
  CdfhCl = 'CDFH_CL'
}

export type FilterFindManyArticleBodyInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  format?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyArticleInput = {
  AND?: InputMaybe<Array<FilterFindManyArticleInput>>;
  OR?: InputMaybe<Array<FilterFindManyArticleInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyArticleOperatorsInput>;
  body?: InputMaybe<FilterFindManyArticleBodyInput>;
  changed?: InputMaybe<Scalars['String']>;
  cmsId?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  language?: InputMaybe<Scalars['String']>;
  promote?: InputMaybe<Scalars['Boolean']>;
  schemaVersion?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Boolean']>;
  tenant?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyArticleOperatorsInput = {
  _id?: InputMaybe<FilterFindManyArticle_IdOperatorsInput>;
  uuid?: InputMaybe<FilterFindManyArticleUuidOperatorsInput>;
};

export type FilterFindManyArticleUuidOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyArticle_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['MongoID']>;
  gte?: InputMaybe<Scalars['MongoID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
  lt?: InputMaybe<Scalars['MongoID']>;
  lte?: InputMaybe<Scalars['MongoID']>;
  ne?: InputMaybe<Scalars['MongoID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
};

export type FormElement = {
  __typename?: 'FormElement';
  _id?: Maybe<Scalars['MongoID']>;
  headline?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['JSON']>;
  type?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
};

export type Game = {
  __typename?: 'Game';
  away?: Maybe<Team>;
  gameDate?: Maybe<GameDate>;
  gameProgress?: Maybe<GameProgress>;
  home?: Maybe<Team>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Score>;
  sourceGameId?: Maybe<Scalars['String']>;
  sport?: Maybe<SportMetaData>;
  sportradar_id?: Maybe<Scalars['String']>;
  stateStatus?: Maybe<StateStatus>;
  status?: Maybe<Scalars['String']>;
  weekId?: Maybe<Scalars['String']>;
};

export type GameDate = {
  __typename?: 'GameDate';
  epoch?: Maybe<Scalars['Int']>;
  iso8501?: Maybe<Scalars['String']>;
};

export type GameProgress = {
  __typename?: 'GameProgress';
  clock?: Maybe<Clock>;
  currentPeriod?: Maybe<Scalars['String']>;
  displayPrimary?: Maybe<Scalars['String']>;
  displaySecondary?: Maybe<Scalars['String']>;
  totalPeriods?: Maybe<Scalars['String']>;
};

export type Image = {
  __typename?: 'Image';
  _id?: Maybe<Scalars['MongoID']>;
  alt?: Maybe<Scalars['String']>;
  focalPointX?: Maybe<Scalars['Float']>;
  focalPointY?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['String']>;
};

export type League = {
  __typename?: 'League';
  alias?: Maybe<Scalars['String']>;
  current_season?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  display_name_short?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  season_end?: Maybe<Scalars['String']>;
  season_start?: Maybe<Scalars['String']>;
  sport?: Maybe<Sport>;
  type?: Maybe<Scalars['String']>;
};

export enum Leagues {
  Gleague = 'gleague',
  Nba = 'nba',
  Ncaabb = 'ncaabb',
  Nfl = 'nfl'
}

export type Legacy = {
  __typename?: 'Legacy';
  league_id?: Maybe<Scalars['Int']>;
  sport_id?: Maybe<Scalars['Int']>;
};

export type Media = {
  __typename?: 'Media';
  _id?: Maybe<Scalars['MongoID']>;
  clip?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
};

export type Menu = {
  __typename?: 'Menu';
  _id: Scalars['MongoID'];
  cmsId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isPublished?: Maybe<Scalars['Boolean']>;
  language: Scalars['String'];
  links?: Maybe<Array<Maybe<MenuLinks>>>;
  schemaVersion: Scalars['String'];
  tenant: Scalars['String'];
  uuid?: Maybe<Scalars['String']>;
};

export type MenuImage = {
  __typename?: 'MenuImage';
  _id?: Maybe<Scalars['MongoID']>;
  image?: Maybe<Image>;
  type?: Maybe<Scalars['String']>;
};

export type MenuLinks = {
  __typename?: 'MenuLinks';
  _id?: Maybe<Scalars['MongoID']>;
  children?: Maybe<Array<Maybe<MenuLinks>>>;
  options?: Maybe<MenuOptions>;
  text: Scalars['String'];
  url: Scalars['String'];
  weight: Scalars['String'];
};

export type MenuOptions = {
  __typename?: 'MenuOptions';
  _id?: Maybe<Scalars['MongoID']>;
  attributes?: Maybe<MenuOptionsAttributes>;
  expanded?: Maybe<Scalars['Boolean']>;
  images?: Maybe<Array<Maybe<MenuImage>>>;
  target?: Maybe<Scalars['String']>;
};

export type MenuOptionsAttributes = {
  __typename?: 'MenuOptionsAttributes';
  title?: Maybe<Scalars['String']>;
};

export type Metadata = {
  __typename?: 'Metadata';
  cdn?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<Scalars['String']>;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Page = {
  __typename?: 'Page';
  _id: Scalars['MongoID'];
  body?: Maybe<PageBody>;
  changed?: Maybe<Scalars['String']>;
  cmsId: Scalars['String'];
  components?: Maybe<Array<Maybe<Component>>>;
  created?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  metatags?: Maybe<Array<Maybe<PageMetatags>>>;
  schemaVersion?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uri: Scalars['String'];
  uuid: Scalars['String'];
};

export type PageBody = {
  __typename?: 'PageBody';
  _id?: Maybe<Scalars['MongoID']>;
  format?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type PageComponentFiltersInput = {
  /** Filter Page Components by a User's favorite Team. Value passed should be **sportradar_id** (ex. `sr:competitor:1234`) */
  team?: InputMaybe<Scalars['String']>;
};

export type PageMetatags = {
  __typename?: 'PageMetatags';
  _id?: Maybe<Scalars['MongoID']>;
  content?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Playlist = {
  __typename?: 'Playlist';
  _id: Scalars['MongoID'];
  changed?: Maybe<Scalars['String']>;
  cmsId: Scalars['String'];
  created?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  media?: Maybe<Array<Maybe<Media>>>;
  schemaVersion?: Maybe<Scalars['String']>;
  tagging?: Maybe<Tagging>;
  tenant?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uuid: Scalars['String'];
};

export type Product = {
  __typename?: 'Product';
  _id?: Maybe<Scalars['MongoID']>;
  cta?: Maybe<Scalars['String']>;
  disclaimer?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  isPayPalEnabled?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  subHeadline?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  getAllArticles: Array<Article>;
  getAllCompetitors?: Maybe<Array<Maybe<Competitor>>>;
  getAllConferences?: Maybe<Array<Maybe<Conference>>>;
  getAllDivisions?: Maybe<Array<Maybe<Division>>>;
  getAllEvents?: Maybe<Array<Maybe<Event>>>;
  getAllLeagues?: Maybe<Array<Maybe<League>>>;
  getAllMenus?: Maybe<Array<Maybe<Menu>>>;
  getAllPlaylists?: Maybe<Array<Maybe<Playlist>>>;
  getAllSeries?: Maybe<Array<Maybe<Series>>>;
  getAllSports?: Maybe<Array<Maybe<Sport>>>;
  getAllTournaments?: Maybe<Array<Maybe<Tournament>>>;
  getAllVenues?: Maybe<Array<Maybe<Venue>>>;
  getAllVideos?: Maybe<Array<Maybe<Video>>>;
  getArticleById?: Maybe<Article>;
  getCompetitorById?: Maybe<Competitor>;
  getConferenceById?: Maybe<Conference>;
  getDivisionById?: Maybe<Division>;
  getEventById?: Maybe<Event>;
  getGamesByGameDate?: Maybe<Array<Maybe<Game>>>;
  getGamesByGameIds?: Maybe<Array<Maybe<Game>>>;
  getGamesBySportRadarIds?: Maybe<Array<Maybe<Game>>>;
  getHelloWorld?: Maybe<Scalars['String']>;
  getLeagueById?: Maybe<League>;
  getMenuById?: Maybe<Menu>;
  getMetadata?: Maybe<Metadata>;
  getPageByUri?: Maybe<Page>;
  getPlaylistByCmsId?: Maybe<Playlist>;
  getPlaylistByEventId?: Maybe<Playlist>;
  getPlaylistById?: Maybe<Playlist>;
  /** getScheduleByFeeds | Episode API | EPG API */
  getScheduleByFeeds?: Maybe<Schedule>;
  getSeriesById?: Maybe<Series>;
  getSportById?: Maybe<Sport>;
  getTaxonomyByIdAndType?: Maybe<TaxonomyTerm>;
  getTournamentById?: Maybe<Tournament>;
  getVenueById?: Maybe<Venue>;
  getVideoByCmsId?: Maybe<Video>;
  getVideoById?: Maybe<Video>;
  getVideosByEventId?: Maybe<Array<Maybe<Video>>>;
  getVideosByTeamId?: Maybe<Array<Maybe<Video>>>;
  /** @deprecated No longer needed. */
  viewer: User;
};


export type QueryGetAllArticlesArgs = {
  filter?: InputMaybe<FilterFindManyArticleInput>;
  limit?: InputMaybe<Scalars['Int']>;
  publishedOnly?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyArticleInput>;
  tenant: Tenant;
};


export type QueryGetAllCompetitorsArgs = {
  has_media?: InputMaybe<Scalars['Boolean']>;
  tenant: Tenants;
  territories?: InputMaybe<Territories>;
};


export type QueryGetAllConferencesArgs = {
  tenant: Tenants;
};


export type QueryGetAllDivisionsArgs = {
  tenant: Tenants;
};


export type QueryGetAllEventsArgs = {
  count_end?: InputMaybe<Scalars['String']>;
  count_start?: InputMaybe<Scalars['String']>;
  end_date?: InputMaybe<Scalars['String']>;
  filterId?: InputMaybe<Array<InputMaybe<EventFilterType>>>;
  has_media?: InputMaybe<Scalars['Boolean']>;
  media_filter?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<SortDirections>;
  season?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<EventSort>;
  start_date?: InputMaybe<Scalars['String']>;
  tenant: Tenants;
  territories?: InputMaybe<Territories>;
  type?: InputMaybe<EventTypes>;
};


export type QueryGetAllLeaguesArgs = {
  has_media?: InputMaybe<Scalars['Boolean']>;
  tenant: Tenants;
  territories?: InputMaybe<Territories>;
};


export type QueryGetAllMenusArgs = {
  publishedOnly?: InputMaybe<Scalars['Boolean']>;
  tenant: Tenant;
};


export type QueryGetAllPlaylistsArgs = {
  publishedOnly?: InputMaybe<Scalars['Boolean']>;
  tenant: Tenant;
};


export type QueryGetAllSeriesArgs = {
  competitor_id?: InputMaybe<Scalars['String']>;
  has_media?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<SortDirections>;
  season?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<SeriesSort>;
  tenant: Tenants;
  territories?: InputMaybe<Territories>;
  tournament_id?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllSportsArgs = {
  tenant: Tenants;
};


export type QueryGetAllTournamentsArgs = {
  has_media?: InputMaybe<Scalars['Boolean']>;
  tenant: Tenants;
  territories?: InputMaybe<Territories>;
};


export type QueryGetAllVenuesArgs = {
  tenant: Tenants;
};


export type QueryGetAllVideosArgs = {
  publishedOnly?: InputMaybe<Scalars['Boolean']>;
  tenant: Tenant;
  videoFilters?: InputMaybe<VideoFiltersInput>;
};


export type QueryGetArticleByIdArgs = {
  _id: Scalars['MongoID'];
  publishedOnly?: InputMaybe<Scalars['Boolean']>;
  tenant: Tenant;
};


export type QueryGetCompetitorByIdArgs = {
  id: Scalars['String'];
  tenant: Tenants;
};


export type QueryGetConferenceByIdArgs = {
  id: Scalars['String'];
  tenant: Tenants;
};


export type QueryGetDivisionByIdArgs = {
  id: Scalars['String'];
  tenant: Tenants;
};


export type QueryGetEventByIdArgs = {
  id: Scalars['String'];
  isSportRadar?: InputMaybe<Scalars['Boolean']>;
  tenant: Tenants;
};


export type QueryGetGamesByGameDateArgs = {
  endDate: Scalars['String'];
  leagues?: InputMaybe<Array<InputMaybe<StatsLeagues>>>;
  sortOrder?: InputMaybe<SortOrder>;
  startDate: Scalars['String'];
  stateStatus?: InputMaybe<Array<InputMaybe<StateStatus>>>;
  status?: InputMaybe<Array<InputMaybe<Status>>>;
  timezone: Scalars['Int'];
};


export type QueryGetGamesByGameIdsArgs = {
  gameIds: Array<InputMaybe<Scalars['String']>>;
};


export type QueryGetGamesBySportRadarIdsArgs = {
  gameIds: Array<InputMaybe<Scalars['String']>>;
};


export type QueryGetLeagueByIdArgs = {
  id: Scalars['String'];
  tenant: Tenants;
};


export type QueryGetMenuByIdArgs = {
  id?: InputMaybe<Scalars['String']>;
  publishedOnly?: InputMaybe<Scalars['Boolean']>;
  tenant: Tenant;
};


export type QueryGetPageByUriArgs = {
  componentFilters?: InputMaybe<PageComponentFiltersInput>;
  publishedOnly?: InputMaybe<Scalars['Boolean']>;
  tenant: Tenant;
  uri: Scalars['String'];
};


export type QueryGetPlaylistByCmsIdArgs = {
  cmsId?: InputMaybe<Scalars['String']>;
  publishedOnly?: InputMaybe<Scalars['Boolean']>;
  tenant: Tenant;
};


export type QueryGetPlaylistByEventIdArgs = {
  eventId?: InputMaybe<Scalars['String']>;
  publishedOnly?: InputMaybe<Scalars['Boolean']>;
  tenant: Tenant;
};


export type QueryGetPlaylistByIdArgs = {
  id?: InputMaybe<Scalars['String']>;
  publishedOnly?: InputMaybe<Scalars['Boolean']>;
  tenant: Tenant;
};


export type QueryGetScheduleByFeedsArgs = {
  count?: InputMaybe<Scalars['Int']>;
  feed: Feeds;
  from?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
};


export type QueryGetSeriesByIdArgs = {
  id: Scalars['String'];
  tenant: Tenants;
};


export type QueryGetSportByIdArgs = {
  id: Scalars['String'];
  tenant: Tenants;
};


export type QueryGetTaxonomyByIdAndTypeArgs = {
  id: Scalars['String'];
  publishedOnly?: InputMaybe<Scalars['Boolean']>;
  tenant: Tenant;
  type: TaxonomyType;
};


export type QueryGetTournamentByIdArgs = {
  id: Scalars['String'];
  tenant: Tenants;
};


export type QueryGetVenueByIdArgs = {
  id: Scalars['String'];
  tenant: Tenants;
};


export type QueryGetVideoByCmsIdArgs = {
  cmsId?: InputMaybe<Scalars['String']>;
  publishedOnly?: InputMaybe<Scalars['Boolean']>;
  tenant: Tenant;
};


export type QueryGetVideoByIdArgs = {
  id?: InputMaybe<Scalars['String']>;
  publishedOnly?: InputMaybe<Scalars['Boolean']>;
  tenant: Tenant;
};


export type QueryGetVideosByEventIdArgs = {
  eventId?: InputMaybe<Scalars['String']>;
  publishedOnly?: InputMaybe<Scalars['Boolean']>;
  tenant: Tenant;
};


export type QueryGetVideosByTeamIdArgs = {
  publishedOnly?: InputMaybe<Scalars['Boolean']>;
  teamId?: InputMaybe<Scalars['String']>;
  tenant: Tenant;
};

export type Schedule = {
  __typename?: 'Schedule';
  dateFrom?: Maybe<Scalars['String']>;
  dateTo?: Maybe<Scalars['String']>;
  feeds?: Maybe<Array<Maybe<Feed>>>;
  offset?: Maybe<Scalars['String']>;
};

export type Score = {
  __typename?: 'Score';
  away?: Maybe<Scalars['Int']>;
  home?: Maybe<Scalars['Int']>;
};

export type Season = {
  __typename?: 'Season';
  current?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Series = {
  __typename?: 'Series';
  events?: Maybe<Array<Maybe<Event>>>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  season?: Maybe<Scalars['String']>;
  series_name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<TaxonomyTerm>;
  territories_available?: Maybe<Array<Maybe<Territories>>>;
  tournament?: Maybe<Tournament>;
};

export enum SeriesSort {
  Id = 'id',
  Season = 'season',
  SeriesName = 'series_name',
  StartDate = 'start_date'
}

export type Show = {
  __typename?: 'Show';
  airDateTime?: Maybe<Scalars['String']>;
  begin?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['String']>;
  episode?: Maybe<Scalars['String']>;
  franchiseId?: Maybe<Scalars['String']>;
  franchiseName?: Maybe<Scalars['String']>;
  genreList?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  highlightList?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['String']>;
  originalTitle?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['String']>;
  ratingArgentina?: Maybe<Scalars['String']>;
  ratingBrasil?: Maybe<Scalars['String']>;
  ratingMexico?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['String']>;
  serie?: Maybe<Scalars['String']>;
  /** Status Values (derived from "begin", "end" and "offset" values): "estimated" (before)  || "current" (during)  || "actual" (after) */
  status?: Maybe<Scalars['String']>;
  storyline?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<TaxonomyTerm>;
  title?: Maybe<Scalars['String']>;
  titleId?: Maybe<Scalars['String']>;
};


export type ShowTaxonomyArgs = {
  tenant: Tenant;
};

export enum SortDirections {
  Asc = 'asc',
  Desc = 'desc'
}

export enum SortFindManyArticleInput {
  UuidAsc = 'UUID_ASC',
  UuidDesc = 'UUID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortOrder {
  Ascending = 'Ascending',
  Descending = 'Descending'
}

export type Sport = {
  __typename?: 'Sport';
  event_image?: Maybe<Scalars['String']>;
  gracenote_id?: Maybe<Scalars['String']>;
  has_media?: Maybe<Scalars['Boolean']>;
  icon_dark?: Maybe<Scalars['String']>;
  icon_light?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  leagues?: Maybe<Array<Maybe<League>>>;
  name?: Maybe<Scalars['String']>;
  sportradar_id?: Maybe<Scalars['String']>;
  territories_available?: Maybe<Array<Maybe<Territories>>>;
};


export type SportLeaguesArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type SportMetaData = {
  __typename?: 'SportMetaData';
  league?: Maybe<StatsLeagues>;
  sport?: Maybe<StatsSport>;
};

export enum StateStatus {
  Complete = 'Complete',
  InProgress = 'InProgress',
  Scheduled = 'Scheduled'
}

export enum StatsLeagues {
  GLeague = 'GLeague',
  Mlb = 'MLB',
  Nba = 'NBA',
  Ncaabb = 'NCAABB',
  Ncaaf = 'NCAAF',
  Nfl = 'NFL',
  Nhl = 'NHL',
  OlympicBasketball = 'OlympicBasketball',
  Other = 'Other',
  Soccer = 'Soccer',
  Wnba = 'WNBA'
}

export enum StatsSport {
  Baseball = 'Baseball',
  Basketball = 'Basketball',
  Football = 'Football',
  Golf = 'Golf',
  Hockey = 'Hockey',
  Motorsports = 'Motorsports',
  Other = 'Other',
  Soccer = 'Soccer',
  Tennis = 'Tennis'
}

export enum Status {
  Abandoned = 'Abandoned',
  Cancelled = 'Cancelled',
  Closed = 'Closed',
  Complete = 'Complete',
  Created = 'Created',
  Delayed = 'Delayed',
  FDelay = 'FDelay',
  FlexSchedule = 'FlexSchedule',
  Halftime = 'Halftime',
  IfNecessary = 'IfNecessary',
  InProgress = 'InProgress',
  Interrupted = 'Interrupted',
  Maintenance = 'Maintenance',
  ODelay = 'ODelay',
  Postponed = 'Postponed',
  Reopened = 'Reopened',
  Scheduled = 'Scheduled',
  Suspended = 'Suspended',
  TimeTbd = 'TimeTBD',
  Unnecessary = 'Unnecessary',
  WDelay = 'WDelay'
}

export type Tagging = {
  __typename?: 'Tagging';
  _id?: Maybe<Scalars['MongoID']>;
  competitors?: Maybe<Array<Maybe<Competitor>>>;
  events?: Maybe<Array<Maybe<Event>>>;
  shows?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  tournaments?: Maybe<Array<Maybe<Tournament>>>;
};

export type TaxonomyTerm = {
  __typename?: 'TaxonomyTerm';
  _id: Scalars['MongoID'];
  changed?: Maybe<Scalars['String']>;
  cmsId: Scalars['String'];
  created?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Image>;
  isPublished?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['String']>;
  schemaVersion?: Maybe<Scalars['String']>;
  sportsRadarId?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['String']>;
  tournamentId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uuid: Scalars['String'];
  year?: Maybe<Scalars['String']>;
};

export enum TaxonomyType {
  SeriesTaxonomy = 'seriesTaxonomy',
  ShowTaxonomy = 'showTaxonomy'
}

export type Team = {
  __typename?: 'Team';
  abbreviation?: Maybe<Scalars['String']>;
  draws?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  losses?: Maybe<Scalars['String']>;
  market?: Maybe<Scalars['String']>;
  mascot?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  wins?: Maybe<Scalars['String']>;
};

export enum Tenant {
  BleacherReport = 'bleacherReport',
  EstadioChile = 'estadioChile'
}

export enum Tenants {
  BleacherReport = 'bleacherReport',
  EstadioChile = 'estadioChile',
  HboMaxBrazil = 'hboMaxBrazil',
  HboMaxMexico = 'hboMaxMexico'
}

export enum Territories {
  Usa = 'USA'
}

export type Tournament = {
  __typename?: 'Tournament';
  display_name?: Maybe<Scalars['String']>;
  display_name_short?: Maybe<Scalars['String']>;
  has_media?: Maybe<Scalars['Boolean']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  is_featured?: Maybe<Scalars['Boolean']>;
  is_popular?: Maybe<Scalars['Boolean']>;
  league?: Maybe<League>;
  name?: Maybe<Scalars['String']>;
  sport?: Maybe<Sport>;
  team_tournament?: Maybe<Scalars['Boolean']>;
  territories_available?: Maybe<Array<Maybe<Territories>>>;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type Venue = {
  __typename?: 'Venue';
  address?: Maybe<Scalars['String']>;
  capacity?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  time_zone?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type Video = {
  __typename?: 'Video';
  _id: Scalars['MongoID'];
  cardLabel?: Maybe<Scalars['String']>;
  changed?: Maybe<Scalars['String']>;
  cmsId: Scalars['String'];
  collectionName?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['String']>;
  episodeNumber?: Maybe<Scalars['String']>;
  /** @deprecated Use Video.tagging.events. */
  events?: Maybe<Array<Maybe<Event>>>;
  headline?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  mediaId?: Maybe<Scalars['String']>;
  schemaVersion?: Maybe<Scalars['String']>;
  sortDate?: Maybe<Scalars['String']>;
  subHeadline?: Maybe<Scalars['String']>;
  tagging?: Maybe<Tagging>;
  tenant?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  uuid: Scalars['String'];
};

/** Passing multiple filter values is currently **not supported** */
export type VideoFiltersInput = {
  /**
   * Provides the ability to filter video clips to a specific Event. Value passed
   * should be the **sportradar_id** (ex. `sr:match:1234`)
   */
  event?: InputMaybe<Scalars['String']>;
  /**
   * Provides the ability to filter video clips to a specific Team. Value passed
   * should be the **sportradar_id** (ex. `sr:competitor:1234`)
   */
  team?: InputMaybe<Scalars['String']>;
};

export type GetAllVideosQueryVariables = Exact<{
  tenant: Tenant;
}>;


export type GetAllVideosQuery = { __typename?: 'Query', getAllVideos?: Array<{ __typename?: 'Video', _id: any, thumbnail?: string | null, mediaId?: string | null, title?: string | null, headline?: string | null, subHeadline?: string | null } | null> | null };

export type GetVideoByIdQueryVariables = Exact<{
  tenant: Tenant;
  id?: InputMaybe<Scalars['String']>;
}>;


export type GetVideoByIdQuery = { __typename?: 'Query', getVideoById?: { __typename: 'Video', _id: any, headline?: string | null, subHeadline?: string | null, thumbnail?: string | null, mediaId?: string | null, title?: string | null, created?: string | null, sortDate?: string | null, duration?: string | null } | null };


export const GetAllVideosDocument = gql`
    query getAllVideos($tenant: Tenant!) {
  getAllVideos(tenant: $tenant) {
    _id
    thumbnail
    mediaId
    title
    headline
    subHeadline
  }
}
    `;

/**
 * __useGetAllVideosQuery__
 *
 * To run a query within a React component, call `useGetAllVideosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllVideosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllVideosQuery({
 *   variables: {
 *      tenant: // value for 'tenant'
 *   },
 * });
 */
export function useGetAllVideosQuery(baseOptions: Apollo.QueryHookOptions<GetAllVideosQuery, GetAllVideosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllVideosQuery, GetAllVideosQueryVariables>(GetAllVideosDocument, options);
      }
export function useGetAllVideosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllVideosQuery, GetAllVideosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllVideosQuery, GetAllVideosQueryVariables>(GetAllVideosDocument, options);
        }
export type GetAllVideosQueryHookResult = ReturnType<typeof useGetAllVideosQuery>;
export type GetAllVideosLazyQueryHookResult = ReturnType<typeof useGetAllVideosLazyQuery>;
export type GetAllVideosQueryResult = Apollo.QueryResult<GetAllVideosQuery, GetAllVideosQueryVariables>;
export const GetVideoByIdDocument = gql`
    query getVideoById($tenant: Tenant!, $id: String) {
  getVideoById(tenant: $tenant, id: $id) {
    _id
    headline
    subHeadline
    thumbnail
    mediaId
    title
    created
    sortDate
    duration
    __typename
  }
}
    `;

/**
 * __useGetVideoByIdQuery__
 *
 * To run a query within a React component, call `useGetVideoByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVideoByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVideoByIdQuery({
 *   variables: {
 *      tenant: // value for 'tenant'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetVideoByIdQuery(baseOptions: Apollo.QueryHookOptions<GetVideoByIdQuery, GetVideoByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVideoByIdQuery, GetVideoByIdQueryVariables>(GetVideoByIdDocument, options);
      }
export function useGetVideoByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVideoByIdQuery, GetVideoByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVideoByIdQuery, GetVideoByIdQueryVariables>(GetVideoByIdDocument, options);
        }
export type GetVideoByIdQueryHookResult = ReturnType<typeof useGetVideoByIdQuery>;
export type GetVideoByIdLazyQueryHookResult = ReturnType<typeof useGetVideoByIdLazyQuery>;
export type GetVideoByIdQueryResult = Apollo.QueryResult<GetVideoByIdQuery, GetVideoByIdQueryVariables>;