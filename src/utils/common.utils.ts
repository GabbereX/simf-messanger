import { IProfile } from '@interfaces/profile.types'

export const getFullName = ({
	firstName,
	middleName,
	lastName
}: Omit<IProfile, 'avatar'>): string =>
	firstName
	+ (middleName ? ' ' + middleName : '')
	+ (lastName ? ' ' + lastName : '')

export const generateNumber = (countNumber: number): string =>
	Math.random().toString().slice(-countNumber)
