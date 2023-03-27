import { EMessageFlow, wordsCollection } from '@consts/message.const'
import { IMessage } from '@interfaces/chats.types'
import 'dayjs/locale/ru'
import { getDate } from '@utils/common.utils'

export const getRandomNumber = (min: number, max: number): number =>
	Math.floor(Math.random() * (max - min + 1) + min)

export const getMessage = (wordsCount: number): string => {
	let message = ''

	const maxIndex = wordsCollection.length - 1
	const minIndex = 0

	for (let i = 0; i < wordsCount; i++) {
		const word = wordsCollection[getRandomNumber(minIndex, maxIndex)] || 'пустота'

		message += word + `${ wordsCount === i + 1 ? '.' : ' ' }`
	}

	return message.charAt(0).toUpperCase() + message.slice(1)
}

export const getFakeMessages = (messagesCount: number, dateFirstMessage: string): Array<IMessage> => {
	const messages: Array<IMessage> = []
	let isReadMessage = true
	let addedSecconds = 0

	const date = getDate(dateFirstMessage)

	for (let i = 0; i < messagesCount; i++) {
		const message: IMessage = {
			messageFlow: EMessageFlow.INBOX,
			messageText: '',
			isRead: true,
			date
		}

		// generate fake messageFlow

		if (isReadMessage) {
			const messageFlowRoll = getRandomNumber(1, 3)
			messageFlowRoll === 3 && (message.messageFlow = EMessageFlow.OUTBOX)
		}

		// generate fake messageText

		const wordsCount = getRandomNumber(1, 50)
		message.messageText = getMessage(wordsCount)

		// generate fake isRead

		if (message.messageFlow === EMessageFlow.INBOX) {
			if (isReadMessage) {
				const isReadRoll = getRandomNumber(1, 15)
				if (isReadRoll === 10) {
					message.isRead = false
					isReadMessage = false
				}
			} else message.isRead = false
		}

		// generate fake date

		const waitingRoll = getRandomNumber(10, 300)
		addedSecconds += waitingRoll + Math.round(message.messageText.length / 2)

		message.date = getDate(dateFirstMessage, addedSecconds)

		messages.push(message)
	}

	return messages
}
