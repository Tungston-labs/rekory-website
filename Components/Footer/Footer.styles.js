"use client";

import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: #07112e;
  overflow: hidden;
  position: relative;
  color: #fff;
`;

/* ================= TOP SECTION ================= */

export const TopSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  border-bottom: 1px dashed rgba(255, 255, 255, 0.18);

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    
  }
`;

export const InfoBox = styled.div`
  padding: 46px 55px;
  min-height: 160px;

  border-right: 1px dashed rgba(255, 255, 255, 0.18);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  &:last-child {
    border-right: none;
  }

  h4 {
    font-size: 20px;
    font-weight: 400;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    margin-bottom: 16px;
  }

  p {
    font-size: 15px;
    line-height: 1.9;
    color: rgba(255, 255, 255, 0.72);
    margin: 0;
  }

  @media (max-width: 991px) {
    border-right: none;
    border-bottom: 1px dashed rgba(255, 255, 255, 0.18);

    &:last-child {
      border-bottom: none;
    }
  }

  @media (max-width: 576px) {
    padding: 35px 15px;

    h4 {
      font-size: 20px;
      text-align: left;
    }

    p {
      font-size: 14px;
    }
  }
`;

/* ================= MIDDLE SECTION ================= */

export const MiddleSection = styled.div`
  position: relative;

  min-height: 420px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 70px 20px 40px;

  border-bottom: 1px dashed rgba(255, 255, 255, 0.15);

  @media (max-width: 991px) {
    min-height: auto;
    padding: 30px 20px;
  }
`;

export const LeftShape = styled.div`
  position: absolute;
  left: -120px;
  bottom: -40px;
  opacity: 0.9;

  img {
    width: 420px;
    height: auto;
  }

  @media (max-width: 991px) {
    left: -160px;

    img {
      width: 300px;
    }
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

export const RightShape = styled.div`
  position: absolute;
  right: -120px;
  bottom: -40px;

  opacity: 0.9;

  img {
    width: 420px;
    height: auto;
    transform: rotate(180deg);
  }

  @media (max-width: 991px) {
    right: -160px;

    img {
      width: 300px;
    }
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  .logo {
    margin-bottom: 26px !important;
  }

  p {
    max-width: 650px;

    font-size: 15px;
    line-height: 2;

    color: rgba(255, 255, 255, 0.75);

    margin-bottom: 35px;
  }

  @media (max-width: 576px) {
    p {
      font-size: 14px;
      line-height: 1.9;
      align-items:flex-start;
    }
  }
`;

export const StoreButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  img {
    width: 175px;
    height: auto;
    cursor: pointer;
  }

  @media (max-width: 576px) {
    /* flex-direction: column; */

    img {
      width: 150px;
    }
  }
`;

/* ================= BOTTOM BAR ================= */

export const BottomBar = styled.div`
  background: #2D48A380;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 22px 55px;

  .left {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  .left a {
    position: relative;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    transition: 0.3s ease;

    &:hover {
      color: #ffffff;
    }

    &:first-child::after {
      content: "";
      position: absolute;
      right: -10px;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 16px;
      background: rgba(255, 255, 255, 0.4);
    }
  }

  .right {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.85);
  }

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 14px;
    text-align: center;
  }

  @media (max-width: 576px) {
    padding: 20px;

    .left {
      flex-wrap: wrap;
      justify-content: center;
    }

    .right {
      text-align: center;
    }
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
    height: 48px;
  }
`;