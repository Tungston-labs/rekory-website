"use client";

import styled from "styled-components";

export const Nav = styled.nav`
  background:#080B11;
  padding:20px;

    @media (max-width: 1024px) {
    padding:20px;
    background-color: #080B11;
}
    @media (max-width: 768px) {
    padding:20px;
    background-color: #151D34;
}
`;

export const Wrapper = styled.div`
  max-width: 1700px;
  margin: auto;
 justify-content: space-between;
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  img {
    width: 65px;
    height: auto;
  }

    @media (max-width: 768px) {
   img {
    width: 35px;
    height: auto;
  }
}
`;

export const Menu = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  gap: 50px;

 a {
  color: #fff;
  text-decoration: none;
  white-space: nowrap;
  position: relative;

  font-family: DM Sans;
  font-weight: 500;
  font-size: 17px;
  text-transform: uppercase;

  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;

    width: 0;
    height: 2px;

    background: #3353BA;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #3353BA;
  }

  &:hover::after {
    width: 100%;
  }
}

.menuHeader {
  display: none;
}

.menuLinks {
  display: contents;
}

@media (max-width: 1024px) {
  position: fixed;
  top: 0;
  right: ${({ $open }) => ($open ? "0" : "-100%")};

  width: 320px;
  max-width: 85%;
  height: 100vh;

  background: #151d34;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  padding: 24px;

  transition: right 0.35s ease;
  z-index: 1000;

  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.35);

  .menuHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  .menuHeader button {
    background: transparent;
    border: none;
    color: #fff;
    font-size: 32px;
    cursor: pointer;
  }

  .menuLinks {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .menuLinks a {
    width: 100%;
    padding: 16px 18px;
    border-radius: 10px;
    font-size: 18px;
    color: #fff;
    transition: all 0.3s ease;
  }

  .menuLinks a:hover {
    background: rgba(255, 255, 255, 0.08);
    color: #4d73f0;
  }

  .menuLinks a::after {
    display: none;
  }
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
  background: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: DM Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translate(3px, -3px);
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 12px;
  }
   @media (max-width: 480px) {
    padding: 8px;
    font-size: 11px;
  }
`;

export const BlueBtn = styled.button`
  background: #3353BA;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: DM Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background: #4063d6;
    box-shadow: 0 12px 30px rgba(51, 83, 186, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translate(3px, -3px);
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 12px;
  }
    @media (max-width: 480px) {
    padding: 8px;
    font-size: 11px;
  }
`;
export const Hamburger = styled.button`
  display: none;

  background: none;
  border: none;
  color: white;
  font-size: 32px;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: block;
  }
`;
export const MobileRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;
export const MenuOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(3px);
  z-index: 999;

  @media (min-width: 1024px) {
    display: none;
  }
`;