import React from 'react'
import { graphql } from 'gatsby'
import { Layout, Seo } from '@global'
import { Container, Title } from '@UI'
import { Slide, Fade } from '@animations'
import { Gallery } from '@blocks'

const IndexPage = ({ data }) => {
	console.log('data: ', data)

	return (
		<Layout>
			<Seo />

			<Container
				section
				wrapper
				textCenter
				style={{
					minHeight: '82vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Fade x={-40} threshold={0.8} noOpacityAnim transformDuration={1.7}>
					<Slide
						from='left'
						style={{
							margin: '0 auto',
							padding: '8px',
						}}
					>
						<Title tag='h1'>Gatsby Starter Stormcloud</Title>
					</Slide>
				</Fade>
			</Container>

			<Gallery images={data.galleryImages.edges} />
		</Layout>
	)
}

export default IndexPage

export const query = graphql`
	query MyQuery {
		galleryImages: allFile(
			filter: { sourceInstanceName: { eq: "home-gallery" } }
			sort: { fields: name, order: ASC }
		) {
			edges {
				node {
					name
					childImageSharp {
						gatsbyImageData(
							layout: CONSTRAINED
							width: 1000
							placeholder: BLURRED
						)
					}
				}
			}
		}
	}
`
