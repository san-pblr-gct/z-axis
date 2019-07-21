/* eslint-disable no-magic-numbers */
import crypto from 'crypto';

const paramsToString = params => {
  var data = '';
  var tempKeys = Object.keys(params);
  tempKeys.sort();
  tempKeys.forEach(key => {
    data += params[key] + '|';
  });
  return data;
}

const encrypt = (data, key) => {
  var iv = '@@@@&&&&####$$$$';
  var algo = '256';
  switch (key.length) {
  case 16:
    algo = '128';
    break;
  case 24:
    algo = '192';
    break;
  case 32:
    algo = '256';
    break;

  }
  var cipher = crypto.createCipheriv('AES-' + algo + '-CBC', key, iv);
  var encrypted = cipher.update(data, 'binary', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
};

const genSalt = (length, cb) => {
  crypto.randomBytes((length * 3.0) / 4.0, (err, buf) => {
    var salt;
    if (!err) {
      salt = buf.toString("base64");
    }
    cb(err, salt);
  });
};

export const genchecksum = (params, key, cb) => {
  var data = paramsToString(params);
  let encrypted;
  // eslint-disable-next-line handle-callback-err
  genSalt(4, function (err, salt) {
    var sha256 = crypto.createHash('sha256').update(data + salt).digest('hex');
    var checkSum = sha256 + salt;
    encrypted = encrypt(checkSum, key);
    cb(encrypted);
  });
};