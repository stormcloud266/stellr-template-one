import React from 'react'
import { motion } from 'framer-motion'
import classnames from 'classnames'
import * as styles from './image.module.scss'

const Image = ({ left, children }) => {
	const imageVariants = {
		hidden: {
			scale: 1.02,
			opacity: 0,
		},
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 0.6,
				scale: {
					ease: [0.185, -0.01, 0, 1],
					duration: 0.9,
				},
			},
		},
	}

	const variants = {
		hidden: {
			opacity: 0,
			width: 0,
			height: 0,
		},
		visible: {
			opacity: 1,
			width: '80%',
			height: '80%',
			transition: {
				duration: 1,
				delay: 0.4,
				opacity: {
					duration: 0.3,
				},
				height: {
					ease: [0.185, -0.01, 0, 1],
					duration: 0.8,
				},
				width: {
					ease: [0.185, -0.01, 0, 1],
					duration: 0.8,
				},
			},
		},
	}

	return (
		<motion.div
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.4, once: true }}
			className={classnames(styles.container, left && styles.left)}
		>
			<motion.div className={styles.accent} variants={variants} />
			<motion.div className={styles.imageContainer} variants={imageVariants}>
				{children}
			</motion.div>
		</motion.div>
	)
}

export default Image
