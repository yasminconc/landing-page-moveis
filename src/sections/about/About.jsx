import React from 'react'
import * as S from './style'
import about1 from '../../assets/about-us1.svg'
import about2 from '../../assets/about-us2.svg'
import { useNavigate } from 'react-router-dom'

const About = () => {
   const navigate = useNavigate()

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
          <span className="subtitle">SOBRE NÓS</span>

          <h2>
            <span className="highlight">NOSSA</span> HISTÓRIA EM
            <br />
            CRIAR OS MELHORES
            <br />
            PRODUTOS EM MADEIRA
          </h2>

          <p>
            Combinamos a tradição da marcenaria com um design contemporâneo. Cada peça de madeira é tratada com rigor, paixão e dedicação para transformar os seus espaços em ambientes únicos e acolhedores.
          </p>

          <button type="button" onClick={() => navigate('/our-history')}>
            SAIBA MAIS
          </button>
        </S.ContentBox>
      </S.AboutContainer>
    </S.AboutSection>
  )
}

export default About
