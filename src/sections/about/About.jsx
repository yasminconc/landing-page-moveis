import React from 'react'
import * as S from './style'
import about1 from '../../assets/about-us1.svg'
import about2 from '../../assets/about-us2.svg'

const About = () => {
  return (
   <S.AboutSection id="about">
      <S.AboutContainer>
        {/* Lado Esquerdo: Imagens Divididas */}
        <S.ImageGallery>
          <img src={about1} alt="Marceneiro trabalhando com madeira" />
          <img src={about2} alt="Marcenaria artesanal em detalhes" />
        </S.ImageGallery>

        {/* Lado Direito: Textos e CTA */}
        <S.ContentBox>
          <span className="subtitle">ABOUT US</span>

          <h2>
            <span className="highlight">OUR</span> HISTORY OF
            <br />
            MAKING THE BEST
            <br />
            WOOD PRODUCT
          </h2>

          <p>
            Risus scelerisque a non turpis vitae malesuada sed venenatis.
            In fringilla sollicitudin euismod sed. At urna adipiscing
            commodo suspendisse nunc enim tristique et.
          </p>

          <button type="button">READ MORE</button>
        </S.ContentBox>
      </S.AboutContainer>
    </S.AboutSection>
  )
}

export default About
