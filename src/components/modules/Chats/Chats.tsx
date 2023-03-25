import { cn } from '@bem-react/classname'
import { FC } from 'react'

import { ChatsSearchContact } from '@components/modules/Chats/ChatsSearchContact'
import { ChatsContact } from '@components/modules/Chats/ChatsContact'

import chats from '@store/chats.store'

import './Chats.styles.scss'
import { observer } from 'mobx-react-lite'
import { getFullName } from '@utils/common.utils'
import { IChatsContact } from '@interfaces/chatsContact.types'
import { Scroll } from '@components/common/Scroll'

export const Chats: FC = observer(() => {
		const styles = cn('Chats')

		const { chatsContactList, searchContacthValue } = chats

		const getFilteredContacts = (): Array<IChatsContact> =>
			chatsContactList
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
