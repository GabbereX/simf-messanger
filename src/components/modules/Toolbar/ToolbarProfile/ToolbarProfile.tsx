import { cn } from '@bem-react/classname'
import { FC } from 'react'

import { getFullName } from '@utils/common.utils'
import { profileFakeData } from '@consts/profile.const'
import { ESize } from '@consts/common.const'

import { Avatar } from '@components/common/Avatar'

import './ToolbarProfile.styles.scss'

interface IProps {
	isFullWidth: boolean
}

export const ToolbarProfile: FC<IProps> = ({ isFullWidth }) => {
	const { avatar } = profileFakeData

	const toolbarProfileClasses = cn('Toolbar-Profile')

	return (
		<div className={ toolbarProfileClasses({ fullWidth: isFullWidth }, [ 'transition' ]) }>
			<Avatar
				src={ avatar }
				alt={ getFullName(profileFakeData) }
				outline
				size={ isFullWidth ? ESize.BIG : ESize.SMALL }
			/>

			<div className={ toolbarProfileClasses('Info', { visible: isFullWidth }, [ 'transition' ]) }>
				<span className={ toolbarProfileClasses('Name') }>
				{ getFullName(profileFakeData) }
				</span>
				<span className={ toolbarProfileClasses('Status') }>
						Online
				</span>
			</div>
		</div>
	)
}
