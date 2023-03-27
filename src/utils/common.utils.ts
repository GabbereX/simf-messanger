import sha256 from 'crypto-js/sha256'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'

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

export const getDate = (dateFirstMessage: string, addSeconds: number = 0) => {
	const date = dayjs(dateFirstMessage).add(addSeconds, 'second').locale('ru')

	const formattedDate = (format: string = 'YY MM DD HH:mm'): Array<string> =>
		date.format(format).split(' ')

	return {
		day: formattedDate()[0],
		month: {
			MMMM: formattedDate()[1].charAt(0).toUpperCase() + formattedDate()[1].slice(1),
			MM: formattedDate('YY MMMM DD HH:mm')[1]
		},
		year: formattedDate()[2],
		time: formattedDate()[3]
	}
}
