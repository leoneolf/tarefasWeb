import React from "react";

class Identificacao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "Leone",
            sobrenome: "Oliveira",
            idade: 25
        };
    }

    render(){
        return(
            <div>
                <p>Nome: {this.state.nome}</p>
                <p>Sobrenome: {this.state.sobrenome}</p>
                <p>Idade: {this.state.idade}</p>
            </div>
        );
    }
}

export default Identificacao;