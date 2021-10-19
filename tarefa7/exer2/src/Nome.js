import React from "react";

class Nome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Nomes: [
                { nome: "Janaina" },
                { nome: "Ana" },
                { nome: "Maria" }
            ]
        }
    }

    cmd_click = () => {
        this.setState({
            Nomes: [
                { nome: "Cristina" },
                { nome: "Clara" },
                { nome: "Eduarda" }
            ]
        });
    }

    render() {
        return (
            <div class="form-group">
                <div class="form-group row">

                    <div class="col-md-5"></div>

                    <div class="col-md-4">
                        {this.state.Nomes.map((nome) =>
                            <p>Nome: {nome.nome}</p>
                        )}
                    </div>

                    <div class="col-md-3"></div>

                </div>
                <div class="form-group row">

                    <div class="col-md-5"></div>

                    <div class="col-md-4">
                        <button type="button" class="btn btn-outline-success" onClick={this.cmd_click}>Alterar</button>
                    </div>

                    <div class="col-md-3"></div>

                </div>
            </div>
        );
    }

}

export default Nome;