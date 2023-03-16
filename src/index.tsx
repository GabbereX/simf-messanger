import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import '@assets/styles/styles.global.scss'

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)

root.render(
	<StrictMode>
		<main className='Main'>
			Hello World
		</main>
	</StrictMode>
)

