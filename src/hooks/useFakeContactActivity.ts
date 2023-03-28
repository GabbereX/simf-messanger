import { getRandomNumber } from '@utils/fakeData.utils'
import { EStatus } from '@consts/common.const'
import chats from '@store/chats.store'
import { getCurrentChat } from '@utils/chats.utils'

export const useFakeContactActivity = (id: string) => {
	const startFakeContactActivity = () => {
		const startTimeoutTimeRoll = getRandomNumber(1, 60) * 1000

		setTimeout(() => {
			const startIntervalTimeRoll = getRandomNumber(10, 60) * 1000

			setInterval(() => {
				const { status } = getCurrentChat(chats.chatsContactList, id)

				const contactStatusRoll = getRandomNumber(1, 2)
				const newStatus = contactStatusRoll === 1 ? EStatus.ONLINE : EStatus.OFFLINE

				if (newStatus !== status) {
					chats.setUpdateStatus(id, newStatus)
				}
			}, startIntervalTimeRoll)
		}, startTimeoutTimeRoll)
	}

	return { startFakeContactActivity }
}
