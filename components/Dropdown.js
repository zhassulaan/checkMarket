import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';

function Dropdown({ close }) {
	const router = useRouter();
	
  	return (
		<Wrapper>
			<div className='dropdown-header'>
				<div>
					<div className='dropdown-icon'>
						<Image src='/navbar-icons/logo.svg' alt="чекмаркет logo" width={32} height={30} layout='fixed' />
					</div>
					<a href="tel:+77759764165" className='dropdown-text'>+7 (707) 907-07-17</a>
				</div>
				<div className='dropdown-icon'>
					<Image src='/navbar-icons/close.svg' alt="close button" width={15} height={15} layout='fixed' onClick={close} />
				</div>
			</div>

			<ul className='dropdown-menu'>
				<li className={(router.pathname == "/shop" || router.pathname == "/catalog/[...slug]") ? 'active dropdown-item' : 'dropdown-item'}>
					<div>
						<a href='/shop'>
							<svg width="15" height="15" viewBox="0 0 15 15" fill="black" xmlns="http://www.w3.org/2000/svg">
								<path d="M2.60634 11.9472C1.75755 11.9472 1.067 12.6319 1.067 13.4736C1.067 14.3153 1.75752 15 2.60634 15C3.45512 15 4.14565 14.3153 4.14565 13.4736C4.14565 12.6319 3.45512 11.9472 2.60634 11.9472ZM2.60634 14.0565C2.2822 14.0565 2.01848 13.795 2.01848 13.4736C2.01848 13.1522 2.28217 12.8907 2.60634 12.8907C2.93047 12.8907 3.19416 13.1522 3.19416 13.4736C3.19416 13.795 2.93047 14.0565 2.60634 14.0565Z"/>
								<path d="M10.8059 11.9472C9.95714 11.9472 9.26662 12.6319 9.26662 13.4736C9.26662 14.3153 9.95714 15 10.8059 15C11.6547 15 12.3453 14.3153 12.3453 13.4736C12.3453 12.6319 11.6547 11.9472 10.8059 11.9472ZM10.8059 14.0565C10.4818 14.0565 10.2181 13.795 10.2181 13.4736C10.2181 13.1522 10.4818 12.8907 10.8059 12.8907C11.1301 12.8907 11.3938 13.1522 11.3938 13.4736C11.3938 13.795 11.1301 14.0565 10.8059 14.0565Z"/>
								<path d="M13.0456 0L12.7336 1.88702H0L0.911394 7.4185C1.03965 8.19438 1.76119 8.80215 2.5541 8.80215H11.5906L11.3826 10.0602H1.54277V11.0037H12.1908L13.8537 0.943509H15V0H13.0456ZM11.7465 7.85864H2.5541C2.23142 7.85864 1.90255 7.58163 1.85038 7.26609L1.11955 2.83053H12.5777L11.7465 7.85864Z"/>
							</svg>
						</a>
						<a href='/shop'><p>Магазин</p></a>
					</div>

					<a href='/shop'>
						<svg width="7" height="10" viewBox="0 0 7 10" fill="black" xmlns="http://www.w3.org/2000/svg">
							<path d="M1.6172 10L7 5.00003L1.6172 -2.3529e-07L8.88011e-07 1.5022L3.88817 5L5.82224e-07 8.4978L1.6172 10Z"/>
						</svg>
					</a>
				</li>
				
				<li className={(router.pathname == "/") ? 'active dropdown-item' : 'dropdown-item'}>
					<div>
						<a href='/'>
							<svg width="17" height="15" viewBox="0 0 17 15" fill="black" xmlns="http://www.w3.org/2000/svg">
								<path d="M14.1557 8.18523C13.8786 8.18523 13.6541 8.41507 13.6541 8.69858V13.9733H10.887V8.69858C10.887 8.41507 10.6625 8.18523 10.3854 8.18523H6.61474C6.33765 8.18523 6.11313 8.41507 6.11313 8.69858V13.9733H3.34578V8.69858C3.34578 8.41507 3.12126 8.18523 2.84417 8.18523C2.56708 8.18523 2.34256 8.41507 2.34256 8.69858V14.4867C2.34256 14.7702 2.56708 15 2.84417 15H14.1557C14.4328 15 14.6573 14.7702 14.6573 14.4867V8.69858C14.6573 8.41507 14.4328 8.18523 14.1557 8.18523ZM7.11635 13.9733V9.21192H9.88383V13.9733H7.11635Z"/>
								<path d="M16.8531 8.33553L8.85433 0.150333C8.65851 -0.0501454 8.34088 -0.0500769 8.14492 0.150333L0.146922 8.33553C-0.0489738 8.53601 -0.0489738 8.86106 0.146922 9.06147C0.342884 9.26195 0.660436 9.26195 0.856332 9.06147L8.49966 1.23931L16.1437 9.06154C16.2416 9.16175 16.3701 9.21185 16.4984 9.21185C16.6267 9.21185 16.7552 9.16175 16.8531 9.06147C17.049 8.86106 17.049 8.53601 16.8531 8.33553Z"/>
							</svg>
						</a>
						<a href='/'><p>Главная</p></a>
					</div>
					
					<a href='/'>
						<svg width="7" height="10" viewBox="0 0 7 10" fill="black" xmlns="http://www.w3.org/2000/svg">
							<path d="M1.6172 10L7 5.00003L1.6172 -2.3529e-07L8.88011e-07 1.5022L3.88817 5L5.82224e-07 8.4978L1.6172 10Z"/>
						</svg>
					</a>
				</li>
				
				<li className={(router.pathname == "/about") ? 'active dropdown-item' : 'dropdown-item'}>
					<div>
						<a href='/about'>
							<svg width="15" height="15" viewBox="0 0 15 15" fill="black" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.5 0C3.36905 0 0 3.36905 0 7.5C0 11.631 3.36905 15 7.5 15C11.631 15 15 11.631 15 7.5C15 3.36905 11.631 0 7.5 0ZM7.5 14.0476C3.89286 14.0476 0.952381 11.1071 0.952381 7.5C0.952381 3.89286 3.89286 0.952381 7.5 0.952381C11.1071 0.952381 14.0476 3.89286 14.0476 7.5C14.0476 11.1071 11.1071 14.0476 7.5 14.0476Z"/>
								<path d="M7.97619 6.36905H7.02381V11.131H7.97619V6.36905Z"/>
								<path d="M7.97619 4.10714H7.02381V5.05952H7.97619V4.10714Z"/>
							</svg>
						</a>
						<a href='/about'><p>О нас</p></a>
					</div>
					
					<a href='/about'>
						<svg width="7" height="10" viewBox="0 0 7 10" fill="black" xmlns="http://www.w3.org/2000/svg">
							<path d="M1.6172 10L7 5.00003L1.6172 -2.3529e-07L8.88011e-07 1.5022L3.88817 5L5.82224e-07 8.4978L1.6172 10Z"/>
						</svg>
					</a>
				</li>
				
				<li className={(router.pathname == "/services") ? 'active dropdown-item' : 'dropdown-item'}>
					<div>
						<a href='/services'>
							<svg width="16" height="15" viewBox="0 0 16 15" fill="black" xmlns="http://www.w3.org/2000/svg">
								<path d="M15.9097 7.29748L13.2434 4.73426C13.1762 4.67371 13.0876 4.64002 12.9955 4.64002C12.9034 4.64002 12.8147 4.67371 12.7475 4.73426L12.2516 5.21358C12.1874 5.2776 12.1515 5.36305 12.1515 5.45196C12.1515 5.54088 12.1874 5.62633 12.2516 5.69034L13.0648 6.46956C13.0858 6.49229 13.1019 6.51883 13.1121 6.54762C13.1222 6.5764 13.1263 6.60685 13.1241 6.63718C13.1219 6.66751 13.1133 6.6971 13.099 6.72422C13.0847 6.75134 13.0649 6.77543 13.0408 6.79509C13.0017 6.82871 12.9519 6.84859 12.8995 6.85148H5.5993L9.95329 2.68625C9.97694 2.66606 10.0045 2.65062 10.0345 2.64083C10.0644 2.63104 10.0961 2.62711 10.1276 2.62926C10.1592 2.63141 10.19 2.6396 10.2182 2.65335C10.2464 2.66709 10.2715 2.68613 10.2919 2.70932C10.3269 2.74692 10.3476 2.79481 10.3506 2.84517V3.98837C10.3462 4.06777 10.3745 4.14564 10.4294 4.20513C10.4843 4.26461 10.5613 4.30093 10.6438 4.30621H11.3664C11.4487 4.31113 11.5298 4.28449 11.5917 4.23213C11.6537 4.17977 11.6915 4.10595 11.697 4.02681V0.317839C11.6995 0.27844 11.694 0.23895 11.6806 0.201633C11.6672 0.164316 11.6463 0.129906 11.619 0.100377C11.5918 0.070848 11.5587 0.0467807 11.5218 0.0295557C11.4848 0.0123306 11.4447 0.00228691 11.4037 0H7.60699C7.516 0.00774235 7.43141 0.048209 7.37012 0.113312C7.30883 0.178414 7.27535 0.263357 7.27637 0.351161V0.989402C7.27422 1.02913 7.28024 1.06888 7.29409 1.10637C7.30794 1.14387 7.32934 1.17836 7.35708 1.20789C7.38482 1.23741 7.41835 1.26138 7.45574 1.27843C7.49313 1.29548 7.53366 1.30527 7.57499 1.30724H8.7988C8.82962 1.30791 8.85999 1.3144 8.8882 1.32636C8.9164 1.33831 8.94187 1.35549 8.96317 1.37691C8.98446 1.39834 9.00115 1.42358 9.0123 1.45121C9.02344 1.47884 9.02881 1.50831 9.0281 1.53793C9.02626 1.59331 9.00351 1.64616 8.96411 1.6866L3.60494 6.82072H0.330787C0.285963 6.82205 0.241849 6.83185 0.200969 6.84958C0.160089 6.8673 0.123243 6.8926 0.0925387 6.92402C0.061834 6.95544 0.0378725 6.99238 0.0220235 7.03271C0.0061746 7.07304 -0.00125085 7.11598 0.000171773 7.15907V7.83576C0.0058016 7.92669 0.0457377 8.01252 0.112493 8.07717C0.179248 8.14182 0.268239 8.18084 0.362782 8.18692H3.6716L9.0041 13.3134C9.02461 13.3364 9.04019 13.3631 9.04996 13.3919C9.05972 13.4208 9.06347 13.4512 9.06099 13.4814C9.05851 13.5117 9.04986 13.5411 9.03552 13.5682C9.02119 13.5952 9.00145 13.6192 8.97744 13.6389C8.93889 13.6714 8.89001 13.6904 8.8388 13.6927H7.63898C7.598 13.6903 7.55692 13.6957 7.51811 13.7085C7.47929 13.7214 7.4435 13.7415 7.41278 13.7677C7.38206 13.7939 7.35703 13.8257 7.33911 13.8612C7.32119 13.8967 7.31075 13.9353 7.30837 13.9747C7.3057 13.9865 7.3057 13.9987 7.30837 14.0105V14.6488C7.31239 14.7352 7.34761 14.8175 7.40795 14.8816C7.4683 14.9456 7.54999 14.9875 7.63898 14.9999H11.4117C11.4934 15.0014 11.5724 14.9722 11.6321 14.9187C11.6918 14.8651 11.7275 14.7913 11.7317 14.7129V11.0167C11.7338 10.977 11.7278 10.9372 11.714 10.8997C11.7001 10.8622 11.6787 10.8277 11.651 10.7982C11.6232 10.7687 11.5897 10.7447 11.5523 10.7277C11.5149 10.7106 11.4744 10.7008 11.4331 10.6989H10.7132C10.6308 10.6939 10.5498 10.7206 10.4879 10.7729C10.4259 10.8253 10.388 10.8991 10.3826 10.9783V12.1599C10.3822 12.1895 10.3758 12.2188 10.3637 12.246C10.3516 12.2733 10.334 12.2979 10.312 12.3187C10.2899 12.3394 10.2639 12.3557 10.2353 12.3667C10.2067 12.3777 10.1761 12.3832 10.1453 12.3829C10.0855 12.3814 10.0284 12.3586 9.98528 12.3188L5.62063 8.18692H12.9315C12.9761 8.18911 13.0193 8.20338 13.0558 8.22809C13.0924 8.25281 13.121 8.28695 13.1383 8.3266C13.1556 8.36625 13.1608 8.40978 13.1535 8.45219C13.1462 8.49459 13.1265 8.53414 13.0968 8.56627L12.2383 9.36087C12.1739 9.42531 12.138 9.51119 12.138 9.60053C12.138 9.68987 12.1739 9.77575 12.2383 9.84019L12.7342 10.3144C12.8008 10.3761 12.8897 10.4106 12.9822 10.4106C13.0746 10.4106 13.1635 10.3761 13.2301 10.3144L15.8964 7.77168C15.9604 7.70884 15.9974 7.62504 15.9999 7.53709C16.0023 7.44915 15.9701 7.36355 15.9097 7.29748Z"/>
							</svg>
						</a>
						<a href='/services'><p>Услуги</p></a>
					</div>
					
					<a href='/services'>
						<svg width="7" height="10" viewBox="0 0 7 10" fill="black" xmlns="http://www.w3.org/2000/svg">
							<path d="M1.6172 10L7 5.00003L1.6172 -2.3529e-07L8.88011e-07 1.5022L3.88817 5L5.82224e-07 8.4978L1.6172 10Z"/>
						</svg>
					</a>
				</li>
				
				<li className={(router.pathname == "/blog" || router.pathname === "/blog/news/[slug]" || router.pathname === "/blog/articles/[slug]") ? 'active dropdown-item' : 'dropdown-item'}>
					<div>
						<a href='/blog'>
							<svg width="16" height="17" viewBox="0 0 16 17" fill="none" stroke="black" xmlns="http://www.w3.org/2000/svg" className='withStroke'>
								<path d="M15 9.25H1M12.2 4H8.7M12.2 6.25H8.7M6.6 5.125C6.6 6.16053 5.8165 7 4.85 7C3.8835 7 3.1 6.16053 3.1 5.125C3.1 4.08947 3.8835 3.25 4.85 3.25C5.8165 3.25 6.6 4.08947 6.6 5.125ZM3.1 1H12.9C13.457 1 13.9911 1.23705 14.3849 1.65901C14.7788 2.08097 15 2.65326 15 3.25V16H1V3.25C1 2.65326 1.22125 2.08097 1.61508 1.65901C2.0089 1.23705 2.54305 1 3.1 1Z"/>
							</svg>
						</a>
						<a href='/blog'><p>Блог</p></a>
					</div>
					
					<a href='/blog'>
						<svg width="7" height="10" viewBox="0 0 7 10" fill="black" xmlns="http://www.w3.org/2000/svg">
							<path d="M1.6172 10L7 5.00003L1.6172 -2.3529e-07L8.88011e-07 1.5022L3.88817 5L5.82224e-07 8.4978L1.6172 10Z"/>
						</svg>
					</a>
				</li>
				
				<li className={(router.pathname == "/delivery") ? 'active dropdown-item' : 'dropdown-item'}>
					<div>
						<a href='/delivery'>
							<svg width="17" height="16" viewBox="0 0 17 16" fill="black" xmlns="http://www.w3.org/2000/svg">
								<path d="M16.6854 3.46081L10.614 0.0761692C10.5244 0.0262007 10.4237 0 10.3214 0C10.2191 0 10.1185 0.0262007 10.0289 0.0761692L3.95745 3.46081C3.86226 3.51394 3.78288 3.59198 3.72759 3.68681C3.67231 3.78163 3.64314 3.88975 3.64314 3.9999C3.64314 4.11004 3.67231 4.21816 3.72759 4.31299C3.78288 4.40781 3.86226 4.48585 3.95745 4.53898L9.71431 7.74842V14.3437L7.8709 13.3165L7.28574 14.3946L10.0289 15.9237C10.1185 15.9737 10.2191 16 10.3214 16C10.4238 16 10.5244 15.9737 10.614 15.9237L16.6854 12.539C16.7807 12.486 16.8601 12.4079 16.9154 12.3131C16.9708 12.2183 17 12.1101 17 12V3.9999C17 3.88973 16.9708 3.78159 16.9154 3.68676C16.8601 3.59194 16.7807 3.5139 16.6854 3.46081ZM10.3214 1.31778L15.1329 3.9999L10.3214 6.68201L5.50997 3.9999L10.3214 1.31778ZM15.7857 11.6361L10.9286 14.3438V7.74842L15.7857 5.04071V11.6361Z"/>
								<path d="M0 7.99992H4.85713V6.76914H0V7.99992Z"/>
								<path d="M1.21428 12.923H6.07141V11.6923H1.21428V12.923Z"/>
								<path d="M2.42856 10.4615H7.28569V9.2307H2.42856V10.4615Z"/>
							</svg>
						</a>
						<a href='/delivery'><p>Доставка</p></a>
					</div>
					
					<a href='/delivery'>
						<svg width="7" height="10" viewBox="0 0 7 10" fill="black" xmlns="http://www.w3.org/2000/svg">
							<path d="M1.6172 10L7 5.00003L1.6172 -2.3529e-07L8.88011e-07 1.5022L3.88817 5L5.82224e-07 8.4978L1.6172 10Z"/>
						</svg>
					</a>
				</li>
				
				<li className={(router.pathname == "/contacts") ? 'active dropdown-item' : 'dropdown-item'}>
					<div>
						<a href='/contacts'>
							<svg width="15" height="15" viewBox="0 0 15 15" fill="black" xmlns="http://www.w3.org/2000/svg">
								<path d="M13.2698 15H13.1718C1.83943 14.3481 0.23041 4.78269 0.00549307 1.86346C-0.0126299 1.63649 0.0141949 1.40817 0.0844303 1.19158C0.154666 0.974998 0.266931 0.774406 0.414795 0.601299C0.562658 0.428192 0.743213 0.285974 0.946114 0.182792C1.14902 0.0796102 1.37027 0.0174933 1.59721 5.40918e-07H4.77489C5.0059 -0.000223169 5.23165 0.0689484 5.4229 0.198555C5.61416 0.328162 5.7621 0.512233 5.84757 0.726924L6.72417 2.88462C6.80858 3.09435 6.82952 3.32428 6.78441 3.54582C6.73929 3.76737 6.63011 3.97077 6.47042 4.13077L5.24203 5.37115C5.43391 6.46197 5.9561 7.4675 6.73795 8.25171C7.51981 9.03591 8.52359 9.56094 9.61349 9.75577L10.865 8.51539C11.0273 8.3574 11.2325 8.25072 11.4551 8.20866C11.6776 8.16659 11.9076 8.191 12.1164 8.27885L14.2906 9.15C14.502 9.2382 14.6823 9.38736 14.8087 9.57846C14.935 9.76957 15.0016 9.99397 15 10.2231V13.2692C15 13.7283 14.8177 14.1685 14.4932 14.4931C14.1688 14.8177 13.7287 15 13.2698 15ZM1.73563 1.15385C1.58267 1.15385 1.43598 1.21463 1.32783 1.32282C1.21967 1.43102 1.15891 1.57776 1.15891 1.73077V1.77692C1.4242 5.19231 3.1255 13.2692 13.2352 13.8462C13.311 13.8508 13.3869 13.8405 13.4587 13.8158C13.5305 13.791 13.5967 13.7524 13.6535 13.702C13.7102 13.6516 13.7565 13.5905 13.7897 13.5222C13.8228 13.4538 13.8421 13.3797 13.8465 13.3038V10.2231L11.6724 9.35192L10.0172 10.9962L9.74037 10.9615C4.72299 10.3327 4.04247 5.31346 4.04247 5.26154L4.00786 4.98462L5.64572 3.32885L4.78066 1.15385H1.73563Z"/>
							</svg>
						</a>
						<a href='/contacts'><p>Контакты</p></a>
					</div>
					
					<a href='/contacts'>
						<svg width="7" height="10" viewBox="0 0 7 10" fill="black" xmlns="http://www.w3.org/2000/svg">
							<path d="M1.6172 10L7 5.00003L1.6172 -2.3529e-07L8.88011e-07 1.5022L3.88817 5L5.82224e-07 8.4978L1.6172 10Z"/>
						</svg>
					</a>
				</li>
			</ul>
		</Wrapper>
  	);
}

const Wrapper = styled.div`
	display: none;

	@media (max-width: 992px) {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		background: var(--clr-white);
		padding: 0 5.55556vw 4.375rem;
		z-index: 1;

		.dropdown-header,
		.dropdown-header div {
			display: flex;
			align-items: center;
		}

		.dropdown-header {
			justify-content: space-between;
			height: 1.875rem;
			margin: 0.625rem 0;
		}
		
		.dropdown-text,
		.dropdown-link {
			font-size: 15px;
		}
		
		.dropdown-text {
			line-height: 1.25rem;
			font-weight: 400;
			margin-left: 3.6111vw;
		}
		
		.dropdown-menu {
			margin-top: 1.25rem;
		}

		.dropdown-item {
			height: 3.125rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid var(--clr-primary-4);
			padding: 0.875rem 0.625rem 1rem 0.9375rem;
		}
		
		.dropdown-item div {
			display: flex;
		}

		.dropdown-item p {
			line-height: 1.25rem;
			font-size: 15px;
			font-weight: 600;
			margin-left: 2.778vw;
		}

		.active:after {
			display: none;
		}

		.active {
			background-color: var(--clr-primary-1);
		}
		
		.active a {
			color: var(--clr-white);
		}
		
		.active svg {
			fill: var(--clr-white);
		}
		
		.active .withStroke {
			fill: none;
			stroke: var(--clr-white);
		}
	}
`

export default Dropdown;