"use client";

import styled from "styled-components";

export const Section = styled.section`
  background: #0d1535;
  padding:90px 20px;
`;

export const Container = styled.div`
  max-width:1200px;
  margin:auto;
`;

export const SmallTitle = styled.p`
  text-align:center;
  color:white;
  margin-bottom:10px;
`;

export const MainTitle = styled.h2`
  text-align:center;
  color:white;
  font-size:42px;

  @media(max-width:768px){
    font-size:28px;
  }
`;

export const Subtitle = styled.p`
  color:#d8d8d8;
  text-align:center;
  max-width:700px;
  margin:20px auto;
  line-height:1.8;
`;

export const Grid = styled.div`
  margin-top:60px;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:30px;

  @media(max-width:992px){
      grid-template-columns:repeat(2,1fr);
  }

  @media(max-width:768px){
        grid-template-columns:repeat(1,1fr);
  }
`;

export const Card = styled.div`
  background:white;
  border-radius:5px;
  padding:40px 25px;
  text-align:center;
`;

export const IconBox = styled.div`
  width:50px;
  height:50px;
  margin:auto;
`;

export const Title = styled.h3`
  margin-top:20px;
`;

export const Description = styled.p`
  color:#777;
  line-height:1.8;
`;