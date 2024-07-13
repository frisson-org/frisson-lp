import cn from 'classnames';
import imgPhones from '../images/phones.webp';

const ImageBlock = ( { classes } ) => {

	return (
		<div className={ cn( 'f-image-block f-outer flex jcc', classes ) }>
			<div className="f-image-block__image-container img-contain">
				<img src={ imgPhones } alt="" className="f-image-block__image"/>
			</div>
		</div>
	);
}

export default ImageBlock;
