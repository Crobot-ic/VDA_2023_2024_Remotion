import { Series } from "remotion";
import { useTime } from "remotion-time";
import VideoPart from "./VideoPart";

const Accroche: React.FC = () => {
    const time = useTime();

    return (
        <>
            <Series>
                <Series.Sequence 
                    durationInFrames={time`5s`}
                    name="Accroche - Bubble Tea"
                >
                    <VideoPart 
                        text="Envie de conquérir ton foie ? 🧋" 
                        videoFile="BubbleTea.mp4"
                    />
                </Series.Sequence>
                
                <Series.Sequence 
                    durationInFrames={time`5s`}
                    name="Accroche - Harry Potter Chessboard"
                >
                    <VideoPart 
                        text="Ou de conquérir tes sagas préférées ? 😍" 
                        videoFile="BubbleTea.mp4"
                    />
                </Series.Sequence>

                <Series.Sequence 
                    durationInFrames={time`3s`}
                    name="Crobo t'attend !"
                >
                    <VideoPart videoFile="Wait.mp4" />
                </Series.Sequence>
            </Series>
        </>
    )
}

export default Accroche;