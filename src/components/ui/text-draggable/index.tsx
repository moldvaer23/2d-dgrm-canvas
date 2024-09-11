import { FC } from 'react'
import { TextProps } from '@app-types'
import useDraggable from '@hooks/useDraggable'

const TextComponentDraggable: FC<TextProps> = (props) => {
	const { coordinates, handleMouseDown, handleMouseMove, handleMouseUp } =
		useDraggable({
			initCoordinates: props.coordinates,
			onDrag: props.setDragShape,
		})

	return (
		<g
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
		>
			<text
				x={coordinates.x}
				y={coordinates.y}
				width={props.size.w}
				height={props.size.h}
				style={{ cursor: 'default' }}
				fill={props.textColor}
			>
				<tspan>{props.text}</tspan>
			</text>
		</g>
	)
}

export default TextComponentDraggable
