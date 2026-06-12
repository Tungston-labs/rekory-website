"use client";

import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  padding:0px 38px 56px;
  
  background: #151d34;

  @media(max-width:768px){
    padding: 54px 24px 44px;
  }

  @media(max-width:570px){
    padding: 34px 15px;
  }
`;

export const Container = styled.div`
  max-width: 1700px;
  margin: auto;
  padding: 70px 92px 86px;
  background: #3857b7;
  border-radius: 2px;
  box-shadow: 0 26px 70px rgba(4, 11, 32, 0.2);

  @media(max-width:1024px){
    padding: 58px 58px 70px;
  }

  @media(max-width:768px){
    padding: 44px 28px 54px;
  }

  @media(max-width:570px){
    padding: 32px 18px 38px;
  }
`;

export const Heading = styled.h2`
  color: #ffffff;
  text-align: center;
  margin-bottom: 18px;
  font-weight: 500;
  font-size: 28px;
  line-height: 1.3;
  letter-spacing: 0;
  text-transform: capitalize;


  @media(max-width:991px){
    font-size: 26px;
  }

  @media(max-width:768px){
    font-size: 1.5rem;
  }

  @media(max-width:570px){
    font-size: 16px;
    margin-bottom: 14px;
  }
`;

export const Description = styled.p`
  max-width: 860px;
  margin: auto;
  color: rgba(255,255,255,0.92);
  font-weight: 400;
  font-size: 14px;
  line-height: 1.75;
  letter-spacing: 0;
  text-align: center;

  @media(max-width:768px){
    font-size: 1rem;
  }

  @media(max-width:570px){
    font-size: 14px;
    text-align: left;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 26px;
  margin-top: 44px;

  @media(max-width:991px){
    grid-template-columns: 1fr;
  }

  @media(max-width:570px){
    margin-top: 26px;
  }
`;

export const Card = styled.div`
  background: #eff8ff;
  border-radius: 4px;
  padding: 36px 38px 48px;
  min-height: 456px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media(max-width:768px){
    min-height: auto;
    padding: 30px 28px 38px;
  }

  @media(max-width:570px){
    padding: 26px 20px 32px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 18px;
  color: #111827;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.25;
  letter-spacing: 0;

  @media(max-width:768px){
    font-size: 1.5rem;
  }

  @media(max-width:570px){
    font-size: 18px;
  }
`;

export const Text = styled.p`
  color: #000;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.85;
  letter-spacing: 0;

 @media(max-width:1200px){
    font-size: 14px;
  }
  @media(max-width:768px){
    font-size: 16px;
  }

  @media(max-width:570px){
    font-size: 14px;
    line-height: 1.75;
  }
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 34px;

  img{
    width: 178px;
    height: auto;
  }

  @media(max-width:480px){
    img{
      width: 140px;
    }
  }
`;
