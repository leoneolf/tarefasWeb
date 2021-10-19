import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "Leone",
      sobrenome: "Oliveira"
    };
  }

  alterarNomeCompleto = () => {
    this.setState({
      nome: "Chloe",
      sobrenome: "Manzano"
    });
  }

  render() {
    return (
      <div class="form-group">
        <div class="form-group row">
          <div class="col-md-5"></div>

          <div class="col-md-4">
            <button type="button" class="btn btn-outline-success" onClick={this.alterarNomeCompleto}>Alterar</button>
          </div>

          <div class="col-md-3"></div>
        </div>
        <div class="row">
          <div class="col-md-3"></div>

          <div class="col-md-6">
            <div class="row">
              <div class="col">
                <p>Nome: {this.state.nome}</p>
              </div>
              <div class="col">
                <p>Sobrenome: {this.state.sobrenome}</p>
              </div>
            </div>
          </div>

          <div class="col-md-3"></div>
        </div>

      </div>
    );
  }
}

export default App;