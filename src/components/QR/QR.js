import cn from 'classnames';
import appStoreQR from '../../images/1.webp';
import appStore from '../../images/appstore.svg';
import googlePlayQR from '../../images/2.webp';
import googlePlay from '../../images/googleplay.svg';
import QRItem from './QRItem';

const QR = ( { classes, menuClose } ) => {

	return (
		<div className={ cn( 'f-qr', classes ) }>
			<div className="f-qr__items flex fwrap">
				<QRItem qr={ appStoreQR } store={ appStore } link="#" menuClose={ menuClose }/>
				<QRItem qr={ googlePlayQR } store={ googlePlay } link="#" menuClose={ menuClose }/>
			</div>
		</div>
	);
}

export default QR;
