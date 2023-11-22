import * as React from 'react';
import { ReactNode } from 'react';
import { Container, Heading, VisuallyHidden } from '@open-universities-australia/web-components';
import ConditionalWrap from './ConditionalWrap';

import styled from 'styled-components';
import { cssVars } from '@open-universities-australia/design-tokens';
import { Panel } from '@open-universities-australia/web-components';

import { BgColor, HeadingLevel } from '@open-universities-australia/web-components/build/src/types';

export type TextAlign = 'left' | 'center';

export interface SectionProps {
    id?: string;
    children: ReactNode;
    bgColor?: BgColor;
    heading: { text: string; level?: HeadingLevel; visuallyHidden?: boolean; align?: TextAlign };
    withContainer?: boolean;
}

export interface SectionWrapperProps {
    bgColor?: BgColor;
    children: ReactNode;
}



const StyledSectionWrapper = styled.div`
    margin-block: ${cssVars['space-xxl']};
    + section {
        margin-top: 0;
    }
`;

const StyledPanel = styled(Panel)`
    padding-block: ${cssVars['space-xxl']};
`;


const Section = ({
    children,
    bgColor,
    heading: { text, level = 'h2', visuallyHidden = false, align },
    id = textToId(text),
    withContainer = true,
}: SectionProps) => {
    return (
        <section aria-labelledby={id}>
            <SectionWrapper bgColor={bgColor}>
                <ConditionalWrap
                    condition={withContainer}
                    wrap={(containerChildren) => <Container>{containerChildren}</Container>}
                >
                    <>
                        <ConditionalWrap
                            condition={visuallyHidden}
                            wrap={(headingChildren) => <VisuallyHidden as="div">{headingChildren}</VisuallyHidden>}
                        >
                            <Heading id={id} headingLevel={level} align={align}>
                                {text}
                            </Heading>
                        </ConditionalWrap>
                        {children}
                    </>
                </ConditionalWrap>
            </SectionWrapper>
        </section>
    );
};

export default Section;

const textToId = (text: string) => {
    return `${text.toLowerCase().replace(/\s/g, '-').replace(/['.?]/g, '').toLowerCase()}-section-heading`;
};

const SectionWrapper = ({ bgColor, children }: SectionWrapperProps) =>
    bgColor ? (
        <StyledPanel bgColor={bgColor}>{children}</StyledPanel>
    ) : (
        <StyledSectionWrapper>{children}</StyledSectionWrapper>
    );
