import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="website"/>
                <meta
                    property="og:site_name"
                    content="BoiGhor: A Book Selling Website Based in Bangladesh"/>
                <meta name="robots" content=" index, follow"></meta>
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}
