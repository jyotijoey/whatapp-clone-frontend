
import './App.css';
import Sidebar from './Sidebar';
import Chat from "./Chat"
import React,{ useEffect, useState } from 'react';
import Pusher from "pusher-js";
import axios from "./axios"

function App() {

  const [messages, setMessages]= useState([]);

  useEffect(
    () => {
      axios.get("/messages/sync")
      .then(response => {
        setMessages(response.data);
      });
    },
    [],
  )

  useEffect(() => {
    // key from pusher
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
        {/* sidebar */}
        <Sidebar />
        {/* chat */}
        <Chat 
          messages= {messages}
        />
      </div>
    </div>
  );
}

export default App
