import { cn } from '@bem-react/classname'
import { FC } from 'react'
import { getFullName } from '@utils/common.utils'
import { Avatar } from '@components/common/Avatar'

import { IChatsContact } from '@interfaces/chatsContact.types'

import './ChatsContact.style.scss'
import { EStatus } from '@consts/common.const'

export const ChatsContact: FC<IChatsContact> = ({
	id,
	avatar,
	firstName,
	middleName,
	lastName,
	messages,
	status
}) => {
	const styles = cn('Chats-Contact')

	const fullName = getFullName({
		firstName,
		middleName,
		lastName
	})

	return (
		<li className={ styles(null, [ 'transition' ]) }>
			<Avatar
				src={ avatar }
				alt={ `Аватар ${ fullName }` }
				fullName={ fullName }
				online={ status === EStatus.ONLINE }
				additionalClassesRoot={ styles('Avatar') }
			/>

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
