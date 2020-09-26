import React from "react"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PostTag from "./postTag"
import Bio from "./bio"
import styled from "styled-components"

const Card = styled.div`
  background-color: var(--cardBg);
`

const PostCard = ({ post }) => {
  return (
    <Card className="border rounded-lg md:flex md:flex-col overflow-hidden">
      {post.featuredImage && (
        <Img
          objectFit="cover"
          objectPosition="50% 50%"
          style={{ height: "180px" }}
          fluid={post.featuredImage.node.remoteFile.childImageSharp.fluid}
        />
      )}
      <div className="p-4 flex flex-col flex-1">
        <PostTag>
          {post.tags.nodes.map(tag => (
            <span
              key={tag.id}
              className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
            >
              {tag.name}
            </span>
          ))}
        </PostTag>
        <h3>{post.title}</h3>
        <Bio />
        <small
          className="mt-2"
          dangerouslySetInnerHTML={{
            __html: post.excerpt,
          }}
        />
        <div className="text-gray-800 mt-auto flex items-center justify-between">
          <AniLink fade to={post.uri} className="text-sm">
            Read this Article →
          </AniLink>
          <h6>{post.date}</h6>
        </div>
      </div>
    </Card>
  )
}

export default PostCard
