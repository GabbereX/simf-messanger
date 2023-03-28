import { cn } from '@bem-react/classname'
import { FC, ReactNode, useEffect, useRef } from 'react'
import { getFullName } from '@utils/common.utils'
import { Avatar } from '@components/common/Avatar'

import { IChatsContact } from '@interfaces/chats.types'

import './ChatsContact.style.scss'
import { EStatus } from '@consts/common.const'
import chats from '@store/chats.store'
import { observer } from 'mobx-react-lite'
import { Typing } from '@components/common/Typing'
import { getLastMessage, getLastMessageDate, getMessagesNotReadCount } from '@utils/chats.utils'
import { useFakeContactActivity } from '@hooks/useFakeContactActivity'
import { Nullable } from '@interfaces/common.types'

export const ChatsContact: FC<IChatsContact> = observer((contact) => {
		const styles = cn('Chats-Contact')

		const {
			id,
			avatar,
			messages,
			status,
			typing
		} = contact

		const ref = useRef<Nullable<boolean>>(null)

		const { startFakeContactActivity } = useFakeContactActivity(id)
		const { chatContactChecked } = chats

		const fullName = getFullName(contact)
		const lastMessage = getLastMessage(messages)
		const lastMessageDate = getLastMessageDate(lastMessage)
		const messagesNotReadCount = getMessagesNotReadCount(messages)

		const active = chatContactChecked === id

		const renderLastMessage = (): ReactNode => {
			if (typing) return <Typing />

			return !lastMessage
				? 'Нет сообщений'
				: lastMessage.messageText
		}

		useEffect(() => {
			if (!ref.current) {
				startFakeContactActivity()
				ref.current = true
			}
			// return () => {
			// 	ref.current = null
			// }
		}, [ ref ])

		return (
			<li
				className={ styles({ active }, [ 'transition' ]) }
				onClick={ () => chats.setChatContactChecked(id) }
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
					<div className={ styles('Last-Message', { active }, [ 'ellipse-1' ]) }>
						{ renderLastMessage() }
					</div>
				</div>

				{
					lastMessageDate && (
						<span className={ styles('Last-Message-Date') }>
							{ lastMessageDate }
						</span>
					)
				}

				{
					(messagesNotReadCount > 0 && !active) && (
						<span className={ styles('Not-Read-Count') }>
							{ messagesNotReadCount }
						</span>
					)
				}
			</li>
		)
	}
)
