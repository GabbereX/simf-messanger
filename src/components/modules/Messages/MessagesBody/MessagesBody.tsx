import { FC } from 'react'

import './MessagesBody.styles.scss'
import { cn } from '@bem-react/classname'
import { Scroll } from '@components/common/Scroll'
import chats from '@store/chats.store'

export const MessagesBody: FC = () => {
	const styles = cn('Messages-Body')

	const { currentChat } = chats
	const { messages } = currentChat

	return (
		<Scroll container='Messenger'>
			<div className={ styles() }>
				{
					messages.length
						? (
							<div>Есть Сообщения</div>
						)
						: (
							<div className={ styles('NotFound') }>Нет ни одного сообщения</div>
						)
				}
			</div>
		</Scroll>
	)
}
