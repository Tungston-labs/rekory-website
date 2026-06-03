import Image from "next/image";

import FeatureCard from "./FeatureCard";
import { featureData } from "../../data/featureData";

import {
  Section,
  Container,
  SmallTitle,
  MainTitle,
  Subtitle,
  Grid,
  WaveImage,
} from "./Features.styles";

export default function Features() {
  return (
    <Section id="features">
      <WaveImage>
        <Image
          src="/images/wave-shape.svg"
          alt="Wave Shape"
          width={350}
          height={350}
          priority
        />
      </WaveImage>

      <Container>
        <SmallTitle>
          Key Features
        </SmallTitle>

        <MainTitle>
          Everything You Need To Manage Your People
        </MainTitle>

        <Subtitle>
          Power-Packed HR Tools, All in one place say goodbye to scattered
          systems—Rekory brings together everything you need to manage your
          workforce efficiently: Onboarding, attendance, payroll, leaves, and
          more.
        </Subtitle>

        <Grid>
          {featureData.map((item) => (
            <FeatureCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}