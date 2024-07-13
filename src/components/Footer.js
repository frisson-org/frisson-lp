import { getCurrentYear } from '../helpers/functions';
import { NavLink } from 'react-router-dom';

const Footer = () => {

	const clickHandler = () => {
		window.scrollTo( 0, 0 );
	}

	const navLinkClassNames = ( { isActive } ) =>
		[
			'f-footer__nav-link',
			'f-nav-link',
			isActive ? 'f-footer__nav-link_active' : ''
		].join( ' ' );

	return (
		<footer className="f-footer f-outer">
			<div className="f-footer__container flex jcspb aic">
				<div className="f-footer__side_left">
					<p className="f-footer__copyright">© Frisson, { getCurrentYear() }</p>
				</div>
				<div className="f-footer__side_right">
					<nav className="f-footer__nav flex">
						<NavLink
							to="/private-policy"
							onClick={ clickHandler }
							className={ navLinkClassNames }
						>
							Политика обработки данных
						</NavLink>
						<NavLink
							to="/terms-of-use"
							onClick={ clickHandler }
							className={ navLinkClassNames }
						>
							Пользовательское соглашение
						</NavLink>
					</nav>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
