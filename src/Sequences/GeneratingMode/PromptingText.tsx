import { interpolate, useCurrentFrame } from "remotion";
import { useTime } from "remotion-time";

type TypeOptions = {
	text: string;
	style: React.CSSProperties; 
	duration: string;
};	

function PromptingText ({ text, style, duration }: TypeOptions) {
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

	return (
		<div style={style}>
			<span>{textToShow}</span>
      		<span
        		style={{
        		  fontSize: '0.5em',
        		  paddingLeft: '0.6em',
        		  opacity: Number(cursorShown),
        		}}
      			>
        			▃
      		</span>
      		<span style={{opacity: 0}}>{unvisibleText}</span>
		</div>
	)
}

export default PromptingText;