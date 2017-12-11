import React, { PureComponent } from 'react';

class Clickr extends PureComponent {

  constructor() {
    /* oh */ super();
    this.state = { clicks: 0 };
    this._incrementClicks = this._incrementClicks.bind(this);
  }

  _incrementClicks() {
    this.setState( { clicks: this.state.clicks + 1 } ); // Async?
    this.props.everyClick( this.state.clicks );
  }

  render() {
    return (<button onClick={ this._incrementClicks }>{ this.state.clicks } clicks so far</button>);
  }
}

export default Clickr;
