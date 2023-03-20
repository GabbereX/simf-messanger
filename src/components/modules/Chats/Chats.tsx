import { cn } from '@bem-react/classname'
import { FC } from 'react'

import './Chats.styles.scss'
import { ChatsSearch } from '@components/modules/Chats/ChatsSearch'

export const Chats: FC = () => {
	const styles = cn('Chats')

	return (
		<div className={ styles() }>
			<ChatsSearch />
			<ul>
				<li>
					list
				</li>
			</ul>
		</div>
	)
}
