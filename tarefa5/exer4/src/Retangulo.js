import React from "react";

class Retangulo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comprimento: 8,
            largura: 5
        };
    }

    mudarLargura = () => {
        this.setState({ largura: 6 });
    }

    render() {
        return (
            <div class="form-group row">

                <div class="col-md-3"></div>

                <div class="col-md-6">
                    <div class="form-group row">
                        <div class="col-md-6">
                            <p>A área do retângulo é: {this.state.comprimento * this.state.largura}</p>
                        </div>
                        <div class="col-md-6">
                            <button type="button" class="btn btn-outline-success" onClick={this.mudarLargura}>Mudar largura</button>
                        </div>
                    </div>
                </div>

                <div class="col-md-3"></div>

            </div>
        );
    }
}

export default Retangulo;