export const PROFILE = "PROFILE"

export const userAction = payload => {
  console.log("CUHIT")
  return {
    type: PROFILE,
    payload,
  }
}
