const express = require('express');

const app = express();

app.use((req, res, next) => {
	console.log('This will always print');
	next();
});

app.use('/users', (req, res, next) => {
	res.send(`<h1>Hello from Express, this is Users section</h1>`);
	console.log('Entered /users path');
});

app.use('/', (req, res, next) => {
	res.send(`<h1>Hello from Express</h1>`);
});

app.listen(3000);
