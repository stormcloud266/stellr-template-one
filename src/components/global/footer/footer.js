import React from 'react'
import Link from 'gatsby-link'
import { NavLinks } from '@global'
import { Container, FlexContainer, FlexItem } from '@UI'
import * as styles from './footer.module.scss'

const Footer = () => (
	<footer className={styles.footer}>
		<Container wrapperSmOnMd textLight>
			<FlexContainer collapseOnMd className={styles.inner}>
				<FlexItem className={styles.text}>
					<Link to='/'>Logo</Link>
					<p>Copyright 2022 | All Rights Reserved</p>
				</FlexItem>
				<FlexItem>
					<nav className={styles.nav}>
						<NavLinks />
					</nav>
				</FlexItem>
			</FlexContainer>
		</Container>
	</footer>
)

export default Footer
