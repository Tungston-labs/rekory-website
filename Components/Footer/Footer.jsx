"use client";

import Image from "next/image";

import {
  FooterWrapper,
  TopSection,
  InfoBox,
  MiddleSection,
  LeftShape,
  RightShape,
  Content,
  StoreButtons,
  BottomBar,
  StoreBtn,
} from "./Footer.styles";
import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { IoIosAt } from "react-icons/io";
import Link from "next/link";
export default function Footer() {
  return (
    <FooterWrapper>
      {/* TOP SECTION */}
      <TopSection>
        <InfoBox>
          <h4><FiPhoneCall/> Our Phone Number</h4>
          <p>+971 555736021</p>
        </InfoBox>

        <InfoBox>
          <h4><SlLocationPin/> Our Location</h4>
          <p>
            Tungston Labs, Ullampilly Building, 4th Floor,
            <br />
            Behind Olimugal Juma Masjid, Thrikkakara,
            <br />
            Vazhakkala, Kakkanad, Kerala 682030
          </p>
        </InfoBox>

        <InfoBox>
          <h4><IoIosAt/> Our Email ID</h4>
          <p>support@arm-sbc.com</p>
        </InfoBox>
      </TopSection>

      {/* MIDDLE SECTION */}
      <MiddleSection>
        <LeftShape>
          <Image
            src="/images/wave-shape.svg"
            alt="shape"
            width={420}
            height={420}
          />
        </LeftShape>

        <Content>
          <Image
            className="logo"
            src="/images/logo.svg"
            alt="logo"
            width={90}
            height={90}
          />

          <p>
            Rekory is a smart HR management platform that simplifies employee
            management, attendance tracking, payroll processing,
            reimbursements, and workforce operations through a powerful
            real-time dashboard.
          </p>

        <StoreButtons>
  <a
    href="https://play.google.com/store/apps/details?id=com.anonymous.Rekory&hl=en_IN"
    target="_blank"
    rel="noopener noreferrer"
  >
    <StoreBtn>
      <Image
        src="/images/footer/google-play.png"
        alt="google-play"
        fill
      />
    </StoreBtn>
  </a>

  <a
    href="https://apps.apple.com/us/app/rekory/id6759279994"
    target="_blank"
    rel="noopener noreferrer"
  >
    <StoreBtn>
      <Image
        src="/images/footer/app-store.png"
        alt="app-store"
        fill
      />
    </StoreBtn>
  </a>
</StoreButtons>
        </Content>

        <RightShape>
          <Image
            src="/images/wave-shape.svg"
            alt="shape"
            width={420}
            height={420}
          />
        </RightShape>
      </MiddleSection>

      {/* BOTTOM BAR */}
    <BottomBar>
  <div className="left">
    <Link href="/terms-and-conditions">
      Terms & Conditions
    </Link>

    <Link href="/privacy-policy">
      Privacy Policy
    </Link>
  </div>

  <div className="right">
    © Copyright 2026, REKORY. Designed By Tungston Labs.
  </div>
</BottomBar>
    </FooterWrapper>
  );
}