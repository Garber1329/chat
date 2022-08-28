import React from 'react';
import OneChat from "./oneChat";

function AllChats({chats, mes, selectedChat, setSelectChat, setInputCheck, inputCheck}) {

    return <div className="all-chats">
        <h1 className="all-chats__title">Chats</h1>
        {
            chats.length > 0 ?
                (
                    <div>
                        {chats.map(chat => {
                                const lastMes = mes.filter(mes => mes.chatId === chat.id);
                                return (
                                    <OneChat
                                        key={chat.id}
                                        chat={chat}
                                        messages={lastMes[lastMes.length - 1]}
                                        setSelectChat={setSelectChat}
                                        selectedChat={selectedChat}
                                        setInputCheck={setInputCheck}
                                        inputCheck={inputCheck}
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