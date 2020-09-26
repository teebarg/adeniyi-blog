import React from "react"
import { Link } from "gatsby"

const Navigation = ({isFirst, isLast, prevPage, nextPage, prevContent, nextContent}) => {
  return (
    <nav>
      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {!isFirst && (
            <Link to={prevPage} rel="prev">
              ←  { prevContent ? prevContent : 'Previous Page' }
            </Link>
          )}
        </li>
        <li>
          {!isLast && (
            <Link to={nextPage} rel="next">
              { nextContent ? nextContent : 'Next Page' } →
            </Link>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
