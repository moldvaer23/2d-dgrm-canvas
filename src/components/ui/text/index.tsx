import { FC } from 'react'

type Props = {
	x: number
	y: number
	text: string
	textColor: string
}

const TextComponent: FC<Props> = ({ x, y, text, textColor }) => (
	<text
		x={x}
		y={y}
		fill={textColor}
		style={{ pointerEvents: 'none' }}
		textAnchor='middle'
		dominantBaseline='middle'
	>
		<tspan>{text}</tspan>
	</text>
)

export default TextComponent
