import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import * as styles from './flex.module.scss'

const FlexItem = ({ basis, className, children, ...rest }) => {
	const classes = classnames(
		styles.flexItem,
		basis && basis === 1 && styles.basis1,
		basis && basis === 2 && styles.basis2,
		basis && basis === 3 && styles.basis3,
		basis && basis === 4 && styles.basis4,
		className && className
	)

	return (
		<div className={classes} {...rest}>
			{children}
		</div>
	)
}

export default FlexItem

FlexItem.propTypes = {
	basis: PropTypes.oneOf([1, 2, 3, 4]),
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	rest: PropTypes.object,
}
