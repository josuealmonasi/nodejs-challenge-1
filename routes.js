const fs = require('fs');

const requestHandler = (req, res) => {
	const url = req.url;
	const method = req.method;
	if (url === '/') {
		res.write(
			`<body>
        <h1>Hello welcome to Node.js challenge 1</h1>
        <p>Add new user</p>
        <form action="/create-user" method="POST">
          <input type="text" name="username"/>
          <button>Create</button>
      </body>`
		);
		return res.end();
	}
	if (url === '/users') {
		res.write(
			`<body>
        <h1>Hello welcome to Node.js challenge 1</h1>
        <p>List of users</p>
        <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
        <li>User 4</li>
        <li>User 5</li>
        <li>User 6</li>
        <li>User 7</li>
        <li>User 8</li>
        <li>User 9</li>
        <li>User 10</li>
        </ul>
      </body>`
		);
		return res.end();
	}

	if (url === '/create-user' && method === 'POST') {
		const body = [];
		let parsedBody = '';
		req.on('data', chunk => {
			console.log(chunk);
			body.push(chunk);
		});
		req.on('end', () => {
			parsedBody = Buffer.concat(body).toString();
			console.log(parsedBody);
			res.setHeader('Content-Type', 'text/html');
			res.setHeader('Location', '/');
			return res.end();
		});
	}
};

module.exports = requestHandler;
