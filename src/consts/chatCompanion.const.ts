import { IchatCompanion } from '@interfaces/chatCompanion.types'
import { generateNumber } from '@utils/common.utils'

import avatar_01 from '@assets/images/avatars/01.webp'
import avatar_02 from '@assets/images/avatars/02.webp'
import avatar_03 from '@assets/images/avatars/03.webp'
import avatar_04 from '@assets/images/avatars/04.webp'
import avatar_05 from '@assets/images/avatars/05.webp'
import avatar_06 from '@assets/images/avatars/06.webp'
import avatar_07 from '@assets/images/avatars/07.webp'
import avatar_08 from '@assets/images/avatars/08.webp'

export const chatInterlocutors: Array<IchatCompanion> = [
	{
		id: generateNumber(5),
		avatar: avatar_01,
		firstName: 'Дмитрий',
		middleName: 'Анатольевич',
		lastName: null,
		messages: []
	},
	{
		id: generateNumber(5),
		avatar: avatar_02,
		firstName: 'Анастасия',
		middleName: 'Александровна',
		lastName: null,
		messages: []
	},
	{
		id: generateNumber(5),
		avatar: avatar_03,
		firstName: 'Диалог',
		middleName: 'М.',
		lastName: null,
		messages: []
	},
	{
		id: generateNumber(5),
		avatar: null,
		firstName: 'Андрей',
		middleName: 'В.',
		lastName: null,
		messages: []
	},
	{
		id: generateNumber(5),
		avatar: null,
		firstName: 'Григорий',
		middleName: 'В.',
		lastName: null,
		messages: []
	},
	{
		id: generateNumber(5),
		avatar: avatar_04,
		firstName: 'Анна',
		middleName: null,
		lastName: null,
		messages: []
	},
	{
		id: generateNumber(5),
		avatar: avatar_05,
		firstName: 'Игорь',
		middleName: null,
		lastName: 'Хоменко',
		messages: []
	},
	{
		id: generateNumber(5),
		avatar: avatar_06,
		firstName: 'Алина',
		middleName: 'Викторовна',
		lastName: null,
		messages: []
	},
	{
		id: generateNumber(5),
		avatar: avatar_07,
		firstName: 'Галина',
		middleName: 'Петровна',
		lastName: null,
		messages: []
	},
	{
		id: generateNumber(5),
		avatar: avatar_08,
		firstName: 'Вова',
		middleName: null,
		lastName: null,
		messages: []
	},
	{
		id: generateNumber(5),
		avatar: null,
		firstName: 'Алексей',
		middleName: null,
		lastName: 'Курочкин',
		messages: []
	}

]
