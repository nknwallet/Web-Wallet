import moment from 'moment';
import { connect } from 'react-redux';
import React from 'react';

import shortHash from 'Root/helpers/shortHash';
import redArrow from 'Root/images/redArrow.png';
import greenArrow from 'Root/images/greenArrow.png';

import styles from './styles.less';

function Transaction(props) {
  const isMoneyComing = props.data.FromAddr === props.wallet.wallet.address;

  return (
    <div className={styles.container}>
      <p className={styles.height}>
        {props.data.Height}
      </p>

      <a
        target="_blank"
        className={styles.hash}
        href={`//testnet.nkn.org/detail/tx/${props.data.Hash}`}
      >
        {props.data.Hash}
      </a>

      <a
        target="_blank"
        className={styles.shortHash}
        href={`//testnet.nkn.org/detail/tx/${props.data.Hash}`}
      >
        {shortHash(props.data.Hash)}
      </a>

      <p className={styles.value}>
        {props.data.Value}
      </p>

      <p className={styles.shortValue}>
        {Number.parseFloat(props.data.Value, 10).toPrecision(6)}
      </p>

      <p className={styles.time}>
        {moment(new Date(props.data.Timestamp)).fromNow()}
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
