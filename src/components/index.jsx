import { connect } from 'react-redux';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, withRouter } from 'react-router-dom';

import Modal from './tools/Modal';
import Loading from './pages/Loading';
import Download from './pages/Download';
import Dashboard from './pages/Dashboard';
import OpenWallet from './pages/OpenWallet';
import LoggedRoute from './tools/LoggedRoute';
import CreateWallet from './pages/CreateWallet';
import RestoreWallet from './pages/RestoreWallet';
import NotLoggedRoute from './tools/NotLoggedRoute';

function App(props) {
  return (
    <Fragment>
      <Router basename="/wallet">
        <Switch>
          <NotLoggedRoute exact path="/open-wallet" component={OpenWallet} />
          <NotLoggedRoute exact path="/create-wallet" component={CreateWallet} />
          <NotLoggedRoute exact path="/restore-wallet" component={RestoreWallet} />
          <LoggedRoute exact path="/loading" component={Loading} />
          <LoggedRoute exact path="/download" component={Download} />
          <LoggedRoute exact path="/dashboard" component={Dashboard} />
          <LoggedRoute component={Loading} />
        </Switch>
      </Router>

      <Modal
        width={props.modal.width}
        height={props.modal.height}
        visible={props.modal.visible}
        showCloseButton={props.modal.showCloseButton}
      >
        {props.modal.children}
      </Modal>
    </Fragment>
  );
}

export default withRouter(connect(state => ({
  modal: state.modal,
}))(App));
