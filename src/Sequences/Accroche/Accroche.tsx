import { Series } from "remotion";
import { useTime } from "remotion-time";
import Ou from "./Ou";
import BubbleTea from "./BubbleTea";
import HarryPotter from "./HarryPotter";
import WeAreWaitingYou from "./WeAreWaitingYou";

const Accroche: React.FC = () => {
    const time = useTime();

    return (
        <>
            <Series>
                <Series.Sequence 
                    durationInFrames={time`5s`}
                    name="Accroche - Bubble Tea"
                >
                    <BubbleTea />
                </Series.Sequence>
                
                <Series.Sequence 
                    durationInFrames={time`1s`}
                    name="Accroche - Ou"
                >
                    <Ou />
                </Series.Sequence>
                
                <Series.Sequence 
                    durationInFrames={time`5s`}
                    name="Accroche - Harry Potter Chessboard"
                >
                    <HarryPotter />
                </Series.Sequence>

                <Series.Sequence 
                    durationInFrames={time`2s`}
                    name="Crobo t'attend !"
                >
                    <WeAreWaitingYou />
                </Series.Sequence>
            </Series>
        </>
    )
}

export default Accroche;