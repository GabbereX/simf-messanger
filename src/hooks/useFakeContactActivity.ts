import { IChatsContact } from '@interfaces/chats.types'
import { getRandomNumber } from '@utils/fakeData.utils'
import { EStatus } from '@consts/common.const'
import chats from '@store/chats.store'

export const useFakeContactActivity = (contact: IChatsContact, currentChat: IChatsContact) => {
	const {
		id,
		status
	} = contact

	const startFakeContactActivity = () => {
		const startTimeoutTimeRoll = getRandomNumber(1, 60) * 1000

		setTimeout(() => {
			const startIntervalTimeRoll = getRandomNumber(10, 60) * 1000

			setInterval(() => {
				const newDataContact: IChatsContact = JSON.parse(JSON.stringify(contact))
				const contactStatusRoll = getRandomNumber(1, 2)
				const newStatus = contactStatusRoll === 1 ? EStatus.ONLINE : EStatus.OFFLINE

				if (newStatus !== status) {
					newDataContact.status = newStatus
				}

				chats.setUpdateContact(newDataContact)
				id === currentChat.id && chats.setCurrentChat(newDataContact)

			}, startIntervalTimeRoll)
		}, startTimeoutTimeRoll)
	}

	return { startFakeContactActivity }
}
