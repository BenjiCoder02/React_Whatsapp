import React from 'react'
import "./compStyles.css"

function ChatList(props){
    return(
        <div className="chatList">
            <div className="top">
                <div className="avatar">
                    <img src={props.img} />
                </div>
             <div className="chatList-top">
                <h2 className="chat-num">{props.num}</h2>
                <p className="date">{props.date}</p>
            </div>
            </div>
          
            <div className="chatList-bottom">
                <p className="message">{props.message}</p>
                <hr/>
            </div>
            
            
            
            
            
        </div>
    )
}

export default ChatList