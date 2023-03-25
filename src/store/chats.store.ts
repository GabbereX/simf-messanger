import { chatsContact } from '@consts/chats.const'
import { makeAutoObservable } from 'mobx'
import { IChatsContact } from '@interfaces/chats.types'
import { ChangeEvent } from 'react'

class ChatsContactStore {
	chatsContactList: Array<IChatsContact> = chatsContact
	searchContacthValue = ''
	currentChat: IChatsContact = chatsContact[0]

	constructor() {
		makeAutoObservable(this)
	}

	setSearchContactValue(e: ChangeEvent<HTMLInputElement>) {
		this.searchContacthValue = e.target.value
	}

	setCurrentChat(contact: IChatsContact) {
		this.currentChat = contact
	}
}

const classInstance = new ChatsContactStore()

export default classInstance
