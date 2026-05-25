"use client";

import Image from "next/image";

import {
  Section,
  Container,
  Heading,
  Description,
  Cards,
  Card,
  Title,
  Text,
  IconWrap,
} from  "./AboutSection.styles"
export default function AboutSection() {
  return (
    <Section>
      <Container>

        <Heading>
          Simplifying HR Management For The Modern Workforce
        </Heading>

        <Description>
      Rekory is a simple, user-friendly HR app available on both iOS and Android, making workforce management easy from anywhere. It offers everything from employee onboarding and performance tracking to advanced HR analytics—all in one place. Designed for modern teams, Rekory helps streamline HR tasks and boost productivity.
        </Description>

        <Cards>

          <Card>
            <Title>Our Vision Statement</Title>

            <Text>
            Our vision is to be the global standard for user-centric, efficient, and secure HR management solutions, transforming how organizations manage their human capital and setting a new benchmark for HRM innovation worldwide. We envision a future where HR processes are effortless and data is always protected.
            </Text>

            <IconWrap>
              <Image
                src="/images/vision.svg"
                alt="vision"
                width={180}
                height={180}
              />
            </IconWrap>
          </Card>

          <Card>
            <Title>Our Mission Statement</Title>

            <Text>
Our mission is to be the global standard for user-centric, efficient, and secure HR management solutions, transforming how organizations manage their human capital and setting a new benchmark for HRM innovation worldwide. We envision a future where HR processes are effortless and data is always protected.
            </Text>

            <IconWrap>
              <Image
                src="/images/mission.svg"
                alt="mission"
                width={180}
                height={180}
              />
            </IconWrap>
          </Card>

        </Cards>

      </Container>
    </Section>
  );
}