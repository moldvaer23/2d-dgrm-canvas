import { useCallback, useEffect, useState } from 'react'

type Props = {
	id: string
	moved: boolean
}

const useShapeClick = ({ id, moved }: Props) => {
	const [step, setStep] = useState<number>(0)

	/* Метод клика по фигуре */
	const onClickShape = useCallback(() => {
		if (moved) return
		setStep((prevStep) => (prevStep + 1) % 3)
	}, [moved])

	/* Метод для сброса значений шага */
	const resetSteps = useCallback(() => {
		setStep(0)
	}, [])

	/* Если начали двигать фигуру сбрасываем шаги */
	useEffect(() => {
		if (moved) resetSteps()
	}, [moved, resetSteps])

	/* Обработка клика вне фигуры */
	useEffect(() => {
		const handleClickOutside = (event: globalThis.MouseEvent) => {
			const g = document.getElementById(id) as SVGGElement | null
			if (g && !g.contains(event.target as Node)) {
				/* Сбрасываем шаги если клик был сделан вне фигуры */
				resetSteps()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [id, resetSteps])

	return {
		stepOne: step === 1,
		stepTwo: step === 2,
		onClickShape,
	}
}

export default useShapeClick
