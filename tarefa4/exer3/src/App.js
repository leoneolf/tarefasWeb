import React from "react";
import CompA from "./CompA";

class App extends React.Component {
  render() {
    return (
      <div>
        <CompA nome="Lucas" />
        <CompA nome="Carla" />
        <CompA nome="Pedro" />
        <CompA nome="Beatriz" />
      </div>
    );
  }
}

export default App;