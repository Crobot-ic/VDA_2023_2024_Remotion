import { interpolate, useCurrentFrame } from "remotion";
import { useTime } from "remotion-time";
import { RobotoMono } from "../../Common/Fonts";

type Props = {
	text: string;
	style: React.CSSProperties; 
	duration: string;
};	

const PromptingText: React.FC<Props> = ({ text, style, duration }: Props) => {
	const frame = useCurrentFrame();
	const time = useTime();
	const charsShown = interpolate(
		frame, 
		[0, time`${duration}`], 
		[0, text.length]
	);
	const textToShow = text.slice(0, charsShown);
	const unvisibleText = text.slice(charsShown);
	const cursorShown = textToShow.length === text.length ? Math.floor(frame / 10) % 2 === 1 : true;

	const cursorStyles: React.CSSProperties = {
		fontSize: '0.5em',
		paddingLeft: '0.6em',
		fontFamily: RobotoMono,
		opacity: Number(cursorShown),
	};

	return (
		<div style={style}>
			<span>{textToShow}</span>
      		<span style={cursorStyles}>▃</span>
      		<span style={{opacity: 0}}>{unvisibleText}</span>
		</div>
	)
}

export default PromptingText;