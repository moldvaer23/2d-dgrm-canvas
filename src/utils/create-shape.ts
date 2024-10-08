import { v4 as uuid } from 'uuid'
import { CONFIG_CANVAS_PARAMETERS } from '@app-config'
import {
	Circle,
	Coordinates,
	List,
	Rectangle,
	SetState,
	ShapesKeys,
	Size,
} from '@app-types'

type Props = {
	key: ShapesKeys
	canvasPosition: Coordinates
	setRectangles: SetState<List<Rectangle>>
	setCircles: SetState<List<Circle>>
}

export const createShape = ({
	canvasPosition,
	key,
	setCircles,
	setRectangles,
}: Props) => {
	/* Необходимые данные для вычисления координат */
	const { innerWidth: w, innerHeight: h } = window
	const { W: canvasW, H: canvasH } = CONFIG_CANVAS_PARAMETERS
	const { x: canvasX, y: canvasY } = canvasPosition

	/* Позиция клиента относительно поля */
	const clientOffset = {
		x: canvasW / 2 - canvasX - w / 2,
		y: canvasH / 2 - canvasY - h / 2,
	}

	/* Функция вычисления координат фигуры */
	const calcShapeCoordinates = (shapeSize: Size) => ({
		x: clientOffset.x + w / 2 - shapeSize.w / 2,
		y: clientOffset.y + h / 2 - shapeSize.h / 2,
	})

	switch (key) {
		case 'rectangle': {
			const shapeSize = { w: 96, h: 48 }
			const shape: Rectangle = {
				id: uuid(),
				coordinates: calcShapeCoordinates(shapeSize),
				shapeColor: 'black',
				size: shapeSize,
				text: 'Title',
				textColor: 'white',
			}

			setRectangles((prev) => ({ ...prev, [shape.id]: shape }))
			break
		}
		case 'circle': {
			const radius = 50
			const shapeSize = { w: radius, h: radius }
			const shape: Circle = {
				id: uuid(),
				coordinates: calcShapeCoordinates(shapeSize),
				r: radius,
				shapeColor: 'orange',
				text: 'Title',
				textColor: 'white',
			}

			setCircles((prev) => ({ ...prev, [shape.id]: shape }))
			break
		}
		case 'text': {
			const shapeSize = { w: 96, h: 48 }
			const shape: Rectangle = {
				id: uuid(),
				coordinates: calcShapeCoordinates(shapeSize),
				shapeColor: 'transparent',
				size: shapeSize,
				text: 'Title',
				textColor: 'black',
			}

			setRectangles((prev) => ({ ...prev, [shape.id]: shape }))
			break
		}
	}
}
