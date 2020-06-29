const initialState = {
  user: "doctor",
  name: "vinay",
  photoUrl: "ghvjbn,./klvgvbm,mko",
}

const userReducer = (state = initialState, action) => {
  console.log("Action check")
  console.log(action)
  switch (action.type) {
    case "PROFILE": {
      const newState = {
        ...state,
        name: action.payload.name,
        user: action.payload.user,
        photoUrl: action.payload.photoUrl,
      }
      console.log("State Update")
      console.log(newState)
      return newState
    }
    default:
      return state
  }
}

export default userReducer
