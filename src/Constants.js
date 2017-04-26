/* eslint-disable no-inline-comments */
/* eslint-disable key-spacing */

const Types = exports.Types = {
  FILE:         '0', // file
  DIRECTORY:    '1', // directory
  PHONEBOOK:    '2', // CSO phone-book server
  ERROR:        '3', // Error
  BINHEX:       '4', // BinHexed Macintosh file.
  DOSARCHIVE:   '5', // Item is DOS binary archive of some sort. (*)
  UUENCODED:    '6', // UNIX uuencoded file.
  INDEXSEARCH:  '7', // Index-Search server.
  TELNET:       '8', // Item points to a text-based telnet session.
  BINARY:       '9', // binary file! (*)

  // (*) Client must read until the TCP connection is closed.

  REDUNDANT:  '+', // Redundant server
  TN3270:     'T', // Item points to a text-based tn3270 session.
  GIF:        'g', // GIF format graphics file.
  IMAGE:      'I', // Item is some kind of image file.

  // non-standard
  INFO:       'i', // Informational message
  HTML:       'h', // HTML document
  AUDIO:      's', // Audio file
  PNG:        'p', // PNG Image
  DOC:        'd', // Document
};

exports.Format = {
  END: '.',
  TAB: '\t',
  CRLF: '\r\n',
  DEFAULT: Types.BINARY,
};

exports.FriendlyNames = {
  FILE:        'TXT',
  DIRECTORY:   'DIR',
  PHONEBOOK:   'PHO',
  ERROR:       'ERR',
  BINHEX:      'HEX',
  DOSARCHIVE:  'ARC',
  UUENCODED:   'UUE',
  INDEXSEARCH: 'QRY',
  TELNET:      'TEL',
  BINARY:      'BIN',
  REDUNDANT:   'DUP',
  TN3270:      'TN3',
  GIF:         'GIF',
  IMAGE:       'IMG',
  INFO:        'NFO',
  HTML:        'HTM',
  AUDIO:       'SND',
  PNG:         'PNG',
  DOC:         'DOC',
  DEFAULT:     '???',
};

exports.FileExtensions = {
  '.txt':  Types.FILE,
  '.gif':  Types.GIF,
  '.jpg':  Types.IMAGE,
  '.jpeg': Types.IMAGE,
  '.png':  Types.IMAGE,
  '.html': Types.HTML,
  '.ogg':  Types.AUDIO,
  '.mp3':  Types.AUDIO,
  '.wav':  Types.AUDIO,
  '.mod':  Types.AUDIO,
  '.it':   Types.AUDIO,
  '.xm':   Types.AUDIO,
  '.mid':  Types.AUDIO,
  '.vgm':  Types.AUDIO,
  '.s':    Types.FILE,
  '.c':    Types.FILE,
  '.py':   Types.FILE,
  '.h':    Types.FILE,
  '.md':   Types.FILE,
  '.go':   Types.FILE,
  '.fs':   Types.FILE,
};

// MimeTypes defines a mapping of known mimetypes to gopher types
exports.MimeTypes = {
  'text/html': Types.HTML,
  'text/*':    Types.FILE,

  'image/gif': Types.GIF,
  'image/*':   Types.IMAGE,

  'audio/*':   Types.AUDIO,

  'application/x-tar':   Types.DOSARCHIVE,
  'application/x-gtar':  Types.DOSARCHIVE,

  'application/x-xz':    Types.DOSARCHIVE,
  'application/x-zip':   Types.DOSARCHIVE,
  'application/x-gzip':  Types.DOSARCHIVE,
  'application/x-bzip2': Types.DOSARCHIVE,
};
