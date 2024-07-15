import { getCurrentYear } from '../helpers/functions';
import { NavLink } from 'react-router-dom';

const Footer = () => {

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
							className={ navLinkClassNames }
						>
							Политика обработки данных
						</NavLink>
						<NavLink
							to="/terms-of-use"
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
