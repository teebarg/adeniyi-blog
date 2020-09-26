const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // query content for WordPress posts
  const {
    data: {
      allWpPost: { edges: allPosts },
    },
  } = await graphql(`
    query {
      allWpPost {
        edges {
          node {
            id
            uri
          }
          next {
            id
          }
          previous {
            id
          }
        }
      }
    }
  `)

  // allPosts = [];
  const postTemplate = path.resolve(`./src/templates/blog-post.js`)

  allPosts.forEach(post => {
    createPage({
      // will be the url for the page
      path: post.node.uri,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: post.node.id,
        nextPage: post.next && post.next.id,
        previousPage: post.previous && post.previous.id,
      },
    })
  })

  // Create blog post list pages
  const postsPerPage = 5
  const numPages = Math.ceil(allPosts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: path.resolve("./src/templates/blog-list.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    })
  }
}
