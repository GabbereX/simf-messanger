import { IChatsContact, IMessage } from '@interfaces/chats.types'
import { Nullable } from '@interfaces/common.types'
import dayjs from 'dayjs'

export const getLastMessage = (messages: Array<IMessage>): Nullable<IMessage> =>
	messages.length ? messages[messages.length - 1] : null

export const getLastMessageDate = (lastMessage: Nullable<IMessage>): Nullable<string> => {
	if (!lastMessage) return null

	const {
		date: {
			time,
			day,
			month,
			year
		}
	} = lastMessage

	const dayNow = dayjs(Date.now()).format('DD')

	return dayNow === day ? time : `${ day }.${ month }.${ year }`
}

export const getMessagesNotReadCount = (messages: Array<IMessage>): number =>
	messages.length ? messages.filter(({ isRead }) => !isRead).length : 0

export const getSortedContacts = (chatsContactList: Array<IChatsContact>): Array<IChatsContact> =>
	chatsContactList.sort((a, b) => {
		const lastMessageA = getLastMessage(a.messages)
		const lastMessageB = getLastMessage(b.messages)

		const dateA = lastMessageA ? lastMessageA.date.fullDate : '-1'
		const dateB = lastMessageB ? lastMessageB.date.fullDate : '-1'

		return dateA.localeCompare(dateB)
	}).reverse()

export const getCurrentChat = (
	chatsContactList: Array<IChatsContact>,
	chatContactChecked: string
): IChatsContact =>
	chatsContactList
		.find(contact => contact.id === chatContactChecked) || chatsContactList[0]
