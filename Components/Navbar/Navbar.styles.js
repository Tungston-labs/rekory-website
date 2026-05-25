"use client";

import styled from "styled-components";

export const Nav = styled.nav`
  background:#000;
  padding:20px 60px;
`;

export const Wrapper = styled.div`
  max-width:1600px;
  margin:auto;

  display:flex;
  align-items:center;
`;

export const Logo = styled.div`
  flex:1;

  img{
    width:70px;
    height:auto;
  }
`;

export const Menu = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  gap:50px;

  flex:2;

  a{
    color:white;
    text-decoration:none;
    font-size:14px;
    white-space:nowrap;
  }

  @media(max-width:1024px){
    position:fixed;
    top:0;
    right:${({$open})=>($open ? "0":"-100%")};

    width:280px;
    height:100vh;

    background:#111;

    flex-direction:column;
    gap:30px;

    transition:.4s;
    z-index:999;
  }
`;

export const ButtonWrap = styled.div`
  flex:1;

  display:flex;
  justify-content:flex-end;
  gap:15px;

  @media(max-width:1024px){
    display:none;
  }
`;

export const WhiteBtn = styled.button`
  background:white;
  border:none;
  padding:12px 22px;
  border-radius:8px;
  font-size:13px;
  cursor:pointer;
`;

export const BlueBtn = styled.button`
  background:#2d59e8;
  color:white;
  border:none;
  padding:12px 22px;
  border-radius:8px;
  font-size:13px;
  cursor:pointer;
`;

export const Hamburger = styled.button`
  display:none;
  background:none;
  border:none;
  color:white;
  font-size:30px;
  cursor:pointer;

  @media(max-width:1024px){
    display:block;
    margin-left:auto;
    z-index:1000;
  }
`;