import React from 'react';
import * as S from './style';

// Importe uma imagem do mapa (ou use um screenshot vintage/sépia recortado do Figma)
import mapImg from '../../assets/map.svg';

export function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <S.FooterSection id="footer">
      <S.FooterGrid>
        {/* ================= 1. COLUNA ESQUERDA ================= */}
        <S.BrandCol>
          {/* Flâmula com corte geométrico de escudo */}
          <S.BrandBadge>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M7 8h10" />
              <path d="M7 12h10" />
              <path d="M7 16h6" />
            </svg>
            <span className="brand-name">WOODLAND</span>
            <span className="brand-sub">FURNITURE</span>
          </S.BrandBadge>

          <S.BrandContent>
            <p>
              Uncover the joy of woodworking at Wood Academy. Discover the enriching experience of
              creating something with your own hands. Join our vibrant community and embark on a
              journey of creativity, fulfillment, and lifelong learning.
            </p>

            <div className="divider-line" />

            <span className="copyright">
              Copyright © 2023 WoodAcademy. All rights reserved.
            </span>
          </S.BrandContent>
        </S.BrandCol>

        {/* ================= 2. COLUNA CENTRAL ================= */}
        <S.MainCol>
          <S.NewsletterBox>
            <h3>Subscribe to Wood Academy</h3>
            <p>
              Get exclusive deals and sales &amp; weekly tips and techniques from expert
              woodworkers.
            </p>
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder="E-mail" required />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </S.NewsletterBox>

          <S.LinksGrid>
            <S.LinkGroup>
              <h4>ABOUT US</h4>
              <ul>
                <li><a href="#academy">Our Academy</a></li>
                <li><a href="#instructor">Our Instructor</a></li>
                <li><a href="#blog">Our Blog</a></li>
              </ul>
            </S.LinkGroup>

            <S.LinkGroup>
              <h4>INFORMATION</h4>
              <ul>
                <li><a href="#terms">Term of Use</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#instructions">Instructions</a></li>
              </ul>
            </S.LinkGroup>

            <S.LinkGroup>
              <h4>CONTACT</h4>
              <ul>
                <li className="contact-item">
                  <strong>A :</strong> 6/8 Wilmette Pl, Mona Vale NSW 2103
                </li>
                <li className="contact-item">
                  <strong>E :</strong> info@woodacademy.com
                </li>
                <li className="contact-item">
                  <strong>P :</strong> 1800 888 888
                </li>
              </ul>
            </S.LinkGroup>
          </S.LinksGrid>
        </S.MainCol>

        {/* ================= 3. COLUNA DIREITA (MAPA) ================= */}
        <S.MapCol>
          <img src={mapImg} alt="Localização Wood Academy" className="map-bg" />
          <S.MapPin />
        </S.MapCol>
      </S.FooterGrid>
    </S.FooterSection>
  );
}

export default Footer;