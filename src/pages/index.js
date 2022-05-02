import React from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Layout, Seo, Cta } from '@global'
import { Container, Title, Image } from '@UI'
import {
	Gallery,
	Hero,
	IconGrid,
	FaqSlider,
	FaqList,
	TwoColumn,
	Testimonials,
} from '@blocks'

const IndexPage = ({ data }) => {
	return (
		<Layout>
			<Seo />

			<Hero />

			<IconGrid />

			<TwoColumn
				left={
					<Container textBlock>
						<Title>Welcome to this awesome website</Title>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
							molestiae deserunt quia dolor aspernatur!
						</p>
					</Container>
				}
				right={
					<Image>
						<StaticImage
							src='../assets/images/hero.jpg'
							alt=''
							layout='constrained'
							width={800}
						/>
					</Image>
				}
			/>

			<Container section>
				<FaqSlider />
			</Container>

			<Cta />

			<Testimonials />

			<Container bgAccent>
				<Container wrapper section>
					<Gallery images={data.galleryImages.edges} />
				</Container>
			</Container>
			<Container section>
				<FaqList />
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
