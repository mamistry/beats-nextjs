import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@gsp-nextjs/data-access';

function CustomApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState); 
  
  return (
    <>
      <Head>
        <title>Welcome to web!</title>
      </Head>
      <main className="app">
        <ApolloProvider client={client}>
         <Component {...pageProps} />
        </ApolloProvider>
      </main>
    </>
  );
}

export default CustomApp;
