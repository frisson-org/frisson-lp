import { Route, Routes, useLocation } from 'react-router-dom';
import { ShowBlockProvider } from './helpers/ShowBlockContext';
import cn from 'classnames';
import Header from './components/Header';
import Customer from './components/Customer';
import Footer from './components/Footer';
import Business from './components/Business/Business';
import Terms from './components/Terms';
import ErrorPage from './components/ErrorPage';
import TouchBlock from './components/TouchBlock';
import './App.scss';

function App() {
	const { pathname } = useLocation();

	return (
		<ShowBlockProvider>
			<div className={ cn( 'f-site-content', pathname === '/business' ? 'f-site-content_dark' : '' ) }>
				<Header/>
				<main className="f-main flex fdc">
					<Routes>
						<Route path="/business" element={ <Business/> }/>
						<Route
							path="/private-policy"
							element={
								<Terms
									title='Политика обработки данных'
								/>
							}
						/>
						<Route
							path="/terms-of-use"
							element={
								<Terms
									title='Пользовательское соглашение'
								/>
							}
						/>
						<Route path="/" element={ <Customer/> }/>
						<Route path="*" element={ <ErrorPage/> }/>
					</Routes>
				</main>
				<Footer/>

				<TouchBlock/>
			</div>
		</ShowBlockProvider>
	);
}

export default App;
