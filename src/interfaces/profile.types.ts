import { Nullable } from './common.types'
import { EStatus } from '@consts/common.const'

export interface IProfile {
	avatar: Nullable<string>
	firstName: string
	middleName: Nullable<string>
	lastName: Nullable<string>
	status: EStatus
}
