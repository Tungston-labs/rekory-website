
import FeatureCard from "./FeatureCard";
import { featureData } from "../../data/featureData";

import {
  Section,
  Container,
  SmallTitle,
  MainTitle,
  Subtitle,
  Grid
} from "./Features.styles";

export default function Features() {
  return (
    <Section>
      <Container>

        <SmallTitle>
          Key Features
        </SmallTitle>

        <MainTitle>
          Everything You Need To Manage Your People
        </MainTitle>

        <Subtitle>
          Power-Packed HR tools, all in one place.
        </Subtitle>

        <Grid>
          {featureData.map((item)=>(
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