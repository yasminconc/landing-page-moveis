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
          <span className="subtitle">PEDIDO PERSONALIZADO</span>

          <h2>
            CRIE MOBÍLIA TÃO <br />
            ÚNICA QUANTO VOCÊ
          </h2>

          <div className="accent-line" />

          <p>
            Dê vida à sua visão com peças exclusivas feitas sob medida para o seu espaço. Transformamos os seus desejos em realidade com qualidade artesanal e design adaptado ao seu estilo de vida.
          </p>

          <button type="button">ENVIAR PEDIDO</button>
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
