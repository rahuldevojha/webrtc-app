import React, { useState } from "react"
import SignIn from "../components/sign"

const IndexPage = () => {
  const [user, setUser] = useState({ name: "", showSignInModal: false })

  const onChange = e => {
    console.log(e.target.value)
    setUser({ name: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(user.name)
    setUser({ showSignInModal: true, name: user.name })
  }

  return (
    <div>
      {console.log(user.name)}
      {user.showSignInModal ? (
        <SignIn user={user.name} />
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Choose your proficiency</h2>
          <label>
            Choose here :
            <select className="option" value={user.name} onChange={onChange}>
              <option value="">Select</option>
              <option value="doctor">doctor</option>
              <option value="patient">patient</option>
            </select>
          </label>
          <input type="submit" value="submit" />
        </form>
      )}
    </div>
  )
}

export default IndexPage
