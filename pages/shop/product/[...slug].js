import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styled from 'styled-components';
import Error from '../../_error';
import ReturnModal from '../../../components/Modals/ReturnModal';
import DeliveryModal from '../../../components/Modals/DeliveryModal';
import BasketModal from '../../../components/Modals/BasketModal';
import SubscribeModal from '../../../components/Modals/SubscribeModal';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Button from '../../../components/Button';
import data from '../../../data/products-data';

export default function Shop() {
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
	
	const [returnModal, setReturnModal] = useState(false);
	const [deliveryModal, setDeliveryModal] = useState(false);
	const openReturnModal = async(ev) => {
		ev.preventDefault();
		setReturnModal(!returnModal);
	}
	const openDeliveryModal = async(ev) => {
		ev.preventDefault();
		setDeliveryModal(!deliveryModal);
	}

	function price(numb) {
		if (!numb) 
			return numb;

		const numbFmt = new Intl.NumberFormat('ru-RU').format(numb);
		return numbFmt;
	}
	
	const [option, setOption] = useState(1);
	const showCharacteristics = async(ev) => {
		ev.preventDefault();
		setOption(1);
	}
	const showDescription = async(ev) => {
		ev.preventDefault();
		setOption(2);
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
						if (returnModal)
							return (
								<ReturnModal close={ openReturnModal }/>
							);
						else if (deliveryModal) 
							return (
								<DeliveryModal close={ openDeliveryModal }/>
							);
						else if (basketModal)
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

								<Wrapper>
									<div className='content'>
										<div className='image-box'>
											<img src={ success.image.src } alt="blog image" width={370} height={370} layout='fixed' />
										</div>

										<div className='text-box'>
											<h6>{success.name}</h6>

											<div className='icons'>
												<img src='/modal/rectangle.svg' alt="rectangle" width={15} height={15} layout='fixed' />
												<img src='/modal/triangle.svg' alt="triangle" width={40} height={15} layout='fixed' />
												<img src='/modal/ellipse.svg' alt="ellipse" width={15} height={15} layout='fixed' />
											</div>

											<p className={ (success.inStock === true) ? 'product-instock' : 'product-notinstock' }>{ (success.inStock === true) ? "В наличии" : (success.onOrder === true) ? "Под заказ" : "Нет в наличии" }<span> | Оптом и в розницу</span></p>
											<p>Минимальная сумма заказа на сайте — 10000 тг.</p>
												
											<div style={{ display: "flex" }}>
												<p style={{ width: "31.25rem" }}>Возврат товара в течение 14 дней <b>по договоренности</b></p>
												<p className='link button' onClick={ openReturnModal }>Подробнее</p>
											</div>

											<div className='box button' onClick={ openDeliveryModal }>
												<p>Условия оплаты и доставки</p>
											</div>

											{ (success.sale === null) ?
												<div className='price'>
													<h3 className='product-price'>{ price(success.price) } тг</h3>
												</div>
													:
												<div className='price'>
													<h3 className='old-product-price'>{ price(success.price *  (100 - success.sale) / 100) }</h3>
													<h3 className='product-price'>{ price(success.price) } тг.</h3>
												</div>
											}

											<div className='wholesale'>
												<p className='link'>Показать оптовые цены</p>
												<p style={{ color: "var(--clr-primary-1)" }}>{"<"}</p>
												<p style={{ fontWeight: "600", margin: "0 1.25rem 0.625rem" }}>800 тг. / шт.</p>
												<p>при заказе от 600 шт.</p>
											</div>

											{ (success.inStock === false && success.onOrder === false) ?
												<div className='buttons'>
													<div className='nonactive-button'>
														<Button text={ "Недоступно" }/>
													</div>
												</div>
													:
												<div className='buttons'>
													<div className='purchase-button'>
														<Button text={ "Купить" }/>
													</div>
													<div className='basket-button'>
														<Button text={ "В корзину" }/>
													</div>
												</div>
											}	
										</div>

										<a href="/shop/catalog/1" className='back-button'>
											<img src="/shop/arrow2.svg" alt="arrow icon" width={40} height={10} layout='fixed' />
											<p>Вернуться к каталогу</p>
										</a>
											
										<div className='info-box'>
											<div className="info-header">
												<h5 className={ option === 1 ? 'active' : '' } onClick={ showCharacteristics }>Характеристики</h5>
												<h5 className={ option === 2 ? 'active' : '' } onClick={ showDescription }>Описание</h5>
											</div>
												
											{ option === 1 ?
												<ul className='info-menu'>
													<li className='info-item'>
														<p className='characteristic'>Производитель</p>
														<p className='info'>{success.manufacturer}</p>
													</li>
													<li className='info-item'>
														<p className='characteristic'>Страна производитель</p>
														<p className='info'>{success.producingCountry}</p>
													</li>
													<li className='info-item'>
														<p className='characteristic'>Метод печати</p>
														<p className='info'>{success.printMethod}</p>
													</li>
													<li className='info-item'>
														<p className='characteristic'>Тип намотки</p>
														<p className='info'>{success.windingType}</p>
													</li>
												</ul>
													:
												<div className="info-menu">{success.text}</div>
											}
										</div>
									</div>
								</Wrapper>
															
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

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 14.375rem 0 10.625rem;

	.content {
		display: grid;
		gap: 0 2.5rem;
	}

	.image-box {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 28.75rem;
		height: 31.25rem;
		background-color: var(--clr-white);
		border: 1px solid var(--clr-primary-4);
	}

	.text-box {
		width: 41.25rem;
		margin-top: 0.625rem;
	}

	.text-box h6 {
		line-height: 2.5rem;
		font-size: 20px;
		font-weight: 600;
	}

	.icons {
		height: 0.9375rem;
		margin: 0.625rem 0 0.9375rem;
	}

	.text-box p {
		line-height: 1.875rem;
		font-size: 18px;
		margin-bottom: 0.625rem;
	}

	.product-instock,
	.product-notinstock {
		font-weight: 400;
	}
		
	.product-instock {
		color: var(--clr-primary-7);
	}
		
	.product-notinstock {
		color: var(--clr-primary-1);
	}

	.product-instock span,
	.product-notinstock span {
		font-weight: 300;
		color: var(--clr-black);
	}

	.link  {
		text-decoration: underline;
	}

	.box {
		width: 16.25rem;
		height: 3.125rem;
		border: 1px dashed var(--clr-black);
		margin: 0.625rem 0 1.875rem;
	}

	.box p {
		text-align: center;
		margin-top: 0.625rem;
	}

	.price {
		position: relative;
		display: flex;
		gap: 1.25rem;
		padding-top: 1.25rem;
		margin-bottom: 0.625rem;
	}

	.price:before {
		content: "";
		top: 0;
		position: absolute;
		width: 100%;
		height: 1px;
		background-color: var(--clr-primary-4);
	}

	.old-product-price,
	.product-price {
		line-height: 3.75rem;
	}

	.old-product-price {
		text-decoration-line: line-through;
		text-decoration-color: var(--clr-primary-1);
		color: var(--clr-primary-4);
	}

	.wholesale {
		display: flex;
		align-items: center;
	}

	.wholesale .link {
		margin-right: 0.3125rem;
	}

	.buttons {
		display: flex;
		width: 35rem;
		gap: 2.5rem;
		margin-top: 0.625rem;
	}

	.purchase-button,
	.basket-button,
	.nonactive-button .button {
		width: 16.25rem;
		height: 3.75rem;
	}

	.purchase-button p,
	.basket-button p,
	.nonactive-button p {
		font-size: 20px;
		font-weight: 700;
		margin: 0;
	}

	.basket-button .button {
		background-color: transparent;
		border: 1px solid var(--clr-primary-1);
	}

	.basket-button .text {
		color: var(--clr-primary-1);
	}

	.nonactive-button .button {
		background-color: var(--clr-primary-4);
	}

	.back-button,
	.info-box {
		grid-column-start: 1;
		grid-column-end: 3;
	}

	.back-button {
		display: flex;
		align-items: center;
		width: 100%;
		gap: 0.625rem;
		margin: 1.875rem 0 6.75rem
	 }

	.back-button p {
		font-size: 18px;
	}

	.info-header {
		display: flex;
		gap: 2.5rem;
	}

	.info-header h5 {
		line-height: 2.5rem;
		font-size: 22px;
		font-weight: 600;
		padding-bottom: 0.3125rem;
	}
	
	.info-header .active {
		position: relative;
	}

	.info-header .active:before {
		content: "";
		position: absolute;
		width: 100%;
		height: 3px;
		bottom: 0;
		background-color: var(--clr-primary-1);
	}

	.info-menu {
		width: 47.5rem;
		margin-top: 3.4375rem;
	}

	.info-menu p {
		line-height: 1.6749rem;
		font-size: 18px;
	}
	
	.info-item {
		display: flex;
		gap: 5.625rem;
		margin-top: 1.25rem;
	}

	.info-item p {
		line-height: 1.875rem;
		width: 13.125rem;
	}

	.characteristic {
		font-weight: 400;
	}

	.info {
		font-weight: 300;
	}

	.description {
		margin-bottom: 2.5rem;
	}

	.description ul {
		list-style-type: disc;
		padding-left: 1.25rem;
	}
`