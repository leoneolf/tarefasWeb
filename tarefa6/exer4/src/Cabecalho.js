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

    componentDidUpdate() {
        console.log("componentDidUpdate - Atualizando.");
    }

    render() {
        return (
            <div class="form-group">
                <h1>A minha cor favorita é {this.state.corFavorita}.</h1>
                <div id="meuDiv">
                    <h1>A cor favorita atualizada é {this.state.corFavorita}.</h1>
                </div>
            </div>
        );
    }
}

export default Cabecalho;