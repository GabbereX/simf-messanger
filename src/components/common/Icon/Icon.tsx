import { FC } from 'react'

import sprite from '@assets/images/sprites.svg'

interface IProps {
	name: string
	className?: string
}

export const Icon: FC<IProps> = ({
	name,
	className
}) => (
	<svg className={ className }>
		<use xlinkHref={ `${ sprite }#${ name }` } />
	</svg>
)
