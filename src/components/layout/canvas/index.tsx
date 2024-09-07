import { FC, useEffect, useRef } from 'react'

export const CanvasComponent: FC = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)

	useEffect(() => {
		const current = canvasRef.current
		if (!current) return

		const ctx = current.getContext('2d')
		if (!ctx) return

		ctx.fillStyle = 'red'
		ctx.fillRect(100, 100, 100, 100)
	}, [])

	return <canvas ref={canvasRef} width={1000} height={1000} />
}
