"use client";

import Image from "next/image";

import {
  HeroWrapper,
  BackgroundImage,
  Content,
  Heading,
  SubText,
  StoreButtons,
  FeatureCard,
  StoreBtn,
} from "./HeroSection.styles";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineUser } from "react-icons/ai";
import { PiAirplaneTilt } from "react-icons/pi";
import { AiOutlineFileDone } from "react-icons/ai";
import { SlCursor } from "react-icons/sl";
import Link from "next/link";
export default function HeroSection() {
  return (
    <HeroWrapper>

      {/* BACKGROUND IMAGE */}
      <BackgroundImage>
        <Image
          src="/images/glow.png"
          alt="background"
          fill
          priority
        />
      </BackgroundImage>

      {/* LEFT TOP */}
     <FeatureCard className="topLeft">
  <span><SlLocationPin /></span>

  <div>
    <h4>Location Tracking</h4>
  </div>

  <div className="cursor">
    <SlCursor />
  </div>
</FeatureCard>

      {/* RIGHT TOP */}
      <FeatureCard className="topRight">
        <span><AiOutlineUser/></span>

        <div>
          <h4>Employee Management</h4>
        </div>
      </FeatureCard>

      {/* LEFT BOTTOM */}
      <FeatureCard className="bottomLeft">
        <span><AiOutlineFileDone/></span>

        <div>
          <h4>Task Management</h4>
        </div>
      </FeatureCard>

      {/* RIGHT BOTTOM */}
     <FeatureCard className="bottomRight">
  <span><PiAirplaneTilt /></span>

  <h4>Leave Management</h4>

  <div className="leaveCursor">
    <SlCursor />
  </div>
</FeatureCard>

      {/* CENTER CONTENT */}
      <Content>

        <Heading>
          Build Smarter Teams,
          <br />
          Manage People Effortlessly
        </Heading>

        <SubText>
          The Smart Way to Manage People, Performance,
          and Productivity
        </SubText>
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

    </HeroWrapper>
  );
}