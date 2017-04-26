const Gopher = require('./src');

const server = new Gopher('localhost');

server.route('/', (res) => {
  res.writeItem('0', 'SOME DIRECTORY', '/');
  res.writeInfo('hi!');
  res.end();
});

server.listen();
