import React from 'react';

class AllChats extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div className="all-chats">
            <h1 className="all-chats__title">Chats</h1>
            {
                this.props.chats.chats.length > 0 ?
                <div>
                    {this.props.chats.chats.map(chat =>
                        <div className="all-chats__people-wrap d-flex">
                            <img className="all-chats__people-img" src={chat.img} alt={chat.name}/>
                            <div className="all-chats__wrap-people-name">
                                <div className="all-chats__people-name">
                                    {chat.name}
                                </div>
                                <div className="all-chats__last-messages">
                                    {chat.messages[chat.messages.length-1].text}
                                </div>
                            </div>
                            <div className="all-chats__last-date-messages">
                                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(chat.messages[chat.messages.length-1].date)))}

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