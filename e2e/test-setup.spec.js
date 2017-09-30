
describe('Google demo test for Mocha ***** INTERNET CHECK ***** if test fails then google is down', function() {

  describe('with Nightwatch', function() {

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

    it('uses BDD to run the Google simple test', function(client) {
      client
        .url('http://google.com')
        .resizeWindow(1920, 1080)
        .expect.element('body').to.be.present.before(1000);
    });
  });
});

