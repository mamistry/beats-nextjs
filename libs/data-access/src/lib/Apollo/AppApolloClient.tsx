/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { createPersistedQueryLink } from '@apollo/client/link/persisted-queries';
import { sha256 } from 'crypto-hash';
import { useMemo } from 'react';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const cache = new InMemoryCache();
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2FwaS9ncmFwaHFsIjp7InJvbGVzIjpbImRpcmVjdG9yIl0sInBlcm1pc3Npb25zIjpbInJlYWQ6YW55X3VzZXIiLCJyZWFkOm93bl91c2VyIl19LCJpYXQiOjE2NjEyMDU1MTMsImV4cCI6MTY2ODk4MTUxMywic3ViIjoiMTIzNDUifQ.7jJf41YLxE_KVESgULd2RqlUTs1umQ7UVe_71wr0PJU';

const link = createHttpLink({
  uri: 'https://sports-federated-api-gw.int.nonprod.wmsports.io/graphql',
  headers: {
    authorization: token ? `Bearer ${token}` : '',
  },
  fetchOptions: {
    mode: 'cors',
  },
});

const plink = createPersistedQueryLink({
  sha256,
  useGETForHashedQueries: true,
}).concat(link);

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: plink,
    cache,
  });
}

export function initializeApollo(initialState: null | Record<any, any> = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState:null | Record<any, any>) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}


