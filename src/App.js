import React from "react";
import './App.scss';
import { useDispatch, useSelector } from "react-redux";
import AllChats  from "./components/allChats";

function App() {
  const dispatch = useDispatch()
  const chats = useSelector(state => state.chats)
  console.log(chats);

  return (
    <div className="App">
        <div className="container">
            
            <AllChats chats = {chats}/>
        </div>
    </div>
  );
}

export default App;
