import React, { Component } from "react"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey: `${process.env.API_KEY}`,
  authDomain: `${process.env.AUTH_DOMAIN}`,
})

class SignIn extends Component {
  state = { isSignedIn: false, isFetch: false, name: "doctor" }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  }

  componentDidMount = async () => {
    firebase.auth().onAuthStateChanged(currentUser => {
      this.setState({ isSignedIn: !!currentUser, isFetch: true })
    })
  }

  componentDidUpdate = () => {
    if (this.state.isSignedIn) {
      window.localStorage.setItem("user", this.state.name)
      window.location.href = "/dashboard"
    } else {
      window.localStorage.clear()
    }
  }

  render() {
    return (
      <div>
        {this.state.isFetch === true ? (
          <div className="App">
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </div>
        ) : (
          <div style={{ textAlign: "center", margin: "10%" }}>
            <h3>Loading...</h3>
          </div>
        )}
      </div>
    )
  }
}

export default SignIn
