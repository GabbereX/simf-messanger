import { cn } from '@bem-react/classname'
import { FC } from 'react'

import { getFullName } from '@utils/common.utils'
import { profileFakeData } from '@consts/profile.const'
import { ESize } from '@consts/common.const'

import { Avatar } from '@components/common/Avatar'

import './ToolbarProfile.styles.scss'
import utils from '@store/utils.store'
import { Status } from '@components/common/Status'

export const ToolbarProfile: FC = () => {
	const { avatar, status } = profileFakeData
	const { isToolbarFullWidth: fullWidth } = utils

	const styles = cn('Toolbar-Profile')
	const fullName = getFullName(profileFakeData)

	return (
		<div className={ styles({ fullWidth }, [ 'transition' ]) }>
			<Avatar
				src={ avatar }
				alt={ `Аватар ${ fullName }` }
				fullName={ fullName }
				outline
				size={ fullWidth ? ESize.BIG : ESize.SMALL }
			/>

			<div className={ styles('Info', { visible: fullWidth }, [ 'transition' ]) }>
				<span className={ styles('Name') }>
					{ getFullName(profileFakeData) }
				</span>
				<Status status={ status } />
			</div>
		</div>
	)
}
