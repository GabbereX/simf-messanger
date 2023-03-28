import { cn } from '@bem-react/classname'
import { FC, useEffect, useState } from 'react'

import { ENavigation, toolbarConsts } from '@consts/toolbar.consts'

import './ToolbarNavigation.styles.scss'
import utils from '@store/utils.store'
import chats from '@store/chats.store'
import { observer } from 'mobx-react-lite'

export const ToolbarNavigation: FC = observer(() => {
		const [ isChecked, setIsChecked ] = useState<string>(ENavigation.DIALOGS)
		const { isToolbarFullWidth: fullWidth } = utils

		const styles = cn('Toolbar-Navigation')

		const { chatsContactList, notReadChatCount } = chats

		useEffect(() => {
			let count = 0

			chatsContactList.map(({ messages }) =>
				messages.find(({ isRead }) => !isRead) && (count += 1)
			)

			chats.setNotReadChatCount(count)
		}, [ chatsContactList ])

		return (
			<nav className={ styles() }>
				<ul>
					{
						toolbarConsts.map(({ text, icon }) =>
							<li
								key={ text }
								className={ styles('Item', { checked: text === isChecked }, [ 'transition' ]) }
								onClick={ () => setIsChecked(text) }
							>
								<img
									src={ icon }
									alt={ text }
									className={ styles('Icon') }
								/>
								{
									(notReadChatCount > 0 && text === ENavigation.DIALOGS) && (
										<span className={ styles('Not-Read-Count', { visible: fullWidth }, [ 'transition' ]) }>
											{ notReadChatCount }
										</span>
									)
								}
								<span
									className={ styles('Text', { visible: fullWidth }, [ 'transition' ]) }
								>
								{ text }
							</span>
							</li>
						)
					}
				</ul>
			</nav>
		)
	}
)
