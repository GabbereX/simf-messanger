import { chatsContact } from '@consts/chats.const'
import { makeAutoObservable } from 'mobx'
import { IChatsContact } from '@interfaces/chats.types'
import { ChangeEvent } from 'react'
import { getSortedContacts } from '@utils/chats.utils'

class ChatsContactStore {
	chatsContactList: Array<IChatsContact> = getSortedContacts(chatsContact)
	searchContacthValue = ''
	currentChat: IChatsContact = this.chatsContactList[0]
	notReadChatCount: number = 0

	constructor() {
		makeAutoObservable(this)
	}

	setUpdateContact(newDataContact: IChatsContact) {
		this.chatsContactList = this.chatsContactList.map(contact => {
			const { id } = newDataContact

			if (id === contact.id) {
				return newDataContact
			} else return contact
		})
	}

	setSearchContactValue(e: ChangeEvent<HTMLInputElement>) {
		this.searchContacthValue = e.target.value
	}

	setCurrentChat(contact: IChatsContact) {
		this.currentChat = contact
	}

	setAllMessageReadInChat(id: string) {
		this.chatsContactList = this.chatsContactList.map(contact => {
			const { id: contactID, messages } = contact

			if (id === contactID) {
				messages.map(message => message.isRead = true)
			}

			return contact
		})
	}

	setNotReadChatCount(count: number) {
		this.notReadChatCount = count
	}
}

const classInstance = new ChatsContactStore()

export default classInstance
