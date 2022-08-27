import * as ActionTypes from './actionTypes';

export const Messages = (state = { errMess: null, messages:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_MESSAGES:
            return {...state, errMess: null, messages: action.payload};

        case ActionTypes.MESSAGES_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_MESSAGE:
            let message = action.payload;
            return { ...state, messages: state.messages.concat(message)};

        default:
            return state;
    }
};