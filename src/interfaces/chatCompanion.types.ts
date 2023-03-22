import { IProfile } from '@interfaces/profile.types'

export interface IchatCompanion extends IProfile {
	id: string
	messages: Array<any>
}
