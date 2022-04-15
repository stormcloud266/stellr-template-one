import React from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Layout, Seo, Cta } from '@global'
import { Container, Title } from '@UI'
import { Gallery, Hero, IconGrid, FaqSlider, FaqList, TwoColumn } from '@blocks'

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
					<div>
						<StaticImage
							src='../assets/images/hero.jpg'
							alt=''
							layout='constrained'
							width={800}
						/>
					</div>
				}
			/>

			<Container section>
				<FaqSlider />
			</Container>

			<Cta />

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
