// components/TermsConditions/TermsConditions.styles.js

"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  background: #080B11;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px 12px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1700px;
  background: #2F4CA9;
  border-radius: 14px;
  padding: 60px 70px 90px;
  position: relative;
  overflow: hidden;

  @media (max-width: 992px) {
    padding: 40px 24px;
  }

  @media (max-width: 576px) {
    padding: 30px 16px;
    border-radius: 10px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  text-align: center;
  margin-bottom: 14px;
font-weight: 500;
font-style: Medium;
font-size: 32px;
line-height: 40px;
letter-spacing: 0%;
text-align: center;
text-transform: capitalize;


  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 34px;
  }

  @media (max-width: 570px) {
    font-size: 16px;
    line-height: 30px;
  }
`;

export const SubTitle = styled.p`
  max-width: 850px;
  margin: 0 auto 40px;
  text-align: center;
  color: #fff;
font-weight: 400;
font-style: Regular;
font-size: 16px;
line-height: 26px;
letter-spacing: 2%;
text-align: center;

  @media (max-width: 576px) {
    font-size:14px;
    line-height: 24px;
    margin-bottom: 28px;
  }
`;

export const Card = styled.div`
  width: 100%;
  background: #f3f3f3;
  border-radius: 10px;
  padding: 40px 40px 80px;

  @media (max-width: 768px) {
    padding: 24px 18px;
  }

  @media (max-width: 480px) {
    padding: 20px 14px;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 28px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const Icon = styled.div`
  width: 25px;
  height: 25px;
  min-width: 22px;
  border-radius: 50%;
  background:rgb(237, 237, 252);
  color: #2F4CA9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: bold;
  margin-top: 3px;
`;

export const Content = styled.div`
  width: 100%;
`;

export const ItemTitle = styled.h3`
font-weight: 700;
margin-bottom: 8px;
font-weight: 500;
font-style: Medium;
font-size: 20px;
line-height: 20px;
letter-spacing: 0px;
vertical-align: middle;

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  color:rgb(0, 0, 0);
font-weight: 300;
font-style: Light;
font-size: 16px;
line-height: 28px;
letter-spacing: 0px;
vertical-align: middle;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 576px) {
    font-size: 14px;
    line-height: 23px;
  }
`;