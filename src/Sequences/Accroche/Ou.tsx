import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import "../../styles/css/index.css";

const Ou: React.FC = () => {
	const opacity = interpolate(
		useCurrentFrame(), 
		[0, 30], 
		[0, 1]
	), styles: React.CSSProperties = {
		color: "white", 
		fontSize: 200, 
		fontWeight: "500", 
		textTransform: "uppercase", 
		letterSpacing: 10, 
		opacity
	};

	return (
		<AbsoluteFill style={{ backgroundColor: "#0e2a47" }}>
			<div className="flex-center">
				<p style={styles}>Ou ?</p>
			</div>
		</AbsoluteFill>
	);
}

export default Ou;