import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'
import { NavLinks } from '@global'
import { Container } from '@UI'
import { Fade } from '@animations'
import * as styles from './header.module.scss'
import Helmet from 'react-helmet'
import { useCurrentWidth } from '@hooks'
import NavButton from './navButton'

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false)

	const width = useCurrentWidth()

	useEffect(() => {
		if (width > 900) {
			setIsNavOpen(false)
		}
	}, [width])

	return (
		<>
			<Fade className={styles.quickAction}>
				<Container wrapper>
					<a href='tel:+1-555-555-5555'>Call Now +1-555-555-5555</a>
				</Container>
			</Fade>
			<header className={styles.header}>
				<Helmet
					bodyAttributes={{
						class: isNavOpen ? styles.noScroll : null,
					}}
				/>
				<Fade>
					<Container wrapper className={styles.container}>
						<Link to='/' className={styles.logo}>
							Logo
						</Link>

						<NavButton
							isOpen={isNavOpen}
							onClick={() => setIsNavOpen(!isNavOpen)}
						/>

						<nav className={classnames(styles.nav, isNavOpen && styles.open)}>
							<NavLinks ctaClass={styles.cta} />
						</nav>
					</Container>
				</Fade>
			</header>
		</>
	)
}

export default Header
