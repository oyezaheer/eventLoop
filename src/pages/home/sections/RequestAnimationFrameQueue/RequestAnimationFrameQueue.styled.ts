import styled from '@emotion/styled';
import { css } from '@mui/material';
import InfoClosed from 'components/CloseIcon/InfoIcon.tsx';

export const CallbacksQueue = styled.div`
	flex: 1;
	display: flex;
	justify-content: start;
	gap: 20px;
`;

export const Callback = styled.div(
	({ theme }) => css`
		background: ${theme.custom.colors.onContainerNormal};
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 5px;
		max-width: 33.33%;
		padding: 10px;
		word-wrap: break-word;
	`
);

export const CloseIcon = styled(InfoClosed)`
	position: absolute;
	top: 16px;
	right: 16px;
`;
