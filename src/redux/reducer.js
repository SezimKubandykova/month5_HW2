import {types} from "./types";


const initialState = {
    number: 0,
    number2: 0,
    result: 0
}

export function reducer (state = initialState, action) {
    switch (action.type) {
        case types.NEW_NUMBER:
            return  {...state, number: action.payload}
        case types.NEW_NUMBER2:
            return {...state, number2: action.payload}
        case types.ADD_NUMBER:
            return {...state, result: state.number !== 0 && state.number2 !== 0 ? state.number + state.number2 : alert ("Заполните пустое поле!")}
        case types.SUBTRACT_NUMBER:
            return {...state, result: state.number !== 0 && state.number2 !== 0 ? state.number - state.number2 : alert ("Заполните пустое поле!")}
        case types.DIVIDE_NUMBER:
            return {...state, result: state.number !== 0 && state.number2 !== 0 ? state.number / state.number2 : alert ("Заполните пустое поле!")}
        case types.MULTIPLY_NUMBER:
            return {...state, result: state.number !== 0 && state.number2 !== 0 ? state.number * state.number2 : alert ("Заполните пустое поле!")}
        default: return state
    }
}
