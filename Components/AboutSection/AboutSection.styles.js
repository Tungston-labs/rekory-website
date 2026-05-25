"use client";

import styled from "styled-components";

export const Section = styled.section`
  padding:80px 20px;
  background:#07112e;
`;

export const Container = styled.div`
  max-width:1200px;
  margin:auto;
  background:#2F4CA9;
  border-radius:18px;
  padding:90px 50px  80px ;

  @media(max-width:768px){
    padding:50px 25px;
  }
`;

export const Heading = styled.h2`
  color:white;
  text-align:center;
  margin-bottom:25px;
font-weight: 500;
font-style: Medium;
font-size: 24px;
line-height: 24px;
letter-spacing: 0%;
text-align: center;
text-transform: capitalize;


  @media(max-width:991px){
    font-size:36px;
  }

  @media(max-width:768px){
    font-size:28px;
  }

  @media(max-width:480px){
    font-size:24px;
  }
`;

export const Description = styled.p`
  max-width:950px;
  margin:auto;
  color:#fff;
font-weight: 400;
font-style: Regular;
font-size: 16px;
line-height: 26px;
letter-spacing: 2%;
text-align: center;

  @media(max-width:768px){
    font-size:15px;
  }
`;

export const Cards = styled.div`
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:30px;
  margin-top:60px;

  @media(max-width:991px){
    grid-template-columns:1fr;
  }
`;

export const Card = styled.div`
  background:#EFF8FF;
  border-radius:8px;
  padding:35px;
  min-height:460px;

  display:flex;
  flex-direction:column;
  justify-content:space-between;

  @media(max-width:768px){
    min-height:auto;
    padding:25px;
  }
`;

export const Title = styled.h3`
  margin-bottom:20px;
font-weight: 500;
font-style: Medium;
font-size: 24px;
line-height: 20px;
letter-spacing: 0px;
vertical-align: middle;

  @media(max-width:768px){
    font-size:28px;
  }

  @media(max-width:480px){
    font-size:24px;
  }
`;

export const Text = styled.p`
font-weight: 300;
font-style: Light;
font-size: 16px;
line-height: 28px;
letter-spacing: 0px;
vertical-align: middle;


  @media(max-width:768px){
    font-size:15px;
  }
`;

export const IconWrap = styled.div`
  display:flex;
  justify-content:center;
  margin-top:35px;

  img{
    width:180px;
    height:auto;
  }

  @media(max-width:480px){
    img{
      width:140px;
    }
  }
`;