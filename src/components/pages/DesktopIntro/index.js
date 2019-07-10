import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import config from 'Root/config';
import language from 'Root/helpers/language';
import leftArrow from 'Root/images/left-arrow.svg';
import desktopIcon from 'Root/images/desktopPlatform.svg';
import dashboardPhoto from 'Root/images/dashboard-photo.png';

import styles from './styles.less';

class DesktopIntro extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Link to="/login">
          <div className={styles.back}>
            <img src={leftArrow} alt="Back" />

            <p>{language.back[this.props.language]}</p>
          </div>
        </Link>

        <p className={styles.title}>{language.desktopWallet[this.props.language]}</p>

        <div className={styles.info}>
          {language.crossPlatformDesktopWallet[this.props.language]}
        </div>

        <a href={config.desktopRelease}>
          <div role="presentation" onClick={this.handleClick} className={styles.button}>
            <img src={desktopIcon} alt="Desktop Icon" />
            <p>{language.download[this.props.language]}</p>
          </div>
        </a>

        <img src={dashboardPhoto} alt="Dashboard" className={styles.dashboard} />
      </div>
    );
  }
}

export default connect(state => ({
  language: state.language,
}))(DesktopIntro);
