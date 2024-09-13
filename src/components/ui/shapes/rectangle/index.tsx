import { FC } from 'react'
import clsx from 'clsx'
import { ShapeProps, Size } from '@app-types'

import useDraggable from '@hooks/use-draggable'
import useShapeClick from '@hooks/use-shape-click'

import TextComponent from '../../text'
import HoverTrack from '../hovertrack'

type Props = ShapeProps & {
	size: Size
}

const RectangleComponent: FC<Props> = (props) => {
	const {
		coordinates,
		handleMouseDown,
		handleMouseMove,
		handleMouseUp,
		moved,
	} = useDraggable({
		initCoordinates: props.coordinates,
		onDrag: props.setDragShape,
	})

	const { onClickShape, stepOne, stepTwo } = useShapeClick({
		id: props.id,
		moved: moved,
	})
	const { x, y } = coordinates
	const { w, h } = props.size

	return (
		<g
			onClick={(e) => onClickShape(e, props)}
			id={props.id}
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
		>
			<rect
				className={clsx({
					['highlight']: stepTwo === true,
				})}
				x={x}
				y={y}
				height={h}
				width={w}
				fill={props.shapeColor}
			/>
			<TextComponent
				x={x + w / 2}
				y={y + h / 2}
				text={props.text}
				textColor={props.textColor}
			/>
			<HoverTrack
				visible={stepOne}
				top={{ x: x + w / 2, y: y }}
				right={{ x: x + w, y: y + h / 2 }}
				bottom={{ x: x + w / 2, y: y + h }}
				left={{ x: x, y: y + h / 2 }}
			/>
		</g>
	)
}

export default RectangleComponent
