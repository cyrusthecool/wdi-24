import React, { PureComponent } from 'react';
import Clickr from './Clickr';

class HistoryEraser extends PureComponent {
  constructor() {
    super();
    this.state = { historyStillExists: true };

    this.maybeEraseHistory = this.maybeEraseHistory.bind(this);
  }

  maybeEraseHistory(clickCount) {
    if (clickCount >= 4) {
      this.setState( { historyStillExists: false } );
    }
  }

  render() {
    return (
      <div style={ {"background-color": this.state.historyStillExists ? 'white' : 'red' } }>
        <h2>History Eraser</h2>
        <Clickr everyClick={ this.maybeEraseHistory } />

        { this.state.historyStillExists || <h1>YOU FOOL, YOU ERASED HISTORY</h1> }

      </div>
    );
  }
}

export default HistoryEraser;
