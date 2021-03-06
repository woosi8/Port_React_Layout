import styled from "styled-components";

// export : 이 모듈에서 내보내는 여러개 중에 하나다!
export const TealBox = styled.div`
	width: 100px;
	height: 100px;
	background-color: teal;
`;
export const RedBox = styled.div`
	width: 100px;
	height: 100px;
	background-color: red;
`;

export const Container = styled.div`
	width: 500px;
	height: 500px;
	border: 2px solid black;
	padding: 20px;
	box-sizing: border=box;
`;
// mycolor 라는 속성에 색상이 전달될 경우, 이를 적용한다
// 클래스가 아니므로 this는 생략!
// 컴포넌트이므로 속성은 받을 수 있음(props)!
export const ColorBox = styled.div`
	width: 100px;
	height: 100px;
	background-color: ${(props) => props.mycolor};
	width: ${(props) => (props.myWidth === "small" ? 100 : 300)}px;
	color: ${(props) => props.textcolor};
`;
{
	/* <ColorBox mycolor="red" myWidth="small">
	BTN
</ColorBox>; */
}

// 확장 스타일링 , 상속
export const MyBox = styled(ColorBox)`
	border: 1px dotted teal;
`;

// 의사 클래스를 추가하는 방법
// 의사 클래스 추가할 때는 => &:의사클래스
export const Title = styled.h1`
	font-size: 40px;
	color: red;
	&:hover {
		font-size: 60px;
		color: blue;
	}
	&:active {
		color: black;
	}
`;

export const MyText = styled.h1`
	font-size: 40px;
	color: white;
	margin: 0;
	&:hover {
		color: gray;
	}
	&:active {
		font-size: 48px;
	}
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledButton = styled.button`
	padding: 0.375rem 0.75rem;
	border-radius: 0.25rem;
	font-size: 1rem;
	line-height: 1.5;
	border: 1px solid lightgray;
	color: gray;
	backgroud: white;
`;

export function Button({ children }) {
	return <StyledButton>{children}</StyledButton>;
}

export const StyledButton2 = styled.button`
	padding: 0.375rem 0.75rem;
	border-radius: 0.25rem;
	font-size: 1rem;
	line-height: 1.5;
	border: 1px solid lightgray;

	color: ${(props) => props.color || "gray"};
	background: ${(props) => props.background || "white"};
`;

export function Button2({ children, color, background }) {
	return (
		<StyledButton2 color={color} background={background} Î>
			{children}
		</StyledButton2>
	);
}
//사용 예시
{
	/* <Button color="green" background="pink">
  Green Button
</Button>; */
}
