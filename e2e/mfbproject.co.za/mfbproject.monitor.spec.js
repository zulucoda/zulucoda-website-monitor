/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/09/25.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
describe('Monitor mfbproject.co.za', () => {

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

  it('should navigate to https://mfbproject.co.za/ and check that its up', client => {
    client
      .url('https://mfbproject.co.za/')
      .expect.element('div#home').to.be.present.before(2000);

    client
      .assert.containsText('h1', 'Muzikayise Flynn Buthelezi (MFB)');
  });

});