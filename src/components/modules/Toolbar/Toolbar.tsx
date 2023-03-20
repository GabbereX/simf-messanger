import { cn } from '@bem-react/classname'
import { FC, useState } from 'react'

import { ToolbarProfile } from './ToolbarProfile'
import { ToolbarNavigation } from './ToolbarNavigation'

import './Toolbar.styles.scss'
import { Icon } from '@components/common/Icon'

export const Toolbar: FC = () => {
	const [ isFullWidth, setIsFullWidth ] = useState<boolean>(false)

	const classes = cn('Toolbar')

	return (
		<div className={ classes({ fullWidth: isFullWidth }, [ 'transition' ]) }>
			<ToolbarProfile isFullWidth={ isFullWidth } />
			<ToolbarNavigation isFullWidth={ isFullWidth } />

			<button
				className={ classes('Button', [ 'transition' ]) }
				onClick={ () => setIsFullWidth(!isFullWidth) }
			>
				<Icon
					className={ classes('Button-Arrow', { rotate: isFullWidth }, [ 'transition' ]) }
					name={ 'arrow_sprite' }
				/>
			</button>


		</div>
	)
}
