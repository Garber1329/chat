import React from 'react';
import img1 from "../img/tick-mark.png"

class AllChats extends React.Component {

    render() {
        return <div className="all-chats">
            <h1 className="all-chats__title">Chats</h1>
            {
                this.props.chats.length > 0 ?
                <div>
                    {this.props.chats.map(chat =>
                        <div key={chat.id} className="all-chats__people-wrap d-flex">
                            <div className="all-chats__status">
                                <img className="all-chats__people-img" src={chat.img} alt={chat.name}/>
                                <span className="all-chat__status-online"><img src={img1} alt=""/></span>
                            </div>
                            <div className="all-chats__wrap-people-name">
                                <div className="all-chats__people-name">
                                    {chat.name}
                                </div>
                                <div className="all-chats__last-messages">
                                    {/*{chat.messages[chat.messages.length-1].text}*/}
                                </div>
                            </div>
                            <div className="all-chats__last-date-messages">
                                {/*{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(chat.messages[chat.messages.length-1].date)))}*/}
                            </div>
                        </div>

                    )}
                </div>
                :
                    <div>Чати відсутні</div>
            }
        </div>;
    }
}

export default AllChats;