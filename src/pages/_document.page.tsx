import React from 'react';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* No preconnect needed as next.js handles preconnect automatically,
                    reference: https://github.com/vercel/next.js/issues/21555#issuecomment-892160815 */}
                    <link
                        href="https://fonts.googleapis.com/css?family=Lato:bold,regular,light&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="no-js">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
