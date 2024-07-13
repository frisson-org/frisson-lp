import { NavLink } from 'react-router-dom';
import { useShowBlock } from '../helpers/ShowBlockContext';
import LogoSvg from './svg/LogoSvg';
import { isHover } from '../helpers/functions';

const Header = () => {

	const { setShowBlock } = useShowBlock();

	const clickHandler = (e) => {
		if ( ! isHover ) {
			e.preventDefault();
			setShowBlock( true );
		}
	}

	const navLinkClassNames = ( { isActive } ) =>
		[
			'f-header__nav-link',
			'f-nav-link',
			isActive ? 'f-header__nav-link_active' : ''
		].join( ' ' );

	return ( <header className="f-header f-outer">
		<div className="f-header__container flex jcspb">
			<div className="f-header__side f-header__side_left flex aic">
				<NavLink to="/" className="f-header__logo-container img-contain f-hover">
					<LogoSvg/>
				</NavLink>
				<div className="f-header__nav-container">
					<nav className="f-header__nav flex">
						<NavLink
							to="/"
							className={ navLinkClassNames }
						>
							Для пользователя
						</NavLink>
						<NavLink
							to="/business"
							className={ navLinkClassNames }
						>
							Для бизнеса
						</NavLink>
					</nav>
				</div>
			</div>
			<div className="f-header__side f-header__side_right">
				<NavLink
					to="#login"
					onClick={ clickHandler }
					className="f-header__nav-link f-nav-link"
				>
					Вход в кабинет
				</NavLink>
			</div>
		</div>
	</header> );
}

export default Header;
