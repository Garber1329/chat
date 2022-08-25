import * as ActionTypes from './actionTypes';
import { baseUrl } from '../share/baseUrl';

/**.......... Chats ............................ */

export const fetchChats = () => (dispatch) => {

    dispatch(chatsLoading(true));

    return fetch(baseUrl + 'chats')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(chats => dispatch(addChats(chats)))
        .catch(error => dispatch(chatsFailed(error.message)));
}

export const chatsLoading = () => ({
    type: ActionTypes.CHATS_LOADING
});

export const chatsFailed = (errmess) => ({
    type: ActionTypes.CHATS_FAILED,
    payload: errmess
});

export const addChats = (chats) => ({
    type: ActionTypes.ADD_CHATS,
    payload: chats
});

/**.......... Messages ............................ */

export const fetchMessages = () => (dispatch) => {
    return fetch(baseUrl + 'messages')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(messages => dispatch(addMessages(messages)))
        .catch(error => dispatch(messagesFailed(error.message)));
};

export const messagesFailed = (errmess) => ({
    type: ActionTypes.MESSAGES_FAILED,
    payload: errmess
});

export const addMessages = (messages) => ({
    type: ActionTypes.ADD_MESSAGES,
    payload: messages
});