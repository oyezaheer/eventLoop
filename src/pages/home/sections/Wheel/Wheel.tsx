// import Pointer from './Pointer/Pointer.tsx';
// import CircleLabels from './CircleLabels/CircleLabels.tsx';
// import { events } from './Wheel.data.ts';
// import * as Styled from './Wheel.styled.ts';
// import { useTheme } from '@emotion/react';
// import InfoIcon from 'components/InfoIcon/InfoIcon.tsx';
// import useBoolean from 'utils/hooks/useBoolean.ts';
// import { BaseLayoutElement } from 'pages/home/Home.styled.ts';
// import { EVENT_LOOP_ID } from 'utils/constants.ts';
// import WheelModal from './Wheel.modal.tsx';
// import { useWheelStore } from 'store/store.ts';

// function Wheel({ className }: { className?: string }) {
// 	const microtask = useWheelStore((state) => state.microtask);
// 	const render = useWheelStore((state) => state.render);
// 	const macrotask = useWheelStore((state) => state.macrotask);
// 	const stops = { microtask, render, macrotask };
// 	const theme = useTheme();
// 	const [isOpened, toggle] = useBoolean(false);

// 	return (
// 		<BaseLayoutElement className={className}>
// 			<p id={EVENT_LOOP_ID}>Event Loop</p>
// 			<Styled.EventLoopBody>
// 				<InfoIcon onClick={toggle} />
// 				<Styled.CircleContainer>
// 					<Styled.CircleOuter />
// 					{events.map(({ degree, type }) => {
// 						const enabled = stops[type] ? 'enabled' : 'disabled';
// 						const background = theme.custom.colors.wheel[type][enabled];
// 						return (
// 							<Styled.Sector
// 								id={`sector-${type}-new`}
// 								key={degree}
// 								background={background}
// 								degree={360 - degree + 10}
// 							/>
// 						);
// 					})}
// 					<Pointer />
// 					<Styled.CircleInner />
// 					<CircleLabels />
// 				</Styled.CircleContainer>
// 				<WheelModal isOpened={isOpened} toggle={toggle} />
// 			</Styled.EventLoopBody>
// 		</BaseLayoutElement>
// 	);
// }

// export default Wheel;
import { BaseLayoutElement } from 'pages/home/Home.styled.ts';
import * as Styled from './Wheel.styled.ts'; // Retaining Styled import for layout purposes
import { Sync } from '@emotion-icons/evaicons-solid/Sync';
import styled from '@emotion/styled';

const RevolvingSymbolContainer = styled.div`
	position: relative;
	width: 200px; /* Increased width */
	height: 200px; /* Increased height */
`;

const RevolvingSymbol = styled(Sync)`
	width: 200px; /* Increased width */
	height: 200px; /* Increased height */
	color: #007bff; /* Replace with your desired color */
	animation: spin 4s linear infinite;

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

const CenterText = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: normal;
	color: rgba(255, 255, 255, 0.87); /* White with 87% opacity */
`;

function Wheel({ className }: { className?: string }) {
	return (
		<BaseLayoutElement className={className}>
			<Styled.EventLoopBody>
				<RevolvingSymbolContainer>
					<RevolvingSymbol />
					<CenterText>Event Loop</CenterText>
				</RevolvingSymbolContainer>
			</Styled.EventLoopBody>
		</BaseLayoutElement>
	);
}

export default Wheel;
