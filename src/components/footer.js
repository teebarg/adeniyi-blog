import React, { useContext } from "react"
import styled from "styled-components"
import { scale } from "../utils/typography"
import BlogContext from "./context"

const Copyright = styled.footer`
  padding: 10px 0;
  p {
    ${{ ...scale(-0.2) }};
    margin-bottom: 0;
    text-align: center;
  }
`

const Section = styled.section`
  color: #718096;
  padding: 60px 0;
  border-bottom: 1px solid #353c46;
`

const ContactWrapper = styled.div`
  padding: 0 5%;
  h4,
  p {
    color: #cbd5e0;
  }
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0.5rem 0;
`

const SocialLink = styled.a`
  height: 2.5rem;
  width: 2.5rem;
  padding: 10px;
  border-radius: 50%;
  background: ${props => props.background};
  svg {
    color: var(--color-white);
  }
  &:hover {
    transform: translateY(-2px);
  }
`

const Footer = () => {

  const { author, social } = useContext(BlogContext);
  
  const section = (
    <Section className="bg-gray-900">
      <div className="container flex flex-col md:flex-row gap-8 md:gap-0">
        <ContactWrapper className="flex-1">
          <h4>Get in Touch</h4>
          <Flex>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-8 w-8"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <small>{author.email}</small>
          </Flex>
          <Flex>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-8 w-8"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <small>{author.phone}</small>
          </Flex>
          <Flex>
            <SocialLink background="#3b5998" href="/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 310 310"
                fill="currentColor"
              >
                <path d="M81.703 165.106h33.981V305a5 5 0 005 5H178.3a5 5 0 005-5V165.765h39.064a5 5 0 004.967-4.429l5.933-51.502a5 5 0 00-4.966-5.572h-44.996V71.978c0-9.732 5.24-14.667 15.576-14.667h29.42a5 5 0 005-5V5.037a5 5 0 00-5-5h-40.545A39.746 39.746 0 00185.896 0c-7.035 0-31.488 1.381-50.804 19.151-21.402 19.692-18.427 43.27-17.716 47.358v37.752H81.703a5 5 0 00-5 5v50.844a5 5 0 005 5.001z" />
              </svg>
            </SocialLink>
            <SocialLink
              background="#0e76a8"
              href={social.linkedin}
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 310 310"
                fill="currentColor"
              >
                <path d="M72.16 99.73H9.927a5 5 0 00-5 5v199.928a5 5 0 005 5H72.16a5 5 0 005-5V104.73a5 5 0 00-5-5zM41.066.341C18.422.341 0 18.743 0 41.362 0 63.991 18.422 82.4 41.066 82.4c22.626 0 41.033-18.41 41.033-41.038C82.1 18.743 63.692.341 41.066.341zM230.454 94.761c-24.995 0-43.472 10.745-54.679 22.954V104.73a5 5 0 00-5-5h-59.599a5 5 0 00-5 5v199.928a5 5 0 005 5h62.097a5 5 0 005-5V205.74c0-33.333 9.054-46.319 32.29-46.319 25.306 0 27.317 20.818 27.317 48.034v97.204a5 5 0 005 5H305a5 5 0 005-5V194.995c0-49.565-9.451-100.234-79.546-100.234z" />
              </svg>
            </SocialLink>
            <SocialLink
              background="#00acee"
              href={social.twitter}
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 310 310"
                fill="currentColor"
              >
                <path d="M302.973 57.388a117.512 117.512 0 01-14.993 5.463 66.276 66.276 0 0013.494-23.73 5 5 0 00-7.313-5.824 117.994 117.994 0 01-34.878 13.783c-12.381-12.098-29.197-18.983-46.581-18.983-36.695 0-66.549 29.853-66.549 66.547 0 2.89.183 5.764.545 8.598C101.163 99.244 58.83 76.863 29.76 41.204a5.001 5.001 0 00-8.196.642c-5.896 10.117-9.013 21.688-9.013 33.461 0 16.035 5.725 31.249 15.838 43.137a56.37 56.37 0 01-8.907-3.977 5 5 0 00-7.427 4.257c-.007.295-.007.59-.007.889 0 23.935 12.882 45.484 32.577 57.229a57.372 57.372 0 01-5.063-.735 4.998 4.998 0 00-5.699 6.437c7.29 22.76 26.059 39.501 48.749 44.605-18.819 11.787-40.34 17.961-62.932 17.961a120.4 120.4 0 01-14.095-.826 5 5 0 00-3.286 9.174c29.023 18.609 62.582 28.445 97.047 28.445 67.754 0 110.139-31.95 133.764-58.753 29.46-33.421 46.356-77.658 46.356-121.367 0-1.826-.028-3.67-.084-5.508 11.623-8.757 21.63-19.355 29.773-31.536a5 5 0 00-6.182-7.351z" />
              </svg>
            </SocialLink>
          </Flex>
        </ContactWrapper>
        <ContactWrapper className="flex-1">
          <h4>Subscription</h4>
          <small>
            Don’t miss any updates of our new templates and extensions.!
          </small>
          <form name="subscribe" method="POST" data-netlify="true">
            <div className="flex flex-wrap -mx-3 mt-4 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
                <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </ContactWrapper>
      </div>
    </Section>
  )

  return (
    <React.Fragment>
      {section}
      <Copyright className="bg-gray-800">
        <p className="text-gray-400">
          Copyright &copy; {new Date().getFullYear()}, All Rights Reserved.
        </p>
      </Copyright>
    </React.Fragment>
  )
}

export default Footer
