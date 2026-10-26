import { useState } from 'react'
import Header from './header';
import './App.css'


function ChatBot(){
   const [prompt,setprompt] = useState('')
   const [userprompt,setuserprompt] =useState('Enter your prompt')

  function handleclick()
  {
    setuserprompt(prompt)
    

  }

  return(
    <div> 
      <button type="submit" onClick={handleclick}>ask query</button>
      <input type="text" name="" id="" placeholder="Enter your query" onChange={(event)=>{setprompt(event.target.value)}} />
      
      <div>
      <h1>{userprompt}</h1>
      </div>
      
    </div>
  )
}




function App() {

  return (
    <>
      
      <Header/>
      <h1>Homepage</h1>
      <ChatBot/>
    </>
  );
}

export default App
