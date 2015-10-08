/**
 * Created by fcx on 15/10/7.
 */

var boot  = require('../app.js').boot;
var shutdown = require('../app.js').shutdown;
var port = require('../app.js').port;
var superagent = require('superagent');
var expect = require('expect.js');

describe('server', function() {
    before(function() {
        boot();
    });
    describe('homepage', function() {
        it('should respond to GET', function(done) {
            superagent
                .get('http://localhost:' + port)
                .end(function(res) {
                    expect(res.status).to.equal(200);
                    done();
                });
        });
    });
    after(function() {
        shutdown();
    });
});
