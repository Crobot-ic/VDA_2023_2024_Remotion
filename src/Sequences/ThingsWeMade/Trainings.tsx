import { Series } from "remotion";
import { useTime } from "remotion-time";
import Thing from "./Thing";

const Trainings: React.FC = () => {
    const time = useTime();

    return (
        <Series>
            <Series.Sequence durationInFrames={time`5s`}>
                <Thing 
                    description="Apprenez tout en jouant à des énormes bangers !"
                    file="TuringComplete.mp4"
                    name="Jeux ludiques"
                />
            </Series.Sequence>
            <Series.Sequence durationInFrames={time`5s`}>
                <Thing 
                    description="Au moins une séance par semaine garantie !"
                    file="Hebdomadaire.mp4"
                    name="Séances hebdomadaires"
                />
            </Series.Sequence>
        </Series>
    )
}

export default Trainings;