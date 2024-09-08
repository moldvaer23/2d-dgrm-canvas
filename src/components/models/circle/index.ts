import { Shape } from '@components/models/shape'
import { CircleProps } from './types'

export class Circle extends Shape {
	protected _radius: number

	constructor(props: CircleProps) {
		super({
			coordinates: props.coordinates,
			shapeColor: props.shapeColor,
			text: props.text,
			textColor: props.textColor,
		})
		this._radius = props.radius
	}

	draw(ctx: CanvasRenderingContext2D): void {
		const { x, y } = this._coordinates
		const r = this._radius

		ctx.beginPath()

		/* Отрисовываем круг */
		ctx.arc(x, y, r, 0, Math.PI * 2)
		ctx.fillStyle = this._shapeColor
		ctx.fill()

		/* Отрисовываем текст */
		ctx.fillStyle = this._textColor
		ctx.textAlign = 'center'
		ctx.textBaseline = 'middle'
		ctx.fillText(this._text, x, y)

		ctx.closePath()
	}
}
