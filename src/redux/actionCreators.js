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
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
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
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
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

/**.......... Post Messages ............................ */

export const addMessage = (message) => ({
    type: ActionTypes.ADD_MESSAGE,
    payload: message
});

export const postMessage = (chatId, from, text) => (dispatch) => {

    const newMessage = {
        chatId: chatId,
        date: new Date().toISOString(),
        from: from,
        text: text
    };

    return fetch(baseUrl + 'messages', {
        method: "POST",
        body: JSON.stringify(newMessage),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response => dispatch(addMessage(response)))
        .catch(error => {
            console.log('post message', error.message);
            alert('Your message could not be posted\nError: ' + error.message);
        });
};

