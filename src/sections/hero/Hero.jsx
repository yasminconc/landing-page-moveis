import React from 'react';
import * as S from './style';

export function Hero() {
  return (
    <S.HeroContainer id="home">
      <S.HeroContent>
        <h1>
          TRANSFORME SUA CASA <br />
          COM MÓVEIS <br />
          DE ALTO PADRÃO
        </h1>

        <div className="divider" />

        <p>
          Design atemporal e acabamento artesanal em cada detalhe.{' '}
          <br/>
          Peças exclusivas criadas para levar sofisticação, conforto{' '}<br/>
          e aconchego aos seus ambientes.
        </p>

        <S.DiscoverButton>DESCUBRA</S.DiscoverButton>
      </S.HeroContent>
    </S.HeroContainer>
  );
}