const newman = require('newman'); // require newman in your project
require('dotenv').config();

newman.run({
    collection: `https://api.postman.com/collections/33990483-766ca8bc-6ef3-453c-84a9-41093d10a3bc?access_key=${process.env.secretKey}`,
    reporters: 'htmlextra',
    interactionCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});