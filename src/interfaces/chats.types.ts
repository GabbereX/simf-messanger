import { EMessageFlow } from '@consts/message.const'
import { IProfile } from '@interfaces/profile.types'

export interface IChatsContact extends IProfile {
	id: string
	typing: boolean
	messages: Array<any>
}

export interface IMessage {
	messageFlow: EMessageFlow
	messageText: string
	isRead: boolean
	date: IDate
}

export interface IDate {
	fullDate: string
	day: string
	month: string
	year: string
	time: string
}
