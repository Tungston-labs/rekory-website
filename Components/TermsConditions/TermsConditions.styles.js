// components/TermsConditions/TermsConditions.styles.js

"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  background: #09112b;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px 12px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1150px;
  background: #2F4CA9;
  border-radius: 14px;
  padding: 60px 40px;
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
  font-size: 32px;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-bottom: 14px;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 34px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const SubTitle = styled.p`
  max-width: 720px;
  margin: 0 auto 40px;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  line-height: 28px;

  @media (max-width: 576px) {
    font-size: 13px;
    line-height: 24px;
    margin-bottom: 28px;
  }
`;

export const Card = styled.div`
  width: 100%;
  background: #f3f3f3;
  border-radius: 10px;
  padding: 40px;

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
  width: 22px;
  height: 22px;
  min-width: 22px;
  border-radius: 50%;
  background: #dce4ff;
  color: #2f4cb7;
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
  font-size: 17px;
  font-weight: 700;
  color: #1b1b1b;
  margin-bottom: 8px;

  @media (max-width: 576px) {
    font-size: 15px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 26px;
  color: #4a4a4a;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 576px) {
    font-size: 13px;
    line-height: 23px;
  }
`;