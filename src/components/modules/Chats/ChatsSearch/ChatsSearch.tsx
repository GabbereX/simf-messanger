import { FC } from 'react'

import './ChatSearch.styles.scss'
import { cn } from '@bem-react/classname'
import { Input } from '@components/common/Input'

export const ChatsSearch: FC = () => {
	const styles = cn('Chats-Search')

	return (
		<div className={ styles() }>
			<Input />
		</div>
	)
}
