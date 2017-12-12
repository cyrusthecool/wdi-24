import React, { PureComponent as Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

const SERVER_URL = 'http://localhost:5000/secrets.json';

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
    e.preventDefault(); // Don't go anywhere!
    this.props.onSubmit( this.state.content );
    this.setState( {content: ''} ); // Reset the form.
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <textarea onChange={ this._handleChange } value={ this.state.content }></textarea>
        <input type="submit" value="Tell" />
      </form>
    );
  }
}

SecretsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

function Gallery(props) {
  return (
    <div>
      { props.secrets.map( s => <p key={ s.id }>{ s.content }</p> ) }
    </div>
  );
}

class Secrets extends Component {
  constructor() {
    super();
    this.state = { secrets: [] };
    this.saveSecret = this.saveSecret.bind(this);

    axios.get(SERVER_URL).then( results => this.setState( {secrets: results.data} ) );
  }

  saveSecret(s) {
    axios.post(SERVER_URL, {content: s}).then(results => {
      this.setState({secrets: [results.data, ...this.state.secrets] })
    });
  }

  render() {
    return (
      <div>
        <h1>Secrets</h1>
        <h2>Tell Us All Your Secrets</h2>
        <SecretsForm onSubmit={ this.saveSecret }/>
        <Gallery secrets={ this.state.secrets }/>
      </div>
    );
  }
}

export default Secrets;
