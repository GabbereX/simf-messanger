import { cn } from '@bem-react/classname'
import { FC } from 'react'

import { getFullName } from '@utils/common.utils'
import { profileFakeData } from '@consts/profile.const'
import { ESize } from '@consts/common.const'

import { Avatar } from '@components/common/Avatar'

import './ToolbarProfile.styles.scss'
import utils from '@store/utils'

export const ToolbarProfile: FC = () => {
	const { avatar } = profileFakeData
	const { isToolbarFullWidth: fullWidth } = utils

	const toolbarProfileClasses = cn('Toolbar-Profile')

	return (
		<div className={ toolbarProfileClasses({ fullWidth }, [ 'transition' ]) }>
			<Avatar
				src={ avatar }
				alt={ getFullName(profileFakeData) }
				outline
				size={ fullWidth ? ESize.BIG : ESize.SMALL }
			/>

			<div className={ toolbarProfileClasses('Info', { visible: fullWidth }, [ 'transition' ]) }>
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
