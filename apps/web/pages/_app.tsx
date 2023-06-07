import { AppContext, AppInitialProps, AppLayoutProps, AppProps } from 'next/app';
import type { NextComponentType, NextLayoutComponentType } from 'next';
import Head from 'next/head';
import './styles.css';
import { ApolloProvider } from '@apollo/client';

//chase4

type AppPropsWithLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: NextLayoutComponentType;
  }
}

const CustomApp:NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({ Component, pageProps }: AppPropsWithLayout) => {
  
  return (
    <>
      <Head>
        <title>Welcome to web!</title>
      </Head>
      <main className="app">
         {Component.PageLayout ? (
            <Component.PageLayout>
              <Component {...pageProps} />
            </Component.PageLayout>
         ) :
            <Component {...pageProps} />
         }
      </main>
    </>
  );
}

export default CustomApp;
