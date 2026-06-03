"use client";

import styled from "styled-components";

export const HeroWrapper = styled.section`
  position: relative;
  background: #080B11;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px 20px;
  min-height: 80vh;

  @media (max-width: 1024px) {
  min-height:60vh;
    padding: 40px 16px 60px;
              background-color: #080B11;
  }
  @media (max-width: 991px) {
  min-height:50vh;
    padding: 40px 16px 10px;
          background-color: #080B11;
  }
   @media (max-width: 768px) {
  min-height:40vh;
    padding: 40px 16px 10px;
       background-color: #151D34;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  img {
    object-fit: contain;
    object-position: bottom center;
    
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 5;

  text-align: center;
  max-width: 900px;

  @media (max-width: 768px) {
    margin-top: 20px;
    order: -1;
  }
`;

export const Heading = styled.h1`
  font-size: 64px;
  line-height: 1.15;
  font-weight: 500;

  color: #fff;

  margin-bottom: 20px;

   @media (max-width: 1440px) {
    font-size: 2rem;
  }
  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }
  @media (max-width: 991px) {
    font-size: 1.5rem;
  }

  @media (max-width: 769px) {
    font-size: 1.5rem;
    line-height: 1.3;
  }

  @media (max-width: 570px) {
    font-size: 24px;
  }
`;

export const SubText = styled.p`
  font-size: 18px;

  color: rgba(255,255,255,0.75);

  margin-bottom: 35px;

   @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 1.8;
  }
  @media (max-width: 769px) {
    font-size: 14px;
    line-height: 1.8;
  }
`;

export const StoreButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 35px;

  img {
    width: 185px;
    height: auto;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    /* flex-direction: column; */

    img {
      width: 150px;
    }
  }
`;

export const FeatureCard = styled.div`
  position: absolute;
  z-index: 10;
  width: 250px;
  height: 90px;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  background: rgba(10, 10, 15, 0.4);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
  border: 1px solid #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 12px 16px;

  span {
    color: #fff;
    font-size: 22px;
    margin-bottom: 4px;
  }

  h4 {
    color: #fff;
    font-size: 18px;
    margin: 0;
  }

  .cursor {
    position: absolute;
    right: -18px;
    bottom: -18px;
    color: #fff;
    font-size: 28px;
    transform: rotate(75deg);
  }

  .leaveCursor {
    position: absolute;
    left: -18px;
    top: -18px;
    color: #fff;
    font-size: 28px;
    transform: rotate(-100deg);
  }

  &.topLeft {
    top: 50px;
    left: 40px;
  }

  &.topRight {
    top: 50px;
    right: 40px;
  }

  &.bottomLeft {
    top: 330px;
    left: 80px;
  }

  &.bottomRight {
    top: 340px;
    right: 80px;
  }

  /* Laptop */
  @media (max-width: 1200px) {
    width: 200px;
    height: 85px;

    h4 {
      font-size: 15px;
    }

    &.topLeft {
      left: 20px;
    }

    &.topRight {
      right: 20px;
    }

    &.bottomLeft {
      left: 20px;
      top: 300px;
    }

    &.bottomRight {
      right: 20px;
      top: 300px;
    }
  }

  /* Tablet */
  @media (max-width: 991px) {
    width: 180px;
    height: 70px;

    h4 {
      font-size: 13px;
    }

    &.topLeft {
      top: 20px;
      left: 10px;
    }

    &.topRight {
      top: 20px;
      right: 10px;
    }

    &.bottomLeft {
      top: 260px;
      left: 10px;
    }

    &.bottomRight {
      top: 260px;
      right: 10px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }



`;
export const StoreBtn = styled.div`
  position: relative;
  width: 170px;
  height: 52px;
  cursor: pointer;

  img {
    object-fit: contain;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 45px;
  }
`;