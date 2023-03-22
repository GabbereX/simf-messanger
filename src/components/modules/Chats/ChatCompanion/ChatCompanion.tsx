import { cn } from '@bem-react/classname'
import { FC } from 'react'
import { getFullName } from '@utils/common.utils'
import { IchatCompanion } from '@interfaces/chatCompanion.types'
import { Avatar } from '@components/common/Avatar'

import './ChatCompanuion.style.scss'

export const ChatCompanion: FC<IchatCompanion> = ({
	id,
	avatar,
	firstName,
	middleName,
	lastName,
	messages
}) => {
	const styles = cn('ChatCompanion')

	const fullName = getFullName({
		firstName,
		middleName,
		lastName
	})

	return (
		<li className={ styles(null, [ 'transition' ]) }>
			{
				avatar &&
				<Avatar
					src={ avatar }
					alt={ fullName }
					additionalClassesWrapper={ styles('Avatar') }
				/>
			}
			<div className='full-width'>
				<div className={ styles('Fullname', [ 'ellipse-1' ]) }>
					{ fullName }
				</div>
				<div className={ styles('LastMessage', [ 'ellipse-1' ]) }>
					{
						!messages.length ?
							'Нет сообщений' : ''
					}
				</div>
			</div>

		</li>
	)
}
