import React from "react"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import PostTag from "./postTag"

const Cover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.8) 99.92%);
  padding: 0.8rem 0;
`

const PostLink = styled(AniLink)`
  border-radius: 0.35714rem;
  overflow: hidden;
  box-shadow: 0 0.14286rem 0.28571rem 0 rgba(0, 0, 0, 0.1);
  display: flex;
  position: relative;
  height: 200px;
`

const PostTitle = styled.h3`
  color: var(--color-white);
  padding: 0 0.85714rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
const PostInfo = styled.div`
  display: flex;
  padding: 0 0.85714rem;
`
const PostCover = ({ post }) => {
  return (
    <>
      <div className="p-card">
        <PostLink fade to={post.slug}>
          {post.featuredImage && (
            <Img
              fluid={post.featuredImage.node.remoteFile.childImageSharp.fluid}
              style={{ width: "100%" }}
            />
          )}{" "}
          <Cover>
            <PostTag cover>
              {post.tags.nodes.map(tag => (
                <span
                  key={tag.id}
                  className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                >
                  {tag.name}
                </span>
              ))}
            </PostTag>
            <PostTitle>{post.title}</PostTitle>{" "}
            <PostInfo>
              <small className="text-gray-500">{post.date}</small>
            </PostInfo>
          </Cover>
        </PostLink>
      </div>
    </>
  )
}

export default PostCover
