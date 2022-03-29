const path = require('path')

module.exports = {
	siteMetadata: {
		title: 'Stellr Template One',
		siteUrl: `https://github.com/stormcloud266/stellr-template-one`,
		description: `Gatsby v4 starter for getting website projects up and running fast.`,
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-robots-txt',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/assets/images/favicon.png',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: `gatsby-plugin-gdpr-cookies`,
			options: {
				googleAnalytics: {
					trackingId: '', // leave empty if you want to disable the tracker
					cookieName: 'gatsby-gdpr-google-analytics', // default
					anonymize: true, // default
				},
				googleTagManager: {
					trackingId: '', // leave empty if you want to disable the tracker
					cookieName: 'gatsby-gdpr-google-tagmanager', // default
					dataLayerName: 'dataLayer', // default
				},
				facebookPixel: {
					pixelId: '', // leave empty if you want to disable the tracker
					cookieName: 'gatsby-gdpr-facebook-pixel', // default
				},
				// defines the environments where the tracking should be available  - default is ["production"]
				environments: ['production'],
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'home-gallery',
				path: './src/assets/images/home-gallery',
			},
			__key: 'home-gallery',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/assets/images/',
			},
			__key: 'images',
		},
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					'@components': path.resolve(__dirname, 'src/components'),
					'@pages': path.resolve(__dirname, 'src/components/pages'),
					'@global': path.resolve(__dirname, 'src/components/global'),
					'@blocks': path.resolve(__dirname, 'src/components/blocks'),
					'@UI': path.resolve(__dirname, 'src/components/UI'),
					'@animations': path.resolve(__dirname, 'src/components/animations'),
					'@hooks': path.resolve(__dirname, 'src/hooks'),
					'@images': path.resolve(__dirname, 'src/assets/images'),
					'@globalStyles': path.resolve(__dirname, 'src/assets/globalStyles'),
				},
			},
		},
	],
}
