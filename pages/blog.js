import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Head from 'next/head';
import styled from 'styled-components';
import newsData from '../data/news-data';
import articlesData from '../data/articles-data';
import Blogs from '../components/BlogsContainer';
import BasketModal from '../components/Modals/BasketModal';
import SubscribeModal from '../components/Modals/SubscribeModal';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import bg from '../public/modal/background.png';

export default function Blog() {
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

	const [option, setOption] = useState(1);
	const news = newsData.slice().reverse();
	const articles = articlesData.slice().reverse();
	const [blogs, setBlogs] = useState(articles);

	// We start with an empty list of items.
	const [currentArticles, setCurrentArticles] = useState(articles);
	const [pageCountArticles, setPageCountArticles] = useState(0);
	const [currentNews, setCurrentNews] = useState(news);
	const [pageCountNews, setPageCountNews] = useState(0);
	// Here we use item offsets; we could also use page offsets
	// following the API or data you're working with.
	const [itemOffset, setItemOffset] = useState(0);
	
	const chooseArticles = async(ev) => {
		ev.preventDefault();
		setOption(1);
		setItemOffset(0);
		setBlogs(articles);
	}

	const chooseNews = async(ev) => {
		ev.preventDefault();
		setOption(2);
		setItemOffset(0);
		setBlogs(news);
	}

	useEffect(() => {
		// Fetch items from another resources.
		const endOffset = itemOffset + 3;
		console.log(`Loading items from ${itemOffset} to ${endOffset}`);
		setCurrentArticles(articles.slice(itemOffset, endOffset));
		setPageCountArticles(Math.ceil(articles.length / 3));
		setCurrentNews(news.slice(itemOffset, endOffset));
		setPageCountNews(Math.ceil(news.length / 3));
	}, [itemOffset, 3]);
  
	// Invoke when user click to request another page.
	const handlePageClick = (event) => {
		const newOffset = (event.selected * 3) % blogs.length;
		console.log(
		  `User requested page number ${event.selected + 1}, which is offset ${newOffset}`
		);
		setItemOffset(newOffset);
	};

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
				{ basketModal ? <BasketModal close={ basket }/> : null };
				{ subscribeModal ? <SubscribeModal modal={ subscribe }/> : null };

				<Navbar modal={ basket }/>

				<LogoContainer>
					<div className='logo-box'>
		        		<img src="/home/logo.svg" alt="logo" className='logo'/>
					</div>
				</LogoContainer>
						
				<Wrapper>
					<div className='container'>
						<div className='header'>
							<h3 className='title'>Блог</h3>

							<div className='icons'>
								<img src="/modal/rectangle.svg" alt="rectangle" width={15} height={15} layout="fixed"/>
								<img src="/modal/triangle.svg" alt="triangle" width={40} height={15} layout="fixed"/>
								<img src="/modal/ellipse.svg" alt="ellipse" width={15} height={15} layout="fixed"/>
							</div>

							<p className='subtitle'>Читайте полезные статьи и последние новости от ЧЕК МАРКЕТ</p>
						</div>

						<div className='buttons'>
							<div className={ option === 1 ? 'blog-button' : 'blog-button non-active' } onClick={ chooseArticles }>
								<Button blog={ true } text={ "Статьи" }/>
							</div>
							<div className={ option === 2 ? 'blog-button' : 'blog-button non-active' } onClick={ chooseNews }>
								<Button blog={ true } text={ "Новости" }/>
							</div>
						</div>

						{option === 1 ?
							<div className='blog-container'>
								<Blogs currentItems={ currentArticles } option={ "Статьи" }/>
								<ReactPaginate
									key="paginate1"
									breakLabel={ (window.innerWidth > 650) ? "..." : null }
									nextLabel={ (window.innerWidth > 992) ? "Следующая" : <img src="/blog-icons/next.svg" alt="next arrow"/> }
									onPageChange={ handlePageClick }
									marginPagesDisplayed={ (window.innerWidth > 650) ? 1 : 0 }
									pageRangeDisplayed={ (window.innerWidth > 650) ? 3 : 2 }
									pageCount={ pageCountArticles }
									previousLabel={ (window.innerWidth > 992) ? "Предыдущая" : <img src="/blog-icons/previous.svg" alt="previous arrow"/> }
									renderOnZeroPageCount={ null }
								/>
							</div>
								:
							<div className='blog-container'>
								<Blogs currentItems={ currentNews } option={ "Новости" }/>
								<ReactPaginate
									key="paginate1"
									breakLabel="..."
									nextLabel={ (window.innerWidth > 992) ? "Следующая" : <img src="/blog-icons/next.svg" alt="next arrow"/> }
									onPageChange={ handlePageClick }
									marginPagesDisplayed={ (window.innerWidth > 992) ? 1 : 0 }
									pageRangeDisplayed={ 3 }
									pageCount={ pageCountArticles }
									previousLabel={ (window.innerWidth > 992) ? "Предыдущая" : <img src="/blog-icons/previous.svg" alt="previous arrow"/> }
									renderOnZeroPageCount={ null }
								/>
							</div>
						}
					</div>
				</Wrapper>
						
				<Footer modal={ subscribe }/>
			</div>
		</div>
	);
}

const LogoContainer = styled.section`
	@keyframes animate {
		50%, 60%, 70%, 100% {
			opacity: 100%;
		} 0%, 55%, 65% {
			opacity: 0;
		}
	}

	@keyframes logoAnimation {
		0% {
			top: 0;
			opacity: 0;
		} 5% {
			opacity: 1;
		} 50% {
			top: 100%;
		} 95% {
			opacity: 1;
		} 100% {
			top: 0;
			opacity: 0;
		}
	}

	display: none;

	@media (max-width: 992px) {
		display: flex;
		align-items: center;
		background-image: url(${bg.src}); 
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		width: 100%;
		height: 23.75rem;
		margin-top: 1.5625rem;
		padding: 5.625rem 0;
	
		.logo-box {
			position: relative;
			width: calc(100% - 39.0421vw * 2);
			margin: 0 39.0421vw;
		}
		
		.logo-box:before {
			content: "";
			position: absolute;
			width: calc(100vw - 39.0421vw * 2);
			height: 0.1rem;
			background-color: var(--clr-primary-1);
			opacity: 0;
			animation: logoAnimation 2s linear;
		}
	
		.logo-box:active {
			animation: animate 1.2s linear;
		}
	
		.logo {
			width: calc(100vw - 39.0421vw * 2);
			animation: animate 1.2s linear;
		}
	}

	@media (max-width: 650px) {
		height: 52.778vw;
		padding: 11.11112vw 0;
	
		.logo-box {
			width: 33.33334vw;
			margin: 0 33.33334vw;
		}
		
		.logo-box:before {
			width: calc(100vw - 33.33334vw * 2);
		}
	
		.logo {
			width: 33.33334vw;
		}
	}
`

const Wrapper = styled.section`
	display: flex;
	justify-content: center;

	.container {
		position: relative;
		width: 72.5rem;
		height: 93.125rem;
		margin: 14.375rem 0 13.125rem;
	}

	.header {
		width: 25rem;
		margin-bottom: 3.75rem;
	}

	.title {
		line-height: 3.125rem;
		margin-bottom: 1.25rem;
	}

	.icons {
		margin-bottom: 0.9375rem;
	}

	.subtitle {
		line-height: 1.875rem;
	}

	.buttons {
		display: flex;
	}

	.blog-button {
		width: 10rem;
		height: 3.125rem;
		border-radius: 0.625rem;
		margin-right: 1.25rem;
	}

	.blog-button .text {
		font-size: 18px;
		font-weight: 700;
	}

	.non-active .button {
		background-color: transparent;
		border: 1px solid var(--clr-primary-1);
	}

	.non-active .text {
		color: var(--clr-primary-1);
	}
	
	.blog-container {
		ul {
			position: absolute;
			width: 100%;
			bottom: 0;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		
		li {
			width: 1.875rem;
			height: 1.875rem;
			font-weight: 400;
			cursor: pointer;
			margin: 0 0.625rem;
		}

		li a {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 18px;
		}

		.previous,
		.next {
			width: 10rem;
			height: 1.875rem;
			text-decoration: underline;
			margin: 0 3.75rem;
		}
		
		.previous a {
			justify-content: flex-end;
		}
		
		.next a {
			justify-content: flex-start;
		}
		
		.selected {
			width: 3.125rem;
			height: 3.125rem;
			background-color: var(--clr-primary-4);
			border-radius: 0.3155rem;
			margin: 0 0.3125rem;
		}

		.selected p {
			font-weight: 600;
		}
	}

	@media (max-width: 1440px) {
		.container {	
			width: 69.375rem;
			height: 91.875rem;
			margin: 13.125rem 0 11.1875rem;
		}
	}	
	
	@media (max-width: 1220px) {
		.container {
			width: 57.3125rem;
			height: 79.78125rem;
			margin: 10rem 0 9.3125rem;
		}	
		
		.header {
			margin-bottom: 2.1875rem;
		}
		
		.title {
			line-height: 2.8125rem;
			font-size: 34px;
			margin-bottom: 0.9375rem;
		}
		
		.icons {
			margin-bottom: 0.625rem;
		}
		
		.subtitle {
			line-height: 1.5625rem;
			font-size: 17px;
		}

		.blog-button {
			width: 9.375rem;
			height: 3.125rem;
			margin-right: 0.9375rem;
		}
	
		.blog-button .text {
			font-size: 16px;
		}

		.blog-container {
			li a {
				font-size: 16px;
			}
	
			.previous,
			.next {
				width: 8.75rem;
			}
			
			.selected {
				width: 2.8125rem;
				height: 2.8125rem;
			}
		}
	}
	
	@media (max-width: 992px) {
		.container {
			width: 88.889vw;
			height: 63.53125rem;
			margin: 3.75rem 0 6.25rem;
		}	

		.header {
			margin-bottom: 1.25rem;
		}
	
		.title {
			line-height: 2.1875rem;
			font-size: 30px;
			margin-bottom: 0.625rem;
		}
		
		.icons {
			margin-bottom: 0.625rem;
		}
		
		.icons img {
			height: 0.625rem;
		}
		
		.subtitle {
			line-height: 1.25rem;
			font-size: 16px;
		}
	
		.blog-button {
			width: 9.6875rem;
			height: 2.5rem;
			margin-right: 0.9375rem;
		}
	
		.blog-button .text {
			font-size: 13px;
		}

		.blog-container {
			li {
				cursor: pointer;
				margin: 0 0.625rem;
			}
	
			li a {
				font-size: 16px;
			}
	
			.previous,
			.next {
				width: 0.625rem;
				margin: 0 2.5rem;
			}
			
			.previous a {
				justify-content: flex-end;
			}
			
			.next a {
				justify-content: flex-start;
			}
			
			.selected {
				width: 2.5rem;
				height: 2.5rem;
				margin: 0 0.3125rem;
			}
	
			.selected p {
				font-weight: 600;
			}
		}
	}
	
	@media (max-width: 650px) {
		.container {
			height: 85.59375rem;
			margin: 1.875rem 0 5.625rem;
		}

		.header {
			width: 100%;
			margin-bottom: 1.25rem;
		}
	
		.title {
			line-height: 1.5625rem;
			font-size: 18px;
		}
			
		.icons {
			height: 0.625rem; 
			margin-bottom: 1.25rem;
		}
			
		.icons img {
			height: 100%;
		}

		.subtitle {
			font-size: 15px;
		}

		.blog-container {
			li a {
				font-size: 15px;
			}
	
			.previous,
			.next {
				width: 0.625rem;
			}
			
			.previous {
				margin: 0 1.875rem 0 0;
			}

			.next {
				margin: 0 0 0 1.875rem;
			}
			
			.previous a {
				justify-content: flex-end;
			}
			
			.next a {
				justify-content: flex-start;
			}
			
			.selected {
				width: 2.5rem;
				height: 2.5rem;
				margin: 0 0.3125rem;
			}
	
			.selected p {
				font-weight: 600;
			}
		}
	}
`