// import { staticFile } from "remotion";
import { Series } from "remotion";
import { useTime } from "remotion-time";
import GeneratingMode from "./Sequences/GeneratingMode/GenerateMode";
import Accroche from "./Sequences/Accroche/Accroche";

const Main: React.FC = () => {
	const time = useTime();

	return (
		<>
			<Series>
				{/* Créé avec du code */}
				<Series.Sequence 
					durationInFrames={time`4s`}
					name="Créé avec du code"
				>	
					<GeneratingMode />
				</Series.Sequence>

				{/* Accroche */}
				<Series.Sequence 
					durationInFrames={time`14s`}
					name="Accroche"
				>
					<Accroche />
				</Series.Sequence>

				{/* Roulette - Crobot'ic c'est */}
				<Series.Sequence 
					durationInFrames={time`5s`}
					name="Roulette activités"
				>
					<></>
				</Series.Sequence>

				{/* Nos projets */}
				<Series.Sequence 
					durationInFrames={time`25s`}
					name="Nos projets"
				>
					<></>
				</Series.Sequence>

				{/* D'autres projets */}
				<Series.Sequence 
					durationInFrames={time`5s`}
					name="D'autres projets"
				>
					<></>
				</Series.Sequence>

				{/* Roulette - Partie 2 : Des formations */}
				<Series.Sequence 
					durationInFrames={time`5s`}
					name="Des formations - Roulette"
				>
					<></>
				</Series.Sequence>

				{/* Des formations */}
				<Series.Sequence 
					durationInFrames={time`5s`}
					name="Roulette activités"
				>
					<></>
				</Series.Sequence>

				{/* Roulette - Partie 3 : Des événements */}
				<Series.Sequence 
					durationInFrames={time`5s`}
					name="Des événements - Roulette"
				>
					<></>
				</Series.Sequence>

				{/* Des événements */}
				<Series.Sequence 
					durationInFrames={time`10s`}
					name="Des événements"
				>
					<></>
				</Series.Sequence>

				{/* Slide d'information */}
				<Series.Sequence 
					durationInFrames={time`5s`}
					name="Informations"
				>
					<></>
				</Series.Sequence>
			</Series>
		</>
	);
}

export default Main;