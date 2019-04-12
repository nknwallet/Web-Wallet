import fetch from 'node-fetch';

import store from 'Root/store';
import types from 'Root/actions';
import config from 'Root/config';

export default async () => new Promise((resolve, reject) => {
  fetch(`${config.proxy}https://testnet.nkn.org/api/v1/block_list/0`)
    .then(res => res.json())
    .then((res) => {
      const { Data } = res.data;

      store.dispatch({
        block: Data[0].Height,
        type: types.wallet.BLOCK,
      });

      resolve();
    })
    .catch((error) => {
      reject(error);
    });
});
