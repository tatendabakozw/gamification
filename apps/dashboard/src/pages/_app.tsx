import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { StoreProvider } from '../context/Store';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to dashboard!</title>
      </Head>
      <main className="app">
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </main>
    </>
  );
}

export default CustomApp;