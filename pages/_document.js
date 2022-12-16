/* eslint-disable react/no-unknown-property */
import {ColorModeScript} from '@chakra-ui/react';

// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, {Html, Head, Main, NextScript} from 'next/document';
import theme from '../src/theme'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="shortcut icon" href="/favicon.ico"/>
                    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                    <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png"/>
                    <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                    <link rel="manifest" href="/manifest.json"/>
                    <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" rel="stylesheet" media="none" onload="if(media!='all')media='all'"/>
                    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" media="none" onload="if(media!='all')media='all'"/>
                </Head>
                <body id={'de_body'}>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}
