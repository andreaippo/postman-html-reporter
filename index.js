const os = require("os");
var newman = require('newman');

const userHomeDir = os.homedir();
var collection = userHomeDir+"/Postman/"+process.argv[2]+".postman_collection.json";
var env = userHomeDir+"/Postman/"+process.argv[3]+".postman_environment.json";
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
