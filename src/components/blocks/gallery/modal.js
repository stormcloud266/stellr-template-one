import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { motion } from 'framer-motion'
import { Container } from '@UI'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import * as styles from './gallery.module.scss'

const Modal = ({ closeModal, modalImage }) => {
	const closeButtonRef = useRef(null)

	const handleKeyup = (e) => {
		if (e.key !== 'Escape') return
		closeModal()
	}

	useEffect(() => {
		closeButtonRef.current.focus()
		window.addEventListener('keydown', handleKeyup)
		return () => window.removeEventListener('keydown', handleKeyup)
	}, [])

	return ReactDOM.createPortal(
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			style={{ zIndex: 3000 }}
			onClick={closeModal}
		>
			<div className={styles.modal} tabIndex='0' role='button'>
				<Container wrapper section className={styles.modalWrapper}>
					{modalImage && (
						<GatsbyImage
							image={getImage(modalImage)}
							alt=''
							imgStyle={{ objectFit: 'contain' }}
						/>
					)}
					<button
						onClick={closeModal}
						className={styles.closeButton}
						ref={closeButtonRef}
					>
						Close
					</button>
				</Container>
			</div>
		</motion.div>,
		document.body
	)
}

export default Modal
