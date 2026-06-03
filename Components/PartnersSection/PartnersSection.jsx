"use client";

import Image from "next/image";

import {
  Section,
  Container,
  SmallTitle,
  Title,
  Description,
  CardWrapper,
  Card,
  Glow
} from "./PartnersSection.styles";

export default function PartnersSection() {
  const partners = [
    {
      logo: "/images/Partners/msp.svg",
      alt: "Partner 1",
    },
    {
      logo: "/images/Partners/thijara.svg",
      alt: "Thijara",
    },
    {
      logo: "/images/Partners/labs.svg",
      alt: "Tungston",
    },
    {
      logo: "/images/Partners/stampede.svg",
      alt: "Stampede",
    },
  ];

  return (
    <Section>
      <Glow />

      <Container>

        <SmallTitle>Our Partners</SmallTitle>

        <Title>
          Trusted By Growing Teams & Enterprises Alike
        </Title>

        <Description>
          Power-Packed HR Tools, All in one place say goodbye to scattered systems—
          Rekory brings together everything you need to manage your workforce
          efficiently: onboarding, attendance, payroll, leaves, and more.
        </Description>

        <CardWrapper>
          {partners.map((item, index) => (
            <Card key={index}>
              <Image
                src={item.logo}
                alt={item.alt}
                width={150}
                height={70}
              />
            </Card>
          ))}
        </CardWrapper>

      </Container>
    </Section>
  );
}