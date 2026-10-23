
import { useState } from 'react';
import './App.css';

function Homepage() {
  let [count, setcount] = useState(0);

  function HandleClick() {
    let newval = count + 1;
    setcount(newval);
  }

  return (
    <>
      <h1>Hello</h1>
      <p>Welcome to the home page</p>
      <h1>Current count is {count}</h1>
      <button onClick={HandleClick}>Counter</button>
    </>
  );
}

function Dynamicuser() {
  const [value, setvalue] = useState('User');
  const [name, setname] = useState('');

  function HandleClick() {
    setvalue(name);
  }

  return (
    <>
      <h1>Hello {value}</h1>

      <input
        type="text"
        placeholder="Enter your name"
        // what is happenign in below line 
        // we will understand word by word 
        // the onChange event is triggered whenever the value of the input field changes.
        // The event parameter represents the event object associated with the change event.
        // event.target refers to the input element that triggered the event.
        // event.target.value retrieves the current value of the input field.
        // setname is a state updater function that updates the name state variable with the new value from the input field.
        onChange={(event) => setname(event.target.value)}
      />

      <button onClick={HandleClick}>Submit</button>
    </>
  );
}

function App() {
  return (
    <>
      <Homepage />
      <br />
      <Dynamicuser />
    </>
  );
}

export default App;
