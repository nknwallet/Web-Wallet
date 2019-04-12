const config = {
  port: 8180,
  proxy: 'http://localhost:8888/request?redirect=',
  cdn: `http://localhost:${process.env.NODE_PORT || 6060}/static`,
};

// if (process.env.NODE_ENV !== 'development') {
//   config.cdn = 'https://nknwallet.io/wallet';
// }

module.exports = config;
