import Button from '../Button';
import image from '../../images/help-bg.webp';
import MailSvg from '../svg/MailSvg';

const BusinessHelp = () => {

	return (
		<div className="f-business-help relative flex aic">
			<div className="f-business-help__text-container">
				<div className="f-business-help__title-container">
					<h3 className="f-business-help__title f-heading-1">
						Помощь
					</h3>
				</div>
				<div className="f-business-help__description-container f-paragraph">
					<p>
						Это α-версия сервиса. Идёт тестирование, и мы постоянно работаем над улучшением приложения.
					</p>
					<p>
						Если у вас возникли вопросы об условиях сотрудничества, вы заметили сбои в работе приложения,
						просто хотите поделиться советом или респектом — смело пишите нам, мы ценим каждый отзыв.
					</p>
				</div>
				<div className="f-business-help__button-container">
					<Button
						svg={ <MailSvg/> }
						title="contact@frisson.com"
						link="mailto:contact@frisson.com"
					/>
				</div>
			</div>

			<div className="f-business-help__image-container img-contain absolute">
				<img src={ image } alt="" className="f-business-help__image"/>
			</div>
		</div>
	);
}

export default BusinessHelp;
