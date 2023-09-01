// import { staticFile } from "remotion";
import { Series } from "remotion";
import { useTime } from "remotion-time";
import GeneratingMode from "./Sequences/GeneratingMode/GenerateMode";

const Main: React.FC = () => {
	const time = useTime();

	return (
		<>
			<Series>
				<Series.Sequence 
					durationInFrames={time`5s`}
					name="Créé avec du code"
				>	
					<GeneratingMode />
				</Series.Sequence>
			</Series>
		</>
	);
}

export default Main;