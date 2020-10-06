import React from "react"
import   Link  from 'gatsby-plugin-transition-link/AniLink'

const SideNav = ({data}) => {
  console.log(data.node)
  return (
    <div className="sidenav__container">
      <div className="sidenav__items">
        {data.map((item, index) => (
          
            <Link
              key={item.node.id}
              to={item.node.frontmatter.path}
             className="sidenav__item">
              {item.node.frontmatter.title}
            </Link>
          
        ))}
      </div>
    </div>
  )
}

export { SideNav }
