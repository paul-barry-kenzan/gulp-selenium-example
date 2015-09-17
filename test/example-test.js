var chai = require('chai');
var expect = chai.expect;
var wd;

try {
  wd = require('wd');
} catch( err ) {
  wd = require(__dirname + '/../node_modules/gulp-mocha-selenium/node_modules/wd/lib/main');
}

describe('mocha spec examples', function() {
  this.timeout(10000);

  // regular mocha usage is also an option
  describe('regular mocha usage', function() {
    var browser;

    before(function(done) {
      browser = wd.promiseChainRemote();

      browser
        .init({browserName:'chrome'})
        .nodeify(done);  //same as : .then(function() { done(); });
    });

    beforeEach(function(done) {
      browser
        .get('http://www.google.com')
        .nodeify(done);
    });

    after(function(done) {
      browser
        .quit()
        .nodeify(done);
    });

    it('should retrieve the page title', function(done) {
      browser
        .title()
        .then(function(title) {
          expect(title).to.equal('Google');
        })
        .nodeify(done);
    });
  });

});
