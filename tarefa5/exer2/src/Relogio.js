import React from "react";

class Relogio extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date().toLocaleTimeString()
        };
    }

    render() {
        return (
            <div>
                <p>Olá, React!</p>
                <p>Agora é {this.state.date}</p>
            </div>
        );
    }
}

export default Relogio;