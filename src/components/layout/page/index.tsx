import { FC } from 'react'

import { CanvasComponent } from '@components/layout/canvas'

import style from './style.module.scss'

export const Page: FC = () => {
	return (
		<div className={style.page}>
			<CanvasComponent />
		</div>
	)
}
