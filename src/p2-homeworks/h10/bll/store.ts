import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";

const reducer = combineReducers({
    loading: loadingReducer,

})

const store = createStore(reducer)

export default store

export type AppStoreType = ReturnType<typeof reducer>

// @ts-ignore
window.store = store // for dev
