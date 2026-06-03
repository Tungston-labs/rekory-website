"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import { BsArrowUpRightCircle } from "react-icons/bs";
import {
  Nav,
  Wrapper,
  Logo,
  Menu,
  ButtonWrap,
  WhiteBtn,
  BlueBtn,
  Hamburger,
  MobileRight
} from "./Navbar.styles";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { title: "Home", path: "/" },
    { title: "Features", path: "/#features" },
    { title: "Why Rekory", path: "/#why-rekory" },
    { title: "App Advantages", path: "/#app-advantages" },
  ];

  return (
 <Nav>
  <Wrapper>
    <Logo>
      <Image src={logo} alt="logo" priority />
    </Logo>

    <Menu $open={open}>
      {menu.map((item) => (
        <a
          key={item.title}
          href={item.path}
          onClick={() => setOpen(false)}
        >
          {item.title}
        </a>
      ))}
    </Menu>

    <MobileRight>
      <WhiteBtn>Download APP <BsArrowUpRightCircle/> </WhiteBtn>
<Link href="#app-advantages">
  <BlueBtn>
    Contact Our Team <BsArrowUpRightCircle />
  </BlueBtn>
</Link>

      <Hamburger onClick={() => setOpen(!open)}>
        ☰
      </Hamburger>
    </MobileRight>
  </Wrapper>
</Nav>
  );
}