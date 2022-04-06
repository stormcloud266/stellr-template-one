import React from 'react'

export const Hamburger = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-6 w-6'
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
		width='24'
		height='24'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='M4 8h16M4 16h16'
		/>
	</svg>
)

export const Times = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-6 w-6'
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
		width='24'
		height='24'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='M6 18L18 6M6 6l12 12'
		/>
	</svg>
)

export const ThumbsUp = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-5 w-5'
		viewBox='0 0 20 20'
		height={30}
		width={30}
		fill='currentColor'
	>
		<path d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' />
	</svg>
)

export const PlusCircle = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-5 w-5'
		viewBox='0 0 20 20'
		fill='currentColor'
		height={20}
		width={20}
	>
		<path
			fillRule='evenodd'
			d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
			clipRule='evenodd'
		/>
	</svg>
)
