import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a, b) => a.name.localeCompare(b.name));
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            return state.filter(user => user.age > action.payload).sort((a, b) => a.name.localeCompare(b.name)) // need to fix
        }
        default:
            return state
    }
}

