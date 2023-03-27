import { FC } from 'react'

import './MessagesBody.styles.scss'
import { cn } from '@bem-react/classname'
import { Scroll } from '@components/common/Scroll'
import chats from '@store/chats.store'
import { observer } from 'mobx-react-lite'

export const MessagesBody: FC = observer(() => {
		const styles = cn('Messages-Body')

		const { currentChat } = chats
		const { messages } = currentChat

		// console.log(messages[0])

		return (
			<Scroll container='Messenger'>
				<div className={ styles() }>
					{
						messages.length
							? (

								messages.map(({ messageText, messageFlow, isRead, date }, index) => {
									return (
										<div
											key={ index }
											style={ { marginBottom: '20px' } }
										>
											<span>
												{ messageFlow }
											</span>
											<span>
												{ !isRead ? ' Не прочитано' : '' }
											</span>
											<span>
												{ date.time }
											</span>
											<div>
												{ messageText }
											</div>
										</div>
									)
								})

							)
							: (
								<div className={ styles('NotFound') }>Нет ни одного сообщения</div>
							)
					}
				</div>
			</Scroll>
		)
	}
)
