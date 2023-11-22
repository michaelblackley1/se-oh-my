import React from "react";
import Image, { ImageLoader } from "next/image";
import {
  Figure,
  FlexContainer,
  Text,
} from "@open-universities-australia/web-components";

import { ReactNode } from "react";

import styled from "styled-components";
import { cssVars } from "@open-universities-australia/design-tokens";
import { Utils } from "@open-universities-australia/web-components";

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: ${cssVars["space-md"]};
  ${Utils.media["md"](`
        grid-template-columns: 2fr 1fr;
    `)};
`;

export interface PageOpenerProps {
  callToAction: ReactNode;
  image: {
    alt: string;
    src: string;
    caption: string;
  } | null;
  text: string | null;
  reWrittentext: string | null;
}

export const PageOpener = ({ callToAction, image, text, reWrittentext }: PageOpenerProps) => {
  
    const textDec = reWrittentext ? "line-through" : "none";  
return (
    <>
      <GridLayout>
        <FlexContainer flexDirection="column" gap="lg">
          {text && (
            <>
              <div style={{ textDecoration: textDec }}>{text}</div>
            </>
          )}

          {reWrittentext && (
            <>
              <div>{reWrittentext}</div>
            </>
          )}

          <FlexContainer>{callToAction}</FlexContainer>
        </FlexContainer>

        {image?.src && (
          <Figure caption={image.caption}>
            <img alt={image.alt} src={image.src} width={400} height={300} />
          </Figure>
        )}
      </GridLayout>
    </>
  );
};
