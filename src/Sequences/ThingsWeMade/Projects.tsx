import { Series } from "remotion";
import { useTime } from "remotion-time";
import Thing from "./Thing";

const Projects: React.FC = () => {
    const time = useTime();

    return (
        <Series>
            <Series.Sequence durationInFrames={time`5s`}>
                <Thing 
                    description="Création d'un circuit pour des courses de drone ! 🐦"
                    file="Drone.mp4"
                    name="Projet Falcon"
                />
            </Series.Sequence>

            <Series.Sequence durationInFrames={time`5s`}>
                <Thing 
                    description="Création d'un jeu d'échecs autonome sur commande vocale ! ♟️"
                    file="HarryPotter.mp4"
                    name="Harry Potter Chessboard"
                />
            </Series.Sequence>

            <Series.Sequence durationInFrames={time`5s`}>
                <Thing 
                    description="Franchement, qui n'aime pas les bubble tea ? 🧋"
                    file="BubbleTea.mp4"
                    name="Machine à bubble tea"
                />
            </Series.Sequence>
        </Series>
    )
}

export default Projects;