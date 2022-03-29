import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { motion } from 'framer-motion'
import { Container } from '@UI'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import * as styles from './gallery.module.scss'

const Modal = ({ isOpen, closeModal, modalImage }) => {
	const closeButtonRef = useRef(null)

	useEffect(() => {
		if (isOpen) {
			closeButtonRef.current.focus()
		}
	}, [isOpen])

	return ReactDOM.createPortal(
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			style={{ zIndex: 3000 }}
		>
			<div
				className={styles.modal}
				onKeyUp={(e) => e.key === 'Escape' && closeModal()}
				tabIndex='0'
				role='button'
			>
				<Container wrapper section className={styles.modalWrapper}>
					<GatsbyImage
						image={getImage(modalImage)}
						alt={modalImage.description}
						imgStyle={{ objectFit: 'contain' }}
					/>
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
