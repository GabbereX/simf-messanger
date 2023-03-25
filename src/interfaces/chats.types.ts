import { IProfile } from '@interfaces/profile.types'

export interface IChatsContact extends IProfile {
	id: string
	typing: boolean
	messages: Array<any>
}
