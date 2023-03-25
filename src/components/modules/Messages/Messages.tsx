import { cn } from '@bem-react/classname'
import { FC } from 'react'

import { MessagesHeader } from './MessagesHeader'
import { MessagesBody } from './MessagesBody'
import { MessagesFooter } from './MessagesFooter'

import './Messages.styles.scss'

export const Messages: FC = () => {
	const styles = cn('Messages')

	return (
		<div className={ styles(null, [ 'full-width' ]) }>
			<MessagesHeader />
			<MessagesBody />
			<MessagesFooter />
		</div>
	)
}
