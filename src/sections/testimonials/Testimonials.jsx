import React, { useState, useRef, useEffect, useCallback } from 'react'

import * as S from './style'

import client1Main from '../../assets/kitchen.jpg'
import client1Sec from '../../assets/kitchen2.jpg'

import client2Main from '../../assets/lounge1.jpeg'
import client2Sec from '../../assets/lounge2.jpeg'

import client3Main from '../../assets/living-room1.jpeg'
import client3Sec from '../../assets/living-room2.jpeg'

const testimonialsData = [
  {
    id: 1,
    author: 'Sarah Jenkins',
    mainImg: client1Main,
    secImg: client1Sec,
    secFocus: 'center 80%',
    text: 'I recently purchased a bedroom set from Woodland Furniture, and I am amazed by the quality and beauty of the pieces. The wood grain is stunning, and the attention to detail is remarkable.',
  },
  {
    id: 2,
    author: 'David Miller',
    mainImg: client2Main,
    secImg: client2Sec,
    secFocus: 'left 60%',
    text: 'The dining table crafted by their team completely redefined our living area. The custom finish and joinery work exceeded all expectations. Every guest who visits compliments the warmth and elegance of the natural wood.',
  },
  {
    id: 3,
    author: 'Elena Rostova',
    mainImg: client3Main,
    secImg: client3Sec,
    secFocus: 'center 75%',
    text: 'Exceptional personalized service from start to finish. They built a custom study desk and library shelving unit that fits our space to the millimeter. Delivered on schedule and assembled with care.',
  },
]

export const Testimonials = () => {
  const [desktopIndex, setDesktopIndex] = useState(0)
  const [mobileIndex, setMobileIndex] = useState(0)
  
  const mobileCarouselRef = useRef(null)
  const mobileItemsRef = useRef([])

  // Função idêntica ao Products: centraliza rigorosamente o item ativo
  const scrollToMobileSlide = (index) => {
    const container = mobileCarouselRef.current
    const targetElement = mobileItemsRef.current[index]

    if (container && targetElement) {
      const targetLeft =
        targetElement.offsetLeft -
        container.offsetWidth / 2 +
        targetElement.offsetWidth / 2

      container.scrollTo({
        left: targetLeft,
        behavior: 'smooth',
      })
    }
  }

  // dentro do componente, depois dos refs existentes:
const scrollTimeoutRef = useRef(null)

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
  }, 100) // debounce leve para não recalcular a cada pixel
}, [])

useEffect(() => {
  const container = mobileCarouselRef.current
  if (!container) return
  container.addEventListener('scroll', handleTrackScroll)
  return () => container.removeEventListener('scroll', handleTrackScroll)
}, [handleTrackScroll])

  const handleNextMobile = () => {
    setMobileIndex((prev) => {
      const nextIndex = (prev + 1) % testimonialsData.length
      scrollToMobileSlide(nextIndex)
      return nextIndex
    })
  }

  const handlePrevMobile = () => {
    setMobileIndex((prev) => {
      const prevIndex = (prev - 1 + testimonialsData.length) % testimonialsData.length
      scrollToMobileSlide(prevIndex)
      return prevIndex
    })
  }

  const handleNextDesktop = () => {
    setDesktopIndex((prev) => (prev + 1) % testimonialsData.length)
  }

  const handlePrevDesktop = () => {
    setDesktopIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length)
  }

  const currentDesktopItem = testimonialsData[desktopIndex]

  return (
    <S.TestimonialsSection id="testimonials">
      {/* ================= 1. DESKTOP VIEW ================= */}
      <S.DesktopWrapper>
        <S.Container>
          <S.LeftCol>
            <S.MainImageWrapper>
              <img
                src={currentDesktopItem.mainImg}
                alt={currentDesktopItem.author}
                key={`main-${currentDesktopItem.id}`}
              />
            </S.MainImageWrapper>

            <S.ControlsWrapper>
              <S.ArrowButton type="button" onClick={handlePrevDesktop} aria-label="Anterior">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </S.ArrowButton>

              <S.ArrowButton type="button" onClick={handleNextDesktop} aria-label="Próximo">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </S.ArrowButton>
            </S.ControlsWrapper>
          </S.LeftCol>

          <S.RightCol>
            <S.HeaderBox>
              <span className="subtitle">TESTIMONIALS</span>
              <div className="title-row">
                <h2>LISTEN TO OUR CUSTOMER</h2>
              </div>
            </S.HeaderBox>

            <S.SecondaryImageWrapper>
              <img
                src={currentDesktopItem.secImg}
                alt="Projeto realizado"
                key={`sec-${currentDesktopItem.id}`}
                style={{ objectPosition: currentDesktopItem.secFocus || 'center center' }}
              />
            </S.SecondaryImageWrapper>

            <S.TestimonialCard>
              <span className="quote-mark">“</span>
              <p>{currentDesktopItem.text}</p>
              <span className="author">— {currentDesktopItem.author}</span>
            </S.TestimonialCard>
          </S.RightCol>
        </S.Container>
      </S.DesktopWrapper>

      {/* ================= 2. MOBILE VIEW ================= */}
      <S.MobileWrapper>
        <S.MobileHeader>
          <span className="subtitle">TESTIMONIALS</span>
          <h2>LISTEN TO OUR CUSTOMER</h2>
        </S.MobileHeader>

        <S.MobileSliderArea>
          <S.MobileFloatingBtn
            direction="left"
            onClick={handlePrevMobile}
            aria-label="Anterior"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </S.MobileFloatingBtn>

          <S.MobileFloatingBtn
            direction="right"
            onClick={handleNextMobile}
            aria-label="Próximo"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </S.MobileFloatingBtn>

          <S.MobileTrack ref={mobileCarouselRef} onScroll={handleTrackScroll}>
            {testimonialsData.map((item, index) => (
              <S.MobileSlide
                key={`mob-${item.id}`}
                ref={(el) => (mobileItemsRef.current[index] = el)}
                $isActive={mobileIndex === index}
              >
                <S.MobileImageFrame>
                  <img src={item.mainImg} alt={item.author} />
                </S.MobileImageFrame>

                <S.MobileCard>
                  <span className="quote-mark">“</span>
                  <p>{item.text}</p>
                </S.MobileCard>
              </S.MobileSlide>
            ))}
          </S.MobileTrack>
        </S.MobileSliderArea>
      </S.MobileWrapper>
    </S.TestimonialsSection>
  )
}

export default Testimonials