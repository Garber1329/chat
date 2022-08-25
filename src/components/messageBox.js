import React from 'react';
import img1 from "../img/tick-mark.png";

class MessageBox extends React.Component {

    render() {
        return <div className="message-box__wrap">
            {this.props.chat.length === 0 ?
                <div></div>
                :
                <div className="message-box__name d-flex">
                    <div className="all-chats__status">
                        <img className="all-chats__people-img" src={this.props.chat.img}
                             alt={this.props.chat.name}/>
                        <span className="all-chat__status-online"><img src={img1} alt=""/></span>
                    </div>
                    <div className="all-chats__wrap-people-name">
                        <div className="all-chats__people-name">
                            {this.props.chat.name}
                        </div>
                    </div>
                </div>
            }
            {this.props.chat.length === 0 ?
                <div></div>
                :
                <div className="message-box__chat-wrap">
                    {this.props.chat.messages.map(mes => mes.from === "you" ?
                        <div>
                            <div key={mes.id} className="message-box__mes-from-you">
                                {mes.text}
                            </div>
                            <div className="message-box__mes-date-you">
                                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'numeric', day: '2-digit', hour: "2-digit", minute: "numeric"}).format(new Date(Date.parse(mes.date)))}
                            </div>
                        </div>
                        :
                        <div key={mes.id} className="message-box__mes-from-another">
                            <div className="d-flex">
                                <img className="all-chats__people-img" src={this.props.chat.img} alt={this.props.chat.name}/>
                                <div className="message-box__mes-text-another">{mes.text}</div>
                            </div>
                            <div className="message-box__mes-date-another">
                                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'numeric', day: '2-digit', hour: "2-digit", minute: "numeric"}).format(new Date(Date.parse(mes.date)))}
                            </div>
                        </div>
                    )}
                </div>
            }
            {this.props.chat.length === 0 ?
                <div></div>
                :
                <div className="message-box__bottom">
                    <div className="message-box__input-wrap">
                        <input type="text" className="message-box__input" placeholder="Type your message"></input>
                        <button className="message-box__botton" type="submit"></button>
                    </div>
                </div>
            }
        </div>;
    }
}

export default MessageBox;