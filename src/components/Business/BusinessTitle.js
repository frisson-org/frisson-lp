import Button from '../Button';

const BusinessTitle = () => {

	return (
		<div className="f-business-title">
			<div className="f-business-title__title-container">
				<h1 className="f-business-title__title f-heading-1">Ваши целевые клиенты уже в приложении Frisson</h1>
			</div>
			<div className="f-business-title__description-container">
				<p className="f-business-title__description f-paragraph">
					Мы создали комьюнити активных людей внутри одного приложения. Рассказывайте о себе, повышайте
					рейтинг, накапливайте отзывы и следите за успехами своего бизнеса.
				</p>
			</div>
			<div className="f-business-title__buttons-container flex fwrap jcc">
				<Button link="/manager/register" title="Регистрация" isReg/>
				<Button link="/manager/login" title="Вход в кабинет" isReg dark/>
			</div>
		</div>
	);
}

export default BusinessTitle;
