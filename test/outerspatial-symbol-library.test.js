var fs = require('fs');
var test = require('tap').test;

test('OuterSpatial Symbol Library', function (t) {
  var jsonBuilder;
  var jsonStandalone;

  t.doesNotThrow(function () {
    jsonBuilder = JSON.parse(fs.readFileSync(__dirname + '/../www/outerspatial-builder/outerspatial-symbol-library.json'));
  }, 'OuterSpatial Builder JSON is valid');
  t.doesNotThrow(function () {
    jsonStandalone = JSON.parse(fs.readFileSync(__dirname + '/../www/standalone/outerspatial-symbol-library.json'));
  }, 'Standalone JSON is valid');
  jsonBuilder.forEach(function (f) {
    t.equal(typeof f.name, 'string', 'name property');
    t.equal(typeof f.icon, 'string', 'icon property');
    t.equal(typeof f.release, 'string', 'release property');
    t.equal(typeof f.tags, 'object', 'tags property');
    [12, 18, 24].forEach(function (size) {
      t.doesNotThrow(function () {
        fs.statSync(__dirname + '/../src/outerspatial-builder/' + f.icon + '-' + size + '.svg');
        fs.statSync(__dirname + '/../renders/outerspatial-builder/' + f.icon + '-' + size + '.png');
        fs.statSync(__dirname + '/../renders/outerspatial-builder/' + f.icon + '-' + size + '@2x.png');
      }, 'source file present');
    });
  });
  jsonStandalone.forEach(function (f) {
    t.equal(typeof f.name, 'string', 'name property');
    t.equal(typeof f.icon, 'string', 'icon property');
    t.equal(typeof f.release, 'string', 'release property');
    t.equal(typeof f.tags, 'object', 'tags property');
    [16, 24, 32].forEach(function (size) {
      t.doesNotThrow(function () {
        fs.statSync(__dirname + '/../src/standalone/' + f.icon + '-' + size + '.svg');
        fs.statSync(__dirname + '/../renders/standalone/' + f.icon + '-' + size + '.png');
        fs.statSync(__dirname + '/../renders/standalone/' + f.icon + '-' + size + '@2x.png');
      }, 'source file present');
    });
  });
  t.end();
});
