// import React from "react"
// import Layout from "../components/layout"
// import "./style.css"
// import { userAction } from "../redux/action"
// import { connect } from "react-redux"

// class Dashboard extends React.Component {
//   state = {
//     user: "",
//     name: "",
//   }
//   componentDidMount = () => {
//     this.setState({ user: location.state.user })
//     console.log("HILA DALA NA")
//     console.log(this.props.name)
//   }
//   componentDidUpdate = prevProps => {
//     if (prevProps.name != this.props.name)
//       this.setState({ name: this.props.name })
//   }
//   render() {
//     console.log("ABBAR DABRAA GILI GILI CHU")
//     console.log(this.props.name)
//     return (
//       <div className="container">
//         {this.state.user === "doctor" ? (
//           <div>
//             <Layout user={this.state.user} />
//             <div className="main">
//               <h1>Doctor deshboard...</h1>
//             </div>
//           </div>
//         ) : (
//           <div>
//             <Layout user={this.state.user} />
//             <div className="main">
//               <h1>Patient dashboard...</h1>
//             </div>
//           </div>
//         )}
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => {
//   console.log(state)
//   return {
//     name: state.name,
//   }
// }

// export default connect(mapStateToProps, { userAction })(Dashboard)

import React from "react"
import Layout from "../components/layout"
import "./style.css"

const Dashboard = ({ location }) => {
  console.log("dashboard...")
  console.log(location.state.user)
  const user = location.state.user
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
