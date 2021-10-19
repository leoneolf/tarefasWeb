import React from "react";
import Janela from "./Janela";
import Porta from "./Porta";

class Casa extends React.Component {
    render() {
        return(
            <div>
                <p>Eu sou uma Casa.</p>
                <Janela />
                <Porta />
            </div>
        );
    }
}

export default Casa;