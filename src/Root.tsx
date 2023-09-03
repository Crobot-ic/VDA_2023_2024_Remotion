import { Composition } from 'remotion';
import { useTimeConfig } from "remotion-time";
import Main from "./Main";

export const RemotionRoot: React.FC = () => {
	const config = useTimeConfig("60s @ 30fps");

	return (
		<>
			<Composition
				id="VideoAsso"
				component={Main}
				width={1920}
				height={1080}
				{...config}
			/>
		</>
	);
};
