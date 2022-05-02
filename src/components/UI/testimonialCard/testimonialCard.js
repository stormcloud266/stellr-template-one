import React from 'react'
import { Star } from '@images/icons'
import * as styles from './testimonialCard.module.scss'

const TestimonialCard = ({ body, name, role }) => {
	return (
		<div className={styles.card}>
			<div>
				<div className={styles.stars}>
					{[...Array(5).keys()].map((_, i) => (
						<Star key={i} />
					))}
				</div>
				<p>{body}</p>
			</div>

			<div className={styles.info}>
				<p className={styles.name}>{name}</p>
				<p>{role}</p>
			</div>
		</div>
	)
}

export default TestimonialCard
