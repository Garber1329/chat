import React, {useState} from 'react';
import img1 from "../img/tick-mark.png";

const OneChat = ({chat, messages, selectedChat, setSelectChat, setInputCheck,inputCheck}) => {

    const [newMes, setNewMes] = useState([]);

    const notification = () => {
        if (messages !== newMes && messages.from !== "you" && selectedChat !== chat) {
            return (
                <div className="all-chats__new-message">NEW</div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    return (
        <div className="all-chats__people-wrap d-flex"
             onClick={() => {
                 setSelectChat(chat)
                 setNewMes(messages)
                 setInputCheck(!inputCheck)
             }
             }>
            <div className="all-chats__status">
                <img className="all-chats__people-img" src={chat.img} alt={chat.name}/>
                <span className="all-chat__status-online"><img src={img1} alt=""/></span>
            </div>
            <div className="all-chats__wrap-people-name">
                <div className="all-chats__people-name">
                    {chat.name}
                </div>
                {
                    messages !== undefined ?

                        <div className="all-chats__last-messages">
                            {messages.text}
                        </div>
                        :
                        <div></div>
                }
            </div>
            {
                messages !== undefined ?
                    <div className="all-chats__last-date-messages">
                        {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(Date.parse(messages.date)))}
                        {notification()}
                    </div>
                    :
                    <div></div>
            }
        </div>
    );
}

export default OneChat;