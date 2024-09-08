import { CONFIG_CANVAS_PARAMETERS } from '@app-config'
import { ShapesVariant, ShapesKeys, Coordinates, Size } from '@app-types'
import { Rectangle } from '@components/models/rectangle'

export const createShape = (
	key: ShapesKeys,
	canvasPosition: Coordinates
): ShapesVariant => {
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
			const shapeSize = { w: 100, h: 50 }
			return new Rectangle({
				coordinates: calcShapeCoordinates(shapeSize),
				size: shapeSize,
				shapeColor: 'black',
				textColor: 'white',
				text: 'Title',
			})
		}
	}
}
