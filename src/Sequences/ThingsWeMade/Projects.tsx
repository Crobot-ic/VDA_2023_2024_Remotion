import { Series } from "remotion";
import { useTime } from "remotion-time";
import Thing from "./Thing";

const Projects: React.FC = () => {
    const time = useTime();

    return (
        <Series>
            <Series.Sequence durationInFrames={time`5s`}>
                <Thing 
                    description="Partenariat avec Efrei Falcon : Création d'un circuit pour des courses de drone ! 🐦"
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
                    description="Vous aussi vous aimez bien les bubble tea ? Venez nous aider à réaliser une machine pour les automatiser ! 🧋"
                    file="BubbleTea.mp4"
                    name="Machine à bubble tea"
                />
            </Series.Sequence>
        </Series>
    )
}

export default Projects;