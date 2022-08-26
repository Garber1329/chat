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
import {fetchChats, fetchMessages, postMessage} from "./store/actionCreators";

const mapStateToProps = state => {
    return {
        chats: state.chats,
        messages: state.messages
    }
}

const mapDispatchToProps = dispatch => ({
    postMessage: (chatId, from, text) => dispatch(postMessage(chatId, from, text)),
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

export default connect(mapStateToProps, mapDispatchToProps)(App);

