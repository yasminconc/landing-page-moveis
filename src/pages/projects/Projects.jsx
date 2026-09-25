import React, { useState, useRef, useEffect, useCallback } from 'react'
import * as S from './style'
import { CATEGORIES, showcaseData } from './showcaseData'
import { useNavigate } from 'react-router-dom'

export const ProjectsShowcase = () => {
	const [activeCategory, setActiveCategory] = useState('dining')
	const [desktopIndex, setDesktopIndex] = useState(0)
	const [mobileIndex, setMobileIndex] = useState(0)

	const mobileCarouselRef = useRef(null)
	const mobileItemsRef = useRef([])
	const scrollTimeoutRef = useRef(null)

	const currentCategoryList = showcaseData[activeCategory] || []
	const currentDesktopItem =
		currentCategoryList[desktopIndex] || currentCategoryList[0]

	const navigate = useNavigate()

	// Mudança de categoria reseta índices
	const handleCategoryChange = (categoryId) => {
		setActiveCategory(categoryId)
		setDesktopIndex(0)
		setMobileIndex(0)
		if (mobileCarouselRef.current) {
			mobileCarouselRef.current.scrollTo({ left: 0, behavior: 'smooth' })
		}
	}

	// Scroll Mobile
	const scrollToMobileSlide = (index) => {
		const container = mobileCarouselRef.current
		const targetElement = mobileItemsRef.current[index]
		if (container && targetElement) {
			const targetLeft =
				targetElement.offsetLeft -
				container.offsetWidth / 2 +
				targetElement.offsetWidth / 2
			container.scrollTo({ left: targetLeft, behavior: 'smooth' })
		}
	}

	const handleTrackScroll = useCallback(() => {
		if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
		scrollTimeoutRef.current = setTimeout(() => {
			const container = mobileCarouselRef.current
			if (!container) return
			const containerCenter = container.scrollLeft + container.offsetWidth / 2

			let closestIndex = 0
			let closestDistance = Infinity
			mobileItemsRef.current.forEach((el, index) => {
				if (!el) return
				const elCenter = el.offsetLeft + el.offsetWidth / 2
				const distance = Math.abs(elCenter - containerCenter)
				if (distance < closestDistance) {
					closestDistance = distance
					closestIndex = index
				}
			})
			setMobileIndex(closestIndex)
		}, 100)
	}, [])

	useEffect(() => {
		const container = mobileCarouselRef.current
		if (!container) return
		container.addEventListener('scroll', handleTrackScroll)
		return () => container.removeEventListener('scroll', handleTrackScroll)
	}, [handleTrackScroll])

	const handleNextMobile = () => {
		setMobileIndex((prev) => {
			const next = (prev + 1) % currentCategoryList.length
			scrollToMobileSlide(next)
			return next
		})
	}

	const handlePrevMobile = () => {
		setMobileIndex((prev) => {
			const prevIndex =
				(prev - 1 + currentCategoryList.length) % currentCategoryList.length
			scrollToMobileSlide(prevIndex)
			return prevIndex
		})
	}

	const handleNextDesktop = () => {
		setDesktopIndex((prev) => (prev + 1) % currentCategoryList.length)
	}

	const handlePrevDesktop = () => {
		setDesktopIndex(
			(prev) =>
				(prev - 1 + currentCategoryList.length) % currentCategoryList.length
		)
	}

	return (
		<S.ShowcaseSection id='showcase'>
			{/* 1. BARRA SUPERIOR DESKTOP COM A SETA CENTRALIZADA */}
			<S.DesktopTopBarWrapper>
				<S.BackButton
					type='button'
					onClick={() => navigate('/')}
					aria-label='Voltar para a página inicial'
				>
					<svg
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2.2'
					>
						<line x1='19' y1='12' x2='5' y2='12' />
						<polyline points='12 19 5 12 12 5' />
					</svg>
				</S.BackButton>

				<S.DesktopCategoryBar>
					{CATEGORIES.map((cat) => (
						<S.CategoryTab
							key={cat.id}
							$isActive={activeCategory === cat.id}
							$isDining={cat.id === 'dining'}
							onClick={() => handleCategoryChange(cat.id)}
						>
							<img src={cat.icon} alt={cat.label} />
							<span>{cat.label}</span>
						</S.CategoryTab>
					))}
				</S.DesktopCategoryBar>
			</S.DesktopTopBarWrapper>

			{/* 2. VISÃO DESKTOP (Mais contida, respiros generosos) */}
			<S.DesktopWrapper>
				<S.Container>
					{/* Coluna Esquerda: Imagem Vertical e Setas */}
					<S.LeftCol>
						<S.MainImageWrapper>
							<img
								src={currentDesktopItem.img}
								alt={currentDesktopItem.title}
								key={`main-${currentDesktopItem.id}`}
							/>
						</S.MainImageWrapper>

						<S.ControlsWrapper>
							<S.ArrowButton
								type='button'
								onClick={handlePrevDesktop}
								aria-label='Anterior'
							>
								<svg
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2.5'
								>
									<polyline points='15 18 9 12 15 6' />
								</svg>
							</S.ArrowButton>
							<S.ArrowButton
								type='button'
								onClick={handleNextDesktop}
								aria-label='Próximo'
							>
								<svg
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2.5'
								>
									<polyline points='9 18 15 12 9 6' />
								</svg>
							</S.ArrowButton>
						</S.ControlsWrapper>
					</S.LeftCol>

					{/* Coluna Direita: Header, Foto de Detalhe e Ficha Técnica */}
					<S.RightCol>
						<S.HeaderBox>
							<span className='subtitle'>
								{currentDesktopItem.subtitle || 'PROJECTS SHOWCASE'}
							</span>
							<div className='title-row'>
								<h2>{currentDesktopItem.title}</h2>
							</div>
						</S.HeaderBox>

						<S.DetailImageWrapper>
							<img
								src={currentDesktopItem.img}
								alt={`Detalhe ${currentDesktopItem.title}`}
								key={`detail-${currentDesktopItem.id}`}
								style={{
									objectPosition:
										currentDesktopItem.detailFocus || 'center center'
								}}
							/>
						</S.DetailImageWrapper>

						<S.SpecsCard>
							<span className='specs-tag'>PROJECT TECHNICAL FILE</span>
							<p className='description'>{currentDesktopItem.expectation}</p>

							<div className='specs-list'>
								<p>
									<strong>WOOD UTILIZED:</strong> {currentDesktopItem.wood}
								</p>
								<p>
									<strong>FINISH:</strong> {currentDesktopItem.finish}
								</p>
								{currentDesktopItem.highlight && (
									<p>
										<strong>HIGHLIGHT:</strong> {currentDesktopItem.highlight}
									</p>
								)}
							</div>

							{currentDesktopItem.client && (
								<span className='client-footer'>
									— CLIENT: {currentDesktopItem.client}
								</span>
							)}
						</S.SpecsCard>
					</S.RightCol>
				</S.Container>
			</S.DesktopWrapper>

			{/* 3. VISÃO MOBILE */}
			<S.MobileWrapper>
				<S.MobileHeader>
					<S.MobileBackButton
						type='button'
						onClick={() => navigate('/')}
						aria-label='Voltar para a página inicial'
					>
						<svg
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2.2'
						>
							<line x1='19' y1='12' x2='5' y2='12' />
							<polyline points='12 19 5 12 12 5' />
						</svg>
					</S.MobileBackButton>

					<span className='subtitle'>PROJECT DETAILS</span>
					<h2>CUSTOM WOODWORK</h2>
				</S.MobileHeader>

				<S.MobileSliderArea>
					<S.MobileFloatingBtn
						direction='left'
						onClick={handlePrevMobile}
						aria-label='Anterior'
					>
						<svg
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2.5'
						>
							<polyline points='15 18 9 12 15 6' />
						</svg>
					</S.MobileFloatingBtn>

					<S.MobileFloatingBtn
						direction='right'
						onClick={handleNextMobile}
						aria-label='Próximo'
					>
						<svg
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2.5'
						>
							<polyline points='9 18 15 12 9 6' />
						</svg>
					</S.MobileFloatingBtn>

					<S.MobileTrack ref={mobileCarouselRef} onScroll={handleTrackScroll}>
						{currentCategoryList.map((item, index) => (
							<S.MobileSlide
								key={`mob-${item.id}`}
								ref={(el) => (mobileItemsRef.current[index] = el)}
								$isActive={mobileIndex === index}
							>
								<S.MobileImageFrame>
									<img src={item.img} alt={item.title} />
								</S.MobileImageFrame>

								<S.MobileCard>
									<span className='specs-tag'>{item.title}</span>
									<p>{item.expectation}</p>
									<div className='mobile-specs'>
										<span>
											<strong>Wood:</strong> {item.wood}
										</span>
									</div>
								</S.MobileCard>
							</S.MobileSlide>
						))}
					</S.MobileTrack>
				</S.MobileSliderArea>
			</S.MobileWrapper>

			{/* 4. BARRA DE CATEGORIAS MOBILE (Bottom Bar fixa ou docked na base) */}
			<S.MobileBottomNav>
				{CATEGORIES.map((cat) => (
					<S.MobileNavTab
						key={cat.id}
						$isActive={activeCategory === cat.id}
						$isDining={cat.id === 'dining'}
						onClick={() => handleCategoryChange(cat.id)}
					>
						<img src={cat.icon} alt={cat.label} />
						<span>{cat.label}</span>
					</S.MobileNavTab>
				))}
			</S.MobileBottomNav>
		</S.ShowcaseSection>
	)
}

export default ProjectsShowcase
