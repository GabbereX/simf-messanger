import sha256 from 'crypto-js/sha256'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'

import { IProfile } from '@interfaces/profile.types'
import { IDate, IMessage } from '@interfaces/chats.types'

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

export const getDate = (
	dateFirstMessage: string,
	addSeconds: number = 0
): IDate => {
	const date = dayjs(dateFirstMessage).add(addSeconds, 'second').locale('ru')

	const formattedDate = (format: string = 'YY MM DD HH:mm'): Array<string> =>
		date.format(format).split(' ')

	return {
		fullDate: date.format('YY MM DD HH:mm:ss'),
		day: formattedDate()[2],
		month: formattedDate()[1],
		year: formattedDate()[0],
		time: formattedDate()[3]
	}
}

export const compareDate = (
	message: IMessage,
	messagePrevious?: IMessage
): boolean => {
	if (!messagePrevious) return true

	const fullDate = message.date.fullDate.slice(0, -9)
	const fullDatPrevious = messagePrevious.date.fullDate.slice(0, -9)

	return fullDate !== fullDatPrevious
}
