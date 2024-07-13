import image from '../images/desktop.svg';
import CloseSvg from './svg/CloseSvg';
import { useShowBlock } from '../helpers/ShowBlockContext';

const TouchBlock = () => {

	const { showBlock, setShowBlock } = useShowBlock();

	if ( ! showBlock ) {
		return null;
	}

	return (
		<div className="f-touch-block flex jcc aic">
			<div className="f-touch-block__container relative">
				<button onClick={ () => setShowBlock( false ) } className="f-touch-block__close absolute">
					<CloseSvg/>
				</button>
				<div className="f-touch-block__image-container img-contain">
					<img src={ image } alt="" className="f-touch-block__image"/>
				</div>
				<div className="f-touch-block__text-container">
					<div className="f-touch-block__title-container">
						<h3 className="f-touch-block__title f-heading-1">
							Личный кабинет доступен только с десктопа
						</h3>
					</div>
					<div className="f-touch-block__description-container f-paragraph">
						<p>
							Мы работаем над тем, чтобы личный кабинет для бизнеса был удобен и на мобильных. Пока
							рекомендуем пользоваться десктопом.
						</p>
						<p>
							Извините за временные неудобства.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TouchBlock;
