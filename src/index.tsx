import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { Toolbar } from '@components/modules/Toolbar'
import { Chats } from '@components/modules/Chats'
import { Messages } from '@components/modules/Messages'

import '@assets/styles/styles.global.scss'

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)

root.render(
	<StrictMode>
		<main className='Main'>
			<Toolbar />
			<Chats />
			<Messages />
		</main>
	</StrictMode>
)

