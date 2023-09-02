import { AbsoluteFill } from "remotion";
import '../../styles/css/index.css';
import { useInterpolate } from "remotion-time";
import getInterpolationValue from "./GetInterpolationValue";

type Props = {
    sequenceNumber: number;
};

const ItsCrobo: React.FC<Props> = ({ sequenceNumber }: Props) => {
    const { timings, transformValue } = getInterpolationValue(sequenceNumber);
    const transformInterpolation = useInterpolate(timings, transformValue);

    const pStyles: React.CSSProperties = {
        display: "flex", 
        gap: 10, 
        fontSize: 45, 
        fontWeight: 600
    }, containerStyles: React.CSSProperties = {
        display: "flex", 
        backgroundColor: "#0e2a47", 
        alignItems: "center", 
        justifyContent: "center", 
        color: "white"
    }, animContainerStyles: React.CSSProperties = {
        display: "flex", 
        flexDirection: "column",
        height: 45, 
        overflow: "hidden"
    }, animContainerSpanStyles: React.CSSProperties = {
        transform: `translateY(${transformInterpolation}%)`
    }

    return (
        <AbsoluteFill  style={containerStyles}>
            <p style={pStyles}>
                Crobot'ic, c'est
                <span style={animContainerStyles}>
                  <span style={animContainerSpanStyles}>des projets</span>
                  <span style={animContainerSpanStyles}>des formations</span>
                  <span style={animContainerSpanStyles}>des événements</span>
                </span>
            </p>       
        </AbsoluteFill>
    )
}

export default ItsCrobo;