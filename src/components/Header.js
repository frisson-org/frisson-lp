import { NavLink } from 'react-router-dom';
import { useShowBlock } from '../helpers/ShowBlockContext';
import { getCurrentYear, isHover } from '../helpers/functions';
import cn from 'classnames';
import QR from './QR/QR';
import CloseSvg from './svg/CloseSvg';
import MenuSvg from './svg/MenuSvg';
import { useState } from 'react';
import HeaderLogo from './HeaderLogo';

const Header = () => {

	const { setShowBlock }          = useShowBlock();
	const [ menuOpen, setMenuOpen ] = useState( false );

	const loginClickHandler = ( e ) => {
		window.location.pathname = '/manager/login'
		if ( ! isHover ) {
			e.preventDefault();
			setShowBlock( true );
		}
	}

	const menuOpenHandler = () => {

		if ( ! isHover ) {
			setMenuOpen( true );
			document.body.style.position = 'fixed';
		}
	}

	const menuCloseHandler = () => {

		if ( ! isHover ) {
			setMenuOpen( false );
			document.body.style.position = '';
		}
	}

	const navLinkClassNames = ( { isActive }, cl ) =>
		[
			'f-header__nav-link',
			'f-nav-link',
			cl || '',
			isActive ? 'f-header__nav-link_active' : ''
		].join( ' ' );

	return ( <header className={ cn( 'f-header f-outer', menuOpen ? 'f-header_menu' : '' ) }>
		<div className="f-header__container flex jcspb">
			<div className="f-header__side f-header__side_left flex aic">
				<HeaderLogo/>
				<div className="f-header__nav-container">

					<div className="f-header__mobile-header flex aic jcspb">
						<HeaderLogo color="#FFF"/>
						<button
							onClick={ menuCloseHandler }
							className="f-header__mobile-close f-header__nav-link_mobile absolute img-contain"
						>
							<CloseSvg color="#FFF"/>
						</button>
					</div>

					<nav className="f-header__nav flex">
						<NavLink
							to="/"
							onClick={ menuCloseHandler }
							className={ navLinkClassNames }
						>
							Для пользователя
						</NavLink>
						<NavLink
							to="/business"
							onClick={ menuCloseHandler }
							className={ navLinkClassNames }
						>
							Для бизнеса
						</NavLink>
						<NavLink
							to="/private-policy"
							onClick={ menuCloseHandler }
							className={ ( params ) => navLinkClassNames( params, 'f-header__nav-link_mobile' ) }
						>
							Политика обработки данных
						</NavLink>
						<NavLink
							to="/terms-of-use"
							onClick={ menuCloseHandler }
							className={ ( params ) => navLinkClassNames( params, 'f-header__nav-link_mobile' ) }
						>
							Пользовательское соглашение
						</NavLink>
					</nav>

					<div className="f-header__nav-container-mobile">
						<QR menuClose={ menuCloseHandler }/>
						<p className="f-footer__copyright">© Frisson, { getCurrentYear() }</p>
					</div>
				</div>
			</div>
			<div className="f-header__side f-header__side_right">
				<NavLink
					onClick={ loginClickHandler }
					className="f-header__nav-link f-nav-link"
				>
					Вход в кабинет
				</NavLink>

				<button
					onClick={ menuOpenHandler }
					className="f-header__mobile-open img-contain"
				>
					<MenuSvg/>
				</button>
			</div>
		</div>
	</header> );
}

export default Header;
