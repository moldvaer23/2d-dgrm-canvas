import { Coordinates, Size } from '@app-types'

export interface IShape {
	id: string
	draw: (ctx: CanvasRenderingContext2D) => void
}

export type ShapeProps = {
	coordinates: Coordinates
	size: Size
	shapeColor: string
	textColor: string
	text: string
}
