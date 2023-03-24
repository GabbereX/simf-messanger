import { cn } from '@bem-react/classname'
import { FC } from 'react'

import { ESize } from '@consts/common.const'

import { Nullable } from '@interfaces/common.types'

import './Avatar.styles.scss'
import { getAvatarColor } from '@utils/common.utils'

interface IProps {
	src: Nullable<string>
	alt: string
	fullName: string
	outline?: boolean
	size?: ESize.SMALL | ESize.BIG
	online?: boolean
	additionalClassesWrapper?: string
}

export const Avatar: FC<IProps> = ({
	src,
	alt,
	fullName,
	outline = false,
	size = ESize.SMALL,
	online = false,
	additionalClassesWrapper = ''
}) => {
	const classes = cn('Avatar')
	const classesWrapper = `${ classes({ outline, size, online }, [ 'transition' ]) } ${ additionalClassesWrapper }`

	const initials = fullName.replace(/[^A-ZА-Я]/g, '') || ''

	return (
		<span
			className={ classesWrapper }
		>
			{
				src ? (
						<img
							src={ src }
							alt={ `Аватар пользователя ${ alt }` }
						/>
					)
					: (
						<div
							className={ classes('NotFound') }
							style={ { backgroundColor: getAvatarColor(initials) } }
						>
							{ initials }
						</div>
					)
			}
		</span>
	)
}
