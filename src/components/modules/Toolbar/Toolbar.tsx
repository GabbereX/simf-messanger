import { cn } from '@bem-react/classname'
import { FC } from 'react'
import { observer } from 'mobx-react-lite'

import { ToolbarProfile } from './ToolbarProfile'
import { Icon } from '@components/common/Icon'
import { ToolbarNavigation } from './ToolbarNavigation'

import utils from '@store/utils.store'

import './Toolbar.styles.scss'

export const Toolbar: FC = observer(() => {
		const classes = cn('Toolbar')

		const { isToolbarFullWidth: fullWidth } = utils

		return (
			<div className={ classes({ fullWidth }, [ 'transition' ]) }>
				<ToolbarProfile />
				<ToolbarNavigation />

				<button
					className={ classes('Button', [ 'transition' ]) }
					onClick={ () => utils.setIsToolbarFullWidthToggle() }
				>
					<Icon
						className={ classes('Button-Arrow', { rotate: fullWidth }, [ 'transition' ]) }
						name={ 'arrow_sprite' }
					/>
				</button>
			</div>
		)
	}
)
