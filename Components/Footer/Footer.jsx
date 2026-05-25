"use client";

import Image from "next/image";

import {
  FooterWrapper,
  TopSection,
  InfoBox,
  MiddleSection,
  LeftImage,
  Content,
  StoreButtons,
  Shape,
  BottomBar,
} from "./Footer.styles";

export default function Footer() {
  return (
    <FooterWrapper>
      <TopSection>
        <InfoBox>
          <h4>☎ Our Phone Number</h4>
          <p>+971 555738021</p>
        </InfoBox>

        <InfoBox>
          <h4>◎ Our Location</h4>
          <p>
            Tungston Labs, Ulimpilly Building
            4th Floor, Behind Olympus
            Juma Masjid Thrikkakara,
            Kakkanad, Kochi
          </p>
        </InfoBox>

        <InfoBox>
          <h4>✉ Our Email ID</h4>
          <p>support@arm.com</p>
        </InfoBox>
      </TopSection>

      <MiddleSection>

        <LeftImage>
          <Image
            src="/images/phone-person.svg"
            alt="Phone"
            width={250}
            height={450}
          />
        </LeftImage>

        <Content>
          <Image
            className="logo"
            src="/images/logo.svg"
            alt="Logo"
            width={90}
            height={90}
          />

          <p>
            Rekory is a smart HR management platform that simplifies employee
            management, attendance tracking, payroll processing and
            reimbursements through a powerful real-time dashboard.
          </p>

          <StoreButtons>
            <Image
              src="/images/google-play.svg"
              alt="Google Play"
              width={170}
              height={50}
            />

            <Image
              src="/images/app-store.svg"
              alt="App Store"
              width={170}
              height={50}
            />
          </StoreButtons>
        </Content>

        <Shape>
          <Image
            src="/images/wave-shape.svg"
            alt="shape"
            width={350}
            height={350}
          />
        </Shape>

      </MiddleSection>

      <BottomBar>
        <div className="left">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>

        <span>
          © Copyright 2026, REKORY.
          Designed by Tungston Labs.
        </span>
      </BottomBar>

    </FooterWrapper>
  );
}