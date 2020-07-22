import React from 'react';
import ReactDOM from "react-dom";

type NameProps = {
  name: string;
}

class Welcome extends React.Component<NameProps> {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

const element = <Welcome name="HippoHack" />;

ReactDOM.render(
  element,
  document.getElementById('root')
);
