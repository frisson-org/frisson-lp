import LogoSvg from './svg/LogoSvg';
import { NavLink } from 'react-router-dom';

const HeaderLogo = ( { color } ) => {

	return (
		<NavLink to="/" className="f-header__logo-container img-contain f-hover">
			<LogoSvg color={ color }/>
		</NavLink>
	);
}

export default HeaderLogo;
