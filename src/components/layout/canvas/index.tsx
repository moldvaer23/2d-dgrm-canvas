import { FC, MouseEvent, useEffect, useRef, useState } from 'react'

import { Coordinates, ShapesState } from '@app-types'
import { CONFIG_CANVAS_PARAMETERS } from '@app-config'

import style from './style.module.scss'

type TProps = {
	shapesState: ShapesState
	onPositionChange: (position: Coordinates) => void
}

export const CanvasComponent: FC<TProps> = ({
	shapesState,
	onPositionChange,
}) => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const [isDragging, setIsDragging] = useState(false)
	const [position, setPosition] = useState({ x: 0, y: 0 })
	const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

	const shapes = Object.values(shapesState)

	/* Хендлер начала перемещения */
	const handleMouseDown = (e: MouseEvent) => {
		setIsDragging(true)
		setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
	}

	/* Хендлер перемещения */
	const handleMouseMove = (e: MouseEvent) => {
		if (!isDragging || !canvasRef.current) return

		const { width: canvasWidth, height: canvasHeight } = canvasRef.current
		const { innerWidth: windowWidth, innerHeight: windowHeight } = window

		// Вычисляем новое смещение с учетом ограничений
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
	const handleMouseUp = () => setIsDragging(false)

	/* Работа с контекстом Canvas */
	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		/* Отрисовываем все фигуры */
		shapes.forEach((shape) => shape.draw(ctx))
	}, [shapesState])

	return (
		<div
			className={style.wrapper}
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
		>
			<canvas
				style={{
					position: 'absolute',
					top: `calc(50% + ${position.y}px)`,
					left: `calc(50% + ${position.x}px)`,
					transform: 'translate(-50%, -50%)',
				}}
				className={style.canvas}
				ref={canvasRef}
				width={CONFIG_CANVAS_PARAMETERS.W}
				height={CONFIG_CANVAS_PARAMETERS.H}
			/>
		</div>
	)
}
