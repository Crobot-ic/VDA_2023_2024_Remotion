import { AbsoluteFill } from "remotion";
import PromptingText from "./PromptingText";
import "../../styles/basis.css";

const GeneratingMode: React.FC = () => {
	const promptingStyles: React.CSSProperties = {
		fontSize: 50, 
		fontWeight: "500", 
		color: "white", 
		margin: "auto"
	};

	return (
		<AbsoluteFill style={{ backgroundColor: "#0e2a47" }}>
			<div 
				className="flex-center"
			>
				<PromptingText 
					text=">> Toutes les frames de cette vidéo ont été générées avec du code"
					duration="1.2s"
					style={promptingStyles}
				/>
			</div>
		</AbsoluteFill>
	);
}

export default GeneratingMode;