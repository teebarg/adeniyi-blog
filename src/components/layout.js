import React from "react"
import { rhythm, scale } from "../utils/typography"
import { createGlobalStyle } from "styled-components"
import Footer from "./footer"
import Header from "./header"
import styled from "styled-components"
import "./global.css"
import { device } from "./device"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import { BlogProvider } from "./context"
import { useStaticQuery, graphql } from "gatsby"
deckDeckGoHighlightElement()

const GlobalStyle = createGlobalStyle`
  h1,h2,h3,h4,h5,h6 {
    margin-bottom: 0;
    margin-top: 0;
    font-family: 'Montserrat, sans-serif';
  },
  p {
    ${{ ...scale(-1 / 5) }};
  },
  hr {
    margin-bottom: ${rhythm(1)}
  }
`
const Body = styled.div`
  background-color: var(--lightBg);
  color: var(--textNormal);
  transition: color 0.2s ease-out, background 0.2s ease-out;
  min-height: 100vh;
`
const Article = styled.div`
  width: 75%;
  @media ${device.laptop} {
    width: 85%;
  }
  @media ${device.tablet} {
    width: 100%;
  }
`
const Layout = ({ location, children }) => {

  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
            phone
            email
            portfolio
          }
          social {
            twitter
            linkedin
            facebook
          }
        }
      }
    }
  `)

  const userData = data.site.siteMetadata

  return (
    <div>
      <BlogProvider value={userData}>
        <GlobalStyle />
        <Header />
        <Body className="md:mx-auto flex flex-col items-center px-4 md:px-6">
          <Article>{children}</Article>
        </Body>
        <Footer />
      </BlogProvider>
    </div>
  )
}

export default Layout
