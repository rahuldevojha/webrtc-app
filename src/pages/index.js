import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link
        to="/dashboard/"
        activeStyle={{ color: "red" }}
        state={{ p: "name" }}
      >
        DashBoard
      </Link>
    </div>
  )
}

export default IndexPage
