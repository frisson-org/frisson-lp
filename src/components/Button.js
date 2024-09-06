import cn from 'classnames';
import { Link } from 'react-router-dom';
import { isHover } from '../helpers/functions';
import { useShowBlock } from '../helpers/ShowBlockContext';

const Button = ( { link, title, dark, svg, isReg } ) => {
	const { setShowBlock } = useShowBlock();

	const clickHandler = ( e ) => {
		window.location.href = '/manager/login'

		if ( ! isHover && isReg ) {
			e.preventDefault();
			setShowBlock( true );
		}
	}

	return (
		<Link
			onClick={ clickHandler }
			className={
				cn(
					'f-button',
					dark ? 'f-button_dark' : ''
				)
			}
		>
			{ svg }
			<span className="f-button__title block">{ title }</span>
		</Link>
	);
}

export default Button;
