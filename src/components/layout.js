import React from "react"
import Header from "./header"
import Sidebar from "./sidebar"
import Footer from "./footer"

const Layout = props => {
  const doctor = ["Dashboard", "Messages", "Appointments", "Records"]
  const patient = ["Dashboard", "Messages"]
  return (
    <div>
      {props.user === "doctor" ? (
        <div>
          <Header value="Doctor Dashboard" />
          <Sidebar value={doctor} user={props.user} />
          <Footer />
        </div>
      ) : (
        <div>
          <Header value="Patient Dashboard" />
          <Sidebar value={patient} />
          <Footer />
        </div>
      )}
    </div>
  )
}

export default Layout
