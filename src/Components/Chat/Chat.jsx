import React from "react"
import "./Chat.scss"
import { useState } from "react"
import Messages from "../Messages/Messages"
import NewChat from "../../NewChat/NewChat"
import Form from "../Form/Form"

export const Chat = () => {
  const [openForm, setOpenForm] = useState(false)
  const [openNavigation, setOpenNavigation] = useState(false)
  const [openChat, setOpenChat] = useState(false)
  const [openMessages, setOpenMessages] = useState(false)
  const [openNewChat, setOpenNewChat] = useState(false)

  const users = [
    {
      photo: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg",
      name: "Joe Dale",
      planeID: "565",
      message: "jajaja no te creo...",
      username: "joe.dale"
    },
    {
      photo: "https://picsum.photos/id/1/200/300",
      name: "Ada Lovelace",
      planeID: "231",
      message: "¡Hola, claro que sí!",
      username: "ada.lovelace"
    },
    {
      photo: "https://picsum.photos/id/56/200/300",
      name: "John Cena",
      planeID: "092",
      message: "El fólio es el #45600....",
      username: "john.cena"
    },
    {
      photo:
        "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Vicente Fox",
      planeID: "432",
      message: "Genial! Despega 8:34.",
      username: "chente.fox"
    },
    {
      photo: "https://picsum.photos/id/89/200/300",
      name: "Victor Trujillo",
      planeID: "457",
      message: "¿Comemos juntos?",
      username: "vic.truu"
    },
    {
      photo: "https://picsum.photos/id/45/200/300",
      name: "John Smith",
      planeID: "1098",
      message: "Me lo mandas a mi correo?",
      username: "john.smith_"
    }
  ]

  const handleReset = () => {
    setOpenChat(false)
    setOpenNavigation(false)
    setOpenMessages(false)
    setOpenNewChat(false)
    setOpenForm(false)
  }

  const handleNewChat = () => {
    setOpenNewChat(true)
    setOpenNavigation(false)
  }

  const handleOpenChat = () => {
    setOpenChat(true)
    setOpenNavigation(true)
  }

  const handleOpenMessages = () => {
    setOpenMessages(true)
    setOpenNavigation(false)
  }

  const handleOpenForm = () => {
    setOpenForm(true)
    setOpenNavigation(false)
  }

  const handleOpenHome = () => {
    setOpenNavigation(true)
    setOpenChat(true)
    setOpenMessages(false)
    setOpenNewChat(false)
    setOpenForm(false)
  }

  return (
    <>
      <div
        id="chat"
        className="main-container"
        style={{ display: openChat ? "block" : "none" }}
      >
        <div className="tittle-container">
          <h1 className="tittle-menu">Chat Tactico SIGESAFAM</h1>
          <div className="btn-closechat" onClick={() => handleReset()}>
            X
          </div>
        </div>
        <Form openForm={openForm} />
        <div
          className="new-chat-container"
          style={{ display: openNewChat ? "block" : "none" }}
        >
          <h3>Nuevo Mensaje</h3>
          <span>Sugerencias</span>
          {users.map((user) => (
            <NewChat
              key={user.planeID}
              url={user.photo}
              name={user.name}
              username={user.username}
            />
          ))}
        </div>
        <div
          id="main-navigation"
          className="menu-container"
          style={{ display: openNavigation ? "block" : "none" }}
        >
          <ul className="menu-items">
            <li>
              <input type="search" placeholder="Buscar..." />
            </li>
            <li onClick={() => handleNewChat()}>Nuevo Chat</li>
            <li>Nuevo Grupo</li>
            <li onClick={() => handleOpenForm()}>Contactos</li>
            <li onClick={() => handleOpenMessages()}>Chats</li>
          </ul>
        </div>
        {users.map((user) => (
          <Messages
            style={{ visibility: openMessages ? "visible" : "hidden" }}
            key={user.planeID}
            url={user.photo}
            name={user.name}
            message={user.message}
          />
        ))}
        <div className="bottom-navigation">
          <ul>
            <li onClick={() => handleOpenHome()}>Home</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </div>
      <button
        className="btn-openchat"
        type="button"
        onClick={() => handleOpenChat()}
      >
        Click me
      </button>
    </>
  )
}

export default Chat
