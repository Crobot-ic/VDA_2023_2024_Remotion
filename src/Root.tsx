import { Composition } from 'remotion';
import { useTimeConfig } from "remotion-time";
import Main from "./Main";
import Test from './Test';

export const RemotionRoot: React.FC = () => {
	const config = useTimeConfig("28s @ 30fps");
	const testConfig = useTimeConfig("3s @ 30fps");

	return (
		<>
			<Composition
				id="VideoAsso"
				component={Main}
				width={1920}
				height={1080}
				{...config}
			/>
			<Composition
				id='test'
				component={Test}
				width={1920}
				height={1080}
				{...testConfig}
			/>
		</>
	);
};
