"use client";

import styled from "styled-components";

export const Section = styled.section`
  background: #151D34;
  padding:50px 30px;

  @media(max-width:768px){
    padding:20px 15px;
  }
`;

export const Container = styled.div`
  max-width:1700px;
  margin:auto;

  background:${({$bgColor}) => $bgColor || "#2F4CA9"};

  border-radius:10px;
  padding:70px;

  @media(max-width:768px){
    padding:50px 25px;
      border-radius:0px;
  }

  @media(max-width:570px){
    padding:50px 15px;
      border-radius:0px;
  }
`;

export const Top = styled.div`
  text-align:center;
  color:white;
  font-family: DM Sans;
font-weight: 400;
font-style: Regular;
font-size: 16px;
line-height: 26px;
letter-spacing: 2%;

 @media(max-width:570px){
    font-size:1rem;
  }
`;

export const Heading = styled.h2`
  margin:10px 0;
font-family: DM Sans;
font-weight: 500;
font-style: Medium;
font-size: 32px;
leading-trim: NONE;
line-height: 40px;
letter-spacing: 0%;
text-align: center;
text-transform: capitalize;

  @media(max-width:768px){
    font-size:28px;
  }
   @media(max-width:570px){
    font-size:1rem;
    line-height: 30px;
  }
`;

export const SubText = styled.p`
  max-width:850px;
  margin:auto;
  line-height:1.7;
  font-family: DM Sans;
font-weight: 400;
font-style: Regular;
font-size: 16px;
line-height: 26px;
letter-spacing: 2%;
text-align: center;

 @media(max-width:570px){
    font-size:14px;
    text-align: left;
  }
`;

export const ButtonWrap = styled.div`
  display:flex;
  justify-content:center;
  gap:20px;
  margin:35px 0;
  /* flex-wrap:wrap; */
  
  
`;
export const Btn = styled.button`
  padding: 10px 30px;
  border-radius: 5px;
  border: 1px solid rgba(255,255,255,0.2);

  background: ${({ $active }) =>
    $active ? "#fff" : "rgba(255,255,255,0.1)"};

  color: ${({ $active, color }) =>
    $active ? color : "#fff"};

  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: #fff;
    color: ${({ color }) => color};
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }

  @media (max-width: 576px) {
    padding: 10px;
    font-size: 13px;
    width: 100%;
    justify-content: center;
  }
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
  background: #EFF8FF;
  padding: 35px 25px 0;
  border-radius: 8px;

  width: 100%;
  height: 100%;

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 1024px) {
    padding: 30px 20px 0;
  }

  @media (max-width: 768px) {
    padding: 25px 18px 0;
    border-radius: 6px;
  }

  @media (max-width: 576px) {
    padding: 20px 15px ;
    border-radius: 5px;
  }
`;

export const SmallTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid #dbe6ff;
  border-radius: 999px;
font-family: DM Sans;
font-weight: 400;
font-style: Regular;
font-size: 14px;
line-height: 20px;
letter-spacing: 0px;
vertical-align: middle;
  color: #667085;
  background: #f5f8ff;

   @media (max-width: 570px) {
    font-size: 16px;
  }
`;

export const Title = styled.h3`
  margin: 10px 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 28px;
  }

  @media (max-width: 570px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Description = styled.p`
color: #667085;
font-weight: 400;
font-style: Regular;
font-size: 18px;
line-height: 28px;
letter-spacing: 0px;
vertical-align: middle;


 @media(max-width:1200px){
    font-size: 14px;
  }
  @media (max-width: 570px) {
    font-size: 0.9rem;
    line-height: 24px;
  }
`;

export const List = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 14px;
    color: #667085;
    line-height: 1.5;
    font-family: DM Sans;
font-weight: 400;
font-style: Regular;
font-size: 18px;
line-height: 28px;
letter-spacing: 0px;
vertical-align: middle;


    &::before {
      content: "✓";

      width: 30px;
      height: 30px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;

      background: white;
      color: #3556c7;

      font-size: 15px;
      font-weight: bold;

      flex-shrink: 0;

      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
    }
  }

   @media(max-width:1200px){
   li{ font-size: 14px;}
  }
  @media (max-width: 768px) {
    li {
      font-size: 17px;
    } 
  }
    @media (max-width: 570px) {
 li{   font-size: 0.9rem;
    line-height: 24px;}
  }
`;

export const ImageWrap = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 650px;
  height: 350px;
  margin-inline: auto;

  border-radius: 16px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  @media (max-width:768px) {
    max-width: 100%;
    height: 260px;
  }

  @media (max-width:570px) {
    height: 220px;
  }
`;
