/**
 * Базовый тип для фигур
 */
export type Shape = {
	id: string
	coordinates: Coordinates
	shapeColor: string
	textColor: string
	text: string
}

/**
 * Тип прямоугольника
 */
export type Rectangle = Shape & {
	size: Size
}

/**
 * Тип круга
 */
export type Circle = Shape & {
	radius: number
}

/**
 * Тип пропсов для фигуры
 */
export type ShapeProps = Shape & {
	setDragShape: (v: boolean) => void
}

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

/**
 * Тип перечисление видов фигур
 */
export type ShapesVariant = Rectangle | Circle

/**
 * Тип перечисление видов фигур в виде ключей
 */
export type ShapesKeys = 'rectangle' | 'circle'

/**
 * Тип словаря
 */
export type List<T> = Record<string, T>
