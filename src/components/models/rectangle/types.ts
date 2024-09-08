import { Size } from '@app-types'
import { ShapeProps } from '@components/models/shape/types'

export type RectangleProps = ShapeProps & {
	size: Size
}
