import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import BlogContext from "./context"
import { rhythm } from "../utils/typography"

const Bio = () => {
  const { author, social } = useContext(BlogContext);
  const data = useStaticQuery(graphql`
    query AvatarQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 35, height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div
      style={{
        display: `flex`,
        alignItems: "center",
        margin: "0.5rem 0"
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 30,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
          marginBottom: 0,
        }}
      />
      <div>
        <small className="mb-0">
          By <strong>{author.name}</strong>
          <span style={{ fontStyle: "italic", fontSize: "70%", marginLeft: 5 }}>
            {author.summary}
          </span>
        </small>
      </div>
      <a href={social.twitter} className="flex">
        <svg
          viewBox="0 0 560 400"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
        >
          <path
            d="M229.912 309.715c101.892 0 157.613-84.413 157.613-157.613 0-2.397-.05-4.784-.157-7.16A112.65 112.65 0 00415 116.257c-9.925 4.412-20.607 7.382-31.811 8.721 11.436-6.857 20.217-17.706 24.359-30.639a111.099 111.099 0 01-35.176 13.447c-10.108-10.768-24.5-17.502-40.435-17.502-30.59 0-55.398 24.808-55.398 55.387 0 4.347.487 8.575 1.437 12.631-46.04-2.317-86.864-24.36-114.187-57.877a55.245 55.245 0 00-7.5 27.842c0 19.219 9.779 36.185 24.65 46.11a54.986 54.986 0 01-25.087-6.928c-.009.233-.009.46-.009.708 0 26.828 19.095 49.226 44.442 54.302a55.485 55.485 0 01-14.607 1.949 55.13 55.13 0 01-10.411-.999c7.052 22.01 27.502 38.027 51.748 38.475-18.96 14.86-42.844 23.712-68.801 23.712-4.466 0-8.878-.255-13.214-.768 24.516 15.714 53.627 24.883 84.915 24.883"
            fill="#1da1f2"
          />
        </svg>
      </a>
    </div>
  )
}

export default Bio
