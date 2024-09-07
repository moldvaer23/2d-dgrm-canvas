import { Coordinates } from '@app-types'

export interface IShape {
	coordinates: Coordinates
	draw: (ctx: CanvasRenderingContext2D) => void
}

export type ShapeProps = {
	coordinates: Coordinates
}
