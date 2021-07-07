import styled from 'styled-components';

export const Backdrop = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.6);
	z-index: 888;
	opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
	visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
	/* display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; */
	transition: all 0.3s ease-in;
`;
