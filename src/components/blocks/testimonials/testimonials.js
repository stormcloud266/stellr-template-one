import React from 'react'
import { Container, TestimonialCard, Title } from '@UI'
import { Fade } from '@animations'
import { useWindowWidth } from '@context'
import * as styles from './testimonials.module.scss'

const Testimonials = () => {
	const data = [
		{
			body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur id quo exercitationem blanditiis deserunt cum laboriosam a reiciendis consectetur Tenetur id quo exercitationem blanditiis deserunt cum laboriosam a reiciendis consectetur?',
			name: 'John Smith',
			role: 'CEO, Painters Inc',
		},
		{
			body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur id quo exercitationem blanditiis deserunt cum laboriosam a reiciendis consectetur?',
			name: 'John Smith',
			role: 'CEO, Painters Inc',
		},
		{
			body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur id quo exercitationem blanditiis deserunt cum laboriosam a reiciendis consectetur?',
			name: 'John Smith',
			role: 'CEO, Painters Inc',
		},
	]

	const windowWidth = useWindowWidth()

	return (
		<Container wrapper section>
			<Fade>
				<Title center>Client Success Stories</Title>
			</Fade>
			<div className={styles.cardContainer}>
				{data.map(({ body, name, role }, i) => (
					<Fade delay={windowWidth > 900 ? i * 0.15 : 0} y={20} key={i}>
						<TestimonialCard body={body} name={name} role={role} />
					</Fade>
				))}
			</div>
		</Container>
	)
}

export default Testimonials
