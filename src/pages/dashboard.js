import React, { useState } from "react"
import Header from "../components/header"
import Sidebar from "../components/sidebar"
import { Router } from "@reach/router"
import Messages from "../components/doctorComponents/messages"

const Dashboard = () => {
  const [doctor] = useState(["Message", "Appoinment", "Report"])

  return (
    <div className="container">
      <Header value="DASHBOARD" />
      <Sidebar value={doctor} />
      <div
        style={{
          marginTop: "70px",
          marginLeft: "245px",
        }}
      >
        <Router basepath="/dashboard">
          <Messages path="/message" />
        </Router>
        <h1>vinay...</h1>
      </div>
    </div>
  )
}

export default Dashboard
