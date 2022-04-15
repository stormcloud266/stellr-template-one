import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { WindowWidthProvider } from '../../context'
import { Footer, Form, Header, SkipLink } from '@global'
// import CookieBanner from '@global/cookieBanner'

import '@globalStyles/global.scss'

const Layout = ({ children }) => {
	const mainRef = useRef()

	return (
		<WindowWidthProvider>
			<SkipLink main={mainRef} />
			<Header />
			<main role='main' id='main' tabIndex='-1' ref={mainRef}>
				{children}
			</main>
			<Form />
			<Footer />
			{/* <CookieBanner /> */}
		</WindowWidthProvider>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
