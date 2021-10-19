import React from "react";

class CompA extends React.Component {
    render() {
        return <p>Olá, meu nome é {this.props.nome} {this.props.sobrenome}.</p>;
    }
}

export default CompA;