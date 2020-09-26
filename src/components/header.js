import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import ToggleTheme from "./themeToggler"
import Headroom from "react-headroom"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = () => {
  const [open, setOpen] = useState(false)
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      avatar: file(absolutePath: { regex: "/logo.png/" }) {
        childImageSharp {
          fluid(maxWidth: 140, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return (
    <Headroom>
      <header className="bg-gray-900 md:flex md:justify-between">
        <div className="flex flex-1 items-center justify-between px-4 py-1">
          <div>
            <AniLink fade to={'/'}>
              <Image
                fluid={data.avatar.childImageSharp.fluid}
                alt={"Png"}
                style={{
                  width: 140,
                }}
              />
            </AniLink>
          </div>
          <ToggleTheme />
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="block text-gray-500 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 fill-current"
              >
                {open ? (
                  <path
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div
          className={
            "px-2 py-2 md:px-4 md:flex md:items-center " +
            (open ? "block" : "hidden")
          }
        >
          <a
            href={process.env.PORTFOLIO}
            className="block px-2 hover:bg-gray-800 text-gray-500"
            target="_blank"
            rel="noreferrer"
          >
            My Portfolio
          </a>
        </div>
      </header>
    </Headroom>
  )
}

export default Header
