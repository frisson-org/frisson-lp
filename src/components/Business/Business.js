import BusinessTitle from './BusinessTitle';
import BusinessFeatures from './BusinessFeatures';
import BusinessReg from './BusinessReg';
import ImageBlock from '../ImageBlock';
import BusinessHelp from './BusinessHelp';
import Social from '../Social/Social';

const Business = () => {

	return (
		<section className="f-business f-outer">
			<div className="f-business__wrapper f-wrapper">
				<BusinessTitle/>
				<BusinessFeatures/>
				<BusinessReg/>
			</div>
			<ImageBlock classes="f-image-block_business"/>
			<div className="f-business__wrapper f-wrapper">
				<BusinessHelp/>
				<Social classes="f-social_business"/>
			</div>
		</section>
	)
}

export default Business;
