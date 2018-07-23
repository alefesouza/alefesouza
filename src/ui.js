'use strict';

const {h, Text, Color} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'Website',
		url: 'https://alefesouza.com'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/alefesouza'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/alefesouza'
	},
	{
		label: 'LinkedIn',
		url: 'https://linkedin.com/in/alefesouza'
	},
	{
		label: 'Facebook',
		url: 'https://facebook.com/alefesouza'
	},
	{
		label: 'Blog',
		url: 'https://alefesouza.com/blog'
	},
	{
		label: 'Contact',
		url: 'https://alefesouza.com/contact'
	}, {
		label: 'Quit',
		action() {
			process.exit();
		}
	}
];

module.exports = () => (
	<div>
		<Text>I'm a Full Stack Developer who loves to study programming in my free time.</Text>

		<br/>

		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
