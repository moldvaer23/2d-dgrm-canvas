import { Coordinates } from '@app-types'
import { FC } from 'react'

import './style.scss'

type Props = {
	visible: boolean
	top: Coordinates
	right: Coordinates
	bottom: Coordinates
	left: Coordinates
}

const HoverTrack: FC<Props> = ({ visible, bottom, left, right, top }) => {
	const opacity = visible ? 1 : 0
	const pointerEvents = visible ? 1 : 0

	return (
		<>
			<circle
				className='hovertrack'
				cx={top.x}
				cy={top.y}
				r={10}
				opacity={opacity}
				pointerEvents={pointerEvents}
			/>
			<circle
				className='hovertrack'
				cx={right.x}
				cy={right.y}
				r={10}
				opacity={opacity}
				pointerEvents={pointerEvents}
			/>
			<circle
				className='hovertrack'
				cx={bottom.x}
				cy={bottom.y}
				r={10}
				opacity={opacity}
				pointerEvents={pointerEvents}
			/>
			<circle
				className='hovertrack'
				cx={left.x}
				cy={left.y}
				r={10}
				opacity={opacity}
				pointerEvents={pointerEvents}
			/>
		</>
	)
}

export default HoverTrack
