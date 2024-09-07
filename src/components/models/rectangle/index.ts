import { Shape } from '@components/models/shape'
import { IRectangle, RectangleProps } from './types'
import { Parameters } from '@app-types'

export class Rectangle extends Shape implements IRectangle {
	public parameters: Parameters

	public constructor(props: RectangleProps) {
		super({
			coordinates: props.coordinates,
		})

		this.parameters = props.parameters
	}

	public draw(ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = 'red'
		ctx.fillRect(
			this.coordinates.x,
			this.coordinates.y,
			this.parameters.w,
			this.parameters.h
		)
	}
}
