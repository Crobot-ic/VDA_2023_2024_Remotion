import { Series } from "remotion";
import { useTime } from "remotion-time";
import Souvenirs from "./Sequences/Souvenirs/Souvenirs";

const Test: React.FC = () => {
	const time = useTime();

	return (
		<>
            <Series>
				<Series.Sequence
					durationInFrames={time`3s`}
					name="Des souvenirs"
				>
					<Souvenirs />
				</Series.Sequence>
			</Series>
		</>
	);
}

export default Test;