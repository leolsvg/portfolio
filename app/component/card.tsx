"use client";

import Link from "next/link";
import styled from "styled-components";

type CardProps = {
  title: string;
  description: string; // 🔑 ajout description
  rotation?: number;
  image: string;
  link: string;
};

const Card = ({ title, description, rotation = 0, image, link }: CardProps) => {
  return (
    <StyledWrapper>
      <div className="container">
        <Link
          href={link}
          className="glass"
          style={
            { "--r": rotation, "--bg": `url(${image})` } as React.CSSProperties
          }
        >
          {/* Overlay texte */}
          <div className="overlay">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </Link>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container .glass {
    position: relative;
    width: 300px; /* 🔥 plus large */
    height: 420px; /* 🔥 plus haut */
    background: var(--bg) center/cover no-repeat;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    transition: 0.5s;
    border-radius: 16px;
    margin: 0 -45px;
    backdrop-filter: blur(10px);
    transform: rotate(calc(var(--r) * 1deg));
    overflow: hidden;
    cursor: pointer;
  }

  .container .glass:hover {
    transform: rotate(0deg) scale(1.05);
    margin: 0 10px;
  }

  /* Overlay texte */
  .container .overlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 16px;
    background: rgba(0, 0, 0, 0.55);
    color: #fff;
    z-index: 1;
    transition: transform 0.3s ease;
  }

  .container .overlay h3 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .container .overlay p {
    font-size: 0.9rem;
    line-height: 1.3rem;
    color: #ddd;
  }

  /* Petit effet hover : le texte remonte un peu */
  .container .glass:hover .overlay {
    transform: translateY(-5px);
  }
`;

export default Card;
