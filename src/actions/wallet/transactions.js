import fetch from 'node-fetch';

import store from 'Root/store';
import config from 'Root/config';
import types from 'Root/actions';

export default async () => new Promise(async (resolve) => {
  const { wallet } = store.getState().wallet;

  const { data } = await fetch(`${config.proxy}https://api2.nknx.org/addresses/${wallet.address}/transactions`).then(res => res.json());

  const transactions = [];

  for (const i of data.data) {
    const payload = await fetch(`${config.proxy}https://api2.nknx.org/transactions/${i.id}/payload`).then(res => res.json()); // eslint-disable-line

    transactions.push({ ...i, payload: payload.data });
  }

  store.dispatch({
    list: transactions,
    type: types.wallet.TRANSACTIONS,
  });

  resolve();
});
