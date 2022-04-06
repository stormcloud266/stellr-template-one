import React from 'react'
import { graphql } from 'gatsby'
import { Layout, Seo } from '@global'
import { Container, Title } from '@UI'
import { Gallery, Hero, IconGrid, FaqSlider, FaqList } from '@blocks'

const IndexPage = ({ data }) => {
	return (
		<Layout>
			<Seo />

			<Hero />

			<IconGrid />

			<Container section>
				<FaqSlider />
			</Container>

			<Container section>
				<FaqList />
			</Container>

			<Container bgAccent>
				<Container wrapper section>
					<Gallery images={data.galleryImages.edges} />
				</Container>
			</Container>
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
					id
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
