import { makeAutoObservable } from 'mobx'
import { ChangeEvent } from 'react'

import { getSortedContacts } from '@utils/chats.utils'

import { chatsContact } from '@consts/chats.const'
import { EStatus } from '@consts/common.const'

import { IChatsContact, IMessage } from '@interfaces/chats.types'

class ChatsContactStore {
	chatsContactList: Array<IChatsContact> = getSortedContacts(chatsContact)
	searchContacthValue = ''
	chatContactChecked: string = this.chatsContactList[0].id
	notReadChatCount: number = 0
	changeMessagesToggle: boolean = false

	constructor() {
		makeAutoObservable(this)
	}

	setUpdateStatus(id: string, status: EStatus) {
		this.chatsContactList.map(contact => {
			if (contact.id === id) {
				contact.status = status
			}

			return contact
		})
	}

	setUpdateTypingStatus(id: string, typing: boolean) {
		this.chatsContactList.map(contact => {
			if (contact.id === id) {
				contact.typing = typing
			}

			return contact
		})
	}

	setAddNewMessage(message: IMessage, id: string) {
		this.chatsContactList.map(contact => {
			if (contact.id === id) {
				contact.messages.push(message)
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

	setChangeMessagesToggle() {
		this.changeMessagesToggle = !this.changeMessagesToggle
	}
}

const classInstance = new ChatsContactStore()

export default classInstance
