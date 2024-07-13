import { Link } from 'react-router-dom';

const SocialItem = ( { svg, link } ) => {

	return (
		<Link to={ link } className="f-social__item f-hover flex jcc aic">
			{svg}
		</Link>
	);
}

export default SocialItem;
