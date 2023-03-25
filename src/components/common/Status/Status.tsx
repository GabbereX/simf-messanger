import { cn } from '@bem-react/classname'
import { FC } from 'react'

import { EStatus } from '@consts/common.const'
import './Status.styles.scss'

interface IProps {
	status: EStatus
}

export const Status: FC<IProps> = ({ status }) => {
	const styles = cn('Status')

	return (
		<span className={ styles({ icon: status }) }>
			{ status.charAt(0).toUpperCase() + status.slice(1) }
		</span>
	)
}
