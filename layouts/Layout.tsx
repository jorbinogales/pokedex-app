import Head from 'next/head'
import React, { FC, FunctionComponent, ReactNode } from 'react'
import { Navbar } from '../components/ui';

interface BaseLayoutProps{
  children?: ReactNode;
  title?: string
}

export const Layout: FunctionComponent<BaseLayoutProps>= ({children, title}) => {
  return (
    <>
      <Head>
        <title>{ `${title}` }</title>
        <meta name='author' content='Jorbi Nogales'/>
        <meta name='description' content={`informacion sobre el pokemon  ${title}`}/>
        <meta name="keyworks" content={`${title}, pokedex, pokemon`}/>
      </Head>

      <Navbar/>

      <main style={{
        padding:'0px 20px'
      }}>
        { children }
      </main>
    </>
  )
}



