import React from 'react'
import { Container, TestimonialCard, Title } from '@UI'
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
	return (
		<Container wrapper section>
			<Title center>Client Success Stories</Title>
			<div className={styles.cardContainer}>
				{data.map(({ body, name, role }) => (
					<TestimonialCard body={body} name={name} role={role} />
				))}
			</div>
		</Container>
	)
}

export default Testimonials
