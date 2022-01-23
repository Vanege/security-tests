import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Head>
        <title>Security tests</title>
        <meta name="description" content="" />
      </Head>
    </>
  )
}

export default MyApp
