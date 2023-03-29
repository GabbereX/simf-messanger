import { cn } from '@bem-react/classname'
import { FC } from 'react'

import { ESize } from '@consts/common.const'

import { getAvatarColor } from '@utils/common.utils'

import { Nullable } from '@interfaces/common.types'

import './Avatar.styles.scss'

interface IProps {
	src: Nullable<string>
	alt: string
	fullName: string
	outline?: boolean
	size?: ESize.SMALL | ESize.BIG
	online?: boolean
	additionalClassesRoot?: string
}

export const Avatar: FC<IProps> = ({
	src,
	alt,
	fullName,
	outline = false,
	size = ESize.SMALL,
	online = false,
	additionalClassesRoot = ''
}) => {
	const classes = cn('Avatar')

	const initials = fullName.replace(/[^A-ZА-Я]/g, '') || ''

	return (
		<div className={ classes('Wrapper', { online }) }>
			<span className={ `${ classes({ outline, size, online }, [ 'transition' ]) } ${ additionalClassesRoot }` }>
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
								{ initials.substring(0, 2) }
							</div>
						)
				}
			</span>
		</div>
	)
}
