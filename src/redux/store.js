import { createStore } from "redux"
import userReducer from "./reducer"

function saveToLocalSorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem("state", serializedState)
  } catch (e) {
    console.log(e)
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state")
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    console.log(e)
    return undefined
  }
}

const persistedState = loadFromLocalStorage()

const store = createStore(userReducer, persistedState)

store.subscribe(() => saveToLocalSorage(store.getState()))
export default store
