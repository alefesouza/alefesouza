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

module.exports = items;
