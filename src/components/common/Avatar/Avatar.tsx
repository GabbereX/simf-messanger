import { cn } from '@bem-react/classname'
import { FC } from 'react'

import { ESize } from '@consts/common.const'

import { Nullable } from '@interfaces/common.types'

import './Avatar.styles.scss'

interface IProps {
	src: Nullable<string>
	alt: Nullable<string>
	outline?: boolean
	size?: ESize.SMALL | ESize.BIG
}

export const Avatar: FC<IProps> = ({
	src,
	alt,
	outline = false,
	size = ESize.SMALL
}) => {
	const classes = cn('Avatar')

	const isImage = src && alt

	return (
		<span
			className={ classes({ outline, size }, [ 'transition' ]) }>
			{
				isImage &&
				<img
					src={ src }
					alt={ `Аватар пользователя ${ alt }` }
				/>
			}
		</span>
	)
}
