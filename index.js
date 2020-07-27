const doctoc = require('doctoc/lib/transform');

module.exports = ({ document }) =>
  doctoc(document, 'github.com', 4, undefined, true).toc || '';
