import messagesIcon from '@assets/images/icons/messages-icon.svg'
import settingsIcon from '@assets/images/icons/settings-icon.svg'

import { IToolbarNavigation } from '@interfaces/toolbar.types'

export const enum ENavigation {
	DIALOGS = 'диалоги',
	SETTINGS = 'настройки'

}

export const toolbarConsts: Array<IToolbarNavigation> = [
	{
		text: ENavigation.DIALOGS,
		icon: messagesIcon
	},
	{
		text: ENavigation.SETTINGS,
		icon: settingsIcon
	}
]
