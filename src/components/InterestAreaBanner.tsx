import React from "react";
import {
  Container,
  FlexContainer,
  Heading,
  LinkButton,
  Text,
} from "@open-universities-australia/web-components";
import styled from "styled-components";
import { cssVars } from "@open-universities-australia/design-tokens";
import { Panel, Utils } from "@open-universities-australia/web-components";

export interface InterestAreaBannerProps {
  heading: string;
  buttonLabel: string;
  buttonUrl: string;
  imageSrc: string;
  oneLiner: string;
  reWrittenOneLiner: string | null;
}

export const BannerContainer = styled.div`
  position: relative;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: var(--imageContainer-width, 100%);
  z-index: 0;
  margin-left: auto;
  ${Utils.media.sm(`
        --imageContainer-width: 70%;
        height: 350px;
    `)}
`;
export const BannerPanel = styled.div`
  display: flex;
  width: var(--bannerPanel-width, 100%);
  padding-inline: clamp(${cssVars["space-base"]}), 5%, ${cssVars["space-xxl"]};
  ${Utils.media.md(`
        --bannerPanel-width: clamp(600px, 550px, 100%);
    `)}
`;

export const BannerPanelInner = styled(Panel)`
  box-shadow: 0 4px 6px -1px rgb(35 31 32 / 15%);
`;

export const HeadingPanel = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  ${Utils.media.sm(`
        position: absolute;
        top: 0;
        left: 0;
    `)}
`;

export const InterestAreaBanner = (props: InterestAreaBannerProps) => {
  const {
    heading,
    oneLiner,
    reWrittenOneLiner,
    buttonLabel,
    buttonUrl,
    imageSrc,
  } = props;

  const textDec = reWrittenOneLiner ? "line-through" : "none";

  return (
    <Container>
      <BannerContainer>
        <ImageContainer>
          <img alt="" src={imageSrc} width={600} height={300} />
        </ImageContainer>

        <HeadingPanel>
          <BannerPanel>
            <BannerPanelInner bgColor="blue" padding="lg">
              <FlexContainer
                flexDirection="column"
                flexAlignment="flex-start"
                gap="md"
              >
                <div>
                  <Heading
                    id="interstareabanner-heading"
                    headingLevel="h1"
                    margin="none"
                  >
                    {heading}
                  </Heading>
                  {oneLiner && (
                    <Text id="interstareabanner-oneliner" size="md">
                      <span style={{ textDecoration: textDec }}>
                        {oneLiner}
                      </span>
                    </Text>
                  )}
                  {reWrittenOneLiner && (
                    <Text id="interstareabanner-oneliner" size="md">
                      {reWrittenOneLiner}
                    </Text>
                  )}
                </div>
                <LinkButton
                  variant="tertiary"
                  size="md"
                  href={buttonUrl}
                  id="interstareabanner-cta"
                >
                  {buttonLabel}
                </LinkButton>
              </FlexContainer>
            </BannerPanelInner>
          </BannerPanel>
        </HeadingPanel>
      </BannerContainer>
    </Container>
  );
};
