import { chatsContact } from '@consts/chats.const'
import { makeAutoObservable } from 'mobx'
import { IChatsContact } from '@interfaces/chats.types'
import { ChangeEvent } from 'react'
import { getSortedContacts } from '@utils/chats.utils'
import { EStatus } from '@consts/common.const'

class ChatsContactStore {
	chatsContactList: Array<IChatsContact> = getSortedContacts(chatsContact)
	searchContacthValue = ''
	chatContactChecked: string = this.chatsContactList[0].id
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

	setUpdateStatus(id: string, status: EStatus) {
		this.chatsContactList.map(contact => {
			if (contact.id === id) {
				contact.status = status
			}

			return contact
		})
	}

	setSearchContactValue(e: ChangeEvent<HTMLInputElement>) {
		this.searchContacthValue = e.target.value
	}

	setChatContactChecked(contactID: string) {
		this.chatContactChecked = contactID
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
