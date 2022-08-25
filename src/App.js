import React from "react";
import './App.scss';
/*import { useDispatch, useSelector } from "react-redux";
import AllChats  from "./components/allChats";
import ChatsFilter from "./components/chatsFilter";
import {useChats} from "./components/useChats";*/
import { connect } from 'react-redux';
/*import img1 from "./img/tick-mark.png";
import imgUser from "./img/user.png";
import MessageBox from "./components/messageBox";*/
import Main from "./components/mainComponent";
import {fetchChats, fetchMessages} from "./store/actionCreators";

const mapStateToProps = state => {
    return {
        chats: state.chats,
        messages: state.messages
    }
}

const mapDispatchToProps = dispatch => ({
    fetchChats: () => { dispatch(fetchChats())},
    fetchMessages: () => { dispatch(fetchMessages())}
});

const  CheckProps = (props) => {
    if (props.props.chats.isLoading || props.props.messages.isLoading) {
        return(
            <div className="container">
                <p>Loading . . .</p>
            </div>
        );
    }
    else if (props.props.chats.errMess || props.props.messages.errMess) {
        return(
            <div className="container">
                <h4>{props.props.chats.errMess}</h4>
                <h4>{props.props.messages.errMess}</h4>
            </div>
        );
    }
    else  {
        return (
            <Main props={props.props}/>
        );
    }
}

class App extends React.Component{
    componentDidMount() {
        this.props.fetchChats();
        this.props.fetchMessages();
    }

    render() {
        return (
            <CheckProps props={this.props}/>
        );
    }
}

// function App() {
//   const [chats, setChats] = useState(/*useSelector(state => state.chats)*/[]);
//   const [filter, setFilter] = useState({sort: '', query: ''});
//   const sortedAndSearchedChats = useChats(chats, filter.sort, filter.query);
//   const [selectedChat, setSelectedChat] = useState([]);
//
//   useEffect(async () => {
//       this.props.fetchChats();
//   },[])
//
//   return (
//       <main className="main">
//           <div className="container">
//               <div className="d-flex">
//                   <div className="chats-left">
//                       <div className="chats-left__info">
//                           <div className="all-chats__status">
//                               <img className="all-chats__people-img" src={imgUser} alt=""/>
//                               <span className="all-chat__status-online"><img src={img1} alt=""/></span>
//                           </div>
//                           {/*<ChatsFilter filter={filter}
//                                        setFilter={setFilter}/>*/}
//                       </div>
//                       {/*<AllChats chats = {sortedAndSearchedChats}
//                                 setSelectChat={setSelectedChat}/>*/}
//                   </div>
//                   <div className="chats-right">
//                       {/*<MessageBox chat={selectedChat}/>*/}
//                   </div>
//               </div>
//           </div>
//       </main>
//   );
// }

export default connect(mapStateToProps, mapDispatchToProps)(App);

