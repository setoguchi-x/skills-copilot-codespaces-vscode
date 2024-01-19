// create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = [
	{
		name: 'Jenny',
		message: 'Hello'
	},
	{
		name: 'David',
		message: 'Hi'
	}
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/comments', (req, res) => {
	res.send(comments);
});

app.post('/comments', (req, res) => {
	const comment = req.body;
	comments.push(comment);
	res.send('The comment is successfully added.');
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});git add comments.js