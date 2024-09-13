import { Coordinates } from '@app-types'
import { FC, SVGAttributes } from 'react'

import './style.scss'

type Props = {
	visible: boolean
	top: Coordinates
	right: Coordinates
	bottom: Coordinates
	left: Coordinates
}

/* Радиус hovertrack-а */
const HOVER_TRACK_R = 10

const HoverTrack: FC<Props> = ({ visible, bottom, left, right, top }) => {
	/* Параметры hovertrack-а */
	const parameters: SVGAttributes<SVGCircleElement> = {
		className: 'hovertrack',
		r: HOVER_TRACK_R,
		opacity: visible ? 1 : 0,
		pointerEvents: visible ? 1 : 0,
	}

	return (
		<>
			<circle cx={top.x} cy={top.y} {...parameters} />
			<circle cx={right.x} cy={right.y} {...parameters} />
			<circle cx={bottom.x} cy={bottom.y} {...parameters} />
			<circle cx={left.x} cy={left.y} {...parameters} />
		</>
	)
}

export default HoverTrack
