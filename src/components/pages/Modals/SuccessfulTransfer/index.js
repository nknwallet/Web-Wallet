import { connect } from 'react-redux';
import React, { Component } from 'react';

import language from 'Root/helpers/language';
import failureIcon from 'Root/images/error.svg';
import closeModalAction from 'Root/actions/modal/close';
import successfulIcon from 'Root/images/successful.svg';

import styles from './styles.less';

class SuccessfulTransfer extends Component {
  handleClick = () => {
    closeModalAction();
  }

  render() {
    return (
      <div className={styles.container}>
        <img
          className={styles.icon}
          alt="Successful Transaction"
          src={this.props.failure ? failureIcon : successfulIcon}
        />

        <p className={styles.title}>
          {this.props.failure
            ? language.error[this.props.language].toUpperCase()
            : language.successfulSending[this.props.language]
          }
        </p>

        <a
          target="_blank"
          className={styles.hash}
          href={`//testnet.nkn.org/detail/tx/${this.props.hash}`}
        >
          {!this.props.failure && this.props.hash}
        </a>

        <button type="button" onClick={this.handleClick} className={styles.button}>
          {language.ok[this.props.language]}
        </button>
      </div>
    );
  }
}

export default connect(state => ({
  language: state.language,
}))(SuccessfulTransfer);
