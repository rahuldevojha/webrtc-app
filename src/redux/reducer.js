import PROFILE from "./action"

const initialState = {
  user: "doctor",
  name: "vinay",
  photoUrl: "ghvjbn,./klvgvbm,mko",
}

const userReducer = (state = initialState, action) => {
  console.log("ASSF")
  console.log(action)
  switch (action.type) {
    case "PROFILE": {
      console.log("ENTERIGN REDUCER PROGILE")
      const newState = {
        ...state,
        name: action.payload.name,
        user: action.payload.user,
        photoUrl: action.payload.photoUrl,
      }
      console.log(newState)
      console.log("YHIS WAS NEW STAET")
      return newState
    }
    default:
      return state
  }
}

export default userReducer
