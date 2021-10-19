import React from "react";

class Garrafa extends React.Component {
    componentWillUnmount() {
        alert("O componente chamado Cabecalho está prestes a ser desmontado.");
    }

    render() {
        return <p>Olá, React!</p>
    }
}

export default Garrafa;