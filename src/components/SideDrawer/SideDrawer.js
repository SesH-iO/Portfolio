import React from 'react';
import {
	Close,
	CloseIcon,
	SidebarContainer,
	SidebarLink,
	SidebarMenu,
	SidebarWrapper,
} from './SideDrawer.styles';

const SideDrawer = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<CloseIcon onClick={toggle}>
				<Close />
			</CloseIcon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to='home' onClick={toggle}>
						Home
					</SidebarLink>
					<SidebarLink to='about' onClick={toggle}>
						About
					</SidebarLink>
					<SidebarLink to='skills' onClick={toggle}>
						Skills
					</SidebarLink>
					{/* <SidebarLink onClick={toggle}>Services</SidebarLink> */}
					<SidebarLink to='work' onClick={toggle}>
						Portfolio
					</SidebarLink>
					{/* <SidebarLink onClick={toggle}>Testimonials</SidebarLink> */}
					<SidebarLink to='contact' onClick={toggle}>
						Contact
					</SidebarLink>
				</SidebarMenu>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default SideDrawer;
