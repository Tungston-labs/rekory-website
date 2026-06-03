"use client";

import styled from "styled-components";

export const Section = styled.section`
  background: #151d34;
  padding: 80px 100px;
  position: relative;
  overflow: hidden;

  @media (max-width: 1200px) {
    padding: 70px 60px;
  }

  @media (max-width: 768px) {
    padding: 20px 40px;
  }

  @media (max-width: 570px) {
    padding: 30px;
  }
`;

export const Container = styled.div`
  max-width: 1600px;
  margin: auto;
  position: relative;
  z-index: 1;
`;

export const SmallTitle = styled.p`
  text-align: center;
  color: white;
  margin-bottom: 12px;
  font-size: 15px;

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

export const MainTitle = styled.h2`
  text-align: center;
  color: white;
  font-weight: 500;
  font-size: 32px;
  line-height: 1.3;
  text-transform: capitalize;
  max-width: 700px;
  margin: auto;

  @media (max-width: 992px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 1.4;
  }

  @media (max-width: 570px) {
    font-size: 16px;
  }
`;

export const Subtitle = styled.p`
  color: #d8d8d8;
  text-align: center;
  max-width: 850px;
  margin: 18px auto 0;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.9;

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 1.8;
  }

  @media (max-width: 570px) {
    font-size: 14px;
    line-height: 1.7;
    text-align: left;
  }
`;

export const Grid = styled.div`
  margin-top: 60px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 22px;
    margin-top: 45px;
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 5px;
  padding: 40px 23px;
  text-align: center;

  transition: 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 35px 22px;
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
  }
`;

export const IconBox = styled.div`
  width: 60px;
  height: 60px;

  margin: auto auto 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 570px) {
    width: 50px;
    height: 50px;

    
  }
`;

export const Title = styled.h3`
  margin-bottom: 14px;

  font-family: "DM Sans", sans-serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 1.4;
  text-align: center;
  color: #111;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 570px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  color: #777;
  line-height: 1.8;

  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 570px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;
export const WaveImage = styled.div`
  position: absolute;
  top: -90px;
  right: 32px;
  z-index: 0;
  pointer-events: none;
  opacity: 0.7;
margin-top: -50px;
  img {
    width: 430px;
    height: auto;
  }

  @media (max-width: 992px) {
    top: -40px;
    right: -45px;

    img {
      width: 330px;
    }
  }

  @media (max-width: 576px) {
    top: -20px;
    right: -70px;
    opacity: 0.45;

    img {
      width: 230px;
    }
  }
`;
