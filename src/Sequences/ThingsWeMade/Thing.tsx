import { AbsoluteFill, Video, staticFile } from "remotion";
import PromptingText from "../GeneratingMode/PromptingText";
import { useInterpolate } from "remotion-time";
import { RobotoMono } from "../../Common/Fonts";

type Props = {
    file: string;
    description: string;
    name: string;
};

const Thing: React.FC<Props> = ({ file, description, name }: Props) => {
    const video = staticFile(file);

    const translateTitleInterpolation = useInterpolate(
        ["start", "start + 0.5s"], 
        [40, 0],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    const videoStyles: React.CSSProperties = {
        height: "70%",
        position: "absolute",
        top: 50, 
        left: "50%", 
        transform: "translateX(-50%)",
        borderWidth: 10, 
        borderColor: "white", 
        borderStyle: "solid", 
        borderRadius: 50
    }, infoContainerStyles: React.CSSProperties = {
        position: "absolute", 
        bottom: 50, 
        display: "flex", 
        flexDirection: "column", 
        width: "100%",
        alignItems: "center"
    }, titleStyles: React.CSSProperties = {
        color: "white", 
        padding: 0, 
        margin: 0,  
        fontSize: 50, 
        fontWeight: 600, 
        fontFamily: RobotoMono,
        transform: `translateY(${translateTitleInterpolation as number}px)`
    }, descriptionStyles: React.CSSProperties = {
        color: "white", 
        fontSize: 40, 
        fontFamily: RobotoMono,
        fontWeight: 500, 
        paddingTop: 20, 
        paddingBottom: 20
    }, hidderTitleStyles: React.CSSProperties = {
        height: 60, 
        overflow: "hidden", 
    };

    return (
        <AbsoluteFill style={{ backgroundColor: "#424549" }}>
            <Video
                style={videoStyles}
                src={video}
                volume={0}
            />
            <div style={infoContainerStyles}>
                <div style={hidderTitleStyles}>
                    <h3 style={titleStyles}>{name}</h3>
                </div>
                <PromptingText 
                    duration="2s"
                    style={descriptionStyles}
                    text={description}
                />
            </div>
        </AbsoluteFill>
    )
}

export default Thing;