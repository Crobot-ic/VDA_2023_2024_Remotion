import { Audio, staticFile } from "remotion";
import { Series } from "remotion";
import { useTime } from "remotion-time";
import GeneratingMode from "./Sequences/GeneratingMode/GenerateMode";
import Accroche from "./Sequences/Accroche/Accroche";
import ItsCrobo from "./Sequences/ItsCrobo/ItsCrobo";
import InfoAsso from "./Sequences/InfoAssociation/InfoAsso";
import Souvenirs from "./Sequences/Souvenirs/Souvenirs";

const Main: React.FC = () => {
	const time = useTime();
	const bgMusic = staticFile("bgCut.flac");

	return (
		<>
			<Audio src={bgMusic} />
			<Series>
				{/* Créé avec du code - 4s */}
				<Series.Sequence 
					durationInFrames={time`4s`}
					name="Créé avec du code"
				>	
					<GeneratingMode />
				</Series.Sequence>

				{/* Accroche - 13s */}
				<Series.Sequence 
					durationInFrames={time`13s`}
					name="Accroche"
				>
					<Accroche />
				</Series.Sequence>

				{/* Crobot'ic c'est... - 3s */}
				<Series.Sequence 
					durationInFrames={time`3s`}
					name="Crobot'ic c'est - First"
				>
					<ItsCrobo sequenceNumber={0} />
				</Series.Sequence>

				{/* Nos événements - 1s */}
				<Series.Sequence 
					durationInFrames={time`1s`}
					name="Nos projets"
				>
					<></>
				</Series.Sequence>

				{/* Roulette - Partie 2 : Des formations - 1s */}
				<Series.Sequence 
					durationInFrames={time`1s`}
					name="Des formations - Roulette"
				>
					<ItsCrobo sequenceNumber={1} />
				</Series.Sequence>

				{/* Des formations - 1s */}
				<Series.Sequence 
					durationInFrames={time`1s`}
					name="Roulette activités"
				>
					<></>
				</Series.Sequence>

				{/* Roulette - Partie 1 : Des projets - 1s */}
				<Series.Sequence 
					durationInFrames={time`1s`}
					name="Des événements - Roulette"
				>
					<ItsCrobo sequenceNumber={2} />
				</Series.Sequence>

				{/* Des projets - 1s */}
				<Series.Sequence 
					durationInFrames={time`1s`}
					name="Des événements"
				>
					<></>
				</Series.Sequence>

				<Series.Sequence
					durationInFrames={time`5s`}
					name="Des souvenirs"
				>
					<Souvenirs />
				</Series.Sequence>

				{/* Slide d'information - 3s */}
				<Series.Sequence 
					durationInFrames={time`3s`}
					name="Informations"
				>
					<InfoAsso />
				</Series.Sequence>
			</Series>
		</>
	);
}

export default Main;