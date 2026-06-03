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
  MobileRight,
  MenuOverlay
} from "./Navbar.styles";
import { handleDownloadApp } from "../../utils/downloadApp";
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
  <Link href="/" onClick={() => setOpen(false)}>
    <Image src={logo} alt="logo" priority />
  </Link>
</Logo>
{open && <MenuOverlay onClick={() => setOpen(false)} />}
<Menu $open={open}>
  <div className="menuHeader">
    <Image src={logo} alt="logo" width={40} height={40} />

    <button onClick={() => setOpen(false)}>
      ✕
    </button>
  </div>

  <div className="menuLinks">
    {menu.map((item) => (
      <a
        key={item.title}
        href={item.path}
        onClick={() => setOpen(false)}
      >
        {item.title}
      </a>
    ))}
  </div>
</Menu>
    <MobileRight>
<WhiteBtn onClick={handleDownloadApp}>
  Download APP <BsArrowUpRightCircle />
</WhiteBtn>
<Link href="/#app-advantages">
  <BlueBtn>
    Contact Us <BsArrowUpRightCircle />
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