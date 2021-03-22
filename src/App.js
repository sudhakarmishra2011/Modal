import React, { Component } from 'react';

import Modal from './components/Modal/Modal';

class App extends Component {

  constructor() {
    super();

    this.state = {
      isShowing: false
    }
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  }

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  }

  render() {
    return (
      <div>
        { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null}

        <button className="open-modal-btn" onClick={this.openModalHandler}>View Modal</button>

        <Modal
          className="modal"
          show={this.state.isShowing}
          close={this.closeModalHandler}>
          INDIA’S LEADING ESPORT GAMING PLATFORM Ewar games is the India’s leading esport gaming platform offering wide varieties of games to play and earn real Money daily.                </Modal>
      </div>
    );
  }
}

export default App;