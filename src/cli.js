#!/usr/bin/env node

'use strict';

const path = require('path');
const meow = require('meow');
const importJsx = require('import-jsx');
const terminalImage = require('terminal-image');
const { h, render } = require('ink');
const opn = require('opn');
const items = require('./items');

const ui = importJsx('./ui');

meow(`
	Usage
	  $ alefesouza
	  Opens the CLI

	  $ alefesouza github
	  Opens the alefesouza GitHub profile

	  $ alefesouza show email
	  Show the alefesouza e-mail on Terminal
`);

if (process.argv.slice(2).length > 0) {
	let arg = process.argv[2].toLowerCase();
	const isShow = arg === 'show';

	let arg2 = '';

	if (process.argv[3]) {
		arg2 = process.argv[3].toLowerCase();
	}

	if (arg == 'email' || (isShow && arg2 === 'email')) {
		if (isShow && arg2) {
			console.log('contact@alefesouza.com');
		} else {
			opn('mailto:contact@alefesouza.com', { wait: false });
		}
		process.exit();
	}

	const item = items.find(i => i.label.toLowerCase() === (isShow ? arg2 : arg));

	if (item && 'url' in item) {
		if (isShow && arg2) {
			console.log(item.url);
		} else {
			opn(item.url, { wait: false });
		}
		process.exit();
	}
}

(async () => {
	const image = await terminalImage.file(path.join(__dirname, 'avatar.png'));
	console.log(image);
	
	render(h(ui));
})();
