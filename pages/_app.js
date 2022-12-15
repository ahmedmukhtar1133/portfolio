import {ChakraProvider} from '@chakra-ui/react';
import React, {useState, useEffect} from 'react';
import Router from 'next/router';
import Loader from '../src/components/Loader';
import {DefaultSeo} from 'next-seo';
import AppLayout from '../src/components/AppLayout';
import theme from '../src/theme';
import Head from 'next/head';
import Script from "next/script";
import '../src/styles/global.css';

export default function MyApp({Component, pageProps}) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.documentElement.lang = `en`
        const start = () => {
            setLoading(true)
        }
        const end = () => {
            setLoading(false)
        }
        Router.events.on(`routeChangeStart`, start)
        Router.events.on(`routeChangeComplete`, end)
        Router.events.on(`routeChangeError`, end)
        return () => {
            Router.events.off(`routeChangeStart`, start)
            Router.events.off(`routeChangeComplete`, end)
            Router.events.off(`routeChangeError`, end)
        }
    }, []);

    return (
        <>
            <Script id='g-tag' strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
            <Script strategy="afterInteractive" id='g-tag-config'>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
                <meta name="theme-color" content="#2bae66"/>
                <meta name='application-name' content='Ahmad Mukhtar Portfolio App' />
            </Head>
            <DefaultSeo
                defaultTitle='Ahmad Mukhtar'
                titleTemplate='%s | Ahmad Mukhtar'
                openGraph={{
                    title: `Ahmad Mukhtar`,
                    type: `website`,
                    site_name: `Ahmad Mukhtar`,
                    images: [
                        {
                            url: `https://www.ahmadgoraya.com/static/images/profile.png`,
                            alt: `Profile Picture`,
                        },
                    ],
                }}
                description="Hi, I'm Ahmad Mukhtar!.  I'm a computer scientist who is passionate about developing state-of-the-art applications, building great user experiences by bringing simplicity to life and constantly learning"
            />
            <ChakraProvider theme={theme}>
                {loading ? (
                    <Loader/>
                ) : (
                    <AppLayout>
                        <Component {...pageProps} />
                    </AppLayout>
                )}
            </ChakraProvider>
        </>
    )
}
