import Button from '../Button';

const BusinessReg = () => {

	return (
		<div className="f-business-reg">
			<div className="f-business-reg__title-container">
				<h2 className="f-business-reg__title f-heading-1">
					Мы знаем, вы достойны того, чтобы о вас узнало больше людей!
				</h2>
			</div>
			<div className="f-business-reg__description-container">
				<p className="f-business-reg__description f-paragraph">
					Присоединяйтесь к Frisson. Будем активничать вместе.
				</p>
			</div>
			<div className="f-business-reg__button-container flex jcc">
				<Button title="Регистрация" link="/manager/register" isReg/>
			</div>
		</div>
	);
}

export default BusinessReg;
