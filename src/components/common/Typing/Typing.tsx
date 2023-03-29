import { cn } from '@bem-react/classname'

import { FC } from 'react'

import './Typing.styles.scss'

export const Typing: FC = () => {
	const styles = cn('Typing')

	return (
		<span className={ styles() }>
			{
				Array(3).fill(null).map((_, id) =>
					<span
						key={ id }
						className={ styles('Circle', { id }) }
					>
						·
					</span>
				)
			}
			<span>Печатает</span>
		</span>
	)
}
