import React from "react";

class Cabecalho extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            corFavorita: "vermelho"
        };
    }

    render() {
        return <p>A minha cor favorita é {this.state.corFavorita}.</p>
    }
}

export default Cabecalho;