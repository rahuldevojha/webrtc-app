import React from "react"

const customstyle = {
  margin: "auto",
  position: "absolute",
  bottom: "0",
  textAlign: "center",
  zIndex: "10000000",
  color: "white",
  width: "100%",
  background: "#3f51b5",
}

const Footer = () => {
  return (
    <div style={customstyle}>
      <h3>Made With Love by BUZZ4HEALTH :)</h3>
    </div>
  )
}

export default Footer
