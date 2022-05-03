import React from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Layout, Seo, Cta } from '@global'
import { Button, Container, Title, Image } from '@UI'
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

			<Container section>
				<TwoColumn
					left={
						<Container textBlock>
							<Title>Welcome to this awesome website</Title>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Laborum molestiae deserunt quia dolor aspernatur! Lorem ipsum
								dolor sit amet consectetur adipisicing elit. Voluptates,
								perferendis!
							</p>
							<Button mt to='/'>
								Read Our Story
							</Button>
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
			</Container>

			<Container wrapper>
				<Container section wrapper textBlock textLight textCenter bgPrimary>
					<Title sm>Serving our local community since 1995</Title>
				</Container>
			</Container>

			<IconGrid />
			<Cta />

			<Container section>
				<FaqSlider />
			</Container>

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
