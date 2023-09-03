import { AbsoluteFill, Video, staticFile } from "remotion";

type Props = {
    file: string;
    description: string;
    name: string;
};

const Thing: React.FC<Props> = ({ file, description, name }: Props) => {
    const video = staticFile(file);

    return (
        <AbsoluteFill>
            <Video
                src={video}
                volume={0}
            />
        </AbsoluteFill>
    )
}

export default Thing;