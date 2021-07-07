import React, { Fragment, useState } from 'react';
import Navbar from '../../components/Navbar Section/Navbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import { Backdrop } from '../../components/UI/Backdrop.styles';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const sidebarToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Fragment>
			<Backdrop isOpen={isOpen} onClick={sidebarToggle} />
			<SideDrawer isOpen={isOpen} toggle={sidebarToggle} />
			<Navbar toggle={sidebarToggle} isOpen={isOpen} />
		</Fragment>
	);
};

export default Home;
