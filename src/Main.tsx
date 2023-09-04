import { Audio, staticFile } from "remotion";
import { Series } from "remotion";
import { useTime } from "remotion-time";
import GeneratingMode from "./Sequences/GeneratingMode/GenerateMode";
import Accroche from "./Sequences/Accroche/Accroche";
import ItsCrobo from "./Sequences/ItsCrobo/ItsCrobo";
import InfoAsso from "./Sequences/InfoAssociation/InfoAsso";
import Souvenirs from "./Sequences/Souvenirs/Souvenirs";
import Projects from "./Sequences/ThingsWeMade/Projects";
import Trainings from "./Sequences/ThingsWeMade/Trainings";
import Events from "./Sequences/ThingsWeMade/Events";

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

				{/* Accroche - 18s */}
				<Series.Sequence 
					durationInFrames={time`18s`}
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

				{/* Nos événements - 5s */}
				<Series.Sequence 
					durationInFrames={time`5s`}
					name="Nos événements"
				>
					<Events />
				</Series.Sequence>

				{/* Roulette - Partie 2 : Des formations - 1s */}
				<Series.Sequence 
					durationInFrames={time`1s`}
					name="Des formations - Roulette"
				>
					<ItsCrobo sequenceNumber={1} />
				</Series.Sequence>

				{/* Des formations - 10s */}
				<Series.Sequence 
					durationInFrames={time`10s`}
					name="Des formations"
				>
					<Trainings />
				</Series.Sequence>

				{/* Roulette - Partie 1 : Des projets - 1s */}
				<Series.Sequence 
					durationInFrames={time`1s`}
					name="Des projets - Roulette"
				>
					<ItsCrobo sequenceNumber={2} />
				</Series.Sequence>

				{/* Des projets - 15s */}
				<Series.Sequence 
					durationInFrames={time`15s`}
					name="Des événements"
				>
					<Projects />
				</Series.Sequence>

				{/* Des souvenirs - 5s */}
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