export const PROFILE = "PROFILE"

export const userAction = payload => {
  console.log("Action")
  return {
    type: PROFILE,
    payload,
  }
}
