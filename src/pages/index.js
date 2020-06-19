import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `600px`, marginBottom: `1.45rem` }}></div>
    <Link to="/dashboard/" activeStyle={{ color: "red" }} state={{ p: "name" }}>
      DashBoard
    </Link>
  </Layout>
)

export default IndexPage
