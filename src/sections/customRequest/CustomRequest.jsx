import * as S from './style'

import requestTop from '../../assets/custom1.svg'
import requestBottom from '../../assets/custom2.svg'

// Foto Mobile (aquela da mulher na bancada)
import requestMobileImg from '../../assets/custom3.svg'

const CustomRequest = () => {
  return (
    <S.RequestSection id="custom-request">
      <S.RequestContainer>
        {/* Lado Esquerdo: Conteúdo e Chamada */}
        <S.ContentBox>
          <span className="subtitle">CUSTOMIZED REQUEST</span>

          <h2>
            CREATE FURNITURE AS <br />
            UNIQUE AS YOU ARE
          </h2>

          <div className="accent-line" />

          <p>
            Risus scelerisque a non turpis vitae malesuada sed venenatis. In fringilla
            sollicitudin euismod sed. At urna adipiscing commodo suspendisse nunc enim tristique et.
          </p>

          <button type="button">SEND REQUEST</button>
        </S.ContentBox>

        {/* 1. Visível apenas no Desktop (duas imagens fatiadas) */}
        <S.ImagesComposition>
          <img src={requestTop} alt="Artesão ajustando cinto de ferramentas" />
          <img src={requestBottom} alt="Detalhe de lixamento de cadeira de madeira" />
        </S.ImagesComposition>

        {/* 2. Visível apenas no Mobile (imagem completa e contextual) */}
        <S.MobileImageWrapper>
          <img
            src={requestMobileImg}
            alt="Mulher artesã trabalhando na marcenaria lixando madeira"
          />
        </S.MobileImageWrapper>
        
      </S.RequestContainer>
    </S.RequestSection>
  )
}

export default CustomRequest
