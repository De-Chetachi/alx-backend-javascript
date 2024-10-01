const readDatabase = require('./utils');

readDatabase("database.csv")
    .then((data) => {
	console.log(data);
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });
