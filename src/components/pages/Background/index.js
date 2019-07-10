import { connect } from 'react-redux';
import React, { Component } from 'react';

import config from 'Root/config';
import language from 'Root/helpers/language';
import newLogo from 'Root/images/newLogo.png';
import twitterIcon from 'Root/images/twitter.svg';
import Details from 'Root/components/tools/Details';

import styles from './styles.less';

class Background extends Component {
  state = {
    a: null,
  }

  render() {
    return (
      <div className={styles.background}>
        <p className={styles.nknName}>NKN</p>
        <p className={styles.walletName}>{language.wallet[this.props.language]}</p>

        <Details />

        <div className={styles.logo} />

        <div className={styles.contact}>
          <p className={styles.email}>
            {language.contact[this.props.language]}
            :
            &nbsp;
            {config.email}
          </p>

          <a href={config.twitter}>
            <img src={twitterIcon} alt="Twitter" />
          </a>
        </div>

        <img src={newLogo} alt="Logo" className={styles.logoWithName} />
      </div>
    );
  }
}

export default connect(state => ({
  language: state.language,
}))(Background);
