"use client";

import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background:#0f1738;
  color:#fff;
  overflow:hidden;
`;

export const TopSection = styled.div`
  display:grid;
  grid-template-columns:repeat(3,1fr);

  border-bottom:1px dashed rgba(255,255,255,.25);

  @media(max-width:991px){
    grid-template-columns:1fr;
  }
`;

export const InfoBox = styled.div`
  padding:55px 55px 40px;
  border-right:1px dashed rgba(255,255,255,.25);

  &:last-child{
    border-right:none;
  }

  h4{
    font-size:17px;
    font-weight:500;
    margin-bottom:16px;
    display:flex;
    align-items:center;
    gap:10px;
  }

  p{
    color:#e2e2e2;
    font-size:15px;
    line-height:1.8;
    max-width:320px;
  }

  @media(max-width:991px){
    border-right:none;
    border-bottom:1px dashed rgba(255,255,255,.25);
    text-align:center;

    h4{
      justify-content:center;
    }

    p{
      max-width:100%;
    }
  }
`;

export const MiddleSection = styled.div`
  position:relative;

  display:grid;
  grid-template-columns:320px 1fr 320px;
  align-items:end;

  padding:40px 4% 0;

  @media(max-width:991px){
    grid-template-columns:1fr;
    gap:40px;
    text-align:center;
    padding:50px 20px;
  }
`;

export const LeftImage = styled.div`
  display:flex;
  align-items:flex-end;

  img{
    width:100%;
    max-width:280px;
    height:auto;
    object-fit:contain;
  }

  @media(max-width:991px){
    justify-content:center;
  }
`;

export const Content = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;

  .logo{
    margin-bottom:25px !important;
  }

  p{
    max-width:650px;
    color:#d7d7d7;
    text-align:center;
    line-height:2;
    font-size:16px;
    margin:25px 0 35px;
  }

  @media(max-width:768px){

    p{
      font-size:14px;
      line-height:1.8;
    }
  }
`;

export const StoreButtons = styled.div`
  display:flex;
  align-items:center;
  gap:22px;

  img{
    cursor:pointer;
    width:165px;
    height:auto;
  }

  @media(max-width:500px){
    flex-direction:column;

    img{
      width:150px;
    }
  }
`;

export const Shape = styled.div`
  display:flex;
  justify-content:flex-end;
  align-items:center;

  img{
    width:100%;
    max-width:300px;
    opacity:.8;
  }

  @media(max-width:991px){
    justify-content:center;

    img{
      max-width:220px;
    }
  }
`;

export const BottomBar = styled.div`
  background:#2b3f88;

  padding:22px 55px;

  display:flex;
  align-items:center;
  justify-content:space-between;

  .left{
    display:flex;
    align-items:center;
  }

  .left span{
    padding-right:18px;
    margin-right:18px;
    border-right:1px solid rgba(255,255,255,.4);
  }

  .left span:last-child{
    border:none;
    margin-right:0;
    padding-right:0;
  }

  span{
    color:#ececec;
    font-size:14px;
  }

  @media(max-width:991px){
    flex-direction:column;
    gap:15px;
    text-align:center;

    .left{
      justify-content:center;
      flex-wrap:wrap;
    }
  }

  @media(max-width:500px){
    padding:20px;
  }
`;