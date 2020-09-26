import React from "react"
import { graphql } from "gatsby"
import Navigation from "../components/navigation"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { rhythm, scale } from "../utils/typography"
import Zoom from "react-reveal/Zoom"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.page

  return (
    <Layout location={location} title="Home">
      <SEO title={post.title} description={post.excerpt} />
      <article>
        {post.featuredImage && (
          <Img
            fluid={post.featuredImage.node.remoteFile.childImageSharp.fluid}
            style={{ marginLeft: "-20px", marginRight: "-20px" }}
          />
        )}
        <header className="mt-4">
          <h1>{post.title}</h1>
          <Zoom>
            <Bio />
          </Zoom>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.date}
          </p>
        </header>
        <Zoom>
          <section dangerouslySetInnerHTML={{ __html: post.content }} />
        </Zoom>
      </article>
      <Navigation
        isFirst={!data.previousPage}
        isLast={!data.nextPage}
        prevPage={data.previousPage && data.previousPage.uri}
        nextPage={data.nextPage && data.nextPage.uri}
        prevContent={data.previousPage && data.previousPage.title}
        nextContent={data.nextPage && data.nextPage.title}
      />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $nextPage: String, $previousPage: String) {
    site {
      siteMetadata {
        title
      }
    }
    page: wpPost(id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          remoteFile {
            ...HeroImage
          }
        }
      }
    }

    nextPage: wpPost(id: { eq: $nextPage }) {
      title
      uri
    }

    previousPage: wpPost(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`
