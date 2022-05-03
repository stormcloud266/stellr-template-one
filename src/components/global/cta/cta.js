import React from 'react'
import { Button, Container, Title } from '@UI'
import { Fade } from '@animations'
import * as styles from './cta.module.scss'

const Cta = () => {
	return (
		<Container bgPrimary textLight>
			<Container wrapper>
				<div className={styles.inner}>
					<Fade>
						<Title sm className={styles.title}>
							Ready to work together?
						</Title>
					</Fade>
					<Fade>
						<Button cta to='/#contact'>
							Call Now
						</Button>
					</Fade>
				</div>
			</Container>
		</Container>
	)
}

export default Cta
