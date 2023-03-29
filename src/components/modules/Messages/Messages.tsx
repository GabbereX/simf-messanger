import { cn } from '@bem-react/classname'
import { FC } from 'react'
import { observer } from 'mobx-react-lite'

import { MessagesHeader } from './MessagesHeader'
import { MessagesBody } from './MessagesBody'
import { MessagesFooter } from './MessagesFooter'

import { getCurrentChat } from '@utils/chats.utils'

import chats from '@store/chats.store'

import './Messages.styles.scss'

export const Messages: FC = observer(() => {
		const styles = cn('Messages')

		const { chatsContactList, chatContactChecked } = chats

		const currentChat = getCurrentChat(chatsContactList, chatContactChecked)

		return (
			<div className={ styles(null, [ 'full-width' ]) }>
				<MessagesHeader { ...currentChat } />
				<MessagesBody { ...currentChat } />
				<MessagesFooter />
			</div>
		)
	}
)
