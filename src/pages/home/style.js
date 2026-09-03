import styled from 'styled-components'

 export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const HeroPlaceholder = styled.div`
  padding: 80px 24px;
  text-align: center;

  h1 {
    color: ${({theme}) =>  theme.colors.surface};
  }
  
  p {
    margin-top: 16px;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;