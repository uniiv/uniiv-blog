var assert = require('assert'),
    HeaderParser = require('../lib/HeaderParser');

var DCRLF = '\r\n\r\n';

var MAXED_BUFFER = new Buffer(128 * 1024);
MAXED_BUFFER.fill(0x41); // 'A'

[
  { source: DCRLF,
    expected: {},
    what: 'No header'
  },
  { source: ['Content-Type:\t  text/plain',
             'Content-Length:0'
            ].join('\r\n') + DCRLF,
    expected: {'content-type': ['  text/plain'], 'content-length': ['0']},
    what: 'Value spacing'
  },
  { source: ['Content-Type:\r\n text/plain',
             'Foo:\r\n bar\r\n baz',
            ].join('\r\n') + DCRLF,
    expected: {'content-type': [' text/plain'], 'foo': [' bar baz']},
    what: 'Folded values'
  },
  { source: ['Content-Type:',
             'Foo: ',
            ].join('\r\n') + DCRLF,
    expected: {'content-type': [''], 'foo': ['']},
    what: 'Empty values'
  },
  { source: MAXED_BUFFER.toString('ascii') + DCRLF,
    expected: {},
    what: 'Max header size (single chunk)'
  },
  { source: ['ABCDEFGHIJ', MAXED_BUFFER.toString('ascii'), DCRLF],
    expected: {},
    what: 'Max header size (multiple chunks #1)'
  },
  { source: [MAXED_BUFFER.toString('ascii'), MAXED_BUFFER.toString('ascii'), DCRLF],
    expected: {},
    what: 'Max header size (multiple chunk #2)'
  },
].forEach(function(v) {
  var parser = new HeaderParser(), fired = false;
  var errPrefix = '[' + v.what + ']: ';
  parser.on('header', function(header) {
    assert(!fired, errPrefix + 'Header event fired more than once');
    fired = true;
    assert.deepEqual(header, v.expected, errPrefix + 'Parsed result mismatch');
  });
  if (!Array.isArray(v.source))
    v.source = [v.source];
  v.source.forEach(function(s) {
    parser.push(s);
  });
  assert(fired, errPrefix + 'Did not receive header from parser');
});