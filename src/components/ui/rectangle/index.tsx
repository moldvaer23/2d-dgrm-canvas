import { FC } from 'react'
import { ShapeProps, Size } from '@app-types'
import useDraggable from '@hooks/useDraggable'
import TextComponent from '../text'

type Props = ShapeProps & {
	size: Size
}

const RectangleComponent: FC<Props> = (props) => {
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
			<rect
				x={coordinates.x}
				y={coordinates.y}
				height={props.size.h}
				width={props.size.w}
				fill={props.shapeColor}
			/>
			<TextComponent
				x={coordinates.x + props.size.w / 2}
				y={coordinates.y + props.size.h / 2}
				text={props.text}
				textColor={props.textColor}
			/>
		</g>
	)
}

export default RectangleComponent
