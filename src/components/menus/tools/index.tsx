import { FC, MouseEvent } from 'react'

import './style.scss'

type Props = {
	onClickMenuButton: (e: MouseEvent<HTMLButtonElement>) => void
}

export const MenuTools: FC<Props> = ({ onClickMenuButton }) => (
	<div className='menu-tools__wrapper'>
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
