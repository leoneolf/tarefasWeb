import React from "react";

class Cabecalho extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            corFavorita: "vermelho"
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.configurarTempoLimite()
        }, 1000);
    }

    configurarTempoLimite = () => {
        this.setState({ corFavorita: "amarelo" });
    }

    render() {
        return <p>A minha cor favorita é {this.state.corFavorita}.</p>
    }
}

export default Cabecalho;