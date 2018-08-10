'use strict';

const { h, Text } = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');
const items = require('./items');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

module.exports = () => (
	<div>
		<Text>I'm a Full Stack Developer who has programming as a hobby, I also like history, geography and photography.</Text>

		<br />

		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
