import React from 'react'
import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';



import './App.css';

const App = () => {
	if(!localStorage.getItem('username')) return <LoginForm />

	return (
		<ChatEngine 
			height="100vh"
			projectID="5a70d36c-8f81-49cc-b96b-deab8fc08c70"
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	)
}
export default App;