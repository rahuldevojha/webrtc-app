import React from "react"

import HomeLayout from "../components/homeLayout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Signup = () => (
  <HomeLayout>
    <SEO title="Home" />
    <h1>Signup Form</h1>
    <Link to="/dashboard">
      <button> Signup </button>
    </Link>
  </HomeLayout>
)

export default Signup
