import React from "react";
import './App.scss';
import { connect } from 'react-redux';
import Main from "./components/mainComponent";
import {fetchChats, fetchMessages, postMessage} from "./redux/actionCreators";

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

