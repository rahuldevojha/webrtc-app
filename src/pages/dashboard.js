import React, { useState } from "react"
import HeadSidebar from "../components/layout"

const Dashboard = () => {
  const [doctor] = useState([
    "Dashboard",
    "Message",
    "Appoinment",
    "Search",
    "Report",
  ])
  return (
    <div>
      <HeadSidebar value={doctor} />
    </div>
  )
}

export default Dashboard
