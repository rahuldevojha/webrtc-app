import React from "react"
import Layout from "../components/layout"
import "./style.css"

const Dashboard = ({ location }) => {
  return (
    <div className="container">
      {location.state.user === "doctor" ? (
        <div>
          <Layout user={location.state.user} />
          <div className="main">
            <h1>Doctor message here...</h1>
          </div>
        </div>
      ) : (
        <div>
          <Layout user={location.state.user} />
          <div className="main">
            <h1>Patient message here...</h1>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard
