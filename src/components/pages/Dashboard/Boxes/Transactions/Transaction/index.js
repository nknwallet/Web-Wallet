import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import config from 'Root/config';
import shortHash from 'Root/helpers/shortHash';
import redArrow from 'Root/images/redArrow.png';
import greenArrow from 'Root/images/greenArrow.png';

import styles from './styles.less';

function Transaction(props) {
  const isMoneyComing = props.data.payload.senderWallet === props.wallet.wallet.address;

  return (
    <div className={styles.container}>
      <p className={styles.height}>
        {props.data.block_height}
      </p>

      <a
        target="_blank"
        className={styles.hash}
        href={`${config.transaction}/${props.data.hash}`}
      >
        {props.data.hash}
      </a>

      <a
        target="_blank"
        className={styles.shortHash}
        href={`${config.transaction}/${props.data.hash}`}
      >
        {shortHash(props.data.hash)}
      </a>

      <p className={styles.value}>
        {props.data.payload.amount / 100000000}
      </p>

      <p className={styles.shortValue}>
        {Number.parseFloat(props.data.amount, 10).toPrecision(6)}
      </p>

      <p className={styles.time}>
        {moment.utc(new Date(`${props.data.created_at}`)).fromNow()}
      </p>

      <img
        alt="Arrow"
        className={styles.arrow}
        src={isMoneyComing ? redArrow : greenArrow}
      />
    </div>
  );
}

export default connect(state => ({
  wallet: state.wallet,
}))(Transaction);
