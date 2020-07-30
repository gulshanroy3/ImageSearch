
import React from 'react';
import styled from 'styled-components';
import { createTheme } from './theme';
import Loader from "../Loader"
import "./index.scss"
const SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
};

const StyledButton = styled.button`
	${(props) => props.theme}
	&:hover {
		${(props) => props.theme?.hover ?? ''}
	}
	&:focus {
		${(props) => props.theme?.focus ?? ''}
	}
`;
function Button(props) {
	const {
		theme = {},
		onClick,
		isLoader,
		disabled,
		children,
	} = props;
	let Theme = createTheme(theme);

	return (
		<StyledButton {...props} theme={Theme} onClick={!disabled ? () => onClick() : () => console.log("no")}>
			{isLoader ? <div className='spinner'></div> : children}
		</StyledButton>
	);
}

Button.SIZES = SIZES;
Button.defaultProps = {
	onClick: () => console.log("log"),
	isLoader: false,
	disabled: false,
};

export default Button;
