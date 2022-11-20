import Head from 'next/head'
import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/globalStyles'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap" rel="stylesheet"/>
    </Head>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
}
