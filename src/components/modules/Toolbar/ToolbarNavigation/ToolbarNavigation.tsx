import { cn } from '@bem-react/classname'
import { FC, useState } from 'react'

import { ENavigation, toolbarNavigation } from '@consts/toolbarNavigation'

import './ToolbarNavigation.styles.scss'

interface IProps {
	isFullWidth: boolean
}

export const ToolbarNavigation: FC<IProps> = ({ isFullWidth }) => {
	const [ isChecked, setIsChecked ] = useState<string>(ENavigation.DIALOGS)

	const classes = cn('Toolbar-Navigation')

	return (
		<nav className={ classes() }>
			<ul>
				{
					toolbarNavigation.map(({ text, icon }) =>
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
								className={ classes('Text', { visible: isFullWidth }, [ 'transition' ]) }
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
