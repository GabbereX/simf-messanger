import { cn } from '@bem-react/classname'
import { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import { ChatsSearchContact } from './ChatsSearchContact'
import { ChatsContact } from './ChatsContact'
import { Scroll } from '@components/common/Scroll'

import { getFullName } from '@utils/common.utils'
import { getSortedContacts } from '@utils/chats.utils'

import { EScrollContainer } from '@consts/common.const'

import chats from '@store/chats.store'
import utils from '@store/utils.store'

import { IChatsContact } from '@interfaces/chats.types'

import './Chats.styles.scss'

export const Chats: FC = observer(() => {
		const styles = cn('Chats')

		const { chatsContactList, searchContacthValue, chatContactChecked } = chats

		const { isToolbarFullWidth: fullWidth } = utils

		const getFilteredContacts = (): Array<IChatsContact> =>
			getSortedContacts(chatsContactList)
				.filter(contact => {
					const getString = (value: string): string =>
						value
							.toLowerCase()
							.replace(/\s/g, '')

					return getString(getFullName(contact))
						.includes(getString(searchContacthValue))
				})

		useEffect(() => {
			chats.setAllMessageReadInChat(chatContactChecked)
		}, [ chatContactChecked ])

		return (
			<div className={ styles({ fullWidth }, [ 'transition' ]) }>
				<ChatsSearchContact />

				<Scroll container={ EScrollContainer.CHATS }>
					<ul className={ styles('List') }>
						{
							getFilteredContacts().length
								? (
									getFilteredContacts().map(contact =>
										<ChatsContact key={ contact.id } { ...contact } />)
								)
								: (
									<li className={ styles('NotFound') }>
										Нет ни одного контакта по данному запроcу
									</li>
								)
						}
					</ul>
				</Scroll>
			</div>
		)
	}
)
