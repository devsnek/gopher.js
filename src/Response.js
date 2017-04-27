const EventEmitter = require('events');
const { Format, Types } = require('./Constants');

class Item {
  constructor(type, description, selector, { host, port }) {
    if (type in Types) type = Types[type];
    this.type = type;
    this.description = description || '';
    this.selector = selector || '';
    this.host = host;
    this.port = port;
    this.extras = [];
  }

  serialize() {
    const out = [
      this.type,
      this.description,
      Format.TAB,
      this.selector,
      Format.TAB,
      this.host,
      Format.TAB,
      this.port,
    ];

    for (const extra of this.extras) out.push(Format.TAB, extra);

    out.push(Format.CRLF);
    return out.join('');
  }
}

class GopherResponse extends EventEmitter {
  constructor(connection, server) {
    super();
    this.conn = connection;
    this.conn.on('data', (chunk) => {
      const data = chunk.toString();
      switch (data) {
        case Format.CRLF:
          this.emit('ready', '/');
          break;
        default:
          this.emit('ready', data.trim());
          break;
      }
    });
    this.server = server;
  }

  write(data) {
    return this.conn.write(data);
  }

  writeInfo(str) {
    return this.writeItem(Types.INFO, str, '');
  }

  writeItem(type, description, selector) {
    return this.write(new Item(
      type,
      description,
      selector,
      this.server
    ).serialize());
  }

  end() {
    return this.conn.end('.\r\n');
  }
}

module.exports = GopherResponse;
