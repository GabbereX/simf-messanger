import { cn } from '@bem-react/classname'
import { FC } from 'react'

import './MessagesHeader.styles.scss'
import { getFullName } from '@utils/common.utils'
import { Typing } from '@components/common/Typing'
import { Status } from '@components/common/Status'
import { IChatsContact } from '@interfaces/chats.types'

export const MessagesHeader: FC<IChatsContact> = (currentChat) => {
	const styles = cn('Messages-Header')

	const { typing, status } = currentChat

	const fullName = getFullName(currentChat)

	return (
		<div className={ styles() }>
			<span className={ styles('Contact-Name') }>
				{ fullName }
			</span>
			<span className={ styles('Type-Status') }>
				{
					typing
						? <Typing />
						: <Status status={ status } />
				}
			</span>
		</div>
	)
}
