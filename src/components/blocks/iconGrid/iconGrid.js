import React from 'react'
import classes from 'classnames'
import { ThumbsUp } from '@images/icons'
import { Container, Title } from '@UI'
import { Fade } from '@animations'
import { useWindowWidth } from '@context'
import * as styles from './iconGrid.module.scss'

const data = [
	{
		icon: <ThumbsUp />,
		title: 'Lorem ipsum dolor sit amet',
		body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptas aliquid ipsum?',
	},
	{
		icon: <ThumbsUp />,
		title: 'Lorem ipsum dolor sit amet',
		body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptas aliquid ipsum?',
	},
	{
		icon: <ThumbsUp />,
		title: 'Lorem ipsum dolor sit amet',
		body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptas aliquid ipsum?',
	},
]

const IconGrid = ({ columns, center }) => {
	const windowWidth = useWindowWidth()

	const listClasses = classes(
		styles.list,
		center && styles.center,
		columns === 2 && styles.col2,
		columns === 4 && styles.col4
	)
	return (
		<Container section wrapper>
			<ul className={listClasses}>
				{data.map(({ icon, title, body }, i) => (
					<li key={i}>
						<Fade inline delay={windowWidth > 900 ? i * 0.15 : 0}>
							{icon}
							<Title className={styles.title} xs tag='h3'>
								{title}
							</Title>
							<p>{body}</p>
						</Fade>
					</li>
				))}
			</ul>
		</Container>
	)
}

export default IconGrid
