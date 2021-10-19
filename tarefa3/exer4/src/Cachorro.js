import React from "react";

class Cachorro extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nome: "Boby" };
    }

    render() {
        return <p>Eu sou um Cachorro e o meu nome é {this.state.nome}.</p>
    }
}

export default Cachorro;