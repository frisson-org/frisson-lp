import QR from './QR/QR';
import Social from './Social/Social';
import ImageBlock from './ImageBlock';

const Customer = () => {

	return (
		<section className="f-customer flex fdc fg1">
			<div className="f-customer__title-block f-outer relative">
				<div className="f-customer__title-inner flex fwrap jcc">
					<div className="f-customer__title-side">
						<div className="f-customer__title-container">
							<h1 className="f-customer__title f-heading-1">
								Frisson — это приложение для любителей активного образа жизни
							</h1>
						</div>
						<div className="f-customer__description-container f-paragraph">
							<p>Наши пользователи любят активно провести время. Да, они точно не сидят на диване перед
								телеком.</p>
							<p>Мы создали приложение для тех, кто ищет активный отдых и тех, кто его организует.</p>
						</div>
					</div>

					<div className="f-customer__qr-side">
						<QR/>
					</div>
				</div>
			</div>

			<div className="fg1"></div>

			<ImageBlock/>

			<div className="f-customer__social-block flex jcc">
				<Social/>
			</div>
		</section>
	);
}

export default Customer;
