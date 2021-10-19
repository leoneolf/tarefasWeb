import React from "react";

class Adicao extends React.Component {
    render(){
        return <p>O resultado de {this.props.x} + {this.props.y} =  {this.props.x + this.props.y}</p>
    }
}

export default Adicao;