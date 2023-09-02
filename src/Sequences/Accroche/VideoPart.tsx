import { AbsoluteFill, Video, staticFile } from "remotion";
import "../../styles/css/index.css";
import PromptingText from "../GeneratingMode/PromptingText";

type Props = {
    videoFile: string;
    text?: string;
};

const VideoPart : React.FC<Props> = ({ videoFile, text }: Props) => {
    const video = staticFile(videoFile);

    const promptingStyles: React.CSSProperties = {
        textAlign: "center", 
        minWidth: "40vw",
        maxWidth: "80vw",
        padding: "10px 75px",
        fontSize: "3rem", 
        backgroundColor: "#0e2a47", 
        color: "white", 
    }

    return (
        <AbsoluteFill>
            <Video 
                src={video}
                volume={0}
            />
            {text ? <div className="pos-abs flex-center bottom-position" style={{ width: "100vw" }}>
                <PromptingText duration="1s" style={promptingStyles} text={text} />
            </div> : null}
        </AbsoluteFill>
    )
}

export default VideoPart