import { IProfile } from '@interfaces/profile.types'

export const getFullName = ({
	firstName,
	middleName,
	lastName
}: IProfile): string =>
	firstName
	+ (middleName ? ' ' + middleName : '')
	+ (lastName ? ' ' + lastName : '')
