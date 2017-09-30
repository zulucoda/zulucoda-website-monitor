/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/09/25.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
describe('Monitor hsbc-ach-xml-converter.mfbproducts.com', () => {

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

  it('should navigate to https://hsbc-ach-xml-converter.mfbproducts.com and check that its up', client => {
    client
      .url('https://hsbc-ach-xml-converter.mfbproducts.com')
      .resizeWindow(1920, 1080)
      .expect.element('div.navbar-header').to.be.present.before(1000);

    client
      .assert.containsText('h3', 'ACH XML CONVERTER FOR PASTEL');

    client
      .assert.containsText('h3.panel-title', 'HSBC ACH XML CONVERTOR FOR PASTEL ACCOUNTS SOFTWARE');
  });

});