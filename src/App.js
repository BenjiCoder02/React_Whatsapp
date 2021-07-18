import React from "react"
import Navbar from "./components/Navbar"
import ChatList from "./components/ChatList";
import "./components/compStyles.css"
import contacts from "./components/contacts"

function createList(contact){
  
  return(
  <ChatList 
  key={contact.id}
  img={contact.img}
  num={contact.num}
  date={contact.date}
  message={contact.message} />
  )
}

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <div className="list">
        {contacts.map(createList)}
      
   
      </div>
     
    </div>
  );
}

export default App;
