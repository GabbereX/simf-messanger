import { cn } from '@bem-react/classname'
import { FC } from 'react'

import { ChatsSearch } from '@components/modules/Chats/ChatsSearch'
import { ChatCompanion } from '@components/modules/Chats/ChatCompanion'
import { chatInterlocutors } from '@consts/chatCompanion.const'

import './Chats.styles.scss'

export const Chats: FC = () => {
	const styles = cn('Chats')

	return (
		<div className={ styles() }>
			<ChatsSearch />
			<ul>
				{
					chatInterlocutors.map(item =>
						<ChatCompanion key={ item.id } { ...item } />)
				}
			</ul>
		</div>
	)
}
