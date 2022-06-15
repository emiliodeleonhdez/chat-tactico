import React from "react"
import "./Messages.scss"

const Messages = (props) => {
  return (
    <div className="messages-container" style={props.style}>
      <div className="img-container">
        <img src={props.url} alt="#" />
      </div>
      <div className="user-data">
        <div>
          <span className="username-title">{props.name}</span>
        </div>
        <div>
          <span className="lastmessage-text">{props.message}</span>
        </div>
      </div>
    </div>
  )
}

export default Messages
