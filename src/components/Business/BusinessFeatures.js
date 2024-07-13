import imgFeature1 from '../../images/feature-1.svg';
import imgFeature2 from '../../images/feature-2.svg';
import imgFeature3 from '../../images/feature-3.svg';
import BusinessFeature from './BusinessFeature';

const BusinessFeatures = () => {

	const items = [
		{
			id: 'f1',
			image: imgFeature1,
			title: 'Вас найдут те пользователи, которым вы реально интересны',
			description: 'Наше приложение предназначено именно для людей готовых проводить время активно. В нашей экосистеме вы не будете конкурировать с кинотеатрами и смотровыми площадками для зевак.'
		},
		{
			id: 'f2',
			image: imgFeature2,
			title: 'Даём возможность заявить о себе',
			description: 'Добавьте фотографии и видео. Опишите все свои особенности и преимущества.'
		},
		{
			id: 'f3',
			image: imgFeature3,
			title: 'Опишите свои услуги, расскажите про акции и подарки',
			description: 'Предоставляем возможность поработать маркетолагам. Сделайте заманчивое предложение, пользователи это оценят.'
		}
	];

	return (
		<div className="f-business-features">
			<div className="f-business-features__items">
				{
					items.map( ( item ) => (
						<BusinessFeature
							key={ item.id }
							image={ item.image }
							title={ item.title }
							description={ item.description }
						/>
					) )
				}
			</div>
		</div>
	);
}

export default BusinessFeatures;
