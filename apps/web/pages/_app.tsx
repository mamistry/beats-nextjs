import { AppContext, AppInitialProps, AppLayoutProps, AppProps } from 'next/app';
import type { NextComponentType, NextLayoutComponentType } from 'next';
import Head from 'next/head';
import './styles.css';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@gsp-nextjs/data-access';

type AppPropsWithLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: NextLayoutComponentType;
  }
}

const CustomApp:NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({ Component, pageProps }: AppPropsWithLayout) => {
  const client = useApollo(pageProps.initialApolloState); 
  
  return (
    <>
      <Head>
        <title>Welcome to web!</title>
      </Head>
      <main className="app">
        <ApolloProvider client={client}>
         {Component.PageLayout ? (
            <Component.PageLayout>
              <Component {...pageProps} />
            </Component.PageLayout>
         ) :
            <Component {...pageProps} />
         }
        </ApolloProvider>
      </main>
    </>
  );
}

export default CustomApp;
