import React from 'react'
import { Container, FlexContainer, FlexItem } from '@UI'
// import * as styles from './twoColumn.module.scss'

const TwoColumn = ({ left, right }) => {
	return (
		<Container wrapperSmOnMd>
			<FlexContainer collapseOnMd>
				<FlexItem>{left}</FlexItem>
				<FlexItem>{right}</FlexItem>
			</FlexContainer>
		</Container>
	)
}

export default TwoColumn
