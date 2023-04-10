import Head from 'next/head'
import React, {FC, FunctionComponent, ReactNode} from 'react'
import {Navbar} from '../components/ui';
import {useRouter} from "next/router";

interface BaseLayoutProps {
    children?: ReactNode;
    title?: string
}

export const Layout: FunctionComponent<BaseLayoutProps> = ({children, title}) => {

    const origin = (typeof  window === 'undefined' ? '' : window.location.origin);
    console.log(origin);

    return (
        <>
            <Head>
                <title>{`${title}`}</title>
                <meta name='author' content='Jorbi Nogales'/>
                <meta name='description' content={`informacion sobre el pokemon  ${title}`}/>
                <meta name="keyworks" content={`${title}, pokedex, pokemon`}/>
                <meta property="og:title" content={`Información sobre ${title}`}/>
                <meta property="og:description" content={`pagina sobre ${title}`}/>
                <meta property="og:image"
                      content={`${origin}/image/poke.jpg`}/>
            </Head>

            <Navbar/>

            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    )
}



