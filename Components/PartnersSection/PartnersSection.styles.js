"use client";

import styled from "styled-components";

export const Section = styled.section`
  background: #151D34;
  position:relative;
  overflow:hidden;
  padding:50px 0;

    @media (max-width: 768px) {
    padding: 40px 0;
  }

 
`;

export const Glow = styled.div`
  position:absolute;
  left:-150px;
  top:50%;

  transform:translateY(-50%);

  width:300px;
  height:300px;

  border-radius:50%;

  background:rgba(85,98,250,.35);

  filter:blur(90px);
`;

export const Container = styled.div`
  width:90%;
  max-width:1300px;
  margin:auto;

  text-align:center;
  position:relative;
  z-index:2;
`;

export const SmallTitle = styled.p`
  color:#fff;
  font-size:16px;
  margin-bottom:14px;

    @media (max-width: 576px) {
    font-size: 16px;
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 15px;

  @media (max-width: 992px) {
    font-size: 28px;
    line-height: 36px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }

  @media (max-width: 570px) {
    font-size: 16px;
    line-height: 28px;
  }
`;

export const Description = styled.p`
  max-width: 850px;
  margin: auto;
  color: #fff;
  margin-bottom: 55px;

  font-size: 16px;
  line-height: 26px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 40px;
  }

  @media (max-width: 570px) {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 30px;
    text-align: left;
  }
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
`;

export const Card = styled.div`
  min-height: 180px;

  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.01);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(98, 117, 255, 0.6);
  }

  img {
    width: 100%;
    max-width: 150px;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    min-height: 140px;

    img {
      max-width: 120px;
    }
  }

  @media (max-width: 480px) {
    min-height: 120px;

    img {
      max-width: 100px;
    }
  }
`;