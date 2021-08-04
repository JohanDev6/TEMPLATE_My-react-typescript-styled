import React, { ReactElement } from 'react'

import { Container } from './styles'

export interface IButton {
	onClick? : () => void;
	children: string;
}

export default function Button({...buttonProps} : IButton) : ReactElement {
	return (
		<Container {...buttonProps}>
			button
		</Container>
	)
}