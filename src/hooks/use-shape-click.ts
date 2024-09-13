import { Shape } from '@app-types'
import { MouseEvent, useEffect, useState } from 'react'

type Props = {
	id: string
	moved: boolean
}

const useShapeClick = ({ id, moved }: Props) => {
	const [stepOne, setStepOne] = useState<boolean>(false)
	const [stepTwo, setStepTwo] = useState<boolean>(false)

	const onClickShape = (_: MouseEvent<SVGGElement>, data: Shape) => {
		if (moved) return
		void data

		/* Если кликнули один раз то устанавливаем первый шаг */
		if (!stepOne && !stepTwo) {
			setStepOne(true)
			return
		}

		/* Если кликнули второй раз то устанавливаем второй шаг */
		if (stepOne && !stepTwo) {
			setStepOne(false)
			setStepTwo(true)
			return
		}

		/* Если кликнули третий раз то отключаем второй шаг */
		if (stepTwo) {
			setStepTwo(false)
		}
	}

	/* Обработка клика вне фигуры */
	useEffect(() => {
		const handleClickOutside = (event: globalThis.MouseEvent) => {
			if (stepOne || stepTwo) {
				/* Получаем фигуру по её id */
				const g = document.getElementById(id) as SVGGElement | null

				/* Если был клик за пределами фигуры обнуляем промежутки */
				if (g && !g.contains(event.target as Node)) {
					setStepOne(false)
					setStepTwo(false)
				}
			}
		}

		/* Добавляем глобальный обработчик клика */
		document.addEventListener('mousedown', handleClickOutside)

		/* Убираем обработчик при размонтировании компонента */
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [stepOne, stepTwo])

	return {
		stepOne,
		stepTwo,
		onClickShape,
	}
}

export default useShapeClick
