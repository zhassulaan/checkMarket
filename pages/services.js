import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ServicesModal from '../components/Modals/ServicesModal';
import BasketModal from '../components/Modals/BasketModal';
import SubscribeModal from '../components/Modals/SubscribeModal';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/services.module.css';

export default function Services() {
	// SUBSCRIBE AND BASKET MODAL
	const [subscribeModal, setSubscribeModal] = useState(false);
	const [basketModal, setBasketModal] = useState(false);
	const subscribe = async(ev) => {
		ev.preventDefault();
		setSubscribeModal(!subscribeModal);
	}
	const basket = async(ev) => {
		ev.preventDefault();
		setBasketModal(!basketModal);
	}

	const [openModal, setOpenModal] = useState(false);
	const [serviceType, setServiceType] = useState([
		{ id: 1, text: "Автоматизация розничной торговли" },
		{ id: 2, text: "Автоматизация ресторанного бизнеса" },
		{ id: 3, text: "Доставка расходного материала" },
		{ id: 4, text: "Установка/настройка противокражных систем" },
		{ id: 5, text: "Установка/настройка счётчиков подсчёта посетителей" },
		{ id: 6, text: "Установка и настройка ПО на торговом оборудовании" }
	]);
	const [selectedType, setSelectedType]= useState({ id: 0, text: "" });
	
	const modal = async( ev ) => {
		ev.preventDefault();
		if (!openModal)
			setSelectedType({id: ev.target.id, text: serviceType.find(item => item.id == ev.target.id).text});
		else
			setSelectedType({id: 0, text: ""});
	
		setOpenModal(!openModal);
	}
	
	return (
		<div>
			<Head>
				<title>ЧЕКМАРКЕТ</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
				<link rel="manifest" href="/site.webmanifest"/>
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
				<meta name="msapplication-TileColor" content="#da532c"/>
				<meta name="theme-color" content="#ffffff"/>
			</Head>

			<>
						{ openModal ? <ServicesModal type={ selectedType } close={ modal }/>  : null };
						{ basketModal ? <BasketModal close={ basket }/> : null };
						{ subscribeModal ? <SubscribeModal modal={ subscribe }/> : null };
						
						<Navbar modal={ basket }/>

						<div className={styles.container}>
							<div className={styles.header}>
								<h3 className={styles.title}>Услуги</h3>

								<div className={styles.icons}>
									<img src='/modal/rectangle.svg' alt="rectangle" width={15} height={15} layout='fixed' />
									<img src='/modal/triangle.svg' alt="triangle" width={40} height={15} layout='fixed' />
									<img src='/modal/ellipse.svg' alt="ellipse" width={15} height={15} layout='fixed' />
								</div>

								<p className={styles.subtitle}>Автоматизируем Ваш бизнес от 0 до 100%</p>
							</div>

							<div className={styles.box}>
								<div className={styles.image_content}>
									<div className={styles.button}>
										<h4>ВЫБЕРИТЕ УСЛУГУ</h4>
										<Image src='/services/arrow.svg' alt="open arrow" width={50} height={15} layout='fixed' />
									</div>

									<div className={[styles.image, styles.image1].join(" ")}>
										<Image src='/services/image1.png' alt="image 1" width={360} height={240} layout='fixed' />
										<div id={serviceType[0].id} className={styles.frame} onClick={ modal }></div>
										<h6 className={styles.frame_text}>Автоматизация <br /> розничной торговли</h6>
									</div>
									<div className={[styles.image, styles.image2].join(" ")}>
										<Image src='/services/image2.png' alt="image 2" width={213.22} height={280} layout='fixed' />
										<div id={serviceType[1].id} className={styles.frame} onClick={ modal }></div>
										<h6 className={styles.frame_text}>Автоматизация <br /> ресторанного бизнеса</h6>
									</div>
									<div className={[styles.image, styles.image3].join(" ")}>
										<Image src='/services/image3.png' alt="image 3" width={200} height={130} layout='fixed' />
										<div id={serviceType[2].id} className={styles.frame} onClick={ modal }></div>
										<h6 className={styles.frame_text}>Доставка <br /> расходного материала</h6>
									</div>
									<div className={[styles.image, styles.image4].join(" ")}>
										<Image src='/services/image4.png' alt="image 4" width={190} height={190} layout='fixed' />
										<div id={serviceType[3].id} className={styles.frame} onClick={ modal }></div>
										<h6 className={styles.frame_text}>Установка/настройка противокражных систем</h6>
									</div>
									<div className={[styles.image, styles.image5].join(" ")}>
										<Image src='/services/image5.png' alt="image 5" width={166} height={190} layout='fixed' />
										<div id={serviceType[4].id} className={styles.frame} onClick={ modal }></div>
										<h6 className={styles.frame_text}>Установка/настройка счётчиков подсчёта посетителей</h6>
									</div>
									<div className={[styles.image, styles.image6].join(" ")}>
										<Image src='/services/image6.png' alt="image 6" width={360} height={430} layout='fixed' />
										<div id={serviceType[5].id} className={styles.frame} onClick={ modal }></div>
										<h6 className={styles.frame_text}>Установка и настройка ПО на торговом оборудовании</h6>
									</div>
								</div>

								<div className={styles.text_content}>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
									<br />
									<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
									<br />
								</div>
							</div>
						</div>

						<Footer modal={ subscribe }/>
			</>
		</div>
	);
}