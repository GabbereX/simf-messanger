import { cn } from '@bem-react/classname'
import { FC, useState } from 'react'

import { ENavigation, toolbarNavigationConsts } from '@consts/toolbarNavigation.consts'

import './ToolbarNavigation.styles.scss'
import utils from '@store/utils.store'

export const ToolbarNavigation: FC = () => {
	const [ isChecked, setIsChecked ] = useState<string>(ENavigation.DIALOGS)
	const { isToolbarFullWidth: fullWidth } = utils

	const classes = cn('Toolbar-Navigation')

	return (
		<nav className={ classes() }>
			<ul>
				{
					toolbarNavigationConsts.map(({ text, icon }) =>
						<li
							key={ text }
							className={ classes('Item', { checked: text === isChecked }, [ 'transition' ]) }
							onClick={ () => setIsChecked(text) }
						>
							<img
								src={ icon }
								alt={ text }
								className={ classes('Icon') }
							/>
							<span
								className={ classes('Text', { visible: fullWidth }, [ 'transition' ]) }
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
