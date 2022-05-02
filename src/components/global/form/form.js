import React from 'react'
import { Button, Container, FlexContainer, FlexItem, Title } from '@UI'
import { ThumbsUp } from '@images/icons'
import { Fade } from '@animations'
import * as styles from './form.module.scss'

const Form = () => {
	const data = [
		{
			text: '123-123-1234',
			icon: <ThumbsUp />,
		},
		{
			text: 'test@example.com',
			icon: <ThumbsUp />,
		},
		{
			text: '123 Street, City, St 12345',
			icon: <ThumbsUp />,
		},
	]
	return (
		<Container bgAccent section>
			<Container wrapperSmOnMd>
				<FlexContainer alignStart collapseOnMd>
					<FlexItem className={styles.flexItemText}>
						<Container textBlock>
							<Fade>
								<Title tag='h2' md>
									Ready to work together?
								</Title>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Sapiente perferendis illum praesentium molestias rerum quod
									ipsa, esse sint!
								</p>
								<ul className={styles.list}>
									{data.map(({ text, icon }, i) => (
										<li key={i}>
											{icon} <span>{text}</span>
										</li>
									))}
								</ul>
							</Fade>
						</Container>
					</FlexItem>
					<FlexItem>
						<form className={styles.form}>
							<div className={styles.formSection}>
								<label htmlFor='name'>Name</label>
								<input type='text' id='name' name='name' />
							</div>
							<div className={styles.formSection}>
								<label htmlFor='email'>Email</label>
								<input type='email' id='email' name='email' />
							</div>
							<div className={styles.formSection}>
								<label htmlFor='message'>Message</label>
								<textarea name='message' id='message'></textarea>
							</div>
							<Button>Send Email</Button>
						</form>
					</FlexItem>
				</FlexContainer>
			</Container>
		</Container>
	)
}

export default Form
