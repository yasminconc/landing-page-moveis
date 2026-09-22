import React, { useState, useEffect, useRef } from 'react'
import * as S from './style'

import imgKitchen from '../../assets/cozinha7.jpeg'
import imgTvTop from '../../assets/sala5.jpeg'
import imgOfficeDesk from '../../assets/escritorio6.jpeg'
import imgStudy from '../../assets/escritorio3.jpeg'
import imgRedKitchen from '../../assets/cozinha11.jpeg'
import imgTvBottom from '../../assets/sala2.jpeg'

const productsList = [
  { id: 1, img: imgKitchen, alt: 'Cozinha azul e madeira', className: 'item-kitchen' },
  { id: 2, img: imgTvTop, alt: 'Painel de TV superior', className: 'item-tv-top' },
  { id: 3, img: imgOfficeDesk, alt: 'Escritório ripado', className: 'item-office-desk' },
  { id: 4, img: imgStudy, alt: 'Estação de trabalho com estante', className: 'item-study' },
  { id: 5, img: imgRedKitchen, alt: 'Cozinha terracota', className: 'item-red-kitchen' },
  { id: 6, img: imgTvBottom, alt: 'Móvel de TV com fita de LED', className: 'item-tv-bottom' },
]

const Products = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)
  const itemsRef = useRef([])

  // Função para rolar até o slide correspondente de forma centralizada
  // Função corrigida: move estritamente o scroll interno sem mexer na página
  const scrollToSlide = (index) => {
    const container = carouselRef.current
    const targetElement = itemsRef.current[index]

    if (container && targetElement) {
      // Calcula a posição exata para centralizar o slide dentro do container
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

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const nextIndex = (prev + 1) % productsList.length
      scrollToSlide(nextIndex)
      return nextIndex
    })
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const prevIndex = (prev - 1 + productsList.length) % productsList.length
      scrollToSlide(prevIndex)
      return prevIndex
    })
  }

    // Autoplay com proteção: só roda se o usuário estiver de fato com a seção Products na tela
  useEffect(() => {
    const isMobile = window.innerWidth <= 768
    if (!isMobile) return

    const interval = setInterval(() => {
      // Verifica se a seção está visível na viewport antes de passar o slide
      const container = carouselRef.current;
      if (container) {
        const rect = container.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0

        // Só avança o slide se a seção estiver visível na tela
        if (isVisible) {
          handleNext()
        }
      }
    }, 3500)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <S.ProductsSection id="products">
      <S.ProductsContainer>
        {/* Cabeçalho */}
        <S.HeaderBox>
          <span className="subtitle">FEATURED PRODUCT</span>

          <h2>
            EXPLORE BEST PRODUCT <br />
            FROM OUR MASTER CRAFTSMAN
          </h2>

          <p>
            Risus scelerisque a non turpis vitae malesuada sed venenatis. In fringilla sollicitudin
            euismod sed. At urna adipiscing commodo suspendisse nunc enim tristique et.
          </p>

          <S.ActionButton type="button" className="desktop-only">
            EXPLORE ALL PRODUCT
          </S.ActionButton>
        </S.HeaderBox>

        {/* Carrossel & Mosaico */}
        <S.CarouselWrapper>
          {/* Botão Seta Esquerda */}
          <S.ArrowButton
            type="button"
            className="prev"
            onClick={handlePrev}
            aria-label="Foto anterior"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </S.ArrowButton>

          <S.MosaicGrid ref={carouselRef}>
            {productsList.map((item, index) => (
              <S.GridItem
                key={item.id}
                ref={(el) => (itemsRef.current[index] = el)}
                className={item.className}
                $isActive={currentIndex === index}
              >
                <img src={item.img} alt={item.alt} />
              </S.GridItem>
            ))}
          </S.MosaicGrid>

          {/* Botão Seta Direita */}
          <S.ArrowButton
            type="button"
            className="next"
            onClick={handleNext}
            aria-label="Próxima foto"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </S.ArrowButton>
        </S.CarouselWrapper>

        {/* Botão de Ação no Mobile posicionado após o Carrossel */}
        <S.ActionButton type="button" className="mobile-only">
          EXPLORE ALL PRODUCT
        </S.ActionButton>
      </S.ProductsContainer>
    </S.ProductsSection>
  );
}

export default Products
