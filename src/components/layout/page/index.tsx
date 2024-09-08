import { FC, MouseEvent, useState } from 'react'
import { ShapesKeys, ShapesState } from '@app-types'
import { mockRectangle } from '@utils/mock'
import { createShape } from '@utils/create-shape'
import { MenuTools } from '@components/menus/tools'
import { CanvasComponent } from '@components/layout/canvas'

import style from './style.module.scss'

export const Page: FC = () => {
	const [shapes, setShapes] = useState<ShapesState>(mockRectangle)
	const [canvasPosition, setCanvasPosition] = useState({ x: 0, y: 0 })

	const onClickMenuButton = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()

		/* Достаем ключ фигуры */
		const shapeKey = e.currentTarget.getAttribute('id') as ShapesKeys
		if (!shapeKey) {
			console.error('Неправильный ключ фигуры')
			return
		}

		/* Создаем фигуру по ключу */
		const shape = createShape(shapeKey, canvasPosition)
		setShapes((prev) => ({ ...prev, [shape.id]: shape }))
	}

	return (
		<div className={style.page}>
			<MenuTools onClickMenuButton={onClickMenuButton} />
			<CanvasComponent
				shapesState={shapes}
				onPositionChange={setCanvasPosition}
			/>
		</div>
	)
}
