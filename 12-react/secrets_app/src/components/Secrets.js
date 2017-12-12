import React, { PureComponent as Component } from 'react';

class SecretsForm extends Component {
  constructor() {
    super();
    this.state = { content: '' };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    this.setState( { content: e.target.value } );
  }

  _handleSubmit(e) {
    e.preventDefault(); // Don't go anywhere
    this.props.onSubmit( this.state.content );
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <textarea onChange={ this._handleChange }></textarea>
        <input type="submit" value="Tell" />
      </form>
    );
  }
}

class Gallery extends Component {
  render() {
    return (
      <h3>Gallery coming soon</h3>
    );
  }
}

class Secrets extends Component {
  saveSecret(s) {
    console.log('i am the Secret component and I know the secret is', s);
  }

  render() {
    return (
      <div>
        <h1>Secrets</h1>
        <h2>Tell Us All Your Secrets</h2>
        <SecretsForm onSubmit={ this.saveSecret } />
        <Gallery />
      </div>
    );
  }
}

export default Secrets;
