import React, { Component } from "react";

class Opciones extends Component {
  render() {
    return (
      <ul className="opciones">
        {this.props.opciones.map((opcion, i) => (
          <li className="opcion" key={opcion + i}>
            {opcion}
          </li>
        ))}
      </ul>
    );
  }
}
export default Opciones;
