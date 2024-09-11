import { FC, MouseEvent, useState } from 'react'
import { Circle, List, Rectangle, ShapesKeys, Text } from '@app-types'
import { createShape } from '@utils/create-shape'
import { MenuTools } from '@components/menus/tools'
import { CanvasComponent } from '@components/layout/canvas'

import './style.scss'

export const Page: FC = () => {
	const [rectangles, setRectangles] = useState<List<Rectangle>>({})
	const [circles, setCircles] = useState<List<Circle>>({})
	const [texts, setTexts] = useState<List<Text>>({})
	const [canvasPosition, setCanvasPosition] = useState({ x: 0, y: 0 })

	const onClickMenuButton = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()

		/* Достаем ключ фигуры */
		const shapeKey = e.currentTarget.getAttribute('id') as ShapesKeys
		if (!shapeKey) return

		/* Создаем фигуру по ключу */
		createShape({
			canvasPosition: canvasPosition,
			key: shapeKey,
			setCircles: setCircles,
			setRectangles: setRectangles,
			setTexts: setTexts,
		})
	}

	return (
		<div className='page'>
			<MenuTools onClickMenuButton={onClickMenuButton} />
			<CanvasComponent
				rectanglesState={rectangles}
				circlesState={circles}
				textsState={texts}
				onPositionChange={setCanvasPosition}
			/>
		</div>
	)
}
