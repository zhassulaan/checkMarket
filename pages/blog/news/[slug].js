import { useState } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head';
import Image from 'next/image';
import data from '../../../data/news-data';
import Error from '../../_error';
import BasketModal from '../../../components/Modals/BasketModal';
import SubscribeModal from '../../../components/Modals/SubscribeModal';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import styles from '../../../styles/blog.module.css';

export default function SingleBlog() {
	const router = useRouter()
  	const { slug } = router.query

	const success = data.find(item => 
		item.id == slug
	);

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

			{ slug !== undefined ?
				success ? 
					(() => {
						if (basketModal)
							return (
								<BasketModal close={ basket }/> 
							);
						else if (subscribeModal)
							return (
								<SubscribeModal modal={ subscribe }/>
							);
						else
							return (<>
								<Navbar modal={ basket }/>
								
								<div className={styles.container}>
									<div className={styles.box}>
										<div className={styles.title_content}>
											<a href="/blog">
												<Image src='/blog-icons/arrow2.svg' alt="open arrow" width={40} height={10} layout='fixed' />
												<p>Вернуться</p>
											</a>
											<h6>Новости</h6>
											<h3 className={styles.title}>{success.title}</h3>
										</div>
										
										<div className={styles.image_content}>
											<Image src={success.image} alt="blog image" width={660} height={350} layout='fixed' />
											<div className={styles.border}></div>
																		
											<div className={styles.date}>
												<h4>{success.date}</h4>
											</div>
										</div>
									</div>
									<div className={styles.text_content}>
										<h6>Статьи</h6>
										<p className={styles.text}>{success.text1}</p>
										<p className={styles.text}>{success.text2}</p>
									</div>
								</div>

								<Footer modal={ subscribe }/>
							</>);
					})()
						:
					<Error/>
					:
				<></>
			}
		</div>
	);
}