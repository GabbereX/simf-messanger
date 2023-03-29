import { EStatus } from '@consts/common.const'
import { Nullable } from './common.types'

export interface IProfile {
	avatar: Nullable<string>
	firstName: string
	middleName: Nullable<string>
	lastName: Nullable<string>
	status: EStatus
}
