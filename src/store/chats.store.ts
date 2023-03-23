import { chatsContact } from '@consts/chatsContact.const'
import { makeAutoObservable } from 'mobx'
import { IChatsContact } from '@interfaces/chatsContact.types'
import { ChangeEvent } from 'react'

class ChatsContactStore {
	chatsContactList: Array<IChatsContact> = chatsContact
	searchContacthValue = ''

	constructor() {
		makeAutoObservable(this)
	}

	setSearchContactValue(e: ChangeEvent<HTMLInputElement>) {
		this.searchContacthValue = e.target.value
	}

}

const classInstance = new ChatsContactStore()

export default classInstance
