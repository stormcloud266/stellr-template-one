import React from 'react'
import { Button, Container, Title } from '@UI'
import * as styles from './cta.module.scss'

const Cta = () => {
	return (
		<div className={styles.bg}>
			<Container wrapper>
				<div className={styles.inner}>
					<Title md className={styles.title}>
						Ready to work together?
					</Title>
					<Button cta to='/#contact'>
						Call Now
					</Button>
				</div>
			</Container>
		</div>
	)
}

export default Cta
