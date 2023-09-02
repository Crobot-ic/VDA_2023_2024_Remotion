import { Img, AbsoluteFill, staticFile } from "remotion";
import PromptingText from "./PromptingText";
import "../../styles/css/index.css";

const GeneratingMode: React.FC = () => {
	const qrCode = staticFile("QRCode.png");
	const logo = staticFile("Logo.png");
	const promptingStyles: React.CSSProperties = {
		fontSize: 50, 
		fontWeight: "500", 
		color: "white", 
		margin: "auto"
	};

	return (
		<AbsoluteFill style={{ backgroundColor: "#0e2a47" }}>
			<div className="flex-center">
				<div className="pos-abs top-position">
					<Img src={logo} className="little-img"/>
				</div>

				<PromptingText 
					text=">> Cette vidéo a entièrement été générée avec du code 😉"
					duration="1.2s"
					style={promptingStyles}
				/>

				<div className="pos-abs bottom-position">
					<Img src={qrCode} className="little-img"/>
				</div>
			</div>
		</AbsoluteFill>
	);
}

export default GeneratingMode;