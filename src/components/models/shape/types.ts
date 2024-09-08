import { Coordinates } from '@app-types'

export interface IShape {
	id: string
	draw: (ctx: CanvasRenderingContext2D) => void
}

export type ShapeProps = {
	coordinates: Coordinates
	shapeColor: string
	textColor: string
	text: string
}
