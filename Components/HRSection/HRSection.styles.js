"use client";

import styled from "styled-components";

export const Section = styled.section`
  background:#2F4CA9;
  padding:80px 20px;
`;

export const Container = styled.div`
  max-width:1200px;
  margin:auto;
`;

export const Top = styled.div`
  text-align:center;
  color:white;
`;

export const Heading = styled.h2`
  font-size:40px;
  margin:10px 0;

  @media(max-width:768px){
    font-size:28px;
  }
`;

export const SubText = styled.p`
  max-width:800px;
  margin:auto;
  line-height:1.7;
`;

export const ButtonWrap = styled.div`
  display:flex;
  justify-content:center;
  gap:20px;
  margin:35px 0;
  flex-wrap:wrap;
`;

export const Btn = styled.button`
  padding:12px 22px;
  border:none;
  border-radius:8px;
`;

export const Grid = styled.div`
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:25px;

  @media(max-width:768px){
    grid-template-columns:1fr;
  }
`;

export const Card = styled.div`
  background:#eef2f7;
  padding:35px 25px;
  border-radius:5px;
`;

export const SmallTag = styled.p`
  font-size:11px;
  color:#777;
`;

export const Title = styled.h3`
  margin:10px 0;
`;

export const Description = styled.p`
  line-height:1.8;
  color:#666;
`;

export const List = styled.ul`
  margin-top:20px;

  li{
    margin-bottom:12px;
    list-style:none;
  }
`;

export const ImageWrap = styled.div`
  margin-top:20px;

  img{
    width:100%;
    height:auto;
  }
`;