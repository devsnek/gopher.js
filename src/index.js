const EventEmitter = require('events');
const net = require('net');

const GopherResponse = require('./Response');

class Gopher extends EventEmitter {
  constructor(host, port = 70) {
    super();
    this.host = host;
    this.port = port;
    this.server = net.createServer();
    this.routes = {};
    this.server.on('connection', this.eventConnection.bind(this));
  }

  route(path, handler) {
    this.routes[path] = handler;
  }

  eventConnection(connection) {
    const response = new GopherResponse(connection, this);
    response.on('ready', (path) => {
      if (path in this.routes) this.routes[path](response);
    });
  }

  listen(cb) {
    return this.server.listen(this.port, cb);
  }
}

module.exports = Gopher;
