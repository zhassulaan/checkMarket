import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import MessageModal from '../components/MessageModal';
import styles from '../styles/contacts.module.css';

export default function Contacts() {
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

			{openModal ? 
				<MessageModal modal={ modal }/> 
					:
				<>
					<Navbar/>
					<div className={styles.container}>
						<h1 className={styles.title}>Контакты</h1>

						<div className={styles.content}>
							<div>
								<div className={styles.header}>
									<Image src='/contacts-icons/map.svg' alt="map icon" width={30} height={30} layout='fixed' />
									<h5>Адрес:</h5>
								</div>
								<p className={styles.text}>Зенкова 59 офис 146, Алматы, Казахстан</p>

								<div className={styles.header}>
									<Image src='/contacts-icons/phone.svg' alt="phone icon" width={30} height={30} layout='fixed' />
									<h5>Телефон:</h5>
								</div>
								<p className={styles.text}>+7 (707) 907-07-17</p>

								<div className={styles.header}>
									<Image src='/contacts-icons/message.svg' alt="message icon" width={30} height={30} layout='fixed' />
									<h5>E-mail:</h5>
								</div>
								<p className={styles.text}>chek-market@bk.ru</p>

								<div className={styles.header}>
									<Image src='/contacts-icons/hour.svg' alt="hour icon" width={30} height={30} layout='fixed' />
									<h5>График работы</h5>
								</div>
								<p className={styles.text}>Пн-Пт | 10:00-18:00</p>
							</div>

							<div className={styles.box}>
								<div className={styles.map}>
									<Image src='/contacts-icons/map.png' alt="Almaty map" width={700} height={390} layout='fixed' />
								</div>
							</div>
						</div>

						<div className={styles.footer}>
							<p className={styles.paragraph}>Есть вопросы? Мы с радостью Вам ответим</p>
							<div className={styles.button} onClick={modal}>
								<Button text={"Написать нам"}/>
							</div>
						</div>
					</div>
					<Footer/>
				</>
			}
		</div>
	);
}