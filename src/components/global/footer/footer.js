import React from 'react'
import Link from 'gatsby-link'
import { NavLinks } from '@global'
import { Container, FlexContainer, FlexItem, Title } from '@UI'
import { Fade } from '@animations'
import * as styles from './footer.module.scss'

const Footer = () => (
	<footer className={styles.footer}>
		<Fade>
			<Container wrapperSmOnMd textLight>
				<FlexContainer collapseOnMd alignStart className={styles.inner}>
					<FlexItem>
						<Link to='/'>Logo</Link>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
							quod minus voluptas omnis, provident ad dolorem dolorum blanditiis
						</p>
					</FlexItem>
					<FlexItem className={styles.contact}>
						<div>
							<Title tag='h3' className={styles.title}>
								Contact
							</Title>
							<div className={styles.address}>
								<p>123 Street</p>
								<p>City, ST, 12345</p>
								<a href='tel:+1-555-555-5555'>+1-555-555-5555</a>
								<a href='mailto:example@mail.com'>example@mail.com</a>
							</div>
						</div>
					</FlexItem>
					<FlexItem className={styles.contact}>
						<div>
							<Title tag='h3' className={styles.title}>
								Links
							</Title>
							<nav className={styles.nav}>
								<NavLinks />
							</nav>
						</div>
					</FlexItem>
				</FlexContainer>
			</Container>
		</Fade>

		<div className={styles.branding}>
			<Fade>
				<Container wrapper textLight textCenter>
					<p>Copyright 2022 | All Rights Reserved</p>
					<p className={styles.brandingLink}>
						Developed by{' '}
						<a
							href='https://www.stellrweb.com'
							target='_blank'
							rel='noreferrer'
						>
							Stellr Web
						</a>
					</p>
				</Container>
			</Fade>
		</div>
	</footer>
)

export default Footer
