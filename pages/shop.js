import { useState, useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Context } from '../context/Context';
import MessageModal from '../components/Modals/MessageModal';
import BasketModal from '../components/Modals/BasketModal';
import SubscribeModal from '../components/Modals/SubscribeModal';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopProducts from '../components/TopProducts';
import Button from '../components/Button';
import styles from '../styles/shop.module.css';
import styled from 'styled-components';

export default function Shop() {
	const { dispatch } = useContext(Context);
	const router = useRouter();

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
	const modal = async(ev) => {
		ev.preventDefault();
		setOpenModal(!openModal);
	}

	const handleSubmit = async(ev) => {
		ev.preventDefault();
		dispatch({
			type: "SAVE_PAGE",
			payload: ev.target.id
		})
		router.push("/shop/catalog/1");
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
				{ openModal ?<MessageModal close={ modal } send={ "SUBMIT_PRODUCT_APPLICATION" }/>  : null };
				{ basketModal ? <BasketModal close={ basket }/> : null };
				{ subscribeModal ? <SubscribeModal modal={ subscribe }/> : null };

				<Navbar modal={ basket }/>

				<div className={ styles.logo_container }>
					<div className={ styles.logo_box }>
		        		<img src="/home/logo.svg" alt="logo" className={ styles.logo }/>
					</div>
				</div>

				<div className={ styles.container }>
					<div className={ styles.header }>
						<h3 className={ styles.title }>Интернет-магазин</h3>

						<div className={ styles.icons }>
							<img src="/modal/rectangle.svg" alt="rectangle" width={15} height={15} layout="fixed"/>
							<img src="/modal/triangle.svg" alt="triangle" width={40} height={15} layout="fixed"/>
							<img src="/modal/ellipse.svg" alt="ellipse" width={15} height={15} layout="fixed"/>
						</div>

						<p className={ styles.subtitle }>Более сотни позиций для автоматизации вашего бизнеса.</p>
					</div>
									
					<div className={ styles.section_content }>
						<h4 className={ styles.title }>Выберите интересующий Вас раздел</h4>
						<div className={ styles.content }>
							<div className={ styles.image }>
								<div onClick={ handleSubmit }>
									<img id='0' src="/shop/image1.png" alt="Все товары"/>
									<div id='0' className={ styles.frame }></div>
									<div id='0' className={ styles.type_title }>
										<p id='0' className={ [styles.frame_title, styles.frame_title1].join(" ") }>Все товары</p>
										<img id='0' src="/shop/arrow.svg" alt="go arrow"/>
									</div>
								</div>
								<div className={ styles.frame_text }><p>Смотреть полный каталог товаров</p></div>
							</div>

							<div className={ styles.image }>
								<div onClick={ handleSubmit }>
									<img id='1' src="/shop/image2.png" alt="Чековая лента"/>
									<div id='1' className={ styles.frame }></div>
									<div id='1' className={ styles.type_title }>
										<p id='1' className={ [styles.frame_title, styles.frame_title2].join(" ") }>Чековая лента</p>
										<img id='1' src="/shop/arrow.svg" alt="go arrow"/>
									</div>
								</div>
								<div className={ styles.frame_text }><p>Для кассовых аппаратов, пос-терминалов и фискальных регистров</p></div>
							</div>

							<div className={ styles.image }>
								<div onClick={ handleSubmit }>
									<img id='2' src="/shop/image3.png" alt="Термоэтикетки"/>
									<div id='2' className={ styles.frame }></div>
									<div id='2' className={ styles.type_title }>
										<p id='2' className={ [styles.frame_title, styles.frame_title3].join(" ") }>Термоэтикетки</p>
										<img id='2' src="/shop/arrow.svg" alt="go arrow"/>
									</div>
								</div>
								<div className={ styles.frame_text }><p>Самоклеющиеся термоэтикетки термотрансферная этикет-лента</p></div>
							</div>

							<div className={ styles.image }>
								<div onClick={ handleSubmit }>
									<img id='3' src="/shop/image4.png" alt="Счётчики подсчёта посетителей"/>
									<div id='3' className={ styles.frame }></div>
									<div id='3' className={ styles.type_title }>
										<p id='3' className={ [styles.frame_title, styles.frame_title4].join(" ") }>Счётчики подсчёта посетителей</p>
										<img id='3' src="/shop/arrow.svg" alt="go arrow"/>
									</div>
								</div>
								<div className={ styles.frame_text }><p>Товары для статистики и маркетинговых исследований</p></div>
							</div>

							<div className={ styles.image }>
								<div onClick={ handleSubmit }>
									<img id='4' src="/shop/image5.png" alt="Противокражное оборудование"/>
									<div id='4' className={ styles.frame }></div>
									<div id='4' className={ styles.type_title }>
										<p id='4' className={ [styles.frame_title, styles.frame_title5].join(" ") }>Противокражное оборудование</p>
										<img id='4' src="/shop/arrow.svg" alt="go arrow"/>
									</div>
								</div>
								<div className={ styles.frame_text }><p>Антикражные ворота, радиочастотные датчики, антенны, этикетки и тд</p></div>
							</div>

							<div className={ styles.image }>
								<div onClick={ handleSubmit }>
									<img id='5' src="/shop/image6.png" alt="Оборудование для автоматизации"/>
									<div id='5' className={ styles.frame }></div>
									<div id='5' className={ styles.type_title }>
										<p id='5' className={ [styles.frame_title, styles.frame_title6].join(" ") }>Оборудование для автоматизации</p>
										<img id='5' src="/shop/arrow.svg" alt="go arrow"/>
									</div>
								</div>
								<div className={ styles.frame_text }><p>ПО, принтеры этикетов, сканеры, терминалы сбора данных и тд.</p></div>
							</div>
						</div>
					</div>
									
					<Wrapper>
						<p className='text'>Не нашли нужный товар? Свяжитесь с нами и мы уточним наличие</p>
						<div className='request_button' onClick={ modal }>
							<Button text={ "Оставить заявку" }/>
						</div>
					</Wrapper>

					<div className={ styles.topproducts_content }>
						<h3 className={ styles.title }>Топ продаж на сайте</h3>

						<div className={ styles.icons }>
							<img src="/modal/rectangle.svg" alt="rectangle" width={15} height={15} layout="fixed"/>
							<img src="/modal/triangle.svg" alt="triangle" width={40} height={15} layout="fixed"/>
							<img src="/modal/ellipse.svg" alt="ellipse" width={15} height={15} layout="fixed"/>
						</div>

						<TopProducts/>
					</div>
				</div>
								
				<Footer modal={ subscribe }/>
			</>
		</div>
	);
}

const Wrapper = styled.div`
	margin: 8.125rem auto 0;

	.text {
		font-size: 22px;
		font-weight: 400;
		margin-bottom: 2.5rem;
	}

	.request_button {
		width: 15.625rem;
		height: 4.375rem;
		text-align: center;
		margin: auto;
	}

	.request_button .text {
		font-weight: 600;
		margin: 0;
	}

	@media ( max-width: 1440px) {
		margin-top: 7.5rem;
	}

	@media ( max-width: 1220px) {
		margin-top: 6.25rem;
	
		.text {
			font-size: 19px;
			margin-bottom: 1.25rem;
		}
	
		.request_button {
			width: 15rem;
			height: 3.75rem;
		}
	}
	
	@media ( max-width: 992px) {
		width: 88.889vw;
		margin: 5rem auto 0;
	
		.text {
			text-align: center;
			font-size: 17px;
		}
	
		.request_button {
			width: 12.5rem;
			height: 3.125rem;
		}
	}

	@media ( max-width: 768px) {
		margin-top: 3.75rem;
	
		.text {
			font-size: 17px;
		}
	
		.request_button {
			width: 8.75rem;
			height: 2.5rem;
		}
		
		.request_button .text {
			font-size: 15px;
		}
	}
	
	@media ( max-width: 768px) {
		margin-top: 3.75rem;
	
		.text {
			font-size: 15px;
		}
	
		.request_button {
			width: 8.75rem;
		}
		
		.request_button .text {
			font-size: 15px;
		}
	}
`