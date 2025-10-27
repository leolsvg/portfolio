"use client";

import Link from "next/link";
import styled from "styled-components";

type CardProps = {
  title: string;
  rotation?: number;
  image: string;
  link: string; // 🔑 ajout de la prop link
};

const Card = ({ title, rotation = 0, image, link }: CardProps) => {
  return (
    <StyledWrapper>
      <div className="container">
        <Link
          href={link}
          data-text={title}
          style={
            { "--r": rotation, "--bg": `url(${image})` } as React.CSSProperties
          }
          className="glass"
        />
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
    width: 260px;
    height: 380px;
    background: var(--bg) center/cover no-repeat;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    border-radius: 14px;
    margin: 0 -45px;
    backdrop-filter: blur(10px);
    transform: rotate(calc(var(--r) * 1deg));
    overflow: hidden;
    cursor: pointer; /* 👉 indique que c’est cliquable */
  }

  .container .glass:hover {
    transform: rotate(0deg) scale(1.05); /* zoom léger au hover */
    margin: 0 10px;
  }

  .container .glass::before {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    z-index: 1;
  }
`;

export default Card;
