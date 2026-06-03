"use client";

import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  background: #f5f5f5;
  padding: 90px 50px 0px;

      @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

export const Container = styled.div`
  max-width: 1700px;
  margin: auto;
`;

export const Toast = styled.div`
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 1000;
  max-width: min(360px, calc(100vw - 32px));
  padding: 14px 18px;
  border-radius: 8px;
  background: ${(props) => (props.$type === "error" ? "#B80C11" : "#166534")};
  color: #fff;
  box-shadow: 0 14px 35px rgba(17, 24, 39, 0.18);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

  @media (max-width: 768px) {
    top: 16px;
    right: 16px;
    left: 16px;
    max-width: none;
  }
`;

export const TopText = styled.p`
  text-align: center;
  font-size: 14px;
  color: #777;
  margin-bottom: 12px;
`;

export const Heading = styled.h2`
  text-align: center;
  font-size: 44px;
  font-weight: 700;
  color: #111;
  margin-bottom: 18px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  max-width: 850px;
  margin: auto;
  text-align: center;
  color: #777;
  line-height: 1.8;
  font-size: 15px;

   @media (max-width: 576px) {
    font-size: 14px;
    text-align: left;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-top: 35px;
  margin-bottom: 70px;
`;

export const TabButton = styled.button`
  padding: 14px 30px;
  border-radius: 10px;
  border: 1px solid #d8d8d8;
  background: ${(props) => {
    if (!props.$active) return "#fff";
    return props.$isRed ? "#B80C11" : "#2D48A3";
  }};
  color: ${(props) => (props.$active ? "#fff" : "#111")};
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
`;



export const LeftSection = styled.div`
  grid-area: form;
`;

export const FormBox = styled.div`
  background: ${(props) => (props.$isRed ? '#B80C11' : '#2D48A3')};
  border-radius: 24px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255,255,255,0.25);
  padding-bottom: 14px;
  color: #fff;
  outline: none;
  font-size: 14px;

  &::placeholder {
    color: rgba(255,255,255,0.85);
  }
`;

export const TextArea = styled.textarea`
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255,255,255,0.25);
  color: #fff;
  outline: none;
  resize: none;
  font-size: 14px;

  &::placeholder {
    color: rgba(255,255,255,0.85);
  }
`;

export const SendButton = styled.button`
  width: fit-content;
  padding: 12px 20px;
  border-radius: 10px;
  border: none;
  background: #fff;
  color: #111;
  font-weight: 600;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 12px;
  transition: opacity 0.2s ease, transform 0.2s ease;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.75;
  }

  span {
    width: 25px;
    height: 25px;
border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 18px;
  }

  &[aria-busy="true"] span {
    border-color: rgba(17, 17, 17, 0.25);
    border-top-color: #111;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const CenterSection = styled.div`
  grid-area: features;
`;

export const Title = styled.h3`
  font-size: 28px;
  font-weight: 700;
  color: #1b1b1b;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

export const Paragraph = styled.p`
  color: #667085;
  max-width: 95%;
  margin-bottom: 25px;

  font-size: 18px;
  line-height: 30px;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 16px;
    line-height: 28px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

export const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FeatureItem = styled.div`
  display: flex;
  gap: 15px;

  span {
    width: 25px;
    height: 25px;
    min-width: 25px;
    border-radius: 50%;
    background: rgb(231, 235, 247);
    color: #2f4ca9;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  h4 {
    color: #667085;
    font-size: 18px;
    line-height: 28px;
  }

  p {
    color: #667085;
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 576px) {
    h4 {
      font-size: 16px;
      line-height: 24px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
    }
  }
`;

export const RightSection = styled.div`
  grid-area: phone;
  align-self: stretch;
  position: relative;
`;


export const Card = styled.div``;

export const Icon = styled.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #111;
  margin-bottom: 10px;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 576px) {
    font-size: 15px;
    margin-bottom: 8px;
  }
`;

export const CardText = styled.p`
  color: #7c8092;
  line-height: 1.7;
  font-size: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.6;
  }

  @media (max-width: 576px) {
    font-size: 14px;
    line-height: 1.5;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 450px 1fr  350px ;
  grid-template-areas: 
    "form features phone"
    "cards cards phone";
  column-gap: 50px;
  row-gap: 20px;
  align-items: start;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-template-areas: 
      "form"
      "features"
      "phone"
      "cards";
  }
`;

export const BottomCards = styled.div`
  grid-area: cards;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  margin-bottom: 50px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const PhoneImage = styled.div`
  position: absolute;
  bottom: 0;
  right: -20px;

  width: 100%;
  min-width: 450px;
  height: 110%;
  min-height: 650px;

  img {
    object-fit: contain;
    object-position: bottom right;
  }



  @media (max-width: 1440px) {
    display: none;
  }
`;
