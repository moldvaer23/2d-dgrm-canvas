import { Size } from '@app-types'
import { Shape } from '@components/models/shape'
import { RectangleProps } from './types'

export class Rectangle extends Shape {
	protected _size: Size

	constructor(props: RectangleProps) {
		super({
			coordinates: props.coordinates,
			shapeColor: props.shapeColor,
			text: props.text,
			textColor: props.textColor,
		})

		this._size = props.size
	}

	draw(ctx: CanvasRenderingContext2D) {
		const { x, y } = this._coordinates
		const { w, h } = this._size

		/* Отрисовываем прямоугольник */
		ctx.fillStyle = this._shapeColor
		ctx.fillRect(x, y, w, h)

		/* Отрисовываем текст */
		ctx.fillStyle = this._textColor
		ctx.fillText(this._text, x + w / 2, y + h / 2)
	}
}
