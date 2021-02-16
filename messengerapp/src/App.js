import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="f646c1d7-fb85-48e5-bd73-96adbe1f9371"
            userName="andresIcedo"
            userSecret="raven2021"
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps}}
        />
    )
}

export default App;