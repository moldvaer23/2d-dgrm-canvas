import { Circle } from '@components/models/circle'
import { Rectangle } from '@components/models/rectangle'

/**
 * Тип перечисление видов фигур
 */
export type ShapesVariant = Rectangle | Circle

/**
 * Тип перечисление видов фигур в виде ключей
 */
export type ShapesKeys = 'rectangle' | 'circle'

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
export type Size = {
	w: number
	h: number
}
