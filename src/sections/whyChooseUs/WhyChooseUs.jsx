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
              <h4>DISPATCH</h4>
              <p>We will dispatch your product within 2-3 weeks</p>
            </div>
          </S.BenefitItem>

          <S.BenefitItem>
            <img src={iconTruck} alt="Caminhão" />
            <div>
              <h4>DELIVERY</h4>
              <p>We will deliver your products and take care of the installation</p>
            </div>
          </S.BenefitItem>

          <S.BenefitItem>
            <img src={iconShield} alt="Escudo de garantia" />
            <div>
              <h4>GUARANTEE</h4>
              <p>We offer a guarantee on all our products</p>
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
              <span className="subtitle">WHY CHOOSE US</span>
              <div className="title-with-bar">
                <h2>
                  ELEVATE YOUR <br />
                  HOME WITH OUR <br />
                  WOOD FURNITURE
                </h2>
              </div>
            </S.TitleBlock>

            <S.DescriptionText>
              Risus scelerisque a non turpis vitae malesuada sed venenatis. In fringilla sollicitudin
              euismod sed. At urna adipiscing commodo suspendisse nunc enim tristique et. Orci
              elementum auctor accumsan semper lacus accumsan. Urna adipiscing commodo suspendisse
              nunc enim tristique et.
            </S.DescriptionText>
          </S.HeaderRow>

          {/* Área inferior: 230+ e os 4 diferenciais */}
          <S.BottomRow>
            <S.StatBox>
              <div className="number-wrap">
                <span>230+</span>
              </div>
              <p>Bespoke order production</p>
            </S.StatBox>

            <S.FeaturesGrid>
              <S.FeatureCard>
                <div className="icon-box">
                  <img src={iconDiamond} alt="Diamante" />
                </div>
                <div className="text-box">
                  <h3>High Quality</h3>
                  <p>In fringilla sollicitudin euismod sed. At urna adipiscing commodo suspendisse nunc enim tristique et.</p>
                </div>
              </S.FeatureCard>

              <S.FeatureCard>
                <div className="icon-box">
                  <img src={iconWrench} alt="Ferramentas" />
                </div>
                <div className="text-box">
                  <h3>Professional Technique</h3>
                  <p>In fringilla sollicitudin euismod sed. At urna adipiscing commodo suspendisse nunc enim tristique et.</p>
                </div>
              </S.FeatureCard>

              <S.FeatureCard>
                <div className="icon-box">
                  <img src={iconWood} alt="Amostra de madeira" />
                </div>
                <div className="text-box">
                  <h3>Variety of Wood</h3>
                  <p>In fringilla sollicitudin euismod sed. At urna adipiscing commodo suspendisse nunc enim tristique et.</p>
                </div>
              </S.FeatureCard>

              <S.FeatureCard>
                <div className="icon-box">
                  <img src={iconRuler} alt="Esquadro e lápis" />
                </div>
                <div className="text-box">
                  <h3>Custom Production</h3>
                  <p>In fringilla sollicitudin euismod sed. At urna adipiscing commodo suspendisse nunc enim tristique et.</p>
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
