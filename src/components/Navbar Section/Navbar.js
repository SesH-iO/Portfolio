import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
	LogoContainer,
	LogoLink,
	MobileIcon,
	Nav,
	NavbarContainer,
	NavItem,
	NavMenu,
} from './Navbar.styles';

const Navbar = ({ isOpen, toggle }) => {
	return (
		<Nav>
			<NavbarContainer>
				<LogoContainer>
					<LogoLink>SesH.iO</LogoLink>
				</LogoContainer>
				<MobileIcon onClick={toggle}>
					<FaBars />
				</MobileIcon>
				<NavMenu>
					<NavItem to='home'>Home</NavItem>
					<NavItem to='about'>About</NavItem>
					<NavItem to='skills'>Skills</NavItem>
					{/* <NavItem>Services</NavItem> */}
					<NavItem to='work'>Portfolio</NavItem>
					{/* <NavItem>Testimonials</NavItem> */}
					<NavItem to='contact'>Contact</NavItem>
					{/* <div className='animation start-home'></div> */}
				</NavMenu>
			</NavbarContainer>
		</Nav>
	);
};

export default Navbar;
