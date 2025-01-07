import * as Styled from './Home.styled.ts';

export default function Home() {
	return (
		<Styled.Layout>
			<Styled.WideColumn>
				{/* <Styled.Info /> */}
				<Styled.Configurator />
				<Styled.Console />
				
			</Styled.WideColumn>
			<Styled.NarrowColumn>
				<Styled.CallStack />
				<Styled.EventLoop />
			</Styled.NarrowColumn>

			
			<Styled.WideColumn>
			<Styled.WebApiQueue />
				{/* <Styled.RequestAnimationFrameQueue /> */}
				<Styled.TasksQueue />
				<Styled.MicroTasksQueue />
			</Styled.WideColumn>
		</Styled.Layout>
	);
}
