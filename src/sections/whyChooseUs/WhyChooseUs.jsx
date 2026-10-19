import React from 'react'
import * as S from './style'


import iconClock from '../../assets/clock.svg'
import iconTruck from '../../assets/delivery-truck.svg'
import iconShield from '../../assets/verified.svg'

import iconDiamond from '../../assets/diamond-icon.svg'
import iconWrench from '../../assets/tools-icon.svg'
import iconWood from '../../assets/box-icon.svg'
import iconRuler from '../../assets/pencil-icon.svg'

const WhyChooseUs = () => {
  return (
    <S.Container id="why-us">
      <S.BenefitsBar>
        <S.BenefitsContent>
          <S.BenefitItem>
            <img src={iconClock} alt="Relógio" />
            <div>
              <h4>ENVIO</h4>
              <p>Enviamos o seu produto dentro de 2 a 3 semanas</p>
            </div>
          </S.BenefitItem>

          <S.BenefitItem>
            <img src={iconTruck} alt="Caminhão" />
            <div>
              <h4>ENTREGA</h4>
              <p>Entregamos os seus produtos e fazemos a instalação</p>
            </div>
          </S.BenefitItem>

          <S.BenefitItem>
            <img src={iconShield} alt="Escudo de garantia" />
            <div>
              <h4>GARANTIA</h4>
              <p>Oferecemos garantia em todos os nossos produtos</p>
            </div>
          </S.BenefitItem>
        </S.BenefitsContent>
      </S.BenefitsBar>

      {/* 2. Área principal de Why Choose Us */}
      <S.MainSection>
        <S.MainContent>
          {/* Cabeçalho */}
          <S.HeaderRow>
            <S.TitleBlock>
              <span className="subtitle">PORQUÊ NOS ESCOLHER</span>
              <div className="title-with-bar">
                <h2>
                  ELEVE SUA <br />
                  CASA COM NOSSOS <br />
                  MOVÉIS PLANEJADOS
                </h2>
              </div>
            </S.TitleBlock>

            <S.DescriptionText>
              Transformamos os seus espaços com peças exclusivas em madeira, combinando elegância, durabilidade e qualidade superior. Contamos com mais de 20 anos de experiência comprovada no mercado de marcenaria artesanal e mobiliário por medida, unindo a tradição do trabalho em madeira à inovação do design contemporâneo. Cada projeto é desenvolvido com rigor e atenção ao detalhe, refletindo a nossa paixão por criar ambientes únicos, acolhedores e feitos para durar uma vida inteira
            </S.DescriptionText>
          </S.HeaderRow>

          {/* Área inferior: 230+ e os 4 diferenciais */}
          <S.BottomRow>
            <S.StatBox>
              <div className="number-wrap">
                <span>230+</span>
              </div>
              <p>Melhor produção por medida.</p>
            </S.StatBox>

            <S.FeaturesGrid>
              <S.FeatureCard>
                <div className="icon-box">
                  <img src={iconDiamond} alt="Diamante" />
                </div>
                <div className="text-box">
                  <h3>Alta Qualidade</h3>
                  <p>Selecionamos as melhores matérias -primas para garantir peças duradouras e sofisticadas.</p>
                </div>
              </S.FeatureCard>

              <S.FeatureCard>
                <div className="icon-box">
                  <img src={iconWrench} alt="Ferramentas" />
                </div>
                <div className="text-box">
                  <h3>Técnica Profissional</h3>
                  <p>Unimos experiência e tecnologia avançada, aplicando técnicas especializadas da marcenaria em cada etapa da criação.</p>
                </div>
              </S.FeatureCard>

              <S.FeatureCard>
                <div className="icon-box">
                  <img src={iconWood} alt="Amostra de madeira" />
                </div>
                <div className="text-box">
                  <h3>Variedade de Madeira</h3>
                  <p>Trabalhamos com uma ampla gama de madeiras nobres e selecionadas, oferecendo texturas e tons únicos para combinar com o seu estilo.</p>
                </div>
              </S.FeatureCard>

              <S.FeatureCard>
                <div className="icon-box">
                  <img src={iconRuler} alt="Esquadro e lápis" />
                </div>
                <div className="text-box">
                  <h3>Produção Personalizada</h3>
                  <p>Desenvolvemos projetos totalmente à medida e adaptados às suas necessidades, transformando ideias em mobiliário exclusivo para o seu espaço.</p>
                </div>
              </S.FeatureCard>
            </S.FeaturesGrid>
          </S.BottomRow>
        </S.MainContent>
      </S.MainSection>
    </S.Container>
  )
}

export default WhyChooseUs
