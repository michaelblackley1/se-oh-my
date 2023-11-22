import React from 'react';
import {
    LinkButton
  } from "@open-universities-australia/web-components";
import Section from './Section';
import { PageOpener } from './PageOpener';


export interface PageOpenerSectionProps {
    pageOpener: {
        text: string;
        reWrittentext: string | null;
        pageOpenerImage: {
            alt: string;
            src: string;
            caption: string;
        } | null;
    };
    level2Name: string;
    level2Href: string;
}

export interface InterestAreaSearchCtaProps {
    level2Name: string;
    level2Href: string;
}


export const InterestAreaSearchCta = (props: InterestAreaSearchCtaProps) => {
    const { level2Name, level2Href } = props;
    const interestAreaName = level2Name.toLowerCase();

    return (
        <LinkButton href={`/courses/degrees/${level2Href}`} variant="primary" size="md">
            Explore {interestAreaName} courses
        </LinkButton>
    );
};

export const PageOpenerSection = ({ pageOpener, level2Name, level2Href }: PageOpenerSectionProps) => {
    
    return pageOpener.text || pageOpener.pageOpenerImage ? (
        <Section
            heading={{
                text: `Introduction to ${level2Name}`,
                visuallyHidden: true,
            }}
        >
            <PageOpener
                text={pageOpener.text}
                reWrittentext={pageOpener.reWrittentext}
                image={
                    pageOpener?.pageOpenerImage && {
                        ...pageOpener?.pageOpenerImage,
                    }
                }
                callToAction={<InterestAreaSearchCta level2Href={level2Href} level2Name={level2Name} />}
            />
        </Section>
    ) : null;
};
