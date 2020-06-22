import React from "react"
import Layout from "../components/layout"
import "./style.css"

const Dashboard = ({ location }) => {
  console.log("HEHRERERHERHERHRERHERHERHERERERH")
  const user = window.localStorage.getItem("user")

  console.log(location)
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

export default Dashboard
