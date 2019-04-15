const config = {
  port: 6060,
  proxy: '/request?redirect=',
  cdn: `http://localhost:${process.env.NODE_PORT || 6060}/static`,
};

// if (process.env.NODE_ENV !== 'development') {
//   config.cdn = '//nknwallet.io/wallet';
// }

module.exports = config;
