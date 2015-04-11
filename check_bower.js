var bowerJson = require('bower-json');
bowerJson.read('bower.json', function (err, json) {
  if (err) {
    console.error('There was an error reading the file');
    console.error(err.message);
    return;
  }

  console.log('JSON: ', json);
});
