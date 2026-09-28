import React, {useEffect} from 'react';
import * as S from './style';
import { useCountUp } from '../../hooks/useCountUp'// Ajuste o caminho conforme sua estrutura
import { useNavigate } from 'react-router-dom';

const OurHistory = () => {
  const navigate = useNavigate()
  const [{ projects, years }, statsRef] = useCountUp({ projects: 1000, years: 25 }, 1600)

  // Rola para o topo sempre que a tela de OurHistory for aberta
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // ou 'smooth' se preferir transição suave
    });
  }, []);

  return (
    <S.Container id="nossa-historia">
      {/* ================= 01/02: NOSSA TRAJETÓRIA ================= */}
      <S.TrajectorySection id="trajetoria">
        <S.InnerContent>
          <S.HeaderRow>
           <S.HeaderLeftGroup>
            <S.BackButton
              type="button"
              onClick={() => navigate('/')}
              aria-label="Voltar para a página inicial"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </S.BackButton>

            <div className="badge-tag">Nossa Trajetória</div>
          </S.HeaderLeftGroup>
          </S.HeaderRow>

          <S.TrajectoryGrid>
            <S.TrajectoryImageWrapper>
              <img
                src="https://images.squarespace-cdn.com/content/v1/617f725cb6e7520df41b25b7/e9184b0e-8d7a-4c47-9261-0b4459079e02/cocraft-woodworking-groupclass.jpg"
                alt="Equipe reunida na oficina artesanal Wooland"
                loading="lazy"
              />
            </S.TrajectoryImageWrapper>

            <S.TrajectoryInfo>
              <h1>Das origens familiares à excelência moderna</h1>
              <p className="description">
                Fundada nos anos 2000 em um pequeno quintal, a Wooland cresceu
                mantendo sua essência artesanal unida à mais alta tecnologia de
                produção em galpão exclusivo.
              </p>

              {/* Passamos o statsRef aqui para disparar quando entrar na tela */}
              <div className="stats-row" ref={statsRef}>
                <div className="stat-item">
                  <span className="stat-number">
                    +{(projects ?? 0).toLocaleString('pt-BR')}
                  </span>
                  <span className="stat-label">Projetos Entregues</span>
                </div>

                <div className="stat-divider" />

                <div className="stat-item">
                  <span className="stat-number">{years ?? 0} Anos</span>
                  <span className="stat-label">Tradição e Paixão</span>
                </div>
              </div>
            </S.TrajectoryInfo>
          </S.TrajectoryGrid>

          <S.SectionFooterIndicator>
            <span className="tagline">Tradição familiar e tecnologia de ponta</span>
          </S.SectionFooterIndicator>
        </S.InnerContent>
      </S.TrajectorySection>

     {/* ================= 02/02: DIFERENCIAIS WOOLAND ================= */}
      <S.DifferentialsSection id="diferenciais">
        <S.InnerContent>
          {/* Topo do slide */}
          <S.HeaderRow>
            <S.HeaderLeftGroup>
            <S.BackButton
              type="button"
              onClick={() => navigate('/')}
              aria-label="Voltar para a página inicial"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </S.BackButton>

            <div className="badge-tag">Diferenciais Wooland</div>
          </S.HeaderLeftGroup>
          </S.HeaderRow>

          {/* Título e subtítulo alinhados à esquerda */}
          <S.DifferentialsHeader>
            <h2>Por que confiar seu projeto à nossa família?</h2>
            <p className="description">
              Unimos o cuidado artesanal de um negócio familiar à potência industrial de
              última geração.
            </p>
          </S.DifferentialsHeader>

          <S.DifferentialsCardsGrid>
            {/* Card 1: Maquinário Moderno */}
            <S.DifferentialCard>
              <div className="card-icon">
                {/* Ícone de chip/máquina com dentes */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <rect x="9" y="9" width="6" height="6" />
                  <line x1="9" y1="1" x2="9" y2="4" />
                  <line x1="15" y1="1" x2="15" y2="4" />
                  <line x1="9" y1="20" x2="9" y2="23" />
                  <line x1="15" y1="20" x2="15" y2="23" />
                  <line x1="20" y1="9" x2="23" y2="9" />
                  <line x1="20" y1="15" x2="23" y2="15" />
                  <line x1="1" y1="9" x2="4" y2="9" />
                  <line x1="1" y1="15" x2="4" y2="15" />
                </svg>
              </div>
              <h3>Maquinário Moderno</h3>
              <p>
                Galpão exclusivo com tecnologia avançada para corte e acabamento
                perfeitos.
              </p>
            </S.DifferentialCard>

            {/* Card 2: Equipe Especializada */}
            <S.DifferentialCard>
              <div className="card-icon">
                {/* Ícone de equipe/pessoas */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Equipe Especializada</h3>
              <p>
                10 profissionais dedicados desde a seleção de fornecedores até a
                entrega final.
              </p>
            </S.DifferentialCard>

            {/* Card 3: Rapidez e Eficiência */}
            <S.DifferentialCard>
              <div className="card-icon">
                {/* Ícone de raio/velocidade */}
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3>Rapidez e Eficiência</h3>
              <p>
                Processos refinados ao longo de décadas para prazos ágeis sem
                perder o capricho.
              </p>
            </S.DifferentialCard>
          </S.DifferentialsCardsGrid>

          {/* Rodapé do slide */}
          <S.SectionFooterIndicator>
            <span className="tagline">Compromisso absoluto com a satisfação do cliente</span>
          </S.SectionFooterIndicator>
        </S.InnerContent>
      </S.DifferentialsSection>
    </S.Container>
  );
};

export default OurHistory;