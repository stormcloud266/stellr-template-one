import React, { forwardRef } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import * as styles from './button.module.scss'

const Button = forwardRef(
	({ href, to, cta, children, className, ...rest }, ref) => {
		const classes = classnames(
			cta && styles.cta,
			styles.button,
			className && className
		)

		let element

		if (href) {
			element = (
				<a
					href={href}
					className={classes}
					target='_blank'
					rel='noreferrer'
					ref={ref}
					{...rest}
				>
					{children}
				</a>
			)
		} else if (to) {
			element = (
				<Link to={to} {...rest} className={classes} ref={ref}>
					{children}
				</Link>
			)
		} else {
			element = (
				<button {...rest} className={classes} ref={ref}>
					{children}
				</button>
			)
		}

		return element
	}
)

export default Button

Button.propTypes = {
	href: PropTypes.string,
	to: PropTypes.string,
	cta: PropTypes.bool,
	children: PropTypes.node.isRequired,
	rest: PropTypes.object,
	className: PropTypes.string,
}
