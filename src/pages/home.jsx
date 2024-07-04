import React, {useState} from 'react'
import { FaSquareFacebook, FaSquareInstagram, FaSquareTwitter} from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";


import articles from '../assets/homePageArticlesWithImages.js'

export default function Home(){

	const [showMobileNavbar, setShowMobileNavbar] = useState(false)
	const showMobileNavbarHandler = ()=>{
		setShowMobileNavbar(!showMobileNavbar)
	}	

	return(
		<>
			<div className = "bg-accent max-sm:w-screen text-secondary flex justify-around select-none
								max-sm:overflow-x-scroll max-sm:text-nowrap">
				<p className = "max-sm:mr-10">Adress : 616 Shields Islands, North Evan, VT 77127-0740</p>
				<p>Phone Number : +1 (510) 912-3656</p>
			</div>
			<nav className = "flex justify-between bg-primary items-center h-20
								max-sm:hidden">
				
				<ul className = "flex justify-between ml-5 
									max-sm:flex-col">
					<li className = "nav-list transition-all duration-200">Home</li>
					<li className = "nav-list transition-all duration-200">Menu</li>
					<li className = "nav-list transition-all duration-200">Our Story</li>
					<li className = "nav-list transition-all duration-200">Gallery</li>
					<li className = "nav-list transition-all duration-200">Gift Cards</li>
				</ul>

				<section className = "w-20 mr-10 justify-center fill-secondary hover:fill-white cursor-pointer transition-all duration-200">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 535.06 413.21"><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M490.27,152.17H377.6l1-.83c11.2-9.35,31.3-33.47,43.65-45.82,43.09-43.09,102.1-66.38,112.78-70.6-14.59,4.91-113,37.84-132.42,50.19C382,98.26,465.33,33,510.32,23.28c-16.34,3-98.49,20.34-136.79,50.21-8,9.46,8.74-30.55,106.24-61.1,0,0-89.48,12.23-134,46.81C351.46,54.64,395,19.11,450.26,0c0,0-185.13,17.48-161.12,115,4.07,16.51,7.3,28.5,9.86,37.19H218.68c7.48-28.85,16.88-66.26-.13-87.42-26.9-33.48-87-85.94-192.08-55.29-74.4,21.7,25.54,105.73,85.1,142.71H26.83v23.68H0v26.78H26.83V310.92A102.27,102.27,0,0,0,129.11,413.21H387.94A102.32,102.32,0,0,0,490.27,310.92V202.63h26.78V175.85H490.27ZM381.93,310.05c-3.05,42.86-35,62.5-79,19.53q-7.44-7.27-14.11-14.6a41.54,41.54,0,0,0,4.66-45.93,687,687,0,0,0,30-70.56H338c13.27,15.28,25.28,33.07,33.39,53.27q2.72,6.81,4.71,13.42H330.49v44.87Zm-200.16.26V265.4H140.31C144,249,150,224.58,169.59,198.49h23.59a64.57,64.57,0,0,1,10.09,19.8C206.93,230,213.7,246.37,223,264.35a41.4,41.4,0,0,0,3.51,52.6c-17.34,21.84-34.84,37.82-49.45,38.85-25.87,1.77-36.42-20.86-39.21-45.49Zm89.35-60.77a41,41,0,0,0-29.5.32,406.27,406.27,0,0,1-24.49-51.37h81.64C292.45,210.93,282.72,229.48,271.12,249.54ZM257.85,330a41.54,41.54,0,0,0,7.53-.84c11.83,14.34,24.95,27.4,39,37.51.06.06.15.1.21.15H228.52C239.77,359,248.84,343.77,257.85,330ZM81.31,265.14A66.66,66.66,0,0,1,148,198.49h19c-16.85,19.19-25.75,42.83-30.62,66.91h-55Zm0,45.17h49.81c-.17,31.6,19.06,49.06,39.13,56.54h-32.4A56.53,56.53,0,0,1,81.31,310.31Zm354.47,0a56.53,56.53,0,0,1-56.54,56.54H340.19a162.94,162.94,0,0,0,18.79-7.4c8.23-3.85,27.11-14,28.43-49.4h48.37Zm-54-45.13c-4.5-19.16-19.6-48.65-35.63-66.69h23a66.7,66.7,0,0,1,66.68,66.69Z" /></g></g></svg>
				</section>
				
				<section className = "flex justify-between items-center">
					<FaSquareFacebook className = "nav-icons transition-all duration-200"/>
					<FaSquareInstagram className = "nav-icons transition-all duration-200"/>
					<FaSquareTwitter className = "nav-icons transition-all duration-200"/>
					<button className = "button mx-5 transition-all duration-200">Contact-Us</button>
				</section>
			</nav>

			<nav className = "sm:hidden flex flex-col justify-center items-center gap-4 w-full bg-primary h-12 relative z-[100]">
				<div className = "bg-primary h-full">
					<div className = "flex h-full w-full justify-between items-center">
						<section className = "ml-5 w-[50px] flex fill-secondary active:fill-white cursor-pointer transition-all duration-200">
							<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 535.06 413.21"><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M490.27,152.17H377.6l1-.83c11.2-9.35,31.3-33.47,43.65-45.82,43.09-43.09,102.1-66.38,112.78-70.6-14.59,4.91-113,37.84-132.42,50.19C382,98.26,465.33,33,510.32,23.28c-16.34,3-98.49,20.34-136.79,50.21-8,9.46,8.74-30.55,106.24-61.1,0,0-89.48,12.23-134,46.81C351.46,54.64,395,19.11,450.26,0c0,0-185.13,17.48-161.12,115,4.07,16.51,7.3,28.5,9.86,37.19H218.68c7.48-28.85,16.88-66.26-.13-87.42-26.9-33.48-87-85.94-192.08-55.29-74.4,21.7,25.54,105.73,85.1,142.71H26.83v23.68H0v26.78H26.83V310.92A102.27,102.27,0,0,0,129.11,413.21H387.94A102.32,102.32,0,0,0,490.27,310.92V202.63h26.78V175.85H490.27ZM381.93,310.05c-3.05,42.86-35,62.5-79,19.53q-7.44-7.27-14.11-14.6a41.54,41.54,0,0,0,4.66-45.93,687,687,0,0,0,30-70.56H338c13.27,15.28,25.28,33.07,33.39,53.27q2.72,6.81,4.71,13.42H330.49v44.87Zm-200.16.26V265.4H140.31C144,249,150,224.58,169.59,198.49h23.59a64.57,64.57,0,0,1,10.09,19.8C206.93,230,213.7,246.37,223,264.35a41.4,41.4,0,0,0,3.51,52.6c-17.34,21.84-34.84,37.82-49.45,38.85-25.87,1.77-36.42-20.86-39.21-45.49Zm89.35-60.77a41,41,0,0,0-29.5.32,406.27,406.27,0,0,1-24.49-51.37h81.64C292.45,210.93,282.72,229.48,271.12,249.54ZM257.85,330a41.54,41.54,0,0,0,7.53-.84c11.83,14.34,24.95,27.4,39,37.51.06.06.15.1.21.15H228.52C239.77,359,248.84,343.77,257.85,330ZM81.31,265.14A66.66,66.66,0,0,1,148,198.49h19c-16.85,19.19-25.75,42.83-30.62,66.91h-55Zm0,45.17h49.81c-.17,31.6,19.06,49.06,39.13,56.54h-32.4A56.53,56.53,0,0,1,81.31,310.31Zm354.47,0a56.53,56.53,0,0,1-56.54,56.54H340.19a162.94,162.94,0,0,0,18.79-7.4c8.23-3.85,27.11-14,28.43-49.4h48.37Zm-54-45.13c-4.5-19.16-19.6-48.65-35.63-66.69h23a66.7,66.7,0,0,1,66.68,66.69Z" /></g></g></svg>
							
						</section>
						<CiMenuBurger onClick = {showMobileNavbarHandler} className = "mr-5 fill-white w-8 h-8 active:fill-secondary"/>
					</div>
					
					<section className = {`relative w-screen transition-all duration-[600ms] origin-top bg-secondary ${showMobileNavbar ? "h-[400px]" : "h-[0px]"}`}>
						<div className = "absolute w-screen top-0 right-0 z-100 flex flex-col items-center gap-4 justify-center">
							<ul className = "flex flex-col items-center z-[100]">
								<li className = {`nav-list flex justify-center transition-all duration-[400ms] ease-in-out w-screen origin-left bg-primary active:bg-secondary active:text-white ${showMobileNavbar ? " scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}>Home</li>
								<li className = {`nav-list flex justify-center transition-all duration-[400ms] ease-in-out w-screen origin-right bg-primary active:bg-secondary active:text-white ${showMobileNavbar ? " scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}>Menu</li>
								<li className = {`nav-list flex justify-center transition-all duration-[400ms] ease-in-out w-screen origin-left bg-primary active:bg-secondary active:text-white ${showMobileNavbar ? " scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}>Our Story</li>
								<li className = {`nav-list flex justify-center transition-all duration-[400ms] ease-in-out w-screen origin-right bg-primary active:bg-secondary active:text-white ${showMobileNavbar ? " scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}>Gallery</li>
								<li className = {`nav-list flex justify-center transition-all duration-[400ms] ease-in-out w-screen origin-left bg-primary active:bg-secondary active:text-white ${showMobileNavbar ? " scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}>Gift Cards</li>
							</ul>

							
							
							<section className = "flex items-center">
								<FaSquareFacebook className = {`nav-icons hover:fill-white active:fill-primary flex justify-center transition-all duration-[100ms] origin-center ${showMobileNavbar ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}/>
								<FaSquareInstagram className = {`nav-icons hover:fill-white active:fill-primary flex justify-center transition-all duration-[200ms] origin-center ${showMobileNavbar ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}/>
								<FaSquareTwitter className = {`nav-icons hover:fill-white active:fill-primary flex justify-center transition-all duration-[300ms] origin-center ${showMobileNavbar ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}/>
								
							</section>
							<button className =  {`button hover:text-white active:bg-primary mx-5 w-screen rounded-none  flex justify-center transition-all duration-200 ${showMobileNavbar ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}>Contact-Us</button>
						</div>
					</section>
				</div>
				
			</nav>

			<header  className = "h-screen w-screen relative">
				<video className = "h-screen w-screen object-cover max-sm:w-[100vw]" loop autoPlay muted>
					<source src = "./public/videos/201947-916877801_tiny.mp4" type = "video/mp4"/>
				</video>
				<div className = "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
					<div className = "flex flex-col justify-center items-center select-none">
						<p className = "text-white text-4xl p-5
										max-sm:text-2xl">Escape into Taste at</p>
						<section className = "w-[700px] justify-center fill-secondary
												max-sm:w-[300px]">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 537.19 77.65"><title>Asset 2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M.18,58.89c-.17.73-.3-.17,0,0Z" /><path d="M37.66,55.53l0,0" fill="none"/><path d="M55.22,20c-1.3,2.93-1.19,4.17-2.75,6.18h0a9.5,9.5,0,0,1-4.75,3.32,51.73,51.73,0,0,0-11.35,5.57c-4.6-3.19-8.41-6.63-8.61-9.37-.41-6.13,8.59-6.33,12.9-5.39a23.63,23.63,0,0,1,11.79,5.84c-4.38-5.41-11.29-6.68-17.35-7.1S26.29,23,25.65,26.54s-.9,3.07-.08,5.5,4.15,4.14,6.74,5.92a31.89,31.89,0,0,0-6.13,6.22c-1.58,1.79.32,6.34,1.05,7.92s3.1,5.88,13.43,3.36c3.47-.72,9.62-4.09,11.59-7.06.88-.79,1.12,1.67,5.19,6.55,1.35,1.63,4.85,4.54,6.65,6.34,6.25,6.25,9.63,14.81,10.24,16.36-.71-2.12-5.49-16.4-7.28-19.22-1.91-3,7.57,9.1,9,15.63-.43-2.37-3-14.29-7.28-19.85-1.38-1.16,4.43,1.27,8.86,15.42,0,0-1.77-13-6.79-19.46A54.19,54.19,0,0,1,79.4,65.35S76.86,38.48,62.71,42c-3.91,1-6.08,1.61-7.26,2-1,.34-1.29.54-1.34.63.35.08-.09.14,0,0a8.23,8.23,0,0,0-1.23-.13,150.32,150.32,0,0,1-13.23-7.26A60.81,60.81,0,0,1,52,31c.86-.37,2.79.13,5.13.73,4.21,1.1,9.77,2.55,12.89,0,4.86-3.91,12.48-12.63,8-27.88C74.33-8.83,58.18,13.35,55.22,20Zm-3,27.52a28.83,28.83,0,0,1-9.39,6.38C31.78,58.33,22.91,52.84,31.57,44a52.09,52.09,0,0,1,4.18-3.84A94.38,94.38,0,0,0,52.25,47.52Z" /><circle cx="37.53" cy="37.27" r="6.03" /><path d="M53.88,71.15h3.44V3.89H53.88V0H50V3.89H34.28A14.85,14.85,0,0,0,19.43,18.74V56.3A14.85,14.85,0,0,0,34.28,71.15H50V75h3.89ZM34.4,63.24h0A8.2,8.2,0,0,1,26.16,55V20a8.2,8.2,0,0,1,8.21-8.21V26.38h6.51V11.8h0a9.67,9.67,0,0,1,9.67,9.67v32.1a9.67,9.67,0,0,1-9.67,9.67V48H34.4Z" /><path d="M478.6,3.84c-4.45,15.25,3.16,24,8,27.88,3.12,2.51,8.68,1.06,12.89,0,2.35-.6,4.28-1.1,5.13-.73A60.81,60.81,0,0,1,517,37.23a148.73,148.73,0,0,1-13.23,7.26,8.21,8.21,0,0,0-1.22.13c.08.14-.36.08,0,0a3.47,3.47,0,0,0-1.34-.63c-1.19-.42-3.35-1.06-7.27-2-14.15-3.48-16.69,23.39-16.69,23.39a54.11,54.11,0,0,1,8.6-15.18c-5,6.47-6.8,19.46-6.8,19.46,4.44-14.15,10.24-16.58,8.87-15.42-4.34,5.56-6.86,17.48-7.29,19.85,1.41-6.53,10.88-18.61,9-15.63-1.8,2.82-6.58,17.1-7.29,19.22.61-1.55,4-10.11,10.25-16.36,1.79-1.8,5.29-4.71,6.65-6.34,4.06-4.88,4.3-7.34,5.18-6.55,2,3,8.12,6.34,11.59,7.06,10.34,2.52,12.69-1.78,13.43-3.36S532,46,530.44,44.18A31.56,31.56,0,0,0,524.32,38c2.59-1.78,5.91-3.5,6.74-5.92s.55-1.91-.09-5.5-3.37-7.91-9.45-7.49-13,1.69-17.35,7.1A23.7,23.7,0,0,1,516,20.31c4.31-.94,13.32-.74,12.9,5.39-.19,2.74-4,6.18-8.6,9.37A51.76,51.76,0,0,0,508.9,29.5a9.5,9.5,0,0,1-4.75-3.32h0c-1.56-2-1.44-3.25-2.75-6.18C498.45,13.35,482.29-8.83,478.6,3.84Zm42.27,36.29A52.17,52.17,0,0,1,525.06,44c8.66,8.87-.21,14.36-11.3,9.93a29,29,0,0,1-9.39-6.38A94,94,0,0,0,520.87,40.13Z" /><circle cx="519.1" cy="37.27" r="6.03" /><path d="M502.74,75h3.89V71.15h15.72A14.84,14.84,0,0,0,537.19,56.3V18.74A14.84,14.84,0,0,0,522.35,3.89H506.63V0h-3.89V3.89h-3.43V71.15h3.43ZM522.22,48h-6.51V63.24A9.68,9.68,0,0,1,506,53.57V21.47a9.68,9.68,0,0,1,9.67-9.67h0V26.38h6.52V11.8a8.2,8.2,0,0,1,8.2,8.21V55a8.2,8.2,0,0,1-8.2,8.2h0Z" /><path d="M87.62,71.55,111.5,4h16.38l23.94,67.57h-15l-4.54-13.73H106.64l-4.49,13.73H87.62ZM119.48,19l-8.93,27.16h18Z" /><path d="M175.49,71.55V16H155V4h55V16H189.6V71.55H175.49Z" /><path d="M255,24.26a10,10,0,0,0-4.23-7.68q-3.85-2.83-10-2.83-5.38,0-8.42,2.38a7.9,7.9,0,0,0-3,6.6q0,3,3.17,4.71t13.26,3.91q14.79,3.27,19.76,7.6t5,13.74a17.88,17.88,0,0,1-7.5,15.11q-7.5,5.61-20.29,5.6T222.6,67.46q-7.22-5.94-7.69-16.88h13.58a10.46,10.46,0,0,0,3.91,8.29q3.69,2.91,10.25,2.91,6.76,0,10.56-2.19T257,53.54a6.21,6.21,0,0,0-2.75-5.6q-2.64-1.8-11.41-3.75-16.06-3.6-21.51-7.77T216,23.53q0-9.84,7.14-15.62t19.28-5.78q11.37,0,18.47,6t7.9,16.14Z" /><path d="M338.39,47.88q-1.27,11.73-9.17,18.63T309.17,73.4q-14.26,0-22.67-9.51t-8.4-25.73q0-16.59,8.4-26.31t22.67-9.72q12,0,19.92,6.52t9.3,17.62H324.23a12.73,12.73,0,0,0-4.7-8.66,15.87,15.87,0,0,0-10.25-3.23A14.26,14.26,0,0,0,297,20.65q-4.43,6.26-4.43,17.41,0,10.83,4.43,17a14.38,14.38,0,0,0,12.32,6.13,14.87,14.87,0,0,0,10.25-3.57,14.65,14.65,0,0,0,4.7-9.7Z" /><path d="M343.88,71.55,367.77,4h16.38l23.93,67.57h-15l-4.55-13.73H362.91l-4.5,13.73H343.88ZM375.75,19l-8.93,27.16h18Z" /><path d="M417.17,71.55V4h28.27Q457,4,463,9.39t6,15.72q0,10.94-6,16.62t-17.54,5.68q-8.19-.06-14.16.1v24H417.17Zm14.11-35.77h11.78c3.95,0,6.9-.87,8.88-2.61s3-4.38,3-7.9q0-4.82-3-7.24c-2-1.62-4.93-2.43-8.88-2.43H431.28Z"/></g></g></svg>
						</section>
						
					</div>
				</div>
				
			</header>
			<div className = "max-sm:flex max-sm:flex-col-reverse max-sm:mb-5">

				<section className = "flex border-y-solid border-y-secondary border-y-2
										max-sm:flex-col max-sm:items-center max-sm:h-screen">
					<div className = "max-sm:flex max-sm:flex-col max-sm:z-[10]">
						<h1 className = "text-secondary text-4xl p-5 underline">About-us</h1>
						<p className = "p-5 pt-0 text-primary tracking-wider 
										max-sm:text-white max-sm:text-justify max-sm:text-[0.9rem]">{articles.about_us.paragraph}</p>
					</div>
					<img className  = "w-80 
										max-sm:w-full max-sm:h-screen max-sm:object-cover max-sm:absolute max-sm:z-[0] max-sm:brightness-[30%]" src = {articles.about_us.image}
					/>
					
				</section>

				<section className = "flex flex-col justify-center items-center mt-4 border-b-solid border-b-secondary border-b-2">
					<div className = "flex justify-center items-center 
										max-sm:overflow-x-scroll max-sm:w-screen">
						<img className = "w-40 mx-5 h-40 rounded-xl object-cover" src = "./images/chad-montano-eeqbbemH9-c-unsplash.jpg" alt = "unsplash photo"/>
						<img className = "w-40 mx-5 h-40 rounded-xl object-cover" src = "./images/eiliv-aceron-ZuIDLSz3XLg-unsplash.jpg" alt = "unsplash photo"/>
						<img className = "w-40 mx-5 h-40 rounded-xl object-cover" src = "./images/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg" alt = "unsplash photo"/>
						<img className = "w-40 mx-5 h-40 rounded-xl object-cover" src = "./images/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg" alt = "unsplash photo"/>
						<img className = "w-40 mx-5 h-40 rounded-xl object-cover" src = "./images/alex-munsell-auIbTAcSH6E-unsplash.jpg" alt = "unsplash photo"/>
						<img className = "w-40 mx-5 h-40 rounded-xl object-cover" src = "./images/alex-munsell-Yr4n8O_3UPc-unsplash.jpg" alt = "unsplash photo"/>
					</div>
					<button className = "button mx-5 my-5 w-50 h-10 flex items-center transition-all duration-300 hover:shadow-xl">See Menu</button>
				</section>
			</div>

			<section className = "max-sm:hidden">
				<div className ="grid grid-cols-2 max-sm:grid-cols-1">
					
					<div className = "w-full flex justify-center">
						<img className = "w-full h-[400px] object-cover" src = {articles.article_1.image} alt = "unsplash photo"/>
					</div>
					<article className ="w-full h-full justify-center items-center p-4">
						<h1 className = "text-4xl text-secondary">{articles.article_1.title}</h1>
						<p className = " mt-5 text-justify tracking-wider">{articles.article_1.paragraph}</p>
					</article>
					
				</div>

				<div className ="grid grid-cols-2 
									max-sm:grid-cols-1 max-sm:w-screen">
					
					<article className ="w-full h-full justify-center items-center p-4">
						<h1 className = "text-4xl text-secondary">{articles.article_2.title}</h1>
						<p className = " mt-5 text-justify tracking-wider">{articles.article_2.paragraph}</p>
					</article>
					<div className = "w-full flex justify-center">
						<img className = "w-full h-[400px] object-cover" src = {articles.article_2.image} alt = "unsplash photo"/>
					</div>
				</div>

				<div className ="grid grid-cols-2 
									max-sm:grid-cols-1 max-sm:w-screen">
					
					<div className = "relative w-full flex justify-center">
						<img className = "w-full h-[400px] object-cover object-center " src = {articles.article_3.image} alt = "unsplash photo"/>
					</div>
					<article className ="w-full h-full justify-center items-center p-4">
						<h1 className = "text-4xl text-secondary">{articles.article_3.title}</h1>
						<p className = " mt-5 text-justify tracking-wider">{articles.article_3.paragraph}</p>
					</article>
					
				</div>

				<div className ="grid grid-cols-2 
									max-sm:grid-cols-1 max-sm:w-screen">
					
					<article className ="w-full h-full justify-center items-center p-4">
						<h1 className = "text-4xl text-secondary">{articles.article_4.title}</h1>
						<p className = " mt-5 text-justify tracking-wider">{articles.article_4.paragraph}</p>
					</article>
					<div className = "w-full flex justify-center">
						<img className = "w-full h-[400px] object-cover" src = {articles.article_4.image} alt = "unsplash photo"/>
					</div>
				</div>

				<div className ="grid grid-cols-2 
									max-sm:grid-cols-1 max-sm:w-screen">
					<div className = "w-full flex justify-center">
						<img className = "w-full h-[420px] object-cover" src = {articles.article_5.image} alt = "unsplash photo"/>
					</div>
					<article className ="w-full h-full justify-center items-center p-4">
						<h1 className = "text-4xl text-secondary">{articles.article_5.title}</h1>
						<p className = " mt-5 text-justify tracking-wider">{articles.article_5.paragraph}</p>
					</article>
					
					
				</div>
			</section>

			<section className = "hidden max-sm:block max-sm:mb-5">
				<div className ="grid grid-cols-2 max-sm:grid-cols-1">
					<article className ="w-full h-full justify-center items-center p-4">
						<h1 className = "text-4xl text-secondary">{articles.article_1.title}</h1>
						<p className = " mt-5 text-justify tracking-wider">{articles.article_1.paragraph}</p>
					</article>
					<div className = "w-full flex justify-center">
						<img className = "w-full h-[400px] object-cover" src = {articles.article_1.image} alt = "unsplash photo"/>
					</div>
					
				</div>

				<div className ="grid grid-cols-2 
									max-sm:grid-cols-1 max-sm:w-screen">
					
					<article className ="w-full h-full justify-center items-center p-4">
						<h1 className = "text-4xl text-secondary">{articles.article_2.title}</h1>
						<p className = " mt-5 text-justify tracking-wider">{articles.article_2.paragraph}</p>
					</article>
					<div className = "w-full flex justify-center">
						<img className = "w-full h-[400px] object-cover" src = {articles.article_2.image} alt = "unsplash photo"/>
					</div>
				</div>

				<div className ="grid grid-cols-2 
									max-sm:grid-cols-1 max-sm:w-screen">
					<article className ="w-full h-full justify-center items-center p-4">
						<h1 className = "text-4xl text-secondary">{articles.article_3.title}</h1>
						<p className = " mt-5 text-justify tracking-wider">{articles.article_3.paragraph}</p>
					</article>
					<div className = "relative w-full flex justify-center">
						<img className = "w-full h-[400px] object-cover object-center " src = {articles.article_3.image} alt = "unsplash photo"/>
					</div>
					
				</div>

				<div className ="grid grid-cols-2 
									max-sm:grid-cols-1 max-sm:w-screen">
					
					<article className ="w-full h-full justify-center items-center p-4">
						<h1 className = "text-4xl text-secondary">{articles.article_4.title}</h1>
						<p className = " mt-5 text-justify tracking-wider">{articles.article_4.paragraph}</p>
					</article>
					<div className = "w-full flex justify-center">
						<img className = "w-full h-[400px] object-cover" src = {articles.article_4.image} alt = "unsplash photo"/>
					</div>
				</div>

				<div className ="grid grid-cols-2 
									max-sm:grid-cols-1 max-sm:w-screen">
					<article className ="w-full h-full justify-center items-center p-4">
						<h1 className = "text-4xl text-secondary">{articles.article_5.title}</h1>
						<p className = " mt-5 text-justify tracking-wider">{articles.article_5.paragraph}</p>
					</article>
					<div className = "w-full flex justify-center">
						<img className = "w-full h-[420px] object-cover" src = {articles.article_5.image} alt = "unsplash photo"/>
					</div>
					
				</div>
			</section>

			<footer className = "h-60  bg-primary grid grid-cols-3 
								max-sm:h-[450px] max-sm:grid-cols-2 max-sm:grid-rows-2 max-sm:py-5">
				<div className = "flex justify-center items-center
									max-sm:justify-center max-sm:flex-col max-sm:col-span-1">
					<FaSquareFacebook className = "nav-icons hover:scale-150 transition-all duration-200
													max-sm:hover:scale-100 max-sm:active:scale-150 max-sm:hover:fill-white max-sm:active:fill-secondary max-sm:mb-5"/>
					<FaSquareInstagram className = "nav-icons hover:scale-150 transition-all duration-200
													max-sm:hover:scale-100 max-sm:active:scale-150 max-sm:hover:fill-white max-sm:active:fill-secondary max-sm:mb-5"/>
					<FaSquareTwitter className = "nav-icons hover:scale-150 transition-all duration-200
													max-sm:hover:scale-100 max-sm:active:scale-150 max-sm:hover:fill-white max-sm:active:fill-secondary"/>
				</div>

				<div className = "max-sm:flex max-sm:justify-start max-sm:w-full max-sm:col-span-1">
					<ul className = "h-full max-sm:w-full flex flex-col ml-16 items-start justify-center max-sm:ml-5">
							<li className = "nav-list p-2 hover:pl-4 transition-all duration-200
												 max-sm:hover:pl-2 max-sm:active:bg-secondary max-sm:active:text-white max-sm:hover:text-white max-sm:w-full">
							Home</li>
							<li className = "nav-list p-2 hover:pl-4 transition-all duration-200
												 max-sm:hover:pl-2 max-sm:active:bg-secondary max-sm:active:text-white max-sm:hover:text-white max-sm:w-full">
							Menu</li>
							<li className = "nav-list p-2 hover:pl-4 transition-all duration-200
												 max-sm:hover:pl-2 max-sm:active:bg-secondary max-sm:active:text-white max-sm:hover:text-white max-sm:w-full">
							Our Story</li>
							<li className = "nav-list p-2 hover:pl-4 transition-all duration-200
												 max-sm:hover:pl-2 max-sm:active:bg-secondary max-sm:active:text-white max-sm:hover:text-white max-sm:w-full">
							Gallery</li>
							<li className = "nav-list p-2 hover:pl-4 transition-all duration-200
												 max-sm:hover:pl-2 max-sm:active:bg-secondary max-sm:active:text-white max-sm:hover:text-white max-sm:w-full">
							Gift Cards</li>
					</ul>
				</div>

				<div className = "flex flex-col justify-center h-full
									max-sm:items-center max-sm:w-full max-sm:justify-center max-sm:col-span-2">
					<h3 className = "p-5 pl-0 pt-0 text-secondary text-2xl self-start max-sm:self-center select-none">Contact-us</h3>
					<input type = "text" placeholder = "Email" className = "w-80 h-10 p-4 mb-2 focus:outline-none hover:brightness-90"></input>
					<textarea placeholder = "Message" className = "w-80 h-30 p-4 focus:outline-none hover:brightness-90"></textarea>
				</div>

				
			</footer>
		</>
	)
}