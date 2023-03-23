import { cn } from '@bem-react/classname'
import { ChangeEvent, FC } from 'react'

import './Input.styles.scss'

interface IProps {
	placeholder?: string
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<IProps> = ({
	value = '',
	onChange,
	placeholder
}) => {
	const styles = cn('Input')

	return (
		<div className={ styles('Wrapper') }>
			<input
				type='text'
				className={ styles() }
				required
				value={ value }
				onChange={ onChange }
			/>
			<label className={ styles('Label', [ 'transition' ]) }>
				{ placeholder }
			</label>
			<span className={ styles('Focus-Line', [ 'transition' ]) } />
		</div>
	)
}
