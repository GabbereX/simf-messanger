import { cn } from '@bem-react/classname'
import { FC, ReactNode } from 'react'
import { getFullName } from '@utils/common.utils'
import { Avatar } from '@components/common/Avatar'

import { IChatsContact } from '@interfaces/chats.types'

import './ChatsContact.style.scss'
import { EStatus } from '@consts/common.const'
import chats from '@store/chats.store'
import { observer } from 'mobx-react-lite'
import { Typing } from '@components/common/Typing'

export const ChatsContact: FC<IChatsContact> = observer((contact) => {
		const styles = cn('Chats-Contact')

		const {
			id,
			avatar,
			firstName,
			middleName,
			lastName,
			messages,
			status,
			typing
		} = contact

		const { currentChat } = chats

		const fullName = getFullName({
			firstName,
			middleName,
			lastName
		})

		const active = currentChat.id === id

		const renderLastMessage = (): ReactNode => {
			if (typing) return <Typing />

			return !messages.length
				? 'Нет сообщений'
				: ''
		}

		return (
			<li
				className={ styles({ active }, [ 'transition' ]) }
				onClick={ () => chats.setCurrentChat(contact) }
			>
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
					<div className={ styles('LastMessage', { active }, [ 'ellipse-1' ]) }>
						{ renderLastMessage() }
					</div>
				</div>
			</li>
		)
	}
)
