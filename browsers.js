/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/09/25.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
const chrome = {browserName: 'chrome',
  javascriptEnabled: true,
  acceptSslCerts: true
};

const firefox = {browserName: 'firefox',
  javascriptEnabled: true,
  acceptSslCerts: true,
  marionette: true
};

const phantom = {browserName: 'phantomjs',
  javascriptEnabled: true,
  acceptSslCerts: true,
  'phantomjs.binary.path': 'node_modules/phantomjs/bin/phantomjs',
  'phantomjs.cli.args': []
};

const browser = (process.env.BROWSER || 'phantom');

module.exports = {
  select() {
    if (browser === 'firefox') {
      return firefox;
    } else if (browser === 'phantom') {
      return phantom;
    }
    return chrome;
  }
};