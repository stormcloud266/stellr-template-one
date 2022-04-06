import React from 'react'
import { Container } from '@UI'
import * as styles from './faq.module.scss'

const list = [
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
		q: `Are you insured and bonded?`,
		a: `Yes, AABS is fully insured and all our work is bondable.`,
	},
	{
		q: `Do you provide a discount for contracts?`,
		a: `Yes, please contact us for details.`,
	},
	{
		q: `Do you clean all types of floors?`,
		a: `Yes, AABS has extensive experience and knowledge in maintenance and restoration of all flooring types.`,
	},
]

const FaqList = () => {
	return (
		<Container wrapper>
			<ul className={styles.list}>
				{list.map(({ q, a }, i) => (
					<li key={i}>
						<p className={styles.title}>{q}</p>
						<p className={styles.body}>{a}</p>
					</li>
				))}
			</ul>
		</Container>
	)
}

export default FaqList
