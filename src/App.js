import React, {useState} from "react";
import './App.scss';
import { useDispatch, useSelector } from "react-redux";
import AllChats  from "./components/allChats";
import ChatsFilter from "./components/chatsFilter";
import {useChats} from "./components/useChats";
import img1 from "./img/tick-mark.png";
import imgUser from "./img/user.png";
import MessageBox from "./components/messageBox";

function App() {
  const dispatch = useDispatch();
  const [chats, setChats] = useState(useSelector(state => state.chats.chats));
  const [filter, setFilter] = useState({sort: '', query: ''});
  const sortedAndSearchedChats = useChats(chats, filter.sort, filter.query);
  const [selectedChat, setSelectedChat] = useState([]);
  return (
      <main className="main">
          <div className="container">
              <div className="d-flex">
                  <div className="chats-left">
                      <div className="chats-left__info">
                          <div className="all-chats__status">
                              <img className="all-chats__people-img" src={imgUser} alt=""/>
                              <span className="all-chat__status-online"><img src={img1} alt=""/></span>
                          </div>
                          <ChatsFilter filter={filter}
                                       setFilter={setFilter}/>
                      </div>
                      <AllChats chats = {sortedAndSearchedChats}
                                setSelectChat={setSelectedChat}/>
                  </div>
                  <div className="chats-right">
                      <MessageBox chat={selectedChat}/>
                  </div>
              </div>
          </div>
      </main>
  );
}

export default App;
