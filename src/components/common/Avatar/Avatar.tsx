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
	additionalClassesWrapper?: string
}

export const Avatar: FC<IProps> = ({
	src,
	alt,
	outline = false,
	size = ESize.SMALL,
	additionalClassesWrapper = ''
}) => {
	const classes = cn('Avatar')
	const classesWrapper = `${ classes({ outline, size }, [ 'transition' ]) } ${ additionalClassesWrapper }`

	const isImage = src && alt

	return (
		<span
			className={ classesWrapper }>
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
