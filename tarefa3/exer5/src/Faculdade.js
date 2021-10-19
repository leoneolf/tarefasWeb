import React from "react";
import Aluno from "./Aluno";

class Faculdade extends React.Component {
    render() {
        return (
            <div>
                <p>Quem está na Faculdade?</p>
                <Aluno />
            </div>
        );
    }
}

export default Faculdade;