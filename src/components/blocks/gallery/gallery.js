import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React, { useState, useRef } from 'react'
import Helmet from 'react-helmet'
import { AnimatePresence } from 'framer-motion'
import { Fade } from '@animations'
import * as styles from './gallery.module.scss'
import Modal from './modal'

const Gallery = ({ images }) => {
	// State
	const [isOpen, setIsOpen] = useState(false)
	const [modalImage, setModalImage] = useState(null)
	const [currentImg, setCurrentImg] = useState(null)

	// Refs
	const imageRefs = useRef([])
	imageRefs.current = []

	const addImageRefs = (el) => {
		if (el && !imageRefs.current.includes(el)) {
			imageRefs.current.push(el)
		}
	}

	const getAlt = (name) => {
		return name.replace(/-/g, ' ').trim()
	}

	// Handlers
	const openModal = (image, i) => {
		setModalImage(image)
		setIsOpen(true)
		setCurrentImg(i)
	}

	const closeModal = () => {
		setModalImage(null)
		setIsOpen(false)
		imageRefs.current[currentImg].focus()
	}

	return (
		<>
			<Helmet>{isOpen && <body body-fixed-gallery />}</Helmet>

			<div className={styles.gallery}>
				{images.map(({ node: image }, i) => {
					return (
						<Fade key={image.id}>
							<div
								onClick={() => openModal(image, i)}
								onKeyPress={(e) => e.key === 'Enter' && openModal(image, i)}
								tabIndex='0'
								className={styles.image}
								ref={addImageRefs}
								role='button'
							>
								<GatsbyImage image={getImage(image)} alt={getAlt(image.name)} />
							</div>
						</Fade>
					)
				})}
			</div>

			<AnimatePresence>
				{isOpen && <Modal modalImage={modalImage} closeModal={closeModal} />}
			</AnimatePresence>
		</>
	)
}

export default Gallery
