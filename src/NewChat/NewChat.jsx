import React from "react"
import "./NewChat.scss"

const NewChat = (props) => {
  return (
    <div className="newchat-container">
      {/* <div className="newchat-tittle">
        <h2>Nuevo mensaje</h2>
      </div>
      <div className="chat-lookup-container">
        <label htmlFor="">Para:</label>
        <input type="search" placeholder="Buscar" />
      </div> */}
      <div className="suggestions-container">
        {/* <label htmlFor="">Sugerencias:</label> */}
        <div className="img-container">
          <img src={props.url} alt="#" />
        </div>
        <div className="user-data">
          <div>
            <span className="username-title">{props.name}</span>
          </div>
          <div>
            <span className="user-name">{props.username}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewChat
