import { cn } from '@bem-react/classname'
import { FC } from 'react'

import { Scroll } from '@components/common/Scroll'
import { MessageContainer } from '../MessageContainer'

import { compareDate } from '@utils/common.utils'

import { EScrollContainer } from '@consts/common.const'

import { IChatsContact } from '@interfaces/chats.types'

import './MessagesBody.styles.scss'

export const MessagesBody: FC<IChatsContact> = ({
	id,
	messages
}) => {
	const styles = cn('Messages-Body')

	return (
		<Scroll container={ EScrollContainer.MESSENGER }>
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
