import { Link } from 'react-router-dom';

const QRItem = ( { qr, store, link, menuClose } ) => {

	return (
		<Link to={ link } onClick={ menuClose } className="f-qr__item">
			<div className="f-qr__code-container img-contain">
				<img src={ qr } alt="" className="f-qr__code"/>
			</div>
			<div className="f-qr__store-container img-contain">
				<img src={ store } alt="" className="f-qr__store"/>
			</div>
		</Link>
	);
}

export default QRItem
