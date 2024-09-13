import { FC } from 'react'

import clsx from 'clsx'
import { ShapeProps, Size } from '@app-types'

import useDraggable from '@hooks/use-draggable'
import useShapeClick from '@hooks/use-shape-click'

import TextComponent from '@components/ui/text'
import HoverTrack from '@components/ui/hovertrack'

type Props = ShapeProps & {
	size: Size
}

const RectangleComponent: FC<Props> = (props) => {
	const {
		id,
		text,
		coordinates,
		shapeColor,
		textColor,
		setDragShape,
		size: { h, w },
	} = props

	const {
		moved,
		handleMouseDown,
		handleMouseMove,
		handleMouseUp,
		actualCoordinates: { x, y },
	} = useDraggable({
		initCoordinates: coordinates,
		onDrag: setDragShape,
	})

	const { onClickShape, stepOne, stepTwo } = useShapeClick({ id, moved })

	return (
		<g
			id={id}
			onClick={onClickShape}
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
				fill={shapeColor}
			/>
			<TextComponent
				x={x + w / 2}
				y={y + h / 2}
				text={text}
				textColor={textColor}
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
