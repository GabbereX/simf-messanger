import { cn } from '@bem-react/classname'
import { FC } from 'react'
import { observer } from 'mobx-react-lite'

import { Input } from '@components/common/Input'

import chats from '@store/chats.store'

import './ChatsSearchContact.styles.scss'

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
