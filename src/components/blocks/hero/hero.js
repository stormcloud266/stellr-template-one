import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Title, Button } from '@UI'
import { Zoom, Fade } from '@animations'
import * as styles from './hero.module.scss'

const Hero = () => {
	return (
		<Container isSection bgDark className={styles.hero}>
			<Zoom className={styles.imageContainer}>
				<StaticImage
					src='../../../assets/images/hero.jpg'
					layout='fullWidth'
					alt=''
					style={{
						position: 'absolute',
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						zIndex: 0,
					}}
				/>
			</Zoom>
			<Container
				textBlock
				section
				wrapper
				textCenter
				className={styles.textContainer}
			>
				<Fade delay={0.3} y={15} transformDuration={1}>
					<Title shadow tag='h1' lg>
						This is an Example Template
					</Title>
				</Fade>
				<Fade delay={0.6}>
					<p className={styles.subtitle}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ad
						itaque. Atque, natus.
					</p>
				</Fade>
				<Fade delay={0.9} y={10} transformDuration={0.8}>
					<div>
						<Button to='/#contact' cta>
							Call Now
						</Button>
					</div>
				</Fade>
			</Container>
		</Container>
	)
}

export default Hero
