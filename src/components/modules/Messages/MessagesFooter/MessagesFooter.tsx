import { FC, useState } from 'react'

import './MessagesFooter.styles.scss'
import { cn } from '@bem-react/classname'
import { Input } from '@components/common/Input'

export const MessagesFooter: FC = () => {
	const styles = cn('Messages-Footer')

	const [ value, setValue ] = useState<string>('')

	return (
		<div className={ styles() }>
			<Input
				placeholder='Написать сообщение...'
				value={ value }
				onChange={ (e) => setValue(e.target.value) }
			/>
		</div>
	)
}
