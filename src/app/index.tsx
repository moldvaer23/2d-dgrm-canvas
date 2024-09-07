import { FC } from 'react'
import style from './style.module.scss'

export const App: FC = () => (
	<div className={style.page}>
		<span>Приложение запущено!</span> <button>Привет!</button>
	</div>
)
