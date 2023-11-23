import React, { useState } from "react";
import { GetServerSideProps } from "next";
import {
  Header,
  Footer,
  FlexContainer,
  SiteLayout,
  Button,
  Container,
  Text,
} from "@open-universities-australia/web-components";

import headerFooterContent from "../../content/headerFooter.content";
import HeadTag from "@/components/HeadTag";
import { InterestAreaBanner } from "@/components/InterestAreaBanner";
import { PageOpenerSection } from "@/components/PageOpenerSection";
import interestAreas, { InterestArea } from "./interestAreas";
import RewriteContentModal from "@/components/RewriteContentModal";
import fetchRewriteContent from "@/services/fetchRewriteContent";
import Section from "@/components/Section";

const { Layout, Main } = SiteLayout;

export interface ReWriteInterestArea {
  subHeading: string;
  introduction: string;
  metaTitle: string;
  metaDescription: string;
  imageUrls: [
    {
      url: string | null;
      caption: string | null;
    }
  ];
}

const StudyOnlinePage = (props: InterestArea) => {
  const [openModal, setOpenModal] = useState(false);
  const [finishedRewriting, setFinishedRewriting] = useState(false);
  const [rewritenInterestArea, setRewritenInterestArea] =
    useState<ReWriteInterestArea | null>(null);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleRewriteContent = async (keywords: string) => {
    console.log("about to call openai");
    //const newContent = await rewriteContent(props, keywords);
    const newContent = await fetchRewriteContent(props, keywords);
    console.log("newContent", newContent);
    setRewritenInterestArea(newContent);
    setOpenModal(false);
    setFinishedRewriting(true);
  };

  return (
    <>
      <HeadTag title={props.metaTitle} description={props.metaDescription} />
      <Layout>
        <Container>
          <Button onClick={handleOpenModal} type="button" variant="primary">
            Magically rewrite content
          </Button>
        </Container>
        <Header
          me={{
            username: "",
            fullName: "",
            isAuthenticated: false,
            basketCount: 0,
            favouritesCount: 0,
          }}
          content={{ header: headerFooterContent.content.header }}
          productUrls={{
            baseUrl: "/",
            basket: "/",
            favourites: "/",
            register: "/",
            signIn: "/",
          }}
          onSignOut={() => {}}
          isFetchingMe={false}
          itemRenderingMode="alwaysRendered"
        />
        <Main>
          <FlexContainer flexDirection="column">
            <InterestAreaBanner
              heading={`${props.heading} courses`}
              buttonLabel={"Help me choose a course"}
              buttonUrl={"/help-me-choose"}
              imageSrc={props.banner}
              oneLiner={props.subHeading}
              reWrittenOneLiner={
                rewritenInterestArea ? rewritenInterestArea?.subHeading : null
              }
            />
            <PageOpenerSection
              pageOpener={{
                text: props.introduction,
                reWrittentext: rewritenInterestArea
                  ? rewritenInterestArea?.introduction
                  : null,
                pageOpenerImage: {
                  alt: "An image related to the interest area",
                  src: props.image.src,
                  caption: props.image.caption,
                },
              }}
              level2Name={props.heading}
              level2Href={props.urlSlug}
            />
          </FlexContainer>

          {rewritenInterestArea?.imageUrls && (
            <Section
              heading={{
                text: `Generated image`,
                visuallyHidden: false,
              }}
            >
              {rewritenInterestArea.imageUrls.map((img, i) => {
                return (
                  <FlexContainer
                    key={i}
                    justifyContent={"center"}
                    gap={"lg"}
                    flexDirection={"column"}
                  >
                    <img src={img.url as string} width={512} height={512} />
                    <Text style={{ paddingBottom: "24px" }}>{img.caption}</Text>
                  </FlexContainer>
                );
              })}
            </Section>
          )}
        </Main>
        <Footer
          content={{
            ...headerFooterContent.content.footer,
          }}
        />
        <RewriteContentModal
          showModal={openModal}
          handleCloseModal={handleCloseModal}
          finishedRewriting={finishedRewriting}
          onRewriteContent={handleRewriteContent}
        />
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<InterestArea> = async (
  context
) => {
  const interestAreaLevel = context.query.level1 as string;

  const interestArea = await interestAreas.find((interestArea) => {
    return interestArea.urlSlug === interestAreaLevel;
  });

  if (!interestArea) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...interestArea,
    },
  };
};

export default StudyOnlinePage;
