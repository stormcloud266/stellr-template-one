import React, { createContext, useContext } from 'react'
import useCurrentWidth from '../hooks/useCurrentWidth'

const WindowWidthContext = createContext()

export const useWindowWidth = () => {
	return useContext(WindowWidthContext)
}

export const WindowWidthProvider = ({ children }) => {
	const width = useCurrentWidth()

	return (
		<WindowWidthContext.Provider value={width}>
			{children}
		</WindowWidthContext.Provider>
	)
}
