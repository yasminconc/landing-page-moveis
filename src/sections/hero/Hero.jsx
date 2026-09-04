import React from 'react';
import * as S from './style';

export function Hero() {
  return (
    <S.HeroContainer id="home">
      <S.HeroContent>
        <h1>
          ELEVATE YOUR HOME <br />
          WITH EXQUISITE <br />
          WOOD FURNITURE
        </h1>

        <div className="divider" />

        <p>
          Risus scelerisque a non turpis vitae malesuada sed venenatis. <br/>
          In fringilla sollicitudin euismod sed. At urna adipiscing <br/>
          commodo suspendisse nunc enim tristique et.
        </p>

        <S.DiscoverButton>DISCOVER</S.DiscoverButton>
      </S.HeroContent>
    </S.HeroContainer>
  );
}