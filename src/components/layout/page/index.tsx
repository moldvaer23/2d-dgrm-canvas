import { FC, useState } from 'react'
import { ShapesState } from '@app-types'

import { CanvasComponent } from '@components/layout/canvas'

import style from './style.module.scss'
import { mockRectangle } from '@utils/mock'

export const Page: FC = () => {
	const [shapes] = useState<ShapesState>(mockRectangle)

	return (
		<div className={style.page}>
			<CanvasComponent shapesState={shapes} />
		</div>
	)
}
