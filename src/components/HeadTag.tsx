import React from 'react';
import Head from 'next/head';
import { HeadTagProps } from './HeadTag.types';

const HeadTag = ({
    title = '',
    description = '',
    children = null,
}: HeadTagProps) => {
    return (
        <Head>
            <link rel="icon" href={'/favicon.ico'} />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="google-site-verification" content="K8rj4blGLnBAT92lx7hma8u94QQheB-yuHvkfzgd8qQ" />
            <meta name="format-detection" content="telephone=no" />

            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />

            <link rel="icon" href={`/images/favicon.svg`} type="image/svg+xml"></link>
            <link rel="apple-touch-icon" sizes="180x180" href={`/images/apple-icon-180x180.png`} />
            <link rel="mask-icon" href={`/images/oua.svg`} />

            <meta property="og:description" content={description} />


            {children}
        </Head>
    );
};

export default HeadTag;
