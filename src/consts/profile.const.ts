import { IProfile } from '@interfaces/profile.types'

import photo from '@assets/images/avatars/profile-avatar.webp'

// TODO: Возможно стоит перенести в store?
export const profileFakeData: IProfile = {
	avatar: photo,
	firstName: 'Иван',
	middleName: null,
	lastName: 'Иванов'
}
