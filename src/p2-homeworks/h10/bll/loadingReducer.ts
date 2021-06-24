import {AppStoreType} from "./store";

const initState = {
    isLoading: false
}

type InitialStateType = typeof initState

export const loadingReducer = (state:InitialStateType = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        case "SET-IS-LOADING": {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean) => ({type: 'SET-IS-LOADING', isLoading} as const) // fix any

type ActionType = ReturnType<typeof loadingAC>