import parse from 'html-react-parser';
import Social from './Social/Social';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Terms = ( { title, content } ) => {

	const { pathname } = useLocation();

	useEffect( () => {
		window.scrollTo( 0, 0 );
	}, [ pathname ] );

	return (
		<section className="f-terms f-outer">
			<div className="f-terms__wrapper f-wrapper">
				<div className="f-terms__inner">
					<div className="f-terms__title-container">
						<h1 className="f-terms__title f-heading-1">{ title && parse( title ) }</h1>
					</div>
					<div className="f-terms__content">
						{ content && parse( content ) }
					</div>
				</div>
				<Social classes="f-social_terms"/>
			</div>
		</section>
	);
}

export default Terms;
