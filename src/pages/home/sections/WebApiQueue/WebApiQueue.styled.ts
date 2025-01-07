import styled from '@emotion/styled';
import InfoClosed from 'components/CloseIcon/InfoIcon.tsx';

export const WebApiQueue = styled.div`
	// background-color: red;
	flex: 1;
	display: flex;
	justify-content: start;
	gap: 20px;
`;

export const CloseIcon = styled(InfoClosed)`
	position: absolute;
	// background-color: green;
	top: 16px;
	right: 16px;
`;
