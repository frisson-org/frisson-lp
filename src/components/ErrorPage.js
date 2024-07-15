import Button from './Button';

const ErrorPage = () => {

	return (
		<div className="f-error-page f-outer">
			<h1 className="f-error-page__title">404</h1>
			<Button title="На главную" link="/" dark/>
		</div>
	);
}

export default ErrorPage;
