import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { motion } from 'framer-motion'
import { Button, Container } from '@UI'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import * as styles from './gallery.module.scss'

const Modal = ({ closeModal, modalImage }) => {
	const closeButtonRef = useRef(null)

	useEffect(() => {
		const handleKeyup = (e) => {
			if (e.key !== 'Escape') return
			closeModal()
		}

		closeButtonRef.current.focus()
		window.addEventListener('keydown', handleKeyup)
		return () => window.removeEventListener('keydown', handleKeyup)
	}, [closeModal])

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
					<Button
						onClick={closeModal}
						className={styles.closeButton}
						ref={closeButtonRef}
					>
						Close
					</Button>
				</Container>
			</div>
		</motion.div>,
		document.body
	)
}

export default Modal
