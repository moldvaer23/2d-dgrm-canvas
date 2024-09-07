import { ShapesState } from '@app-types'
import { FC, useEffect, useRef } from 'react'

type TProps = {
	shapesState: ShapesState
}

export const CanvasComponent: FC<TProps> = ({ shapesState }) => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const shapes = Object.values(shapesState)

	useEffect(() => {
		const current = canvasRef.current
		if (!current) return

		const ctx = current.getContext('2d')
		if (!ctx) return

		/* Отрисовываем все фигуры */
		shapes.map((s) => s.draw(ctx))
	}, [])

	return <canvas ref={canvasRef} width={1000} height={1000} />
}
