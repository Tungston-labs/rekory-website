"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.svg";

import {
  Nav,
  Wrapper,
  Logo,
  Menu,
  ButtonWrap,
  WhiteBtn,
  BlueBtn,
  Hamburger
} from "./Navbar.styles";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
     { title: "Home", path: "/" },
    { title: "Features", path: "/features" },
    { title: "Why Rekory", path: "/why-rekory" },
    { title: "App Advantages", path: "/app-advantages" },
    { title: "Terms & Conditions", path: "/terms-and-conditions" },
    { title: "Privacy Policy", path: "/privacy-policy" },
  ];

  return (
    <Nav>
      <Wrapper>

        <Logo>
          <Image
            src={logo}
            alt="logo"
            priority
          />
        </Logo>

        <Hamburger onClick={() => setOpen(!open)}>
          ☰
        </Hamburger>

        <Menu $open={open}>
          {menu.map((item) => (
            <Link key={item.title} href={item.path}>
              {item.title}
            </Link>
          ))}
        </Menu>

        <ButtonWrap>
          <WhiteBtn>
            Download APP ↗
          </WhiteBtn>

          <BlueBtn>
            Request Demo ↗
          </BlueBtn>
        </ButtonWrap>

      </Wrapper>
    </Nav>
  );
}