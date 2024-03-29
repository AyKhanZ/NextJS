import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';

const HeadTitle = () => {
  const router = useRouter()
  return (
    <Head>
        <title>{router.pathname}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  )
}

export default HeadTitle