import { Rectangle } from '@components/models/rectangle'

/**
 * Тип перечисление видов фигур
 */
export type ShapesVariant = Rectangle

/**
 * Тип хранилища фигур
 */
export type ShapesState = Record<string, ShapesVariant>

/**
 * Тип 2d координат
 */
export type Coordinates = {
	x: number
	y: number
}

/**
 * Тип параметров 2d объекта
 */
export type Parameters = {
	w: number
	h: number
}
