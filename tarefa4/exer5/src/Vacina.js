import React from "react";

class Vacina extends React.Component {
    render() {
        return <p>{this.props.nome} é uma das vacinas contra a Covid-19.</p>
    }
}

export default Vacina;