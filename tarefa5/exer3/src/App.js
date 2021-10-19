import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };


  }

  operacao(op) {
    switch (op) {
      case 'incrementa':
        this.setState({
          contador: this.state.contador + 1
        });
        break;
      case 'decrementa':
        this.setState({
          contador: this.state.contador - 1
        });
        break;
    }
  }

  render() {
    return (
      <div class="form-group row">

        <div class="col-md-2"></div>

        <div class="col-md-8">

          <div class="form-group row">
            <div class="col-md-4">
              <button type="button" class="btn btn-outline-success" onClick={() => this.operacao('incrementa')}>Incrementa</button>
            </div>
            <div class="col-md-4">
              <p>O valor do contador é: {this.state.contador}</p>
            </div>
            <div class="col-md-4">
              <button type="button" class="btn btn-outline-success" onClick={() => this.operacao('decrementa')}>Desecrementa</button>
            </div>
          </div>

        </div>

        <div class="col-md-2"></div>

      </div>
    );
  }

}

export default App;