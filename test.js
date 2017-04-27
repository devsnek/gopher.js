const Gopher = require('./src');

const server = new Gopher('localhost');

server.route('/', (res) => {
  res.writeItem('DIRECTORY', 'some random directory', '/that-directory');
  res.writeInfo('hi!');
  res.end();
});

server.listen();
