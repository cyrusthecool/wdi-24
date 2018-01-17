import React, { PureComponent as Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {query: ''};
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    this.setState({
      query: e.target.value
    });
  }

  _handleSubmit(e) {
    e.preventDefault();
    const query = this.state.query;
    this.context.router.history.push(`/details/${ query }`); // Navigate to a new page.
  }

  render() {
    return (
      <div>
        <h2>Search by username</h2>
        <form onSubmit={this._handleSubmit}>
          <input type="search" onChange={this._handleChange} value={this.state.query} />
          <button>Search for {this.state.query}</button>
        </form>
      </div>
    );
  }
}
