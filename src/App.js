import React, { Fragment } from 'react';
import { GlobalStyles } from './gobal.styles';
import Home from './pages/Home/Home';

function App() {
	return (
		<Fragment>
			<GlobalStyles />
			<Home />
		</Fragment>
	);
}

export default App;
