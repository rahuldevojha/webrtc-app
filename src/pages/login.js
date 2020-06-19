import React from "react"

import HomeLayout from "../components/homeLayout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Login = () => (
  <HomeLayout>
    <SEO title="Home" />
    <h1>Login Form</h1>
    <Link to="/dashboard">
      <button> Login </button>
    </Link>
  </HomeLayout>
)

export default Login
