import { FC } from 'react'

import './MessagesBody.styles.scss'
import { cn } from '@bem-react/classname'
import { Scroll } from '@components/common/Scroll'
import chats from '@store/chats.store'
import { observer } from 'mobx-react-lite'
import { MessageContainer } from '@components/common/MessageContainer'
import { compareDate } from '@utils/common.utils'

export const MessagesBody: FC = observer(() => {
		const styles = cn('Messages-Body')

		const { currentChat } = chats
		const { id, messages } = currentChat

		return (
			<Scroll container='Messenger'>
				<div
					className={ styles() }
					style={ { height: !messages.length ? '100%' : 'auto' } }
				>
					{
						messages.length
							? (
								messages.map((message, index) =>
									<MessageContainer
										key={ id + ':' + message.date.fullDate }
										{ ...message }
										isDataLabel={ compareDate(message, messages[index - 1]) }
									/>
								)
							)
							: (
								<div
									className={ styles('NotFound') }
								>
									Нет ни одного сообщения
								</div>
							)
					}
				</div>
			</Scroll>
		)
	}
)
