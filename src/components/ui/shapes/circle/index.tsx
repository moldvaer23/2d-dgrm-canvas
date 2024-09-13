import { FC } from 'react'
import clsx from 'clsx'
import { ShapeProps } from '@app-types'

import useDraggable from '@hooks/use-draggable'
import useShapeClick from '@hooks/use-shape-click'

import TextComponent from '../../text'
import HoverTrack from '../hovertrack'

type Props = ShapeProps & {
	radius: number
}

const CircleComponent: FC<Props> = (props) => {
	const {
		coordinates,
		moved,
		handleMouseDown,
		handleMouseMove,
		handleMouseUp,
	} = useDraggable({
		initCoordinates: props.coordinates,
		onDrag: props.setDragShape,
	})

	const { onClickShape, stepOne, stepTwo } = useShapeClick({
		id: props.id,
		moved: moved,
	})

	const { x, y } = coordinates

	return (
		<g
			onClick={(e) => onClickShape(e, props)}
			id={props.id}
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
		>
			<circle
				className={clsx({
					['highlight']: stepTwo === true,
				})}
				cx={x}
				cy={y}
				r={props.radius}
				fill={props.shapeColor}
			/>
			<TextComponent
				x={x}
				y={y}
				text={props.text}
				textColor={props.textColor}
			/>
			<HoverTrack
				visible={stepOne}
				top={{
					x: x,
					y: y - props.radius,
				}}
				right={{
					x: x + props.radius,
					y: y,
				}}
				bottom={{
					x: x,
					y: y + props.radius,
				}}
				left={{
					x: x - props.radius,
					y: y,
				}}
			/>
		</g>
	)
}

export default CircleComponent
