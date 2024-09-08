import { Rectangle } from '@components/models/rectangle'

export const mockRectangle: Record<string, Rectangle> = {
	'0': new Rectangle({
		coordinates: {
			x: 500,
			y: 500,
		},
		size: {
			w: 100,
			h: 50,
		},
		text: 'Title',
		shapeColor: 'black',
		textColor: 'white',
	}),
}
