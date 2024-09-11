import { ShapeProps } from '@app-types'
import useDraggable from '@hooks/useDraggable'
import { FC } from 'react'
import TextComponent from '../text'

type Props = ShapeProps & {
	radius: number
}

const CircleComponent: FC<Props> = (props) => {
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
			<circle
				cx={coordinates.x}
				cy={coordinates.y}
				x={coordinates.x}
				y={coordinates.y}
				r={props.radius}
				fill={props.shapeColor}
			/>
			<TextComponent
				x={coordinates.x}
				y={coordinates.y}
				text={props.text}
				textColor={props.textColor}
			/>
		</g>
	)
}

export default CircleComponent
