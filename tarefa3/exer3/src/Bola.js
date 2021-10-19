import React from "react";

class Bola extends React.Component {
    constructor(material) {
        super(material);
        this.state = {material: "couro"};
    }

    render() {
        return <p>Eu tenho uma Bola de {this.state.material}.</p>
    }
}

export default Bola;