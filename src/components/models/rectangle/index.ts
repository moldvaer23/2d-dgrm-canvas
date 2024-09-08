import { Shape } from '@components/models/shape'
import { RectangleProps } from './types'

export class Rectangle extends Shape {
	constructor(props: RectangleProps) {
		super(props)
	}

	draw(ctx: CanvasRenderingContext2D) {
		const { x, y } = this._coordinates
		const { w, h } = this._size

		/* Отрисовываем прямоугольник */
		ctx.fillStyle = this._shapeColor
		ctx.fillRect(x, y, w, h)

		/* Отрисовываем текст */
		ctx.fillStyle = this._textColor
		ctx.textAlign = 'center'
		ctx.textBaseline = 'middle'
		ctx.font = `${this._textSize}px ${this._textFamily}`
		ctx.fillText(this._text, x + w / 2, y + h / 2)
	}
}
