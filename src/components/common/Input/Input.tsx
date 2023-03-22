import { cn } from '@bem-react/classname'
import { FC } from 'react'

import './Input.styles.scss'

interface IProps {
	placeholder?: string
}

export const Input: FC<IProps> = ({ placeholder }) => {
	const styles = cn('Input')

	return (
		<div className={ styles('Wrapper') }>
			<input
				type='text'
				className={ styles() }
				required
			/>
			<label className={ styles('Label', [ 'transition' ]) }>
				{ placeholder }
			</label>
			<span className={ styles('Focus-Line', [ 'transition' ]) } />
		</div>
	)
}
