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

	const online = status === EStatus.ONLINE

	return (
		<li className={ styles(null, [ 'transition' ]) }>
			<span className={ styles('Avatar-Wrapper', { online }) }>
				<Avatar
					src={ avatar }
					alt={ `Аватар ${ fullName }` }
					fullName={ fullName }
					online={ online }
					additionalClassesWrapper={ styles('Avatar') }
				/>
			</span>
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
