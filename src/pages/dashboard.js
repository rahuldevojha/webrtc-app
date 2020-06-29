import React from "react"
import Layout from "../components/layout"
import "./style.css"
import { connect } from "react-redux"

const Dashboard = props => {
  console.log("dashboard...")
  const user = props.user
  return (
    <div className="container">
      {user === "doctor" ? (
        <div>
          <Layout user={user} />
          <div className="main">
            <h1>Doctor deshboard...</h1>
          </div>
        </div>
      ) : (
        <div>
          <Layout user={user} />
          <div className="main">
            <h1>Patient dashboard...</h1>
          </div>
        </div>
      )}
    </div>
  )
}
const mapStateOfProps = state => {
  return {
    user: state.user,
  }
}

export default connect(mapStateOfProps)(Dashboard)
