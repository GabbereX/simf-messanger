import sha256 from 'crypto-js/sha256'

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

export const getAvatarColor = (initials: string): string => {
	const hashCode = sha256(initials).toString()

	const r = parseInt(hashCode.substring(0, 2), 16)
	const g = parseInt(hashCode.substring(2, 4), 16)
	const b = parseInt(hashCode.substring(4, 6), 16)

	return `rgb(${ r }, ${ g }, ${ b })`
}
