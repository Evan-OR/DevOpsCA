const http = require('http');
const assert = require('assert');
const app = require('../app'); // Adjust the path to your app file

describe('GET /', () => {
  let server;

  before((done) => {
    server = app.listen(3000, done);
  });

  after(() => {
    server.close();
  });

  it('Index page is served.', (done) => {
    http
      .get('http://localhost:3000/', (res) => {
        let body = '';

        res.on('data', (chunk) => {
          body += chunk;
        });

        res.on('end', () => {
          body.includes('<h1>Simple Application</h1>');
          done();
        });
      })
      .on('error', done);
  });
});
