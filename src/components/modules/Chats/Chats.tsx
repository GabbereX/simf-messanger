import { cn } from '@bem-react/classname'
import { FC } from 'react'

import { ChatsSearchContact } from '@components/modules/Chats/ChatsSearchContact'
import { ChatsContact } from '@components/modules/Chats/ChatsContact'

import chats from '@store/chats.store'

import './Chats.styles.scss'
import { observer } from 'mobx-react-lite'
import { getFullName } from '@utils/common.utils'
import { IChatsContact } from '@interfaces/chats.types'
import { Scroll } from '@components/common/Scroll'
import { getLastMessage } from '@utils/chats.utils'

export const Chats: FC = observer(() => {
		const styles = cn('Chats')

		const { chatsContactList, searchContacthValue } = chats

		const getSortedContacts = (): Array<IChatsContact> =>
			JSON.parse(JSON.stringify(chatsContactList)).sort((a: IChatsContact, b: IChatsContact) => {
				const lastMessageA = getLastMessage(a.messages)
				const lastMessageB = getLastMessage(b.messages)

				const dateA = lastMessageA ? lastMessageA.date.fullDate : '-1'
				const dateB = lastMessageB ? lastMessageB.date.fullDate : '-1'

				return dateA.localeCompare(dateB)
			}).reverse()

		const getFilteredContacts = (): Array<IChatsContact> =>
			getSortedContacts()
				.filter(contact => {
					const getString = (value: string): string =>
						value
							.toLowerCase()
							.replace(/\s/g, '')

					return getString(getFullName(contact))
						.includes(getString(searchContacthValue))
				})

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
