import React from 'react';
import OneChat from "./oneChat";

function AllChats (props) {
        const chat = props.chats;
        const messages = props.mes;
        const setSelectChat = props.setSelectChat;

        return <div className="all-chats">
            <h1 className="all-chats__title">Chats</h1>
            {
                chat.length > 0 ?
                    (
                        <div>
                            {chat.map(chat => {
                                    const lastMes =messages.filter(mes => mes.chatId === chat.id);
                                    return (
                                        <OneChat
                                            key={chat.id}
                                            chat={chat}
                                            messages={lastMes[lastMes.length - 1]}
                                            setSelectChat={setSelectChat}
                                        />
                                    )
                                }
                            )}
                        </div>
                    )
                    :
                    (<div>Чати відсутні</div>)
            }
        </div>

}

export default AllChats;