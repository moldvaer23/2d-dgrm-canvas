import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react'
import { Coordinates } from '@app-types'

type Props = {
	initCoordinates: Coordinates
	onDrag: (v: boolean) => void
}

const MAP_SIZE = 24

const useDraggable = ({ initCoordinates, onDrag }: Props) => {
	const [coordinates, setCoordinates] = useState<Coordinates>(initCoordinates)
	const [drag, setDrag] = useState<boolean>(false)
	const [moved, setMoved] = useState<boolean>(false)
	const canvasRect = useRef<DOMRect | null>(null)
	const offset = useRef<Coordinates>({ x: 0, y: 0 })

	useEffect(() => {
		const svgElement = document.getElementById('canvas')
		const updateCanvasRect = () => {
			if (svgElement) {
				canvasRect.current = svgElement.getBoundingClientRect()
			}
		}
		window.addEventListener('resize', updateCanvasRect)
		updateCanvasRect()

		return () => window.removeEventListener('resize', updateCanvasRect)
	}, [])

	const handleMouseDown = useCallback(
		(e: MouseEvent<SVGElement>) => {
			setDrag(true)
			setMoved(false)

			onDrag(true) // Блокируем перемещение по Canvas

			if (canvasRect.current) {
				// Рассчитываем смещение относительно текущих координат элемента
				offset.current = {
					x: e.clientX - canvasRect.current.left - coordinates.x,
					y: e.clientY - canvasRect.current.top - coordinates.y,
				}
			}
		},
		[coordinates]
	)

	const handleMouseMove = useCallback(
		(e: MouseEvent<SVGElement>) => {
			if (!drag || !canvasRect.current) return
			setMoved(true)

			// Рассчитываем текущие координаты мыши относительно Canvas
			const currentX = e.clientX - canvasRect.current.left - offset.current.x
			const currentY = e.clientY - canvasRect.current.top - offset.current.y

			setCoordinates({ x: currentX, y: currentY })
		},
		[drag]
	)

	const handleMouseUp = useCallback((e: MouseEvent<SVGElement>) => {
		if (!canvasRect.current) return

		// Текущие координаты относительно Canvas
		const currentX = e.clientX - canvasRect.current.left - offset.current.x
		const currentY = e.clientY - canvasRect.current.top - offset.current.y

		// Округляем до ближайшей точки сетки 24x24
		const newX = Math.round(currentX / MAP_SIZE) * MAP_SIZE
		const newY = Math.round(currentY / MAP_SIZE) * MAP_SIZE

		setCoordinates({ x: newX, y: newY })
		setDrag(false)
		onDrag(false) // Разблокируем возможность перемещения по Canvas
	}, [])

	return {
		actualCoordinates: coordinates,
		drag,
		moved,
		handleMouseDown,
		handleMouseMove,
		handleMouseUp,
	}
}

export default useDraggable
