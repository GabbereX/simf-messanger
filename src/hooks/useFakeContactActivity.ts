import dayjs from 'dayjs'

import { getMessage, getRandomNumber } from '@utils/fakeData.utils'
import { getDate } from '@utils/common.utils'
import { getCurrentChat } from '@utils/chats.utils'

import { EStatus } from '@consts/common.const'
import { EMessageFlow } from '@consts/message.const'

import chats from '@store/chats.store'

import { IMessage } from '@interfaces/chats.types'

export const useFakeContactActivity = (id: string) => {
	const startFakeContactActivity = () => {
		const startTimeoutTimeRoll = getRandomNumber(1, 60) * 1000

		setTimeout(() => {
			const startIntervalTimeRoll = getRandomNumber(10, 60) * 1000

			setInterval(() => {
				const {
					status,
					typing
				} = getCurrentChat(chats.chatsContactList, id)

				if (!typing) {
					// typing

					const newTypingStatus =
						status === EStatus.ONLINE
						&& (getRandomNumber(1, 5) === 1)
						&& true

					if (newTypingStatus) {
						chats.setUpdateTypingStatus(id, newTypingStatus)

						// message generate

						const wordsCount = getRandomNumber(1, 50)
						const messageText = getMessage(wordsCount)
						const speedMessageTyping = Math.round(messageText.length / 2) * 300

						setTimeout(() => {
							const newDate = dayjs(Date.now()).format('YYYY MM DD HH:mm:ss')
							const message: IMessage = {
								messageFlow: EMessageFlow.INBOX,
								messageText: messageText,
								isRead: chats.chatContactChecked === id,
								date: getDate(newDate)
							}

							chats.setAddNewMessage(message, id)
							chats.setUpdateTypingStatus(id, false)
							chats.setChangeMessagesToggle()
						}, speedMessageTyping)
					}

					// status

					if (!newTypingStatus) {
						const statusRoll = getRandomNumber(1, 2)
						const newStatus = statusRoll === 1
							? EStatus.ONLINE
							: EStatus.OFFLINE

						if (newStatus !== status) {
							chats.setUpdateStatus(id, newStatus)
						}
					}

				}
			}, startIntervalTimeRoll)
		}, startTimeoutTimeRoll)
	}

	return { startFakeContactActivity }
}
