import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import { Container } from '../../gobal.styles';

export const Nav = styled.header`
	background-color: transparent; //update color on scroll
	height: 70px;
	position: sticky;
	top: 0;
	z-index: 500;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const NavbarContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 70px;
	width: 100%;
	${Container}
`;

export const LogoContainer = styled.div``;

export const LogoLink = styled(LinkR)`
	font-family: 'Pacifico', cursive;
	font-size: clamp(1.2rem, 2.5vw, 1.8rem);
	font-weight: 700;
	text-decoration: none;
	color: #333;
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	text-align: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled(LinkS)`
	font-size: var(--small-font-size);
	font-weight: 700;
	letter-spacing: 1.4px;
	text-decoration: none;
	text-transform: uppercase;
	text-align: center;
	position: relative;
	cursor: pointer;
	display: inline-block;
	z-index: 1;
	padding: 0 1rem;
	transition: all 0.3s ease-in;

	&:hover {
		color: var(--first-color);
		transition: all 0.3s ease-in;
	}
`;

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: flex;
		font-size: 1.5rem;
		border-radius: 30px;
		cursor: pointer;
		color: #333;
	}
`;

/**
 * & .animation {
		position: absolute;
		height: 100%;
		top: 0;
		z-index: 0;
		background: var(--primary-color);
		width: 100px;
		cursor: pointer;
		border-radius: 30px;
		transition: all 0.5s ease-in 0s;
	}

	& a:nth-child(1) {
		width: 100px;
	}
	& a:nth-child(2) {
		width: 110px;
	}
	& a:nth-child(3) {
		width: 100px;
	}
	& a:nth-child(4) {
		width: 160px;
	}
	& a:nth-child(5) {
		width: 120px;
	}

	& .start-home,
	a:nth-child(1):hover ~ .animation {
		color: var(--color-white);
		width: 100px;
		left: 0;
	}

	& a:nth-child(2):hover ~ .animation {
		color: var(--color-white);
		width: 110px;
		left: 100px;
	}

	& a:nth-child(3):hover ~ .animation {
		color: var(--color-white);
		width: 100px;
		left: 210px;
	}

	& a:nth-child(4):hover ~ .animation {
		color: var(--color-white);
		width: 160px;
		left: 310px;
	}

	& a:nth-child(5):hover ~ .animation {
		color: var(--color-white);
		width: 120px;
		left: 470px;
	}
 */
