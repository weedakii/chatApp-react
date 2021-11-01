import { FormControl, IconButton, Input } from '@mui/material';
import React, { useEffect, useState } from 'react'
import './App.css';
import db from './components/firebase';
import Messeges from './components/Messeges';
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';

function App() {
  const [messeges, setMesseges] = useState([])
  const [input, setInput] = useState('') 
  const [username, setUsername] = useState('')

  useEffect(() => {
    db.collection('messeges').orderBy('timestamp', "desc").onSnapshot(snap => {
      setMesseges(snap.docs.map(e => ({id: e.id,messege: e.data()})))
    })
  }, [])

  useEffect(() => {
    setUsername(prompt('please enter your name'))
  }, [])

  const sending = (e) => {
    e.preventDefault()
    db.collection('messeges').add({
      messege: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setMesseges([...messeges, {username: username, messege: input}])
    setInput('')
  }
  return (
    <div className="App">
      <h1>Family Chat</h1>
      <h2 style={{color: '#ff9800'}}>welcome {username}</h2>
      <form className="app_form">
        <FormControl className="app_child">
          <Input placeholder="Enter a messege..." value={input} color="secondary" onChange={e => setInput(e.target.value)}/>
          <IconButton disabled={!input} variant="contained" color="secondary" type="submit" onClick={sending}><SendIcon /></IconButton>
        </FormControl>
      </form>
      
      <FlipMove className="bg">
        {
          
          messeges.map((e) => (
            <Messeges key={e.id} user={username} mess={e}/>
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
