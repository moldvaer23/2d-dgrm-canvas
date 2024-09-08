import { FC, MouseEvent } from 'react'

import style from './style.module.scss'

type TProps = {
	onClickMenuButton: (e: MouseEvent<HTMLButtonElement>) => void
}

export const MenuTools: FC<TProps> = ({ onClickMenuButton }) => (
	<div className={style.wrapper}>
		<ul>
			<li>
				<button id='rectangle' onClick={onClickMenuButton}>
					Прямоугольник
				</button>
			</li>
			<li>
				<button id='circle' onClick={onClickMenuButton}>
					Круг
				</button>
			</li>
		</ul>
	</div>
)
