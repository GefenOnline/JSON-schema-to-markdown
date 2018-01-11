const fs = require('fs');
const validator = require('is-my-json-valid');
const parser = require('../');

const testGoodFiles = [
  'simple',
];
test( 'All the files parse as expected.', (done) => {
  testGoodFiles.forEach((file) => {
    const json = require(`./schemas/${file}.json`);	// eslint-disable-line
    const markdown = fs.readFileSync(`./test/markdown/${file}.md`, 'utf8');
    const parsed = parser(json);
    validator(json); // assert that all our testable JSON schema files are valid
    expect(parsed).toEqual(markdown);
    done();
  });
});
