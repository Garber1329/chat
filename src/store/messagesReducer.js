import * as ActionTypes from './actionTypes';

export const Messages = (state = { errMess: null, messages:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_MESSAGES:
            return {...state, errMess: null, messages: action.payload};

        case ActionTypes.MESSAGES_FAILED:
            return {...state, errMess: action.payload};

        /*case ActionTypes.ADD_MESSAGE:
            var message = action.payload;
            return { ...state, comments: state.comments.concat(message)};*/

        default:
            return state;
    }
};