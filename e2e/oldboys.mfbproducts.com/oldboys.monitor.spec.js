/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/09/25.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
describe('Monitor oldboys.mfbproducts.com', () => {

  before(function(client, done) {
    done();
  });

  after(function(client, done) {
    client.end(function() {
      done();
    });
  });

  afterEach(function(client, done) {
    done();
  });

  beforeEach(function(client, done) {
    done();
  });

  it('should navigate to https://oldboys.mfbproducts.com and check that its up', client => {
    client
    .url('https://oldboys.mfbproducts.com')
      .pause(5000)
      .resizeWindow(1920, 1080)
      .clearValue("input#login-username")
      .clearValue("input#login-password")
      .setValue('input#login-username', process.env.LOGIN_USERNAME)
      .setValue('input#login-password', process.env.LOGIN_PASSWORD)
      .waitForElementVisible('button#login-btn', 1000)
      .click('button#login-btn')
      .pause(10000)
      .waitForElementVisible('div#content-header', 10000)
      .assert.containsText('div#content-header',
      'Old Boys Directory')
      .assert.containsText('.label-default',
      'Attorney')
      .click('.nav.navbar-nav.pull-right li a')
      .pause(5000);

  });

});