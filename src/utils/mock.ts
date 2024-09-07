import { Rectangle } from '@components/models/rectangle'

export const mockRectangle: Record<string, Rectangle> = {
	'0': new Rectangle({
		coordinates: { x: 100, y: 100 },
		parameters: { w: 20, h: 20 },
	}),
	'1': new Rectangle({
		coordinates: { x: 200, y: 100 },
		parameters: { w: 20, h: 20 },
	}),
}
