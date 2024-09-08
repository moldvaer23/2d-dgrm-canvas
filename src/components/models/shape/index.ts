import { v4 as uuid } from 'uuid'
import { IShape, ShapeProps } from './types'
import { Coordinates, Size } from '@app-types'

export class Shape implements IShape {
	public id: string

	protected _coordinates: Coordinates
	protected _size: Size

	protected _shapeColor: string
	protected _textColor: string

	protected _textSize = 16
	protected _textFamily = 'Roboto'

	protected _text: string

	constructor(props: ShapeProps) {
		/* Назначаем id для фигуры */
		this.id = uuid()

		/* Координаты */
		this._coordinates = props.coordinates

		/* Параметры */
		this._size = props.size

		/* Цвета */
		this._shapeColor = props.shapeColor
		this._textColor = props.textColor

		/* Текст фигуры */
		this._text = props.text
	}

	/**
	 * Метод для отрисовки фигуры, переопределяется
	 * @param ctx - Контекст 2d Canvas
	 */
	draw(ctx: CanvasRenderingContext2D) {
		void ctx // Переопределяется
	}
}
