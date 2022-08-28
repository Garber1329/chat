import React, {useState} from "react";
import AllChats  from "../components/allChats";
import ChatsFilter from "../components/chatsFilter";
import {useChats} from "./useChats";
import img1 from "../img/tick-mark.png";
import imgUser from "../img/user.png";
import MessageBox from "../components/messageBox";

function Main(props) {
  const [chats, setChats] = useState(props.props.chats.chats);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const sortedAndSearchedChats = useChats(chats, filter.sort, filter.query);
  const [selectedChat, setSelectedChat] = useState(0);
  const [inputCheck, setInputCheck] = useState(false);

/*
  const [chats1, setChats1] = useState([]);
  const chatAndData = chats.map(chat =>
      [...chat, ...selectedChat]
  )
    console.log(chatAndData)
  [...chat, ...mess.filter(mes => mes.chatId === chat.id)]
    console.log(chatAndData);

    for (const key of Object.keys(chats)) {
        let s = chats[key];
        setChats1([...chats1, {s: [...s]}]);
    }

    setChats1(chats[1]);
    const [s,sS] = useState([]);
        s.push({id:2, cart: chats});
        s.push({id:3, cart: chats});
    console.log(props.props);*/

  return (
      <main className="main">
          <div className="container">
              <div className="d-flex">
                  <input id="menu__toggle" type="checkbox"
                         checked={inputCheck}
                         onChange={e => setInputCheck(!e.target.checked)}/>
                  <label className="menu__btn" htmlFor="menu__toggle"
                  onClick={()=> setInputCheck(!inputCheck)}>
                      <span></span>
                  </label>
                  <div className="chats-left menu__box">
                      <div className="menu__item">
                          <div className="chats-left__info">
                              <div className="all-chats__status">
                                  <div>
                                      <img className="all-chats__people-img" src={imgUser} alt=""/>
                                      <span className="all-chat__status-online"><img src={img1} alt=""/></span>
                                  </div>

                              </div>
                              <ChatsFilter filter={filter}
                                           setFilter={setFilter}/>
                          </div>
                          <AllChats chats = {sortedAndSearchedChats}
                                    setSelectChat = {setSelectedChat}
                                    selectedChat = {selectedChat}
                                    mes = {props.props.messages.messages}
                                    setInputCheck = {setInputCheck}
                                    inputCheck={inputCheck}/>
                      </div>

                  </div>
                  <div className="chats-right">
                      <MessageBox selectedChat = {selectedChat}
                                  selectedMes = {props.props.messages.messages.filter(mes =>  mes.chatId === selectedChat.id)}
                                  postMessage = {props.props.postMessage}
                      />
                  </div>
              </div>
          </div>
      </main>
  );
}

export default Main;
