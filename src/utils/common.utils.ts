import { IProfile } from '@interfaces/profile.types'

type TFullNameArgs = Pick<IProfile, 'firstName' | 'middleName' | 'lastName'>

export const getFullName = ({
	firstName,
	middleName,
	lastName
}: TFullNameArgs): string =>
	firstName
	+ (middleName ? ' ' + middleName : '')
	+ (lastName ? ' ' + lastName : '')

export const generateNumber = (countNumber: number): string =>
	Math.random().toString().slice(-countNumber)
