import React from "react"

const Form = (props) => {
  return (
    <div
      id="createUser"
      className="new-user-container"
      style={{ display: props.openForm ? "block" : "none" }}
    >
      <form className="new-user-form" action="">
        <input id="username" type="text" placeholder="Usuario" />
        <input id="idAeronave" type="text" placeholder="ID de aeronave" />
        <button type="submit">Crear</button>
      </form>
    </div>
  )
}

export default Form
