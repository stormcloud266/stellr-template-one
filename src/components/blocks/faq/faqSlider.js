import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@UI'
import { PlusCircle } from '@images/icons'
import * as styles from './faq.module.scss'

const list = [
	{
		q: `Are you insured and bonded?`,
		a: `Yes, AABS is fully insured and all our work is bondable.`,
	},
	{
		q: `Do you provide a discount for contracts?`,
		a: `Yes, please contact us for details.`,
	},
	{
		q: `How long are the contracts?`,
		a: `A typical contract period is two years. However, we also maintain month-to-month contracts and multi-year contracts. All contracts are custom tailored to the client's specific needs.`,
	},
	{
		q: `Do you require a contract or can you do a single job?`,
		a: `AABS offers both contract and non-contract services. We perform a vast array of one-time jobs from tenant move-out cleans to pressure washing.`,
	},
	{
		q: `Do you clean windows?`,
		a: `Yes, AABS cleans interior and exterior windows, as well as building facades and structural cleaning.`,
	},
	{
		q: `Do you clean all types of floors?`,
		a: `Yes, AABS has extensive experience and knowledge in maintenance and restoration of all flooring types.`,
	},
	{
		q: `Do you change lightbulbs?`,
		a: `Yes, AABS performs light bulb changing as well as complete re-lamping services.`,
	},
]

const itemVariants = {
	closed: {
		height: 0,
		transition: {
			height: { delay: 0.2 },
		},
	},
	opened: {
		height: 'auto',
		transition: {
			opacity: { delay: 0.3 },
		},
	},
}

const pVariants = {
	closed: {
		scale: 0,
		opacity: 0,
		transition: {
			scale: { duration: 0 },
		},
	},
	opened: {
		scale: 1,
		opacity: 1,
		transition: {
			scale: { duration: 0 },
			opacity: { delay: 0.3 },
		},
	},
}

const iconVariants = {
	closed: {
		rotate: 0,
	},
	opened: {
		rotate: 225,
	},
}

const FaqSlider = () => {
	const [activeItems, setActiveItems] = useState([])

	const toggleActive = (clicked) => {
		const isActive = activeItems.includes(clicked)

		if (isActive) {
			const arr = activeItems.filter((item) => item !== clicked)
			setActiveItems(arr)
		} else {
			setActiveItems((prevState) => [clicked, ...prevState])
		}
	}

	return (
		<Container wrapperSm className={styles.faq}>
			{list.map((item, i) => {
				const isActive = activeItems.includes(i)
				return (
					<div key={item.q} className={styles.group}>
						<button className={styles.toggle} onClick={() => toggleActive(i)}>
							<span>{item.q}</span>
							<motion.span
								variants={iconVariants}
								animate={isActive ? 'opened' : 'closed'}
								className={styles.iconWrapper}
							>
								<PlusCircle />
							</motion.span>
						</button>

						<motion.div
							variants={itemVariants}
							animate={isActive ? 'opened' : 'closed'}
							className={styles.answer}
						>
							<motion.p variants={pVariants}>{item.a}</motion.p>
						</motion.div>
					</div>
				)
			})}
		</Container>
	)
}

export default FaqSlider
