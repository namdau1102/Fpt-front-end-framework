import * as types from '../Constants/ActionTypes';
let initialStateFromLogin = { isDisplay: false }

export const formLogin = (state = initialStateFromLogin, action) => {
    switch (action.type) {
        case types.FORM_LOGIN:
            return state = {
                isDisplay: action.isDisplay
            }
        default:
            return state
    }
}