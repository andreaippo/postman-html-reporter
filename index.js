var newman = require('newman');

var collection = process.argv[2];
var env = process.argv[3];
console.log(collection);

newman.run({
   collection: collection,
   environment: env,
   reporters: 'htmlextra',
   // reporter: {
   //   myreporter: {
   //     'option-name': 'option-value' // this is optional
   //   }
   // }
}, function (err, summary) {
  if (err) { throw err; }
  console.info('collection run complete!');
});
