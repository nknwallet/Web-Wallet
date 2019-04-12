import price from './price';
import chart from './chart';
import block from './blocks';
import qrcode from './qrcode';
import balance from './balance';
import transactions from './transactions';

export default async () => new Promise(async (resolve) => {
  try {
    await Promise.all([
      chart(),
      block(),
      price(),
      qrcode(),
      balance(),
      transactions(),
    ]);

    resolve();
  } catch (error) {
    console.log(error);
  }
});
