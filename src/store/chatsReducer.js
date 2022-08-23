import chatJSON from "../share/chats.json"

const defaultState = {
    chats: chatJSON
}

const ADD_CHAT = "ADD_CHAT"

export const chatsReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_CHAT:
            return {...state, chat: [...state.chats, action.payload]}
        default:
            return state
    }
}

/*export const addCustomerAction = (payload) => ({type: ADD_CHAT, payload})*/