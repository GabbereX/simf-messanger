import { IProfile } from '@interfaces/profile.types'

export interface IChatsContact extends IProfile {
	id: string
	messages: Array<any>
}
