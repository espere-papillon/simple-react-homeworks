import {UserType} from "../HW8";

export type SortPayloadType = 'up' | 'down'

export const sortAC = (payload: SortPayloadType) => ({type: 'sort', payload} as const)

export const checkAC = (payload: number) => ({type: 'check', payload} as const)

type ActionType = ReturnType<typeof sortAC> | ReturnType<typeof checkAC>

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            const newArray = state.map(p => ({...p}));
            switch (action.payload) {
                case "up": {
                    return newArray.sort((a, b) => a.name > b.name ? 1 : -1)
                }
                case "down": {
                    return newArray.sort((a, b) => b.name > a.name ? 1 : -1)
                }
                default:{
                    return newArray
                }
            }
        }
        case 'check': {
            // need to fix
            return state.filter(p => p.age > action.payload)
        }
        default:
            return state
    }
}