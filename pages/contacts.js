import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import MessageModal from '../components/Modals/MessageModal';
import BasketModal from '../components/Modals/BasketModal';
import SubscribeModal from '../components/Modals/SubscribeModal';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import styles from '../styles/contacts.module.css';

export default function Contacts() {
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

			<div>
				{ openModal ? <MessageModal close={ modal } send={ "SEND_MESSAGE" }/>  : null };
				{ basketModal ? <BasketModal close={ basket }/> : null };
				{ subscribeModal ? <SubscribeModal modal={ subscribe }/> : null };

				<Navbar modal={ basket }/>

				<div className={ styles.logo_container }>
					<div className={ styles.logo_box }>
		           		<img src="/home/logo.svg" alt="logo" className={ styles.logo }/>
					</div>
				</div>

				<div className={ styles.container }>
					<h1 className={ styles.title }>Контакты</h1>
					<div className={ [styles.icons, styles.mobile].join(" ") }>
						<Image src='/modal/rectangle.svg' alt='rectangle' width={ 15 } height={ 15 } layout='fixed' />
						<Image src='/modal/triangle.svg' alt='triangle' width={ 40 } height={ 15 } layout='fixed' />
						<Image src='/modal/ellipse.svg' alt='ellipse' width={ 15 } height={ 15 } layout='fixed' />
					</div>
								
					<div className={ styles.content }>
						<div>
							<div className={ styles.header }>
								<Image src='/contacts-icons/map.svg' alt='map icon' width={ 30 } height={ 30 } layout='fixed' />
								<h5>Адрес:</h5>
							</div>
							<p className={styles.text}>Зенкова 59 офис 146, Алматы, Казахстан</p>

							<div className={ styles.header }>
								<Image src='/contacts-icons/phone.svg' alt='phone icon' width={ 30 } height={ 30 } layout='fixed' />
								<h5>Телефон:</h5>
							</div>
							<p className={ styles.text }>+7 (707) 907-07-17</p>

							<div className={ styles.header }>
								<Image src='/contacts-icons/message.svg' alt='message icon' width={ 30 } height={ 30 } layout='fixed' />
								<h5>E-mail:</h5>
							</div>
							<p className={ styles.text }>chek-market@bk.ru</p>

							<div className={ styles.header }>
								<Image src='/contacts-icons/hour.svg' alt='hour icon' width={ 30 } height={ 30 } layout='fixed' />
								<h5>График работы</h5>
							</div>
							<p className={ styles.text }>Пн-Пт | 10:00-18:00</p>
						</div>

						<div className={ styles.box }>
							<div className={ styles.map }>
								<Image src='/contacts-icons/map.png' alt='Almaty map' width={ 700 } height={ 390 } layout='fixed' />
							</div>
						</div>
					</div>

					<ContentFooter>
						<p className='paragraph'>Есть вопросы? Мы с радостью Вам ответим</p>
						<div className='contacts-button' onClick={ modal }>
							<Button text={ "Написать нам" }/>
						</div>
					</ContentFooter>
				</div>
						
				<Footer modal={ subscribe }/>
			</div>
		</div>
	);
}

const ContentFooter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	.paragraph {
		font-size: 22px;
		font-weight: 400;
		margin: 7.5rem 0 2.5rem;
	}

	.contacts-button {
		width: 21.875rem;
		height: 4.375rem;
	}

	@media (max-width: 1220px) {
		.paragraph {
			font-size: 20px;
			margin-top: 6.25rem;
		}

		.contacts-button {
			width: 19.375rem;
			height: 3.75rem;
		}

		.text {
			font-size: 19px;
		}
	}

	@media (max-width: 992px) {
		.paragraph {
			font-size: 18px;
			margin: 3.125rem 0 1.875rem;
		}
	
		.contacts-button {
			width: 15rem;
			height: 3.125rem;
		}

		.text {
			font-size: 17px;
		}
	}

	@media ( max-width: 768px) {
		.paragraph {
			font-size: 16px;
			margin: 2.5rem 0 1.25rem;
		}
	
		.contacts-button {
			width: 12.5rem;
			height: 2.5rem;
		}
		
		.text {
			font-size: 15px;
		}
	}
	
	@media ( max-width: 650px) {
		.paragraph {
			font-size: 15px;
		}
	
		.contacts-button {
			width: 10rem;
		}
		
		.text {
			font-size: 13px;
		}
	}
`