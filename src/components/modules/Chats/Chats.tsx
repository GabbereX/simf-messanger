import { cn } from '@bem-react/classname'
import { FC, useEffect } from 'react'

import { ChatsSearchContact } from '@components/modules/Chats/ChatsSearchContact'
import { ChatsContact } from '@components/modules/Chats/ChatsContact'

import chats from '@store/chats.store'

import './Chats.styles.scss'
import { observer } from 'mobx-react-lite'
import { IChatsContact } from '@interfaces/chats.types'
import { Scroll } from '@components/common/Scroll'
import { getFullName } from '@utils/common.utils'
import { getSortedContacts } from '@utils/chats.utils'

export const Chats: FC = observer(() => {
		const styles = cn('Chats')

		const { chatsContactList, searchContacthValue, chatContactChecked } = chats

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
			<div className={ styles() }>
				<ChatsSearchContact />

				<Scroll container='Chats'>
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
