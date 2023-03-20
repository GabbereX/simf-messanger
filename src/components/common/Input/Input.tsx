import { FC } from 'react'

import './Input.styles.scss'
import { cn } from '@bem-react/classname'

export const Input: FC = () => {
	const styles = cn('Input')

	return (
		<input
			type='text'
			placeholder='Поиск'
			className={ styles() }
		/>
	)
}
