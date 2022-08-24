import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Portfolio() {
  return (
    <nav className="nav">
      <Link to="/home" className="site-title">
        Swatej Patil
      </Link>
      <ul>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/projects">Projects</CustomLink>
        <CustomLink to="/publications">Publications</CustomLink>
        <CustomLink to="/books">Books</CustomLink>
        <CustomLink to="/blogs">Blogs</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
