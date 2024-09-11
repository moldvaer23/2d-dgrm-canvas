import { FC } from 'react'

type Props = {
	x: number
	y: number
	textColor: string
	text: string
}

const TextComponent: FC<Props> = ({ text, x, y, textColor }) => (
	<text
		x={x}
		y={y}
		textAnchor='middle'
		dominantBaseline='middle'
		style={{ pointerEvents: 'none' }}
		fill={textColor}
	>
		<tspan>{text}</tspan>
	</text>
)

export default TextComponent
