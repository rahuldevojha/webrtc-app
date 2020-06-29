import React, { Component } from "react"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { userAction } from "../redux/action"
import { connect } from "react-redux"
import { navigate } from "gatsby"

firebase.initializeApp({
  apiKey: `${process.env.API_KEY}`,
  authDomain: `${process.env.AUTH_DOMAIN}`,
})

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = { isSignedIn: false, isFetch: false, user: this.props.user }
  }
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
      console.log("data transfer to userAction")
      if (currentUser) {
        const data = {
          user: this.props.user,
          name: firebase.auth().currentUser.displayName,
          photoUrl: firebase.auth().currentUser.photoURL,
        }
        this.props.userAction(data)
      }
      this.setState({ isSignedIn: !!currentUser, isFetch: true })
    })
  }

  componentDidUpdate = prevProps => {
    console.log("fetching...")
    if (this.state.isSignedIn) navigate("/dashboard")
  }

  render() {
    console.log("User Name")
    console.log(this.props.name)
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

const mapStateOfProps = state => {
  console.log("state data")
  console.log(state)
  return {
    name: state.name,
  }
}

export default connect(mapStateOfProps, {
  userAction,
})(SignIn)
