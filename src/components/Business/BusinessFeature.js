const BusinessFeature = ( { image, title, description } ) => {

	return (
		<div className="f-business-feature flex jcspb">
			<div className="f-business-feature__text-container">
				<div className="f-business-feature__title-container">
					<h3 className="f-business-feature__title">{ title }</h3>
				</div>
				<div className="f-business-feature__description-container">
					<p className="f-business-feature__description f-paragraph">{ description }</p>
				</div>
			</div>
			<div className="f-business-feature__image-container img-contain">
				<img className="f-business-feature__image" src={ image } alt={ title }/>
			</div>
		</div>
	);
}

export default BusinessFeature;
