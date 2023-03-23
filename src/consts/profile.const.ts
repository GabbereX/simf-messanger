import { IProfile } from '@interfaces/profile.types'

import photo from '@assets/images/avatars/profile-avatar.webp'

import { EStatus } from '@consts/common.const'

export const profileFakeData: IProfile = {
	avatar: photo,
	firstName: 'Иван',
	middleName: null,
	lastName: 'Иванов',
	status: EStatus.OFFLINE
}
