import { Coordinates, Parameters } from '@app-types'

export interface IRectangle {
	parameters: Parameters
}

export type RectangleProps = {
	coordinates: Coordinates
	parameters: Parameters
}
