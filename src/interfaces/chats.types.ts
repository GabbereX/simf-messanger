import { IProfile } from '@interfaces/profile.types'
import { EMessageFlow } from '@consts/message.const'

export interface IChatsContact extends IProfile {
	id: string
	typing: boolean
	messages: Array<any>
}

export interface IMessage {
	messageFlow: EMessageFlow
	messageText: string
	isRead: boolean
	date: {
		day: string
		month: {
			MMMM: string
			MM: string
		},
		year: string
		time: string
	}
}
