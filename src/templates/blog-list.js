// Gatsby supports TypeScript natively!
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/navigation"
import PostCard from "../components/postCard"
import PostCover from "../components/postCover"
import styled from "styled-components"
import { device } from "../components/device"
import Zoom from "react-reveal/Zoom"
import Fade from 'react-reveal/Fade';

const PT = styled.div`
  .p-card:nth-child(2) {
    grid-row: span 2 / span 2;
    a {
      color: red;
      height: 100%;
      @media ${device.tablet} {
        height: 200px;
      }
    }
  }
`

const BlogIndex = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allWpPost.edges
  const featured = data.featured.edges
  const { currentPage, numPages } = pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Zoom duration={1000} delay={500} distance="10px">
        <article className="">
          <PT className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featured.map(({ node }) => {
              return <PostCover post={node} key={node.slug} />
            })}
          </PT>
        </article>
      </Zoom>
      <Fade duration={1000} delay={500} distance="10px">
        <article className="mt-12">
          <h2>Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            {posts.map(({ node }) => {
              return <PostCard post={node} key={node.slug} />
            })}
          </div>
        </article>
      </Fade>
      <Navigation isFirst={isFirst} isLast={isLast} prevPage={prevPage} nextPage={nextPage} />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  fragment Thumbnail on File {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allWpPost(sort: { fields: date, order: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          title
          id
          uri
          excerpt
          slug
          content
          date(formatString: "MMMM DD, YYYY")
          tags {
            nodes {
              name
              id
            }
          }
          featuredImage {
            node {
              remoteFile {
                ...Thumbnail
              }
            }
          }
        }
      }
    }
    featured: allWpPost(limit: 5, filter: {categories: {nodes: {elemMatch: {name: {eq: "feature"}}}}}) {
      edges {
        node {
          title
          id
          uri
          excerpt
          slug
          tags {
            nodes {
              name
              id
            }
          }
          date(formatString: "MMMM DD, YYYY")
          featuredImage {
            node {
              remoteFile {
                ...Thumbnail
              }
            }
          }
        }
      }
    }
  }
`
