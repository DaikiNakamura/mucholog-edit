module.exports = {
	base: '/mucholog/',
	title: 'Mucho Log...',
	description: 'mucho\'s blog',
	head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]
	],
    themeConfig: {
	    sidebar: [
            {
                title: 'MyBlog',
                collapsable: false,
                children: [
                    '/'
                ]
            },
            {
                title: 'Vue',
                collapsable: true,
                children: [
                    'vue/20180806_tryVuePress'
                ]
            }
        ],
        lastUpdated: 'Last Updated'
    }
};