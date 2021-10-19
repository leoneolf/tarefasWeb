import React from "react";
import Garrafa from "./Garrafa";

class Recipiente extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrar: true
        };
    }

    removerCabecalho = () => {
        this.setState({ mostrar: false });
    }

    render() {

        if (this.state.mostrar === true) {
            var meuCabecalho = <Garrafa />;
        }

        return (
            <div class="form-group row">

                <div class="col-md-4"></div>

                <div class="col-md-4">
                    <div class="form-group">
                        <div class="col-md-6">
                            {meuCabecalho}
                        </div>
                        <div class="col-md-6">
                            <button type="button" class="btn btn-outline-success" onClick={this.removerCabecalho}>Remover Cabecalho</button>
                        </div>
                    </div>
                </div>

                <div class="col-md-4"></div>

            </div>
        );
    }
}

export default Recipiente;