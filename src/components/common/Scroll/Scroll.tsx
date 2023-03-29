import { cn } from '@bem-react/classname'
import { FC, useEffect, useRef } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { observer } from 'mobx-react-lite'

import { EScrollContainer } from '@consts/common.const'

import chats from '@store/chats.store'

import { IPropsWithChildren, Nullable } from '@interfaces/common.types'

import './Scroll.styles.scss'

interface IProps extends IPropsWithChildren {
	container: EScrollContainer
}

export const Scroll: FC<IProps> = observer(({ children, container }) => {
		const styles = cn('Scroll')

		const { chatContactChecked, changeMessagesToggle } = chats

		const ref = useRef<Nullable<Scrollbars>>(null)

		useEffect(() => {
			if (ref.current && container === EScrollContainer.MESSENGER) {
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
