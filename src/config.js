const config = {
  port: 6060,
  proxy: '//164.132.2.86:8888/request?redirect=',
  cdn: `http://localhost:${process.env.NODE_PORT || 6060}/static`,
};

// if (process.env.NODE_ENV !== 'development') {
//   config.cdn = 'https://nknwallet.io/wallet';
// }

module.exports = config;
