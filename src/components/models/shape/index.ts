import { Coordinates } from '@app-types'
import { IShape, ShapeProps } from './types'

export class Shape implements IShape {
	public coordinates: Coordinates

	public constructor(props: ShapeProps) {
		this.coordinates = props.coordinates
	}

	/**
	 * Метод для отрисовки фигуры, переопределяется
	 * @param ctx - Контекст 2d Canvas
	 */
	public draw(ctx: CanvasRenderingContext2D) {
		console.log('Метод Draw', ctx) // Переопределяется
	}
}
