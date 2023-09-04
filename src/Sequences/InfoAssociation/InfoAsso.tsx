import { AbsoluteFill, Img, staticFile } from "remotion";
import PromptingText from "../GeneratingMode/PromptingText";
import "../../styles/css/index.css";
import { useInterpolate } from "remotion-time";
import { RobotoMono } from "../../Common/Fonts";

const InfoAsso = () => {
    const qrCode = staticFile("QRCode.png");
    const logo = staticFile("Logo.png");

    const timings = ["start", "start + 0.5s", "start + 1.5s"]; 
    const valuesInterpolation = [0, 0, 1];
    const opacity = useInterpolate(timings, valuesInterpolation);

    const promptingStyles: React.CSSProperties = {
        color: "white", 
        fontSize: 70,
        fontFamily: RobotoMono,
        position: "absolute",
        top: 75,
        left: "50%", 
        transform: "translateX(-50%)", 
        fontWeight: 900,
        textTransform: "uppercase",
        textAlign: "center"
    }, imgContainerStyle: React.CSSProperties = {
        opacity: opacity as number, 
        justifyContent: "center", 
        gap: "10vw", 
        position: "absolute",
        left: "50%", 
        display: "flex",
        transform: "translateX(-50%)",
        bottom: 100
    }, imgStyles: React.CSSProperties = {
        width: "400px"
    };

    return (
        <AbsoluteFill style={{ backgroundColor: "#424549" }}>
            <p>
                <PromptingText 
                    duration="1s"
                    style={promptingStyles}
                    text="Convaincus ? Rejoignez-nous ! 😎"
                />
            </p>

            <div style={imgContainerStyle}>
                <Img style={imgStyles} src={logo} />
                <Img style={imgStyles} src={qrCode} />
            </div>
        </AbsoluteFill>
    )
}

export default InfoAsso;