import qrcode from 'qrcode';

export default string => new Promise((resolve, reject) => {
  qrcode.toDataURL(string)
    .then((url) => {
      resolve(url);
    });
});
