import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';

export const SidebarContainer = styled.aside`
	position: fixed;
	right: 0;
	width: 70%;
	height: 100vh;
	background-color: #fff;
	display: grid;
	align-items: center;
	z-index: 1000;
	opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
	right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
	transition: all 0.3s cubic-bezier(1, 0.01, 0.41, 0.55);
`;

export const CloseIcon = styled.div`
	position: absolute;
	top: 1.5rem;
	right: 1.5rem;
	height: 70px;
	cursor: pointer;
`;

export const Close = styled(FaTimes)`
	font-size: 1.5rem;
	color: #333;
`;

export const SidebarWrapper = styled.div``;

export const SidebarMenu = styled.nav`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(6, 70px);
	text-align: center;
	cursor: pointer;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(6, 50px);
	}
`;

export const SidebarLink = styled(LinkS)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: var(--normal-font-size);
	font-weight: 700;
	letter-spacing: 1.4px;
	transition: all 0.3s ease-in;

	&:hover {
		color: var(--first-color);
		transition: all 0.3s ease-in;
	}
`;
