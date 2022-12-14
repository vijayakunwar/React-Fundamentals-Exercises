

import AddMessage from "./AddMessage";
import MessageHistory from "./MessageHistory";
import PropTypes from "prop-types";

const ChatWindow = ({user, messages, onMessage}) => {

    const handleOnMessage =(message) =>{
        onMessage(user.username, message);
    }

    return (

        <div className="chat-window">
            <p>Awesome Chat</p>
            <div className="name-sender">{user.username}</div>
            <MessageHistory messages ={messages} user ={user}/>
            <AddMessage onMessage ={handleOnMessage}/>
        </div>
    );
};
ChatWindow.propTypes = {
    onMessage: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired,
  };

export default ChatWindow;