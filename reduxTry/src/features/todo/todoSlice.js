import {createSlice, nanoid} from "@reduxjs/toolkit";
import { react } from "react";

const initialState = {

    todos :[{id:1, text: "Hello"}]
}

function addtodofunc(state,action){// so we will perform the actions on the state and it will change 
    // later so what is the current position of the state , what is the current state of the state that we get by the state
    // and the action means apart form the state we will need some other data as well if needed 
    // that data will be there in action
    const todo = {
        id: nanoid(),// this is for the unique ids
        text: action.payload
    }
    state.todos.push(todo)

}
function removetodofunc(state,action){

    state.todos = state.todos.filter((todo) => todo.
    id !==action.payload)
}
function updatetodofunc(state, action) {
  const toupdateid = action.payload.id;
  const data = {
    id: action.payload.id,
    text: action.payload.text,
  };

  // find the todo with that id
  const index = state.todos.findIndex((todo) => todo.id === toupdateid);

  if (index !== -1) {
    state.todos[index] = data;   // replace the whole todo object
  }
}

export const todoSlice = createSlice({
    name: 'Todo', // This is the name fo the slice
    initialState, // This is the state
    reducers:{    // These are the reducer functions which perform the adding and removing actions

        addtodo: addtodofunc, // these reducers the functionality we will always update the state through these only
        removetodo: removetodofunc,
        updatetodo: updatetodofunc
    }
})

export const {addtodo, removetodo, updatetodo} = todoSlice.actions

export default todoSlice.reducer