import React from "react";
import {
  Header,
  Footer,
  Heading,
  SiteLayout,
} from "@open-universities-australia/web-components";

import Section from "@/components/Section";

import headerFooterContent from "../content/headerFooter.content";
import HeadTag from "@/components/HeadTag";

const { Layout, Main } = SiteLayout;

export default function Home() {
  return (
    <>
      <HeadTag />
      <Layout>
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
          <Section
            heading={{
              text: "Test",
              visuallyHidden: true,
            }}
          >
            <Heading headingLevel={"h1"} className="heading">
              Test
            </Heading>
          </Section>
        </Main>
        <Footer
          content={{
            ...headerFooterContent.content.footer,
          }}
        />
      </Layout>
    </>
  );
}
