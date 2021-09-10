import React, { Component } from 'react'

class Botonera extends Component {

    render() {
        const { fn, textoA, textoB } = this.props
        return (
            <div className="opciones">
                <div className="opcion">
                    <button value="A" className="botones" onClick={fn}> A </button>
                    <h2>{textoA} </h2>
                </div>

                <div className="opcion">
                    <button value="B" className="botones" onClick={fn}> B </button>
                    <h2>{textoB} </h2>
                </div>

            </div>

        )
    }
}
export default Botonera;