import { FC } from 'react'

import './ChatsSearchContact.styles.scss'
import { cn } from '@bem-react/classname'
import { Input } from '@components/common/Input'

import chats from '@store/chats.store'
import { observer } from 'mobx-react-lite'

export const ChatsSearchContact: FC = observer(() => {
		const styles = cn('Chats-Search-Contact')

		const { searchContacthValue } = chats

		return (
			<div className={ styles() }>
				<Input
					placeholder='Поиск'
					value={ searchContacthValue }
					onChange={ (e) => chats.setSearchContactValue(e) }
				/>
			</div>
		)
	}
)
