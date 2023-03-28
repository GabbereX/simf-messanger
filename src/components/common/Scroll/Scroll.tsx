import { FC, useEffect, useRef } from 'react'

import { Scrollbars } from 'react-custom-scrollbars-2'
import { IPropsWithChildren, Nullable } from '@interfaces/common.types'
import { cn } from '@bem-react/classname'

import './Scroll.styles.scss'
import { observer } from 'mobx-react-lite'
import chats from '@store/chats.store'

interface IProps extends IPropsWithChildren {
	container: 'Chats' | 'Messenger'
}

export const Scroll: FC<IProps> = observer(({ children, container }) => {
		const styles = cn('Scroll')

		const { chatContactChecked, changeMessagesToggle } = chats

		const ref = useRef<Nullable<Scrollbars>>(null)

		useEffect(() => {
			if (ref.current && container === 'Messenger') {
				ref.current.scrollToBottom()
			}

		}, [ ref, chatContactChecked, changeMessagesToggle ])

		return (
			<Scrollbars
				ref={ ref }
				className={ styles('Container-' + container) }
				renderThumbVertical={ props => <div { ...props } className={ styles('Thumb') } /> }
				renderTrackVertical={ props => <div { ...props } className={ styles(`Track-${ container }`) } /> }
				hideTracksWhenNotNeeded
			>
				{ children }
			</Scrollbars>
		)
	}
)
