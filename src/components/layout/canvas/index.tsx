import { FC, MouseEvent, useRef, useState } from 'react'

import { CONFIG_CANVAS_PARAMETERS } from '@app-config'
import { Circle, Coordinates, List, Rectangle } from '@app-types'

import CircleComponent from '@components/ui/shapes/circle'
import RectangleComponent from '@components/ui/shapes/rectangle'

import './style.scss'

type Props = {
	rectanglesState: List<Rectangle>
	circlesState: List<Circle>
	onPositionChange: (coordinates: Coordinates) => void
}

export const CanvasComponent: FC<Props> = ({
	rectanglesState,
	circlesState,
	onPositionChange,
}) => {
	const [drag, setDrag] = useState<boolean>(false)
	const [dragShape, setDragShape] = useState<boolean>(false)
	const [dragStart, setDragStart] = useState<Coordinates>({ x: 0, y: 0 })
	const [position, setPosition] = useState<Coordinates>({ x: 0, y: 0 })
	const canvasRef = useRef<SVGSVGElement | null>(null)

	/* Переводим словари в массивы */
	const rectangles = Object.values(rectanglesState)
	const circles = Object.values(circlesState)

	/* Хендлер начала перемещения */
	const handleMouseDown = (e: MouseEvent) => {
		const canvas = canvasRef.current
		if (!canvas) return

		setDrag(true)
		setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
	}

	/* Хендлер перемещения */
	const handleMouseMove = (e: MouseEvent) => {
		if (!drag || dragShape) return
		const { W: canvasWidth, H: canvasHeight } = CONFIG_CANVAS_PARAMETERS
		const { innerWidth: windowWidth, innerHeight: windowHeight } = window

		let newX = e.clientX - dragStart.x
		let newY = e.clientY - dragStart.y

		const minX = -(canvasWidth / 2 - windowWidth / 2)
		const maxX = canvasWidth / 2 - windowWidth / 2
		const minY = -(canvasHeight / 2 - windowHeight / 2)
		const maxY = canvasHeight / 2 - windowHeight / 2

		newX = Math.max(minX, Math.min(newX, maxX))
		newY = Math.max(minY, Math.min(newY, maxY))

		setPosition({ x: newX, y: newY })
		onPositionChange({ x: newX, y: newY })
	}

	/* Хендлер окончания перемещения */
	const handleMouseUp = () => setDrag(false)

	return (
		<div
			className='canvas__wrapper'
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
		>
			<svg
				className='canvas'
				style={{
					position: 'absolute',
					top: `calc(50% + ${position.y}px)`,
					left: `calc(50% + ${position.x}px)`,
					transform: 'translate(-50%, -50%)',
				}}
				id='canvas'
				ref={canvasRef}
				width={CONFIG_CANVAS_PARAMETERS.W}
				height={CONFIG_CANVAS_PARAMETERS.H}
			>
				{rectangles.map((rect) => (
					<RectangleComponent
						key={rect.id}
						setDragShape={setDragShape}
						{...rect}
					/>
				))}

				{circles.map((circle) => (
					<CircleComponent
						key={circle.id}
						setDragShape={setDragShape}
						{...circle}
					/>
				))}
			</svg>
		</div>
	)
}
