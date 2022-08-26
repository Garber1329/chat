import React, {useEffect, useState} from 'react';
import img1 from "../img/tick-mark.png";

function MessageBox (props) {

    const [text, setText] = useState('');

    const handleSubmit = () => {
        props.postMessage(props.selectedChat.id, "you", text)
    }

    return <div className="message-box__wrap">
        {props.selectedChat === 0 ?
            <div></div>
            :
            <div className="message-box__name d-flex">
                <div className="all-chats__status">
                    <img className="all-chats__people-img" src={props.selectedChat.img}
                         alt={props.selectedChat.name}/>
                    <span className="all-chat__status-online"><img src={img1} alt=""/></span>
                </div>
                <div className="all-chats__wrap-people-name">
                    <div className="all-chats__people-name">
                        {props.selectedChat.name}
                    </div>
                </div>
            </div>
        }
        {props.selectedMes.length === 0 ?
            <div></div>
            :
            <div className="message-box__chat-wrap">
                {props.selectedMes.map(mes => mes.from === "you" ?
                    <div key={mes.id}>
                        <div className="message-box__mes-from-you">
                            {mes.text}
                        </div>
                        <div className="message-box__mes-date-you">
                            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'numeric', day: '2-digit', hour: "2-digit", minute: "numeric"}).format(new Date(Date.parse(mes.date)))}
                        </div>
                    </div>
                    :
                    <div key={mes.id} className="message-box__mes-from-another">
                        <div className="d-flex">
                            <img className="all-chats__people-img" src={props.selectedChat.img} alt={props.selectedChat.name}/>
                            <div className="message-box__mes-text-another">{mes.text}</div>
                        </div>
                        <div className="message-box__mes-date-another">
                            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'numeric', day: '2-digit', hour: "2-digit", minute: "numeric"}).format(new Date(Date.parse(mes.date)))}
                        </div>
                    </div>
                )}
            </div>
        }
        {props.selectedChat === 0 ?
            <div></div>
            :
            <div className="message-box__bottom">
                <div className="message-box__input-wrap">
                    <input type="text" className="message-box__input" placeholder="Type your message"
                           onChange={e => setText(e.target.value)}
                    ></input>
                    <button className="message-box__botton" type="submit"
                    onClick={handleSubmit}></button>
                </div>
            </div>
        }
    </div>;
}

export default MessageBox;