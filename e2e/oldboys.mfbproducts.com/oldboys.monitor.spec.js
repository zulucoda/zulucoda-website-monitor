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

    console.log('user', process.env.LOGIN_USERNAME);
    console.log('pass', process.env.LOGIN_PASSWORD);

    client
      .url('https://oldboys.mfbproducts.com')
      .resizeWindow(1920, 1080)
      .expect.element('div#login h3').to.be.present.before(1000);

    client.clearValue("input#login-username").setValue('input#login-username', process.env.LOGIN_USERNAME);
    client.clearValue("input#login-username").setValue('input#login-password', process.env.LOGIN_PASSWORD);

    client.waitForElementVisible('button#login-btn', 1000)
      .click('button#login-btn')
      .pause(5000)
      .assert.containsText('div#content-header',
      'Old Boys Directory')
      .assert.containsText('.label-default',
      'Attorney');

    client
      .click('.nav.navbar-nav.pull-right li a')
      .pause(5000);

  });

});