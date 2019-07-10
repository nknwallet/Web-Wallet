const config = {
  port: 6060,
  proxy: '/request?redirect=',
  email: 'support@nknwallet.io',
  website: 'https://nknwallet.io',
  twitter: 'https://twitter.com/nknwallet',
  transaction: 'https://explorer.nknx.org/transactions',
  cdn: `http://localhost:${process.env.NODE_PORT || 6060}/static`,
  rpcAddr: 'https://mainnet-rpc-node-0001.nkn.org/mainnet/api/wallet',
  desktopRelease: 'https://github.com/nknwallet/Desktop-Wallet/releases',
};

// if (process.env.NODE_ENV !== 'development') {
//   config.cdn = '//nknwallet.io/wallet';
// }

module.exports = config;
