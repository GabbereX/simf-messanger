import { cn } from '@bem-react/classname'
import { FC, Fragment } from 'react'
import dayjs from 'dayjs'
import { observer } from 'mobx-react-lite'

import { month } from '@consts/common.const'

import { IMessage } from '@interfaces/chats.types'

import './MessageContainer.styles.scss'

interface IProps extends IMessage {
	isDataLabel: boolean
}

export const MessageContainer: FC<IProps> = observer(({
		messageText,
		messageFlow,
		date,
		isDataLabel
	}) => {
		const styles = cn('Message-Container')

		const yearNow = dayjs(Date.now()).format('YY')

		return (
			<Fragment>
				{
					isDataLabel && (
						<span className={ styles('Date-Label') }>
							{
								date.day + ' ' + month[date.month]
								+ (yearNow === date.year ? '' : ' ' + date.year)
							}
						</span>
					)
				}
				<div className={ styles({ flow: messageFlow }) }>
					<div>
						{ messageText }
					</div>
					<span className={ styles('Time') }>
				{ date.time }
			</span>
				</div>
			</Fragment>

		)
	}
)
