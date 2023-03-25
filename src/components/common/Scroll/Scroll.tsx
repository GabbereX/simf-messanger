import { FC } from 'react'

import { Scrollbars } from 'react-custom-scrollbars-2'
import { IPropsWithChildren } from '@interfaces/common.types'
import { cn } from '@bem-react/classname'

import './Scroll.styles.scss'

interface IProps extends IPropsWithChildren {
	container: 'Chats' | 'Messenger'
}

export const Scroll: FC<IProps> = ({ children, container }) => {
	const styles = cn('Scroll')

	return (
		<Scrollbars
			className={ styles('Container-' + container) }
			renderThumbVertical={ props => <div { ...props } className={ styles('Thumb') } /> }
			renderTrackVertical={ props => <div { ...props } className={ styles(`Track-${ container }`) } /> }
			hideTracksWhenNotNeeded
		>
			{ children }
		</Scrollbars>
	)
}
