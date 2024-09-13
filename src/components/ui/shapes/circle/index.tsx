import { FC } from 'react'

import clsx from 'clsx'
import { ShapeProps } from '@app-types'

import useDraggable from '@hooks/use-draggable'
import useShapeClick from '@hooks/use-shape-click'

import TextComponent from '@components/ui/text'
import HoverTrack from '@components/ui/hovertrack'

type Props = ShapeProps & {
	r: number
}

const CircleComponent: FC<Props> = (props) => {
	const { id, r, text, coordinates, shapeColor, textColor, setDragShape } =
		props

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
			<circle
				className={clsx({ ['highlight']: stepTwo === true })}
				cx={x}
				cy={y}
				r={r}
				fill={shapeColor}
			/>
			<HoverTrack
				visible={stepOne}
				top={{ x: x, y: y - r }}
				right={{ x: x + r, y: y }}
				bottom={{ x: x, y: y + r }}
				left={{ x: x - r, y: y }}
			/>
			<TextComponent x={x} y={y} text={text} textColor={textColor} />
		</g>
	)
}

export default CircleComponent
